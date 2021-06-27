import React from 'react';
import styled from 'styled-components'
import footerLogo from '../../assets/footer-logo.png';
import JasmineLogo from '../../assets/JasmineLogo.png'
import useMedia from '../../customHooks/UseMedia';
import { Link } from 'react-scroll'

export default function Footer(){

    const {isMobile} = useMedia();

    return(
		<React.Fragment>
        <FooterContainer>
		 <FooterContentContainer className="row">

		 {!isMobile ? ( 
             <>
          <LinkItemWrapper style={{margin: '-15px 0px 0px 35px'}} className="col-1-small">
		    <Logo className="image featured"  src={JasmineLogo}/>
		  </LinkItemWrapper>
		  <LinkItemWrapper className="col-3">
		    <Text as={'span'}>©Jasmin | POWERED BY NERAFOX</Text>
		  </LinkItemWrapper>
		   <LinkItemWrapper className="col-1">
		  <Text><Link to="contact" spy={true} smooth={true}>צור קשר</Link></Text>
		 </LinkItemWrapper>
		 <LinkItemWrapper className="col-1">
		 <Text><Link to="team" spy={true} smooth={true}>צוות</Link></Text>
		</LinkItemWrapper>
		<LinkItemWrapper className="col-1">
		<Text><Link to="home" spy={true} smooth={true}>ראשי</Link></Text>
	   </LinkItemWrapper>
	  <LinkItemWrapper className="col-2">
	    <Text as={'span'} > א   א  א   |   נגישות</Text> 
	  </LinkItemWrapper>
	  <LinkItemWrapper style={{margin: '0px 0px 0px 35px'}} className="col-2-small">
		    <Logo className="image featured"  src={footerLogo}/>
		  </LinkItemWrapper>
      </>
      ) : 
      (
    <>
    <LinkItemWrapper  className="col-12">
	<Text as={'span'}>©Jasmin | POWERED BY NERAFOX</Text>
    </LinkItemWrapper>
    </>
      )
    
    }
    </FooterContentContainer>
	  </FooterContainer>

		<FooterText>
			<span>
			המידע באתר אינו מהווה הצעה להשקעה בקרן או הזמנה לקבלת הצעות להשקעה בקרן, אינו מהווה בסיס לקבלת החלטות השקעה, ואינו מהווה המלצה ו/או חוות דעת ואינו תחליף לשיקול דעת של משקיע פוטנציאלי. כמו כן האמור כאן אינו מהווה תחליף לייעוץ מקצועי בידי בעל רישיון המתחשב בצרכי הלקוח וכן אינו מהווה תחליף לייעוץ מס. האמור באתר זה אינו מהווה הצעה של ניירות ערך. ניירות הערך של הקרנות השונות אינם רשומים ולא ירשמו למסחר והם מוצעים למשקיעים בדרך של הצעה פרטית למספר מוגבל של ניצעים כקבוע בחוק ני"ע. התקשרות בהסכם השקעה הינה לפי שיקול דעתו המוחלט של השותף הכללי.
			</span>
		</FooterText>
</React.Fragment>

    )
}

const FooterContentContainer = styled.div`
background-color:#000000;
padding:20px;
justify-content: space-between;
height: 180px;
`

const LinkItemWrapper = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding:40px 0 0 25px;
`

const Text = styled.span`
font-size:12px;

a{
	color:#ffffff;
	text-decoration: none;
}
`

const Logo = styled.img`
width:42px;
height:67px;
margin-bottom: 0px !important
`

const FooterText = styled.p`
	direction: rtl;
    background: rgb(216, 216, 216);
    padding: 25px;
	margin-bottom : 0px;
`


export const FooterContainer = styled.footer``