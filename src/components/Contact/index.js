import React from 'react';
import Banner from '../Banner';
import ContactRight from '../../assets/ContactRight.png';
import { StyledContactForm , StyledFormHeader , StyledForm, Input,ContactContainer,Button,ButtonWrapper,TextContainer,ContactTexts,TextContact  } from './StyledContact';
import UseMedia from '../../customHooks/UseMedia';


const Contact = () =>{

    const {isMobile} = UseMedia();
    return (
        <div>
            <Banner/>
            <section>
                <div className="row" >
                    <StyledContactForm isMobile={isMobile} className="col-6 col-12-medium">
                        <StyledFormHeader style={{padding:0}}>{'צור קשר'}</StyledFormHeader>
                        <StyledForm>
                            <Input
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                                type="text" 
                                name="שם מלא" 
                                placeholder={"שם מלא"} />
                            
                            <Input 
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                                type="email" 
                                name="דואר אלקטרוני" 
                                placeholder={"דואר אלקטרוני"} />
                            
                            <Input
                                style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}} 
                                type="text" 
                                name="מספר פלאפון" 
                                placeholder={"מספר פלאפון"} />
                            
                            <Input 
                            style={{border:'none',borderBottom:'2px solid black',background:'transparent',borderRadius:0}}
                            type="text" 
                            name="הודעה" 
                            placeholder={"הודעה"} />
                            <ButtonWrapper>
                                <Button type="submit">{'שלח'}</Button>                        
                            </ButtonWrapper>
                        </StyledForm>
                        <ContactTexts className="row">
                        {/* {texts.map((text,index) => (
                            <TextContainer key={index} className={`col-${12/texts.length} col-12-medium`}>
                            <TextContact>{text}</TextContact>
                         </TextContainer>
                        ))} */}
                        </ContactTexts>
                    </StyledContactForm>
                    <ContactContainer style={{padding:0}} className="col-6 col-12-medium">
                    <img className="image featured" style={{margin:0}} src={ContactRight}></img>
                    </ContactContainer>
                </div>
            </section>
        </div>
    )
}

export default Contact;