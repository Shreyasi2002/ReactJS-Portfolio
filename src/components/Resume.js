import React from 'react';

import './Resume.css'

import ScrollReveal from 'scrollreveal';

class Resume extends React.Component {
    refs = React.createRef();
    componentDidMount() {
        const config = {
            reset: false,
            distance: '60px',
            duration: 1000,
            delay: 10,
            origin: 'top',
            easing: 'ease-in',
        };
        ScrollReveal(config)
        ScrollReveal().reveal(this.refs.resumebox1);
        ScrollReveal().reveal(this.refs.resumebox2, { origin: 'left', delay: 100 });
    }
    render() {
        return (
            <>
                <div className='resume-header' ref="resumebox1"> 
                    <h1>RESUME</h1>
                </div>
                <div className='resume-content' ref="resumebox2">
                    <iframe src='Docs/Placeholder-PDF.pdf' width='100%' height="800px" title='resume'/>
                </div>
            </>
     );
    }
}

export default Resume;