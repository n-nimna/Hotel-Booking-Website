import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    image: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    feedback: "Amazing service! The staff was attentive, stay exceeded expectations. Highly recommend this hotel!",
  },
  {
    name: "James Carter",
    email: "james.carter@example.com",
    image: "https://t3.ftcdn.net/jpg/03/70/29/26/360_F_370292674_QS5nA0bJgyRD6VzYycTQdSWhhSHQJbQZ.jpg",
    feedback: "The perfect venue for our event! Beautiful, professional staff, and seamless planning process throughout.",
  },
  {
    name: "Daniel Harris",
    email: "daniel.harris@example.com",
    image: "https://www.perfocal.com/blog/content/images/2021/01/Perfocal_17-11-2019_TYWFAQ_100_standard-3.jpg",
    feedback: "Loved the quick booking process and support. Everything was smooth from check-in to departure.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="section-title">What our client say</h2><br />
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <p className="testimonial-email">{testimonial.email}</p>
          </div>
        ))}
      </div><br />
    </div>
  );
};

export default Testimonials;