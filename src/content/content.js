import React from 'react';
import './content.css';

import Services from './services';
import About from './about';
import Testimonials from './testimonials';
import Contact from './contact';

const Content = () => {
    return(
        <React.Fragment>
            <Services />
            <About />
            <Testimonials />
            <Contact />
        </React.Fragment>
    );
}

export default Content;