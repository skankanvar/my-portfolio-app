import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">About</span>
                                <p>I am a software professional who loves being chased by new technologies.</p>
                                <p>Work enthusiast, Avid learner.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-2">
                                                <i className="icon-bulb" />
                                            </div>
                                            <div className="timeline-label">
                                                <h2>Summary</h2>
                                                <ul>
                                                    <li>8 years of software development experience.</li>
                                                    <li>Strong IT experience in analysis, design, development, test and maintenance of software applications.</li>
                                                    <li>Proficient in building applications on .NET stack with more than 6 years of experience.</li>
                                                    <li>Experience as full stack developer using Javascript , C#, Java, SQL, NoSQL and also their supporting frameworks, libraries including setting up of CI/CD process.</li>
                                                    <li>Worked under both Agile and waterfall teams.</li>
                                                    <li>Excellent problem solving and debugging skills.</li>
                                                    <li>Highly motivated and utmost interest in developing software applications and learning various technologies.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
} 