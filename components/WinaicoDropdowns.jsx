'use client'
import React, { useEffect, useState } from 'react'

const WinaicoDropdowns = () => {
    const [showDetails, setShowDetails] = useState(0);

    useEffect(() => {
        console.log(showDetails);
    }, [showDetails]);


    return (
        <div className="winaico-dropdowns">
            <div className="dropdown-wrapper">
                <div onClick={() => setShowDetails(0)} className="dropdown-title">
                    <p className="winaicoTitleText">High Efficiency</p>
                    <svg className={`winaicoArrows ${showDetails === 0 ? 'rotate' : ''}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                {showDetails === 0 && (
                    <div className="winaico-dropdown-content active">
                        <p> WINAICO solar panels are known for their high efficiency, with some models achieving
                            efficiency ratings of over 20%. This means that more of the sun’s energy is converted into
                            usable electricity, resulting in higher energy yields.</p>
                    </div>
                )}
            </div>

            <div className="dropdown-wrapper">
                <div onClick={() => setShowDetails(1)} className="dropdown-title">
                    <p className="winaicoTitleText">Durable Design</p>
                    <svg className={`winaicoArrows ${showDetails === 1 ? 'rotate' : ''}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                {showDetails === 1 && (
                    <div className="winaico-dropdown-content active">
                        <p>WINAICO panels are designed to be durable and long-lasting, with high-quality materials and
                            manufacturing processes that ensure that the panels can withstand harsh weather conditions
                            and environmental stress.</p>
                    </div>
                )}
            </div>

            <div className="dropdown-wrapper">
                <div onClick={() => setShowDetails(2)} className="dropdown-title">
                    <p className="winaicoTitleText">Positive Power Tolerance</p>
                    <svg className={`winaicoArrows ${showDetails === 2 ? 'rotate' : ''}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                {showDetails === 2 && (
                    <div className="winaico-dropdown-content active">
                        <p>Many WINAICO panels are produced with a positive power tolerance, which means that they are
                            guaranteed to produce at least the rated power or even more. This provides a level of
                            certainty for customers when it comes to the performance of their panels.</p>
                    </div>
                )}
            </div>

            <div className="dropdown-wrapper">
                <div onClick={() => setShowDetails(3)} className="dropdown-title">
                    <p className="winaicoTitleText">High-Quality Components</p>
                    <svg className={`winaicoArrows ${showDetails === 3 ? 'rotate' : ''}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                {showDetails === 3 && (
                    <div className="winaico-dropdown-content active">
                        <p>WINAICO uses high-quality components in their panels, including high-efficiency solar cells,
                            anti-reflective coatings, and a durable aluminum frame. These components work together to
                            produce panels that are both efficient and reliable.</p>
                    </div>
                )}
            </div>

            <div className="dropdown-wrapper">
                <div onClick={() => setShowDetails(4)} className="dropdown-title">
                    <p className="winaicoTitleText">Comprehensive Warranty</p>
                    <svg className={`winaicoArrows ${showDetails === 4 ? 'rotate' : ''}`} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                {showDetails === 4 && (
                    <div className="winaico-dropdown-content active">
                        <p>WINAICO offers a comprehensive warranty for their solar panels, which includes coverage for
                            materials and workmanship as well as power output. This provides peace of mind for customers
                            and ensures that they are protected if any issues arise.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WinaicoDropdowns