import React , {useState} from 'react';
import { StyledBurderMenuContianer , StyledBurderMenu ,StyledMenuIcon , InsideBurgerIcon } from './StyledBurgerMenu'
import homeIcon from '../../assets/logoBurderNav.png'
import useMedia from '../../customHooks/UseMedia'
import { Link } from 'react-scroll'

const BurgerMenu = ()=>{
    const {isMobile} = useMedia();
    const [isOpen,setIsOpen] = useState(false);
   
    return (
        <StyledBurderMenuContianer>
            <StyledBurderMenu role="navigation" isOpen={isOpen}>
                <div id="menuToggle">
                <div className='circle'></div>
                    <input type="checkbox" onClick={()=>setIsOpen(!isOpen)}/>
                        <span></span>
                        <span></span>
                        <span></span>

                    <ul id="menu">
                    <li><Link to="home" spy={true} smooth={true}>ראשי</Link></li>
                    <li><Link to="team" spy={true} smooth={true}>הצוות</Link></li>
                    <li><Link to="contact" spy={true} smooth={true}>צור קשר</Link></li>
                    <InsideBurgerIcon isMobile={isMobile} className="image featured burger-icon" src={homeIcon} alt="" />
                    </ul>
                    
                </div>
            </StyledBurderMenu>
            <StyledMenuIcon isMobile={isMobile} className="image featured" src={homeIcon} alt="" />
        </StyledBurderMenuContianer>
    )

}


export default BurgerMenu;