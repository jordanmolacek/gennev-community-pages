import * as React from 'react';
import { Testimonial } from '../types';

interface Props {
  testimonials: Testimonial[];
}

const TestimonialList = (props: Props): JSX.Element => {
  return (
    <div className="card">
      <div className="card-body">
        {props.testimonials.map(testimonial => {
          return (
            <div key={testimonial.name} className="card testimonial-card">
              <div className="card-body">
                <div className="media">
                  <img src={testimonial.imageUrl} className="testimonial-image mr-3" />
                  <div className="media-body">
                    <h5 className="mt-0">{testimonial.name}</h5>
                    <p className="testimonial-comment">{testimonial.comment}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialList;
