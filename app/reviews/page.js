'use client'
import FiveStars from '@/components/FiveStars'
import React, { useEffect } from 'react'

const Reviews = () => {
    useEffect(() => {
        // Function to handle the intersection of elements
        function handleReviewIntersection(entries, observer) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-up');
                    observer.unobserve(entry.target);
                }
            });
        }

        // Initialize Intersection Observer
        const slideUpObserver = new IntersectionObserver(handleReviewIntersection, {
            threshold: 0.1,
        });

        // Target all elements with the 'card' class
        const slideUpCards = document.querySelectorAll('.card');
        slideUpCards.forEach((element) => {
            slideUpObserver.observe(element);
        });

        // Cleanup observer on component unmount
        return () => {
            slideUpCards.forEach((element) => {
                slideUpObserver.unobserve(element);
            });
        };
    }, []);

    return (
        <section className="reviews">
            <h1>Customer Reviews</h1>
            <div className="card-container">
                <div className="card">
                    <div>
                        <h2>Just The Best. Best Design. Best Install Best Price.
                        </h2>
                        <blockquote> "Trent and his team are just amazing. From design to install the professionalism,
                            technical
                            knowledge, quality of work was just the best. We would recommend off grid power to anyone who
                            wants
                            quality and confidence in a system designed and installed to generate reliable power to your
                            home.
                            Thanks Trent really appreciate the system."</blockquote>
                    </div>
                    <div>
                        <FiveStars />
                        <h3>Paul And Carol Francis</h3>
                        <h4>Sep 17, 2023</h4>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <h2>Could Not Be Happier</h2>
                        <blockquote>
                            "From the first consultation through to the installation and ongoing support that Trent and the
                            team provided, I have been overwhelmed with the quality of the customer service and the products
                            that they installed. The system suits my needs perfectly and was tailored to my budget,
                            location, and energy requirements flawlessly. Trent is passionate about off-grid power, his
                            depth of knowledge and attention to detail is clear from the outset. Thank you for giving
                            everyone the opportunity to be self-reliant no matter what the circumstance."
                        </blockquote>
                    </div>
                    <div>
                        <FiveStars />
                        <h3>Daniel Thomas</h3>
                        <h4>May 22, 2023</h4>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <h2>Exceptional Installation</h2>
                        <blockquote>
                            "Trent and his team were exceptional. The installation had some challenges but they rallied and
                            pushed through. They created the most symmetrical, neat, clean job I have ever seen. I was
                            really
                            emotional when I arrived onsite to see it installed. We can't thank Trent and his team enough.
                            Their
                            knowledge, expertise, gentle & friendly nature was second to none. I would highly recommend
                            Trent
                            and his team for your solar installation."
                        </blockquote>
                    </div>
                    <div>
                        <FiveStars />
                        <h3>Lisa Post</h3>
                        <h4>Mar 8, 2023</h4>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <h2>Solar Install</h2>
                        <blockquote>
                            "Such an amazing service from start to finish, with all the team being really helpful, friendly
                            and
                            professional, and definitely going above and beyond on several occasions. The installation was
                            done
                            with amazing care, and the results have been brilliant. I'd highly recommend the Off Grid Power
                            to
                            anyone."
                        </blockquote>
                    </div>
                    <div>
                        <FiveStars />
                        <h3>Gabrielle Gawne-Kelnar</h3>
                        <h4>Mar 1, 2023</h4>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <h2>Off Grid Power Installation</h2>
                        <blockquote>
                            "Installation was professionally and promptly done. After installation back-up has been
                            available
                            and helpful.<br></br>
                            System is working well.<br></br>
                            Recommended business."
                        </blockquote>
                    </div>
                    <div>
                        <svg width="100px" height="20px" viewBox="0 0 881 130" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlSerif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '2' }}>
                            <g transform="matrix(1,0,0,1,-634.728,-382.568)">
                                <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" style={{ fill: 'rgb(255,216,0)' }} />
                            </g>
                            <g transform="matrix(1,0,0,1,-447.914,-382.568)">
                                <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" style={{ fill: 'rgb(255,216,0)' }} />
                            </g>
                            <g transform="matrix(1,0,0,1,-261.961,-382.568)">
                                <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" style={{ fill: 'rgb(255,216,0)' }} />
                            </g>
                            <g transform="matrix(1,0,0,1,-76.0238,-382.568)">
                                <path d="M702.68,382.568L718.721,431.938L770.632,431.938L728.635,462.45L744.677,511.82L702.68,481.308L660.683,511.82L676.724,462.45L634.728,431.938L686.639,431.938L702.68,382.568Z" style={{ fill: 'rgb(255,216,0)' }} />
                            </g>
                        </svg>
                        <h3>John Miller</h3>
                        <h4>Aug 3, 2022</h4>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <h2>Fantastic</h2>
                        <blockquote>
                            "Great service, great product, highly recommended for all applications of solar equipment
                            and
                            service… 👍🏾"
                        </blockquote>
                    </div>
                    <div>
                        <FiveStars />
                        <h3>Lindsay Gaddes</h3>
                        <h4>Apr 19, 2022</h4>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <h2>Off Grid Power</h2>
                        <blockquote>
                            "Professional and hold to their word. I have used them twice … first for initial install and
                            then
                            for further battery storage additions. Can not recommend them more highly. I am happy to be
                            contacted for further information as it can be rare these days to get their level of
                            service."
                        </blockquote>
                    </div>
                    <div>
                        <FiveStars />
                        <h3>Robert Borcherdt</h3>
                        <h4>Mar 6, 2022</h4>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <h2>Solar Power</h2>
                        <blockquote>
                            "Great company to deal with, total professionals with years of industry experience, that
                            makes the
                            difference when designing and building a system to suit your exact needs.<br></br>There are lots
                            of other
                            companies out there who appear to offer the same, but it is only when you investigate in
                            detail, but
                            you will see a lot are just offering whatever systems they have on hand, not a true
                            engineered
                            custom design based on years of experience and countless installations with very satisfied
                            customers."
                        </blockquote>
                    </div>
                    <div>
                        <FiveStars />
                        <h3>Tony Reeves</h3>
                        <h4>Sep 26, 2021</h4>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <h2>Off Grid Power Installation</h2>
                        <blockquote>
                            "We had a great experience with Off Grid Power. Not only was the service prompt and
                            professional,
                            this was the only fully itemized quote we received out of a total of 6 quotes. Trent really
                            knows
                            off grid solar. His advice was excellent and we have a top of the line system which was
                            cheaper than
                            the more older technology. We would wholeheartedly recommend his company to our friends and
                            family -
                            as well as strangers who might read this online!"
                        </blockquote>
                    </div>
                    <div>
                        <FiveStars />
                        <h3>Ros Cooper</h3>
                        <h4>Apr 7, 2021</h4>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <h2>Off Grid Power</h2>
                        <blockquote>
                            "If Quality had a name, it would be Trent Rogers.<br></br><br></br>The attention to detail in his quote,
                            his
                            advice and his install exemplifies one who has a passion for, and mastery of, his
                            trade.<br></br><br></br>Thanks
                            so much."
                        </blockquote>
                    </div>
                    <div>
                        <FiveStars />
                        <h3>Bunyip Creek</h3>
                        <h4>Aug 29, 2020</h4>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <h2>Off Grid Power</h2>
                        <blockquote>
                            "Great guy, very reasonable and explains everything. Impressed and very pleased"
                        </blockquote>
                    </div>
                    <div>
                        <FiveStars />
                        <h3>Mark Jones</h3>
                        <h4>Oct 2, 2017</h4>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <h2>Installation</h2>
                        <blockquote>
                            "In summary, a fantastic experience! I know you don't normally get to say that when you are
                            dealing
                            with a company but it is true in this case.
                            Would I recommend Off Grid Power? Absolutely!
                            We had 38 panels, 2 inverters and a Tesla Powerwall 2 battery installed. From start to
                            finish the
                            process was painless, we were explained the timeline for our job and were kept up to date
                            throughout.
                            The technician that installed our hardware was phenomenal, polite, punctual and very
                            professional. Before he did a thing on the first day he came and spoke with us about the
                            work he
                            would be doing, also that he would keep any required disruption to our day minimal. Oh, did
                            I
                            mention that he cleaned up after himself as well? (Really, he did)."
                        </blockquote>
                    </div>
                    <div>
                        <FiveStars />
                        <h3>Rob Hinoz</h3>
                        <h4>Jul 19, 2017</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews