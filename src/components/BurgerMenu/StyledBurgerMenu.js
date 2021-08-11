import Styled from 'styled-components';


export const StyledBurderMenuContianer = Styled.div`
    background-color: #292A2D;
    height: 80px;
    z-index: 9999;
    width: 100%;
    position: fixed;
    right: 0;

`

export const StyledMenuIcon = Styled.img`
    height: 50px !important;
    width: 100px !important;
    position: relative;
    top: 12px;
    left: 15px;
}
`

export const InsideBurgerIcon = Styled.img`
    height: 40px !important;
    width: 80px !important;
    position: relative;
    left: 105px;
    bottom: 86px;
`


export const StyledBurderMenu = Styled.nav`

.circle {
    display: ${(props)=> !props.isOpen ? 'none' : ''};
    position: absolute;
    bottom: 0px;
    left: -8px;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    padding: 8px;
    border: 2px solid #ffffff;
    color: #666;
    text-align: center;
    font: 32px Arial, sans-serif;
    z-index: 1;
    animation: showBlock 0s 0.2s forwards;
    //visibility: hidden;

}

a{
  color: #ECA0BD !important;
  transition: color 0.3s ease;
}

a:hover
{
  font-weight: bold;
}

body
{
  margin: 0;
  padding: 0;
  
  /* make it look decent enough */
  background: #232323;
  color: #cdcdcd;
  font-family: "Avenir Next", "Avenir", sans-serif;
  
  overflow-x: hidden; /* needed because hiding the menu on the right side is not perfect,  */
}

a
{
  text-decoration: none;

  transition: color 0.3s ease;
}

a:hover
{
  color: tomato;
}

#menuToggle
{
  display: block;
  position: absolute;
  top: 36px;
  right: 50px;
  
  z-index: 1;
  
  -webkit-user-select: none;
  user-select: none;
}

#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: -7px;
  left: -5px;
  
  cursor: pointer;
  
  opacity: 0; /* hide this */
  z-index: 2; /* and place it over the hamburger */
  
  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;
  
  background: #cdcdcd;
  border-radius: 3px;
  
  z-index: 1;
  
  transform-origin: 4px 0px;
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  /* background: #232323; */
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  opacity: 1;
  transform: rotate(-45deg) translate(0, -1px);
}

/*
 * Make this absolute positioned
 * at the top left of the screen
 */
#menu
{
  position: absolute;
  width: 300px;
  margin: -100px 0 0 0;
  padding: 50px;
  padding-top: 125px;
  right: -100px;
  
  background: #000000;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */
  
  transform-origin: 0% 0%;
  transform: translate(100%, 0);
  
  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 10px 0;
  font-size: 22px;
}

/*
 * And let's fade it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: none;
  opacity: 1;
}

`