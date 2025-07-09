import React from "react";

function RightSection({
    imageURL,
    productName,
    productDescription,
    learnMore,
}) {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-1"></div>

                <div
                    className="col-4 text-muted p-5 mt-5"
                    style={{
                        lineHeight: "2",
                        paddingBottom: "0",
                    }}
                >
                    <h1 className="mt-5 mb-4">{productName}</h1>
                    <p className="mb-4">{productDescription}</p>

                    <div className=" mb-4">
                        <a
                            href={learnMore}
                            className="link"
                            style={{
                                textDecoration: "none",
                                color: "#387ed1",
                            }}
                        >
                            Learn More
                            <i class="fa fa-long-arrow-right ms-1"></i>
                        </a>
                    </div>
                </div>

                <div className="col-1"></div>

                <div className="col-6">
                    <img src={imageURL} style={{ width: "100%" }} />
                </div>
            </div>
        </div>
    );
}

export default RightSection;
