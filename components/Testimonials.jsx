import React, { useState, useEffect } from 'react';
import FiveStars from './FiveStars';
import { testimonials } from '@/testimonials';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);

            setTimeout(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
                setVisible(true);
            }, 1000); // Duration for fade-out before updating content

        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="testimonials">
            <h2>Our Happy Customers</h2>
            <div className="divider bigger"></div>
            <div className="testimonials-container">
                <div className={`testimonial ${visible ? 'visible' : 'invisible'}`}>
                    <div className="testimonial-title">
                        <h4 id="testimonialTitle">{currentTestimonial.title}</h4>
                    </div>
                    <div className="testimonial-content">
                        <p id="testimonialContent">"{currentTestimonial.content}"</p>
                    </div>
                    <div className="testimonial-info">
                        <FiveStars />
                        <p id="testimonialName">{currentTestimonial.name}</p>
                        <h5 id="testimonialDate">{currentTestimonial.date}</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
