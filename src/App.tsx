import * as React from 'react';
import './style.css';
import TestimonialForm from './components/TestimonialForm';
import TestimonialList from './components/TestimonialList';
import { sampleData } from './sampleData';
import { Testimonial } from './types';
import { matchesSearchString } from './utils/testimonial';
import { getTestimonials, saveTestimonials, saveUserHasSubmittedTestimonial } from './utils/localStorage';
import TestimonialSearch from './components/TestimonialSearch';


const App = (): JSX.Element => {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([]);
  const [searchString, setSearchString] = React.useState<string>('');

  React.useEffect(() => {
    const storageTestimonials = getTestimonials();
    if (storageTestimonials === null) {
      setTestimonials(sampleData);
      saveTestimonials(sampleData);
    } else {
      setTestimonials(storageTestimonials);
    }

  }, []);

  const addTestimonial = (newTestimonial: Testimonial): void => {
    const newTestimonials = [...testimonials];
    newTestimonials.push(newTestimonial);
    setTestimonials(newTestimonials);
    saveTestimonials(newTestimonials);
    saveUserHasSubmittedTestimonial(true);
  };

  const filteredTestimonials = matchesSearchString(searchString, testimonials);

  return (
    <div className="container-fluid">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Gennev Community Page</h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 testimonial-form-container">
            <TestimonialForm addTestimonial={addTestimonial}/>
          </div>
          <div className="col-md-7 col-lg-8">
            <TestimonialSearch
                searchString={searchString}
                onSearchStringChange={(newValue) => setSearchString(newValue)}
            />
            {filteredTestimonials.length > 0 && <TestimonialList testimonials={filteredTestimonials}/>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
