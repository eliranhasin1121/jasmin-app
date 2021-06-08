import React from 'react';
import homeIcon from '../../assets/Home.png'
import JasmineLogo from '../../assets/JasmineLogo.png'
import { StyledPiNovelIcon , StyledHomeText} from './StyledHome';
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div>
				<nav className="web-nav-bar" id="nav">
                    <StyledPiNovelIcon tabIndex="0" aria-label='קריפטו מעולם לא היה כל כך נגיש' src={JasmineLogo}></StyledPiNovelIcon>
					<ul>
                        <li aria-label='ראשי' tabIndex="0"><Link to="contact" spy={true} smooth={true}>צור קשר</Link></li>
                        <li aria-label='צוות' tabIndex="0"><Link to="team" spy={true} smooth={true}>צוות</Link></li>
                        <li aria-label='צור קשר' tabIndex="0"><Link to="about" spy={true} smooth={true}>ראשי</Link></li>
					</ul>
				</nav>


            <section>
                <a href="#" className="image featured"><img src={homeIcon} alt="" /></a>
            </section>
        </div>
    )
}

export default Home;
