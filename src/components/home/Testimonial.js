import React from 'react';

import './Testimonial.css';
import { Star } from './styled';

import ScrollReveal from 'scrollreveal';

class Testimonial extends React.Component {
    refs = React.createRef();
    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 50,
            origin: 'top',
            easing: 'ease-in',
        };
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.testbox1, { delay: 100 });
        ScrollReveal().reveal(this.refs.testbox2, { origin: 'left', delay: 150 });
        ScrollReveal().reveal(this.refs.testbox3, { origin: 'right', delay: 200 });
    }
    render() {
        return (
            <>
                <div className='testimonial-header' ref="testbox1">
                    <h4>TESTIMONIALS</h4>
                    <div id='hr' ></div>
                    <div id='bold-sec-hr'></div>
                </div>
                <div className='testimonial-content'>
                    <div className='testimonial-row'>
                        <div className='testimonial-col' ref='testbox2'>
                            <div className='test-content-grid'>
                                <div className='test-stars'>
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                </div>
                                <div className='test-content'>
                                    <p className='test-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div className='test-name'>
                                    <div className='test-img'>
                                        <img src='/Images/female.png' alt='female-placeholder' />
                                    </div>
                                    <div className='test-name-text'>
                                        <p></p>
                                        <b>Placeholder Name</b>
                                        <br/><br/>
                                        <p>Designation/Affiliation
                                            <br />Company/University</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='testimonial-col1' ref='testbox3'>
                            <div className='test-content-grid'>
                                <div className='test-stars'>
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                    <Star active />
                                </div>
                                <div className='test-content'>
                                    <p className='test-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                                <div className='test-name'>
                                    <div className='test-img'>
                                        <img src='/Images/male.png' alt='male-placeholder' />
                                    </div>
                                    <div className='test-name-text'>
                                    <p></p>
                                        <b>Placeholder Name</b>
                                        <br/><br/>
                                        <p>Designation/Affiliation
                                            <br />Company/University</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Testimonial