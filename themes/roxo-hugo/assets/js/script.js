document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const testimonials = document.querySelectorAll(".site-testimonial-item");
    testimonials.forEach(testimonial => {

        testimonial.addEventListener("mouseenter", (evt) => {
            testimonials.forEach(innerTestimonial => {
                innerTestimonial.classList.add("inactive");
                if (evt.target === innerTestimonial) {
                    innerTestimonial.classList.remove("inactive");
                    innerTestimonial.classList.add("active");
                }
            });
        })

        testimonial.addEventListener("mouseleave", (evt) => {
            testimonials.forEach(innerTestimonial => {
                innerTestimonial.classList.remove("inactive");
                innerTestimonial.classList.remove("active");
            });
        })
    });
});
