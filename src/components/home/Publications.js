import React from 'react'

import './Publications.css'
import ScrollReveal from 'scrollreveal';

class Publications extends React.Component {
    refs = React.createRef();
    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 50,
            origin: 'top',
            easing: 'ease-in-out',
        };
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.pubbox1);
        ScrollReveal().reveal(this.refs.pubbox2, { origin: 'left', delay: 100 });
        ScrollReveal().reveal(this.refs.pubbox3, { origin: 'left', delay: 500 });
    }
    render() {
        return (
            <>
            <div className='publication-header' ref='pubbox1'>
                    <h4>PUBLICATIONS</h4>
                    <div id='hr' ></div>
                    <div id='bold-sec-hr'></div>
            </div>
            <div className='publication-content'>
                <ol>
                    <li ref="pubbox2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </li>
                    <br />
                    <li ref="pubbox3">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </li>
                </ol>
            </div>
        </>
        )
    }
}

export default Publications