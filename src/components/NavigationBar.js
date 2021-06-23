import React from 'react';

export const NavigationBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <a className="fa fa-paw text-primary fa-2x" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#">PetApp <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="#">Features</a>
                <a className="nav-item nav-link" href="#">Pricing</a>
                <a className="nav-item nav-link disabled" href="#">Disabled</a>
                </div>
            </div>
        </nav>
    )
}
