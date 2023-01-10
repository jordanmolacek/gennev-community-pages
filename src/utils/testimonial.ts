import { Testimonial } from "../types";

export const matchesSearchString = (searchString: string, testimonials: Testimonial[]): Testimonial[] => {
  return testimonials.filter(t => {
    return t.comment.toLowerCase().includes(searchString.toLowerCase()) ||
           t.name.toLowerCase().includes(searchString.toLowerCase());
  });
};
