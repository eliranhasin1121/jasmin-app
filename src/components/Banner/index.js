import React from 'react';
import PiNovelLogo from '../../assets/Logo.png';
import { StyledPiLogo } from './StyledBanner';

const Banner = () =>{
    return (
        <section id="banner">
        <div className="content">
            <div className="col-6 col-12-medium">
                <h2>לעוד מוצרים מבית היוצר של פאי פיננסים</h2>
                <StyledPiLogo className="image featured" src={PiNovelLogo}></StyledPiLogo>
            </div>
            <a href="#main" className="button scrolly">לחץ כאן</a>
        </div>
    </section>
    )
}

export default Banner;