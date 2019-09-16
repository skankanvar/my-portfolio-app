import React, { Component } from 'react'

export default class Introduction extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="introduction">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                            <li style={{ backgroundImage: 'url(images/img_bg.jpg)' }}>
                                <div className="overlay" />
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                            <div className="slider-text-inner js-fullheight">
                                                <div className="desc">
                                                    <h1>Hi <br />I'm Sai Sabarish Kankanvar</h1>
                                                    <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1gp3jc6X4Op9AyRSf3ay13G-FvJrxigOu/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume<i className="icon-download4" /></a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}