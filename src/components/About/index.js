import React, { useState , useRef } from 'react';
import AboutIcon from '../../assets/About.png'
import scrollDownButton from '../../assets/scrollDownButton.png';
import { StyledSection , StyledAbout,  StyledAboutImgSection , StyledAboutTextSection , StyledAboutText ,
    SyledPhilosophyContainer ,  SyledPhilosophyDiv , StyledScrolArrowContiner ,StyledScrolArrow } from './StyledAbout';
import useMedia from '../../customHooks/UseMedia';
import { Link } from 'react-scroll'
import PhilosophyIMG from '../../assets/PhilosophyIMG.png';

const About = () => {
    const imageRef = useRef(null);
    const [height,setHight] = useState(0);
    const {isMobile , isDevice} = useMedia();

    return (
        <div>
            <section>
                <StyledAbout isDevice={isDevice} className="row">
                    
                    <StyledAboutTextSection className="col-6 col-12-medium">
                        <StyledAboutText>
                        יסמין-קריפטו מנפיקה תעודת התחייבות סחירה בש”ח עוקבת אחר ביטקוין ואיטריום
                        </StyledAboutText>
                    </StyledAboutTextSection>

                    <StyledAboutImgSection className="col-6 col-12-medium">
                        <img className="image featured" src={AboutIcon}></img>
                    </StyledAboutImgSection>

                </StyledAbout>
            </section>
            <Link to="contact" spy={true} smooth={true}>
                <StyledScrolArrowContiner>
                    <span>contact us</span>
                    <StyledScrolArrow className="image featured" src={scrollDownButton}/>
                </StyledScrolArrowContiner>
            </Link>
            <section>
                <StyledAbout isDevice={isDevice} className="row">
                    <StyledAboutTextSection className="col-6 col-12-medium">
                                <StyledAboutText>
                                    <span>יסמין טכנולוגיות, מקבוצת פאי,   הינה מנפיקה של תעודות התחייבות  בש"ח, הראשונות מסוגן, העוקבות אחר מטבעות קריפטוגרפיים, למשקיעים מוסדיים וכשירים. התעודות עוקבות אחר שער הביטקוין (יסמין BTC  ) ושער האיטריום (יסמין ETH).  האחזקה בתעודות מאפשרת  השקעה במטבעות קריפטוגרפיים ללא אחזקה ישירה במטבעות עצמם. 
    התעודות נהנות מנזילות יומית, אפשרות לפדיון מול המנפיקה, רמת אבטחה גבוהה, עמידה בכל כללי KYC.  
    קבוצת פאי  (לוגו), בבעלות אהרון כהן ויונתן (ג'וני) קיי, הקבוצה עוסקת בהנפקת מכשירים פיננסים, קרנות גידור , מיזוגים ורכישות, השקעות  בחברות הזנק, מסחר בנגזרות.</span>
                                </StyledAboutText>
                            </StyledAboutTextSection>

                            <StyledAboutImgSection className="col-6 col-12-medium">
                                <img className="image featured" src={PhilosophyIMG}></img>
                            </StyledAboutImgSection>
                </StyledAbout>
            </section>
        </div>
    )
}


export default About;


{/* <SyledPhilosophyContainer className="row">
<SyledPhilosophyDiv imageHeight={height}>
    <img ref={imageRef} className="image featured" src={PhilosophyIMG}></img>
    <div className="col-12 col-12-medium caption">
        <h2>OUR PHILOSOPHY</h2>
        <p>
            <span>We view risk-management as a fundamental tool in structuring each trade as well as our entire portfolio rather than merely an overlay to the portfolio. A conservative approach to risk assessment and management is at the core of the fund’s activities.</span>
            <span>The perpetual development of screening and pricing models allows the investment team to continually take advantage of market inefficiencies.</span>
        </p>
    </div>
</SyledPhilosophyDiv>
</SyledPhilosophyContainer> */}