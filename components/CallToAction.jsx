import React from 'react'

const CallToAction = () => {
    return (
        <div className="cta">
            <div className="counter" id="counter1">
                <h4>
                    <span className="count" id="count1">25</span>+
                </h4>
                <p>Years Experience</p>
            </div>

            <div className="cta-text">
                <h2>GET<br />THE<br />RIGHT<br />SOLUTION</h2>
            </div>

            <div className="counter" id="counter2">
                <h4>
                    <span className="count" id="count2">1340</span>+
                </h4>
                <p>Successful Projects</p>
            </div>

            <div className="counter" id="counter3">
                <h4>
                    <span className="count" id="count3">5000</span>km&sup2;
                </h4>
                <p>Area We Cover</p>
            </div>

            <div className="counter" id="counter4">
                <h4>
                    <span className="count" id="count4">100</span>kg
                </h4>
                <p>CO&sup2; Sequestered by our installations</p>
            </div>
        </div>
    )
}

export default CallToAction
