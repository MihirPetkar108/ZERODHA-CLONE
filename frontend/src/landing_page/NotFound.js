import React from "react";

function NotFound() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-3 mb-4 text-danger">404 Not Found!</h1>
                <p className="mb-5 text-danger">
                    Sorry, the page you are looking for does not exist.
                </p>
            </div>
        </div>
    );
}

export default NotFound;
