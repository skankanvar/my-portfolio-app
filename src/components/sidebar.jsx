import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
                            <h1 id="colorlib-logo"><a href="index.html">Sai Sabarish Kankanvar</a></h1>
                            <span className="email"><i className="icon-mail"></i> sabarish.sai@gmail.com</span>
                            <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1gp3jc6X4Op9AyRSf3ay13G-FvJrxigOu/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume<i className="icon-download4" /></a></p>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    {/* <li className="active"><a href="#introduction" data-nav-section="introduction">Introduction</a></li> */}
                                    <li className="active"><a href="#about" data-nav-section="about">About</a></li>
                                    <li><a href="#education" data-nav-section="education">Education</a></li>
                                    <li><a href="#workexperience" data-nav-section="workexperience">Work Experience</a></li>
                                    <li><a href="#otherprojects" data-nav-section="otherprojects">Other Projects</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu">
                            <ul>
                                {/* <li><a href="https://www.facebook.com/sabarishsaik" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li> */}
                                <li><a href="https://twitter.com/sabarishsaik" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                                {/* <li><a href="https://www.instagram.com/sabarish_kanvar/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li> */}
                                <li><a href="https://www.linkedin.com/in/skankanvar/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                                <li><a href="https://github.com/skankanvar" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                            </ul>
                        </nav>
                        <div className="colorlib-footer">
                            <p><small>
                                Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib.</a>
                            </small></p>

                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}