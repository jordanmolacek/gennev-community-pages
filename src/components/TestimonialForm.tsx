import * as React from 'react';
import { Testimonial } from '../types';
import { getUserHasSubmittedTestimonial } from '../utils/localStorage';
import { isEmptyString, isNumber } from '../utils/validation';
import Input from './shared/Input';
import TextArea from './shared/TextArea';

interface Props {
  addTestimonial: (testimonial: Testimonial) => void;
}

const TestimonialForm = (props: Props): JSX.Element => {
  const { addTestimonial } = props;

  const [name, setName] = React.useState<string>('');
  const [nameInvalid, setNameInvalid] = React.useState<boolean>(false);
  const [age, setAge] = React.useState<string>('');
  const [ageInvalid, setAgeInvalid] = React.useState<boolean>(false);
  const [location, setLocation] = React.useState<string>('');
  const [locationInvalid, setLocationInvalid] = React.useState<boolean>(false);
  const [imageUrl, setImageUrl] = React.useState<string>('');
  const [imageUrlInvalid, setImageUrlInvalid] = React.useState<boolean>(false);
  const [comment, setComment] = React.useState<string>('');
  const [commentInvalid, setCommentInvalid] = React.useState<boolean>(false);
  const [disableSubmit, setDisableSubmit] = React.useState<boolean>(getUserHasSubmittedTestimonial());

  const isFormValid = (): boolean => {
    const isNameInvalid = isEmptyString(name.trim());
    const isAgeInvalid = isEmptyString(age.trim());
    const isLocationInvalid = isEmptyString(location.trim());
    const isImageUrlInvalid = isEmptyString(imageUrl.trim());
    const isCommentInvalid = isEmptyString(comment.trim());

    setNameInvalid(isNameInvalid);
    setAgeInvalid(isAgeInvalid);
    setLocationInvalid(isLocationInvalid);
    setImageUrlInvalid(isImageUrlInvalid);
    setCommentInvalid(isCommentInvalid);


    return !isNameInvalid &&
           !isAgeInvalid &&
           !isLocationInvalid &&
           !isImageUrlInvalid &&
           !isCommentInvalid;
  };

  const onSubmit = () => {
    if (isFormValid()) {
      addTestimonial({
        name: name.trim(),
        age: parseInt(age.trim()),
        location: location.trim(),
        imageUrl: imageUrl.trim(),
        comment: comment.trim(),
      });
  
      setName('');
      setAge('');
      setLocation('');
      setImageUrl('');
      setComment('');
      setDisableSubmit(true);
    }
  };

  return (
    <div className="card">
      <h5 className="card-header">Add Your Voice</h5>
      <div className="card-body">
        <Input
          value={name}
          error={nameInvalid}
          setValue={(newValue) => {setName(newValue); setNameInvalid(false)}}
          label="Name"
        />
        <Input
          value={age}
          error={ageInvalid}
          validate={isNumber}
          setValue={(newValue) => {setAge(newValue); setAgeInvalid(false)}}
          label="Age"
        />
        <Input
          value={location}
          error={locationInvalid}
          setValue={(newValue) => {setLocation(newValue); setLocationInvalid(false)}}
          label="Location"
        />
        <Input
          value={imageUrl}
          error={imageUrlInvalid}
          setValue={(newValue) => {setImageUrl(newValue); setImageUrlInvalid(false)}}
          label="Image Url"
        />
        <TextArea
          value={comment}
          error={commentInvalid}
          setValue={(newValue) => {setComment(newValue); setCommentInvalid(false)}}
          label="Comment"
        />
        <button
          onClick={onSubmit}
          disabled={disableSubmit}
          className="btn btn-primary testimonial-submit-button">Submit
        </button>
        {disableSubmit && (
          <small className="form-text text-muted">Your testimonial has been submitted. Thank you!</small>)
        }
      </div>
    </div>
  );
};

export default TestimonialForm;
