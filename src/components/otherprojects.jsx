import React, { Component } from 'react'

export default class OtherProjects extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-skills" data-section="otherprojects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Other Projects</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="timeline-centered">
                                    <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                        <div className="timeline-entry-inner">
                                            <div className="timeline-icon color-4">
                                                <i className="icon-pen2" />
                                            </div>
                                            <div className="timeline-label">
                                                <ul>
                                                    <li>Contributor to a project named BoltOn which is an open source framework to build any .NET application with proper separation of concerns.(https://github.com/gokulm/BoltOn).</li>
                                                    <li>Working on an individual project in my spare time to build a web application for my family business in india.</li>
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