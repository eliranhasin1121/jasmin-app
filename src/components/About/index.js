import React from 'react';
import AboutIcon from '../../assets/About.png'
import scrollDownButton from '../../assets/scrollDownButton.png';
import { StyledAboutImgSection , StyledAboutTextSection , StyledAboutText ,
     StyledScrolArrowContiner ,StyledScrolArrow , StyledPhilosophyText , StyledPhilosophyImg} from './StyledAbout';
import { Link } from 'react-scroll'
import PhilosophyIMG from '../../assets/PhilosophyIMG.png';
import UseMedia from '../../customHooks/UseMedia';
import PhilosophyWeb from '../../assets/PhilosophyWeb.png';
const About = () => {
    const {isDevice} = UseMedia();

    return (
        <div>
            <section>
                <div className="row">
                    
                    <StyledAboutTextSection className="col-6 col-12-medium">
                        <StyledAboutText tabIndex="0">
                        יסמין-קריפטו מנפיקה תעודת התחייבות סחירה בש”ח עוקבת אחר ביטקוין ואיטריום
                        </StyledAboutText>
                    </StyledAboutTextSection>

                    <StyledAboutImgSection className="col-6 col-12-medium">
                        <img className="image featured" src={AboutIcon}></img>
                    </StyledAboutImgSection>

                </div>
            </section>

            <Link to="contact" spy={true} smooth={true}>
                <StyledScrolArrowContiner>
                    <span aria-label={'contact us button'} tabIndex="0" >contact us</span>
                    <StyledScrolArrow className="image featured" src={scrollDownButton}/>
                </StyledScrolArrowContiner>
            </Link>

            <section>
            {isDevice ? 
                <div className="row grayBackground">
                    <StyledAboutTextSection className="col-6 col-12-medium">
                                <StyledAboutText>
                                <h3 tabIndex="0">מי אנחנו ?</h3>
                                    <StyledPhilosophyText tabIndex="0">
                                            יסמין טכנולוגיות, מקבוצת פאי,   הינה מנפיקה של תעודות התחייבות  בש"ח, הראשונות מסוגן, העוקבות אחר מטבעות קריפטוגרפיים, למשקיעים מוסדיים וכשירים. התעודות עוקבות אחר שער הביטקוין (יסמין BTC  ) ושער האיטריום (יסמין ETH).  האחזקה בתעודות מאפשרת  השקעה במטבעות קריפטוגרפיים ללא אחזקה ישירה במטבעות עצמם. 
                                            התעודות נהנות מנזילות יומית, אפשרות לפדיון מול המנפיקה, רמת אבטחה גבוהה, עמידה בכל כללי KYC.  
                                            קבוצת פאי  (לוגו), בבעלות אהרון כהן ויונתן (ג'וני) קיי, הקבוצה עוסקת בהנפקת מכשירים פיננסים, קרנות גידור , מיזוגים ורכישות, השקעות  בחברות הזנק, מסחר בנגזרות.
                                    </StyledPhilosophyText>
                                </StyledAboutText>
                            </StyledAboutTextSection>

                            <StyledAboutImgSection className="col-6 col-12-medium">
                                <StyledPhilosophyImg className="image featured" src={PhilosophyIMG}></StyledPhilosophyImg>
                            </StyledAboutImgSection>
                </div>
                :
                <div className="row" style={{display : 'block'}}>
                <StyledAboutImgSection className="col1-12">
                    <img className="image featured" src={PhilosophyWeb} tabIndex={0} 
                    aria-label={' מי אנחנו ? יסמין טכנולוגיות מקבוצת פאי, הינה מנפיקה של תעודת התחייבות בש״ח הראשונות מסוגן , העוקבת אחר טבעות קריפטוגרפיים , למשקיעים מוסדיים וכשירים. התעודות עקבות אחר שער הביטקויין יסמין ביטקויין יסמין איתריום האחזקה בתעודה מאפשרת השקעה במטבעות קריפטוגרפיים ללא אחזרה ישירה במטבעות עצמם התעודות נהנות מנזילות יומית אפשרות לפדיון מול המנפיקה ורמת אבטחה גבוהה עמידה בכלל הכללים קבוצת פאי בעלות הרהון כהן ויונתן גוני קיי הקבוצה עוסקת בהפנקת מכשירים פיננסים קרנות גידור מיזוגים ורכישות והשקעות בחזרנות הזנק מסחר בנגזרות '}/>
                </StyledAboutImgSection>
            </div>
            }
            </section>
        </div>
    )
}


export default About;
