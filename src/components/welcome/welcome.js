import React, {Component} from 'react';
import './welcome.css';

class Welcome extends Component {
    render() {
        return (
            <div className="col-lg-12 col-md-12 col-xs-12" id="page-wrapper">
                <header className="content">
                    <h1>React Redux Assignment</h1>
                </header>

                <section id="banner">
                    <div className="content">
                        <span>
                            <a href="/displayinfo" className="strtButton">Display Cards</a>
                        </span>
                    </div>

                </section>
            </div>
        );
    }
}

export default Welcome;