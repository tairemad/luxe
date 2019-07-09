import React from 'react';
import './content.css';

const About = () => {
    return(
        <section id="about">
            <h1>About</h1>
            <var>About Us</var>
            <div className="aboutSection">
                <p>Angela is both an experienced, professional makeup artist and licensed esthetician in Massachusetts who has been actively working in the cosmetic and spa industry for over a decade. Her career began at MAC Cosmetics where she was part of the management team and an elite traveling artistry group. A few years later, she went on to become a licensed cosmetologist and truly engaged her passion which led her to open her own business in Foxborough in 2018 which she named Luxe Studio Spa.

                As a published makeup artist, she has been featured in Ebony Magazine for Top Celebrity Weddings for her work with Teddy Pendergrass in March of 2009. She’s also been published in the Original Living Magazine for the Artisan Collection and featured on TLC's "Say Yes to the Dress." Recently, Luxe Studio Spa was voted 2019 Best Tanning Salon in Foxborough, MA by Reader’s Choice Awards.

                Angela has been working all over the New England area including Newport, Providence and Boston and as far as New Hampshire, Maine and Vermont to apply makeup for a bride’s special day. What truly sets Angela apart is her ability to make everyone feel comfortable in their skin. She takes absolute pride in everything she does and wants everyone that she takes care of to be completely happy and satisfied.</p>
                <p className="awardsText"><img src="https://www.wickedlocal.com/Global/images/contests/favorites/wickedlocal/wlfavorites-logo.png" className="award" alt="wicked local logo" /> <span>WickedLocal.com - Category Tanning Salon Winner</span> </p>
            </div>
        </section>
    );
}

export default About;