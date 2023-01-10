import { Testimonial } from "../types";

const testimonialStorageKey = 'testimonials';
const userHasSubmittedTestimonialKey = 'userHasSubmittedTestimonial';

export const saveTestimonials = (testimonials: Testimonial[]) => {
  window.localStorage.setItem(testimonialStorageKey, JSON.stringify(testimonials));
};

//Returns null if testimonials have not been set
export const getTestimonials = (): Testimonial[] | null => {
  const localStorageTestimonials = JSON.parse(window.localStorage.getItem(testimonialStorageKey));
  return localStorageTestimonials ? localStorageTestimonials : null;
};

export const saveUserHasSubmittedTestimonial = (hasSubmitted: boolean) => {
  window.localStorage.setItem(userHasSubmittedTestimonialKey, hasSubmitted ? 'true' : 'false');
};

export const getUserHasSubmittedTestimonial = (): boolean => {
  return window.localStorage.getItem(userHasSubmittedTestimonialKey) === 'true';
};
