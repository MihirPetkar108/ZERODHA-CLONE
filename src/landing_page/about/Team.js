import React from "react";

function Team() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 border-top">
                <h1 className="text-center" style={{ color: "#424242" }}>
                    People
                </h1>
            </div>

            <div
                className="row ms-5"
                style={{ lineHeight: "1.8", fontSize: "1em", color: "#424242" }}
            >
                <div className="col-1"></div>
                <div className="col-5 p-5 text-center">
                    <img
                        src="media/images/MihirPetkar.jpeg"
                        style={{ borderRadius: "50%" }}
                    />
                    <h4
                        className="mt-4"
                        style={{
                            color: "#424242",
                            fontWeight: "400",
                        }}
                    >
                        Mihir Petkar
                    </h4>
                    <p className="text-muted">Mern Stack Developer</p>
                </div>

                <div className="col-5 mt-5 p-4">
                    <p>
                        Mihir Petkar is a skilled Full Stack MERN developer with
                        a solid grasp of modern web technologies and backend
                        integration.
                    </p>

                    <p>
                        Currently, Mihir is working on an ambitious project — a
                        full stack clone of Zerodha, India's largest stock
                        trading platform.
                    </p>

                    <p>
                        This clone replicates core functionalities such as user
                        onboarding, real-time market data visualization,
                        portfolio tracking, and more.
                    </p>
                    <p>
                        Connect on{" "}
                        <a
                            href="https://www.linkedin.com/in/mihir-petkar-206644333/"
                            style={{ textDecoration: "none" }}
                        >
                            LinkedIn
                        </a>{" "}
                        /{" "}
                        <a
                            href="https://www.instagram.com/mihir._.petkar/"
                            style={{ textDecoration: "none" }}
                        >
                            Instagram
                        </a>{" "}
                        /{" "}
                        <a
                            href="https://x.com/MihirPetkar17"
                            style={{ textDecoration: "none" }}
                        >
                            Twitter
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;
