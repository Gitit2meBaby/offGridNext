'use client'
import React, { useState } from 'react';
import { faqs } from './faqs';

const FAQs = () => {
    const [showAnswer, setShowAnswer] = useState(0);

    return (
        <section className="faqs">
            <h1>FAQ's</h1>
            {faqs.map((faq, index) => (
                <div className="faq" key={index}>
                    <div style={{ cursor: 'pointer' }} onClick={() => setShowAnswer(index)} className="question">
                        <h2>{faq.question}</h2>
                    </div>
                    {showAnswer === index && (
                        <div className="answer">
                            <p>{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
};

export default FAQs;
