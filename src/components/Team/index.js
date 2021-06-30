import React from 'react';
import GalitLogo from '../../assets/Galit.png'
import TaliLogo from '../../assets/Tali.png'
import AhronLogo from '../../assets/Ahron.png'
import Jonatan from '../../assets/Jonatan.png'
import { StyledOutTeamText , StyledOutTeamImage , StyledTeamMemberContainer , StyledTextContainer , StyledTeamName} from './StyledTeam';
import useMedia from '../../customHooks/UseMedia';
const Team = () =>{
    const {isMobile , isDevice} = useMedia();
    return (
        <div>
            <section>
                <div className="row teamImageContiner">
                    <StyledTeamMemberContainer className="col-6 col-6-medium teamImageContiner">
                    {isDevice &&  
                        <StyledOutTeamText isDevice={isDevice}>
                            <StyledTeamName tabIndex="0">גלית ברודו</StyledTeamName>
                            <span tabIndex="0">מנכ״ל</span>   
                        </StyledOutTeamText>                    
                    }
                    <StyledOutTeamImage isMobile={isMobile} className="image featured mid" src={GalitLogo}></StyledOutTeamImage>
                    </StyledTeamMemberContainer>
                    <StyledTextContainer className="col-6 col-12-medium">
                        <StyledOutTeamText isDevice={isDevice}>
                        {!isDevice && 
                            <React.Fragment>
                                <StyledTeamName tabIndex="0">גלית ברודו</StyledTeamName>
                                <span tabIndex="0">מנכ״ל</span>
                            </React.Fragment>
                        }
                            <span tabIndex="0">גלית ברודו – מנכ"ל יסמין.  בעלת 27 שנות ניסיון בבנק לאומי, בתחומים שונים – אשראי, השקעות ותפעול מוצרים בשוק ההון. עסקה בתחומי שוק ההון  כ -15 שנים והינה בעלת הכרות מעמיקה עם שוק ההון ופעילות גופים מוסדיים ועסקיים אחרים בתחומים אלו.</span>
                        </StyledOutTeamText>
                    </StyledTextContainer>
                </div>
            </section>

            <section>
                <div className="row teamImageContiner">
                        {!isDevice && 
                        <StyledTextContainer className="col-6 col-12-medium">
                            <StyledOutTeamText isDevice={isDevice}>
                                <React.Fragment>
                                    <StyledTeamName tabIndex="0">טלי ארקין</StyledTeamName>
                                    <span tabIndex="0">קשרי לקוחות</span>
                                </React.Fragment>
                                <span tabIndex="0">בעל ניסיון של 15 שנה בשוק ההון, בתפקידים שונים ומגוונים: ברוקר בישיר בית השקעות, מנהל השקעות במנורה, מנהל השקעות נוסטרו/קרן גידור של יורוקום, מנהל מחלקת הנוסטרו של איביאי ונוסטרו בענבר פיננסים.</span>
                            </StyledOutTeamText>
                        </StyledTextContainer>
                        }
                    <StyledTeamMemberContainer className="col-6 col-6-medium teamImageContiner">
                    {isDevice &&  
                        <StyledOutTeamText isDevice={isDevice}>
                            <StyledTeamName tabIndex="0">טלי ארקין</StyledTeamName>
                            <span tabIndex="0">קשרי לקוחות</span>   
                        </StyledOutTeamText>                    
                    }
                    <StyledOutTeamImage isMobile={isMobile} className="image featured mid" src={TaliLogo}></StyledOutTeamImage>
                    </StyledTeamMemberContainer>

                    {isDevice && 
                        <StyledTextContainer className="col-6 col-12-medium">
                            <StyledOutTeamText isDevice={isDevice}>
                                <span tabIndex="0">בעל ניסיון של 15 שנה בשוק ההון, בתפקידים שונים ומגוונים: ברוקר בישיר בית השקעות, מנהל השקעות במנורה, מנהל השקעות נוסטרו/קרן גידור של יורוקום, מנהל מחלקת הנוסטרו של איביאי ונוסטרו בענבר פיננסים.</span>
                            </StyledOutTeamText>
                        </StyledTextContainer>
                        }

                </div>
            </section>

            <section>
                <div className="row teamImageContiner">
                    <StyledTeamMemberContainer className="col-6 col-6-medium teamImageContiner">
                    {isDevice &&  
                        <StyledOutTeamText isDevice={isDevice}>
                            <StyledTeamName tabIndex="0">אהרן כהן</StyledTeamName>
                            <span tabIndex="0">שותף מייסד</span>   
                        </StyledOutTeamText>                    
                    }
                    <StyledOutTeamImage isMobile={isMobile} className="image featured mid" src={AhronLogo}></StyledOutTeamImage>
                    </StyledTeamMemberContainer>
                    <StyledTextContainer className="col-6 col-12-medium">
                        <StyledOutTeamText isDevice={isDevice}>
                        {!isDevice && 
                            <React.Fragment>
                                <StyledTeamName tabIndex="0">אהרן כהן</StyledTeamName>
                                <span tabIndex="0">שותף מייסד</span>
                            </React.Fragment>
                        }
                            <span tabIndex="0">אהרון כהן - למעלה מ- 25 שנות ניסיון בשוק ההון הישראלי. טרם יסד את פאי, בין השנים 1994-1997 עבד בבנק מזרחי, בתפקידו האחרון ניהל את מחלקת המעו"ף. בין השנים 1997-1999 שימש כסמנכ"ל אילנות בטוחה מקבוצת דסק"ש וניהל את נוסטרו נגזרים ואופציות.</span>
                        </StyledOutTeamText>
                    </StyledTextContainer>
                </div>
            </section>

            <section>
                <div className="row teamImageContiner">
                        {!isDevice && 
                        <StyledTextContainer className="col-6 col-12-medium">
                            <StyledOutTeamText isDevice={isDevice}>
                                <React.Fragment>
                                    <StyledTeamName tabIndex="0">יהונתן קיי</StyledTeamName>
                                    <span tabIndex="0">שותף מייסד</span>
                                </React.Fragment>
                               <span tabIndex="0">
                                   בעל למעלה מ- 28 שנות ניסיון במסחר וניהול תחום הנגזרות, FX, אופציות ותעודות סל בשוקי המסחר בארה"ב ובאירופה. מר קיי החל את דרכו בשנת 1992 כסוחר באופציות במניות בבית ההשקעות Susquehanna Investment Group   בשיקגו, ארה"ב. בין השנים 1997-1999 שימש מר קיי כראש דסק הנזגרות באילנות-בטוחה.
                                   בוגר תואר ראשון בהצטיינות ותואר ושני במנהל עסקים מאוניברסיטת הרווארד, בארה"ב.
                                </span>
                            </StyledOutTeamText>
                        </StyledTextContainer>
                        }
                    <StyledTeamMemberContainer className="col-6 col-6-medium teamImageContiner">
                    {isDevice &&  
                        <StyledOutTeamText isDevice={isDevice}>
                            <StyledTeamName tabIndex="0">יהונתן קיי</StyledTeamName>
                            <span tabIndex="0">שותף מייסד</span>
                        </StyledOutTeamText>                    
                    }
                    <StyledOutTeamImage isMobile={isMobile} className="image featured mid" src={Jonatan}></StyledOutTeamImage>
                    </StyledTeamMemberContainer>

                    {isDevice && 
                        <StyledTextContainer className="col-6 col-12-medium">
                            <StyledOutTeamText isDevice={isDevice}>
                            <span tabIndex="0">
                                בעל למעלה מ- 28 שנות ניסיון במסחר וניהול תחום הנגזרות, FX, אופציות ותעודות סל בשוקי המסחר בארה"ב ובאירופה. מר קיי החל את דרכו בשנת 1992 כסוחר באופציות במניות בבית ההשקעות Susquehanna Investment Group   בשיקגו, ארה"ב. בין השנים 1997-1999 שימש מר קיי כראש דסק הנזגרות באילנות-בטוחה.
                                 בוגר תואר ראשון בהצטיינות ותואר ושני במנהל עסקים מאוניברסיטת הרווארד, בארה"ב.
                            </span>
                            </StyledOutTeamText>
                        </StyledTextContainer>
                        }
                </div>
            </section>

        </div>
    )
}

export default Team;