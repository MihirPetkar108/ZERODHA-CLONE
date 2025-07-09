import React from "react";

function Hero() {
    return (
        <div className="container text-center border-bottom mt-5 mb-5 p-5">
            <h1
                style={{
                    fontSize: "2.75rem",
                    color: "#424242",
                    lineHeight: "1.25",
                    fontWeight: "500",
                    margin: "1rem",
                }}
            >
                Zerodha Products
            </h1>
            <p
                style={{
                    fontSize: "1.2rem",
                    color: "#424242",
                    lineHeight: "1.8",
                    fontWeight: "400",
                    margin: "1rem",
                }}
            >
                Sleek, modern, and intuitive trading platforms
            </p>
            <p
                style={{
                    fontSize: "1rem",
                    color: "#424242",
                    lineHeight: "1.8",
                    fontWeight: "400",
                    margin: "1rem",
                }}
            >
                Check out our{" "}
                <a href="" style={{ textDecoration: "none" }}>
                    investment offerings
                    <i class="fa fa-long-arrow-right ms-1"></i>
                </a>
            </p>
        </div>
    );
}

export default Hero;
