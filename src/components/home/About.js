import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './About.css'
// import { StyledLink } from '../Links.styled'
import ScrollReveal from 'scrollreveal';


class About extends React.Component {
    refs = React.createRef();
    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 100,
            origin: 'top',
            easing: 'ease-in',
        };
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.box1);
        ScrollReveal().reveal(this.refs.box2, {origin: 'bottom', delay: 150});
        ScrollReveal().reveal(this.refs.box3, {origin: 'right', delay: 150});
    }
    render() {
        return (
            <>
                <div className='row'>
                    <div className='header-start column' ref="box1">
                        <h6>ABOUT ME</h6>
                        <p>A one liner about yourself ...</p>
                    </div>
                    <div className='column'>
                        {/* empty */}
                    </div>
                </div>
                <div className='row1' ref='about'>
                    <div className='column image-column' ref="box2">
                        <img src='/Images/placeholder.png' alt='placeholder'/>
                    </div>
                    <div className='column about-content' ref="box3">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis,
                            unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta sunt, explicabo.
                            Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut
                            fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem
                            sequi nesciunt, neque porro quisquam est ...
                        </p>
                    </div>
                </div>
            </>
        )
    }
}

export default About