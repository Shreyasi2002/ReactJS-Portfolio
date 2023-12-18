import React from 'react'

import './Experience.css'

import { SkillList } from './styled'

import ScrollReveal from 'scrollreveal'

class Experience extends React.Component {
    refs = React.createRef()
    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 50,
            origin: 'top',
            easing: 'ease-in',
        }
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.expbox1)
        ScrollReveal().reveal(this.refs.expbox2, { origin: 'left', delay: 100 })
        ScrollReveal().reveal(this.refs.expbox3, { origin: 'right', delay: 250 })
        ScrollReveal().reveal(this.refs.expbox4, { origin: 'left', delay: 200 })
    }
    render() {
        return (
            <>
                <div className='exp-header' ref="expbox1">
                    <h1>EXPERIENCE</h1>
              
                </div>
                <div className='exp-content'>
                    <div className='exp-row' ref="expbox2">
                        <div className='exp-column1'>
                            <div id='hr' ></div>
                            <div id='bold-sec-hr'></div>
                            <p className='exp-column-h6'>Designation or Title</p>
                            <p className='exp-prof-name'>Name of Mentor (optional)</p>
                            <p className='exp-date'>Start Date - End Date</p>
                            <p className='exp-description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div id='exp-skill'>
                                {/* Skills:{' '} */}
                                <SkillList>
                                    <span key='1'>Skill 1</span>
                                    <span key='2'>Skill 2</span>
                                    <span key='3'>Skill 3</span>
                                    <span key='4'>Skill 4</span>
                                </SkillList>
                            </div>
                        </div>
                        <div className='exp-column2'>
                            <img src='/Images/placeholder.png' alt='placeholder' />
                        </div>
                    </div>
                    <div className='exp-row' ref="expbox3">
                        <div className='exp-column1'>
                            <div id='hr' ></div>
                            <div id='bold-sec-hr'></div>
                            <p className='exp-column-h6'>Designation or Title</p>
                            <p className='exp-prof-name'>Name of Mentor (optional)</p>
                            <p className='exp-date'>Start Date - End Date</p>
                            <p className='exp-description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div id='exp-skill'>
                                {/* Skills:{' '} */}
                                <SkillList>
                                    <span key='1'>Skill 1</span>
                                    <span key='2'>Skill 2</span>
                                    <span key='3'>Skill 3</span>
                                    <span key='4'>Skill 4</span>
                                </SkillList>
                            </div>
                        </div>
                        <div className='exp-column2'>
                            <img src='/Images/placeholder.png' alt='placeholder' />
                        </div>
                    </div>
              
                    {/* Add more experiences */}
                </div>
            </>
        )
    }
}

export default Experience