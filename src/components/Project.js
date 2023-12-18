import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import './Project.css'

import ScrollReveal from 'scrollreveal'

class Project extends React.Component {
    refs = React.createRef()
    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 100,
            origin: 'top',
            easing: 'ease-in',
        }
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.probox1)
        ScrollReveal().reveal(this.refs.probox2, { origin: 'left'})
        ScrollReveal().reveal(this.refs.probox3, { origin: 'right'})
    }
    render() {
        return (
            <>
                <div className='pro-header' ref="probox1">
                    <h1>PROJECTS</h1>
              
                </div>
                <div className='pro-content'>
                    <div className='pro-row' ref="probox2">
                        <div className='pro-column1'>
                            <div id='hr' ></div>
                            <div id='bold-sec-hr'></div>
                            <p className='pro-column-h6'>Lorem Ipsum Dolor Sit Amet</p>
                            <p className='pro-description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <a href="https://arxiv.org" target='_blank' rel="noopener noreferrer"><button className='pro-button'>
                                View paper <FontAwesomeIcon className='icon-button' icon={faArrowRightLong} />
                            </button></a>
                        </div>
                        <div className='pro-column'></div>
                        <div className='pro-column2'>
                            <img src='/Images/placeholder.png' alt='placeholder' />
                        </div>
                    </div>
                    <div className='pro-row' ref="probox3">
                    <div className='pro-column2'>
                            <img src='/Images/placeholder.png' alt='Placeholder' />
                        </div>
                        <div className='pro-column'></div>
                        <div className='pro-column1'>
                            <div id='hr' ></div>
                            <div id='bold-sec-hr'></div>
                            <p className='pro-column-h6'>Lorem Ipsum Dolor Sit Amet</p>
                            <p className='pro-description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <a href="https://github.com" target='_blank' rel="noopener noreferrer"><button className='pro-button'>
                                View project <FontAwesomeIcon className='icon-button' icon={faArrowRightLong} />
                            </button></a>
                        </div>
                    </div>
                    {/* Add more projects */}
                    
                </div>
            </>
        )
    }
}

export default Project