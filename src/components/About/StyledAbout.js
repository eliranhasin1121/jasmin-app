import styled from 'styled-components';


export const StyledAboutImgSection = styled.div`
    display: flex;
    align-items: center;
`

export const StyledAboutTextSection = styled.div`
    display: flex;
    align-items: center;
    direction: rtl;
`


export const StyledAboutText = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    color: #000000;
    line-height: 1;
    text-align: center;
    margin-left: 40px;
    margin-right: 40px;
    text-align: right;
`

export const StyledPhilosophyText = styled.span`
    font-size: 18px;
`


export const StyledScrolArrowContiner = styled.div`
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        text-decoration: none;
    }

`

export const StyledScrolArrow = styled.img`
    height: 60px;
    width: 60px !important;
    z-index: 1;
    @media (max-width: 740px) {
        margin-bottom: -5px !important;
    }
    @media (max-width: 400px) {
        margin-bottom: -10px !important;
    }
    
`

export const StyledPhilosophyImg = styled.img`
    position: relative;
    top: -50px;
`