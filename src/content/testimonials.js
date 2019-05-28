import React from 'react';
import './content.css';

const Testimonals = () => {
    return(
        <section id="testimonials">
            <h1>Testimonials</h1>
            <var>Testimonials</var>
            <div className="slider">
                <div className="mask">
                    <ul>
                        <li className="anim1">
                        <div className="testimonial">
                        <blockquote>Angela is the best in her field. She is knowledgeable, professional and takes pride in what she does.  My daughters and I have been going to Angela for many years for all of our skincare, beauty and spa treatments.  This has been an aspect of my life that is very important to me.  I have certainly passed that along to my daughters.   We could never go elsewhere.  Luxe Studio Spa is a hidden gem.</blockquote> <cite>Michelle Kelliher</cite>
                        </div>
                        </li>
                        <li className="anim2">
                        <div className="testimonial"><blockquote>Angela is truly amazing.  I always look forward to spending time with Angela and catching up. And then of course is the added bonus of her wonderful facial with a remarkable relaxing massage. My skin always feels so clean and fresh when I leave.  I would highly recommend Angela to anyone looking for a new place for a facial</blockquote><cite>Eileen Bowes</cite></div>
                        </li>
                        <li className="anim3"><div className="testimonial"><blockquote>Angela was kind enough to do a lash lift on my curly lashes today, and oh my goodness, what a wonderful job she did. My natural lashes curl so tightly that they bend all the way back and touch my eyelids and look smashed into my face. It makes putting on mascara nearly impossible. My makeup artist for my upcoming wedding suggested that I have this lash lift done to relax the curl a bit and make my lashes easier to work with. My lashes look absolutely amazing. Each lash is well defined and they now look perfect. Angela was very nice and professional, she took great care of my extremely sensitive skin. I would highly recommend a lash lift to anyone who wants well defined, beautiful lashes. I will definitely be going back!!</blockquote><cite>Jess Roy</cite></div></li>
                        <li className="anim4"> <div className="testimonial"><blockquote>If you are looking for the best treatment, best facial and spa services you really need to contact Angela. She is so professional and truly makes you feel comfortable and relaxed. I always walk out feeling like a million dollars. Angela has improved my skin tremendously especially because I have rosacea and it’s so sensitive. Try her spa out, you will not be disappointed. She is amazing and truly cares about her clients!</blockquote><cite>Lurabeth Bombard</cite></div></li>
                        <li className="anim5">
                        <div className="testimonial"><blockquote>Angela is AMAZING! She has helped me with skin care, waxing, spray tans, and my wedding makeup! She is the one stop shop for all beauty. Angela takes the time to really know her clients. She is flexible and works with you so you are a 100% satisfied. I have absolutely loved every service I have received from Angela. Definitely go to Luxe studio spa- you will not be disappointed!!!</blockquote><cite>Diana Wiseman</cite></div>
                        </li>
                    </ul>
                </div>
             </div>

            <div className="review"><p><a href="https://search.google.com/local/writereview?placeid=ChIJkf2qACNj5IkRhSvYnTqxl1Y" target="_blank" rel="noopener noreferrer">Write a Review</a></p></div>
        </section>
    );
}

export default Testimonals;