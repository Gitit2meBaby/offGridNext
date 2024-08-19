'use client'
import React, { useState } from 'react';
import '../CSS/quote.css'
import Image from 'next/image';
import { useNav } from '@/NavContext';

const Quote = () => {
    const { setIsModalOpen } = useNav();
    const [showMore, setShowMore] = useState(false);
    const [formStage, setFormStage] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        power: '1-2 People',
        size: "I don't know please advise",
        usage: '',
        hours: '',
        type: [],
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                type: checked
                    ? [...prevData.type, value]
                    : prevData.type.filter((item) => item !== value),
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="quote-container">
            <button onClick={() => setIsModalOpen(false)} id="backBtn" className="close-quote-btn">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg"><path d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z"></path><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>
            </button>

            {formStage === 1 && (
                <>
                    <div className="main-title">
                        <h1>Please enter your contact details</h1>
                        <img src="../assets/logo100.webp" alt="Off Grid Power logo" />
                    </div>
                    <form id="form" onSubmit={handleSubmit}>
                        {/* Honey pot field */}
                        <input type="hidden" name="_next" value="https://app.netlify.com/sites/earnest-lollipop-05bf54/overview" />

                        <div className="details">
                            <label htmlFor="name">Name<span className='required'>*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                aria-label="Name"
                                value={formData.name}
                                onChange={handleChange}
                            />

                            <label htmlFor="email">Email<span className='required'>*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                aria-label="Email"
                                value={formData.email}
                                onChange={handleChange}
                            />

                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                aria-label="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />

                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                aria-label="Address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>

                        <div onClick={() => setFormStage(2)} className="add-title">
                            <p id="additionalInformation">Additional Information</p>
                            <svg stroke="#595959" fill="currentColor" strokeWidth=".4" viewBox="0 0 16 16" height="1em" width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </div>
                    </form>
                </>
            )}

            {formStage === 2 && (
                <>
                    <div className="main-title"
                        onClick={() => setShowMore(false)}>
                        <h1 style={{ cursor: 'pointer' }}>Go back...</h1>
                        <Image height={100} width={100} src="/public/assets/logo100.webp" alt="Off Grid Power logo" />
                    </div>

                    <form id="form" onSubmit={handleSubmit}>
                        <div id="formDropdown">
                            <div className="radios">
                                <div className="power-requirement">
                                    <p id="powerRequirementLabel">Power Requirement</p>
                                    {['1-2 People', '2-4 People', '4-6 People', 'Commercial Business'].map(option => (
                                        <label key={option}>
                                            <input
                                                type="radio"
                                                name="power"
                                                value={option}
                                                checked={formData.power === option}
                                                onChange={handleChange}
                                                aria-labelledby="power Requirement Label"
                                            />
                                            {option}
                                        </label>
                                    ))}
                                </div>

                                <div className="system-size">
                                    <p id="systemSizeLabel">Size of system required</p>
                                    {[
                                        '3.3kW (10 Panels)',
                                        '6.6kW (20 Panels)',
                                        '8kW (24 Panels)',
                                        '13.2kW (40 Panels)',
                                        '16kW (44 Panels)',
                                        'Greater than 16kW',
                                        "I don't know please advise",
                                    ].map(option => (
                                        <label key={option}>
                                            <input
                                                type="radio"
                                                name="size"
                                                value={option}
                                                checked={formData.size === option}
                                                onChange={handleChange}
                                                aria-labelledby="systemSizeLabel"
                                            />
                                            {option}
                                        </label>
                                    ))}

                                    <button type='button' className="next" onClick={() => setFormStage(3)}>Next</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </>
            )}

            {formStage === 3 && (
                <>
                    <div className="usage">
                        <label htmlFor="usage">Average Daily Electricity Usage (kW)</label>
                        <input
                            type="number"
                            id="usage"
                            name="usage"
                            required
                            aria-labelledby="usageLabel"
                            value={formData.usage}
                            onChange={handleChange}
                        />

                        <label htmlFor="hours">Percentage of Usage During Daylight Hours (%)</label>
                        <input
                            type="number"
                            id="hours"
                            name="hours"
                            required
                            aria-labelledby="hoursLabel"
                            value={formData.hours}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="type">
                        <p>Building Type</p>
                        {['Tin Roof', 'Tile Roof', 'Single Story', 'Double Story', 'Shed'].map(option => (
                            <label key={option}>
                                <input
                                    type="checkbox"
                                    name="type"
                                    value={option}
                                    checked={formData.type.includes(option)}
                                    onChange={handleChange}
                                />
                                {option}
                            </label>
                        ))}
                    </div>

                    <div className="comments">
                        <label htmlFor="comments">Please provide any additional comments / information here</label>
                        <div className="textarea-wrapper">
                            <textarea
                                placeholder="eg. your budget, are you currently connected to the grid..."
                                name="comments"
                                id="comments"
                                cols=""
                                rows=""
                                value={formData.comments}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="btn-container">
                        <button type="submit" id="submitForm" className="submit-btn">Submit</button>
                    </div>
                </>
            )}
        </div>
    )
}

export default Quote;
