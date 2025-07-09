import React from "react";

function Hero() {
    return (
        <section className="container-fluid" id="supportHero">
            <div className="p-3" id="supportWrapper">
                <h4 className="mt-5 fs-4">Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>

            <div className="row m-3">
                <div className="col p-5 mt-3 mb-4">
                    <h1 className="fs-4 mb-4">
                        Search for an answer or browse help topics to create a
                        ticket
                    </h1>
                    <input placeholder="Eg: how do I activate F&O, why is my order getting rejected..." />
                    <br /> <br />
                    <a href="" className="me-3" style={{ fontSize: "0.95rem" }}>
                        Track account opening
                    </a>
                    <a href="" className="me-3" style={{ fontSize: "0.95rem" }}>
                        Track segment activation
                    </a>
                    <a href="" className="me-3" style={{ fontSize: "0.95rem" }}>
                        Intraday margins
                    </a>
                    <a href="" className="me-3" style={{ fontSize: "0.95rem" }}>
                        Kite user manual
                    </a>
                </div>
                <div className="col p-5 mb-5">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                        <li>
                            <a
                                href=""
                                style={{
                                    lineHeight: "3",
                                }}
                            >
                                Quarterly Settlement of Funds - July 2025
                            </a>
                        </li>
                        <li>
                            <a
                                href=""
                                style={{
                                    lineHeight: "3",
                                }}
                            >
                                Exclusion of F&O contracts on 8 securities from
                                August 29, 2025
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;
