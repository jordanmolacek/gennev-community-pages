import * as React from 'react';

interface Props {
  searchString: string;
  onSearchStringChange: (search: string) => void;
}

const TestimonialSearch = (props: Props): JSX.Element => {
  const { searchString, onSearchStringChange } = props;
  return (
    <div className="input-group mb-3">
      <input
        placeholder="Search Testimonials"
        value={searchString}
        onChange={(event) => onSearchStringChange(event.target.value)}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default TestimonialSearch;