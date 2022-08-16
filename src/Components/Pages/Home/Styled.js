import styled from "styled-components";
import Play from '../../../Assets/play1.svg'
import Play2 from '../../../Assets/play2.svg'

export const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
background: #FFFFFF;
box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
align-items: center;
`

export const StyledLogo = styled.img`
margin-top: 2.5rem;
width: 12.0625rem;
height: 2.5rem;
margin-bottom: 2.125rem;
transform: scale(1.0);
transition-duration: 0.5s;
:hover {
  transform: scale(1.01);
  transition-duration: 0.5s;
}
`

export const CardSettings = styled.section`
padding: 0.9375rem 1.25rem;
width: 20.875rem;
height: 13.25rem;
background-color: #F2F2F2;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 2.125rem;
border-radius: 6px;
`

export const DivVelocidade = styled.div`
height: 3.75rem;
width: 19.6875rem;
margin-bottom: 0.9375rem;
`

export const DefaultP = styled.p`
font-family: 'Poppins';
font-size: 1rem;
font-weight: bold;
color: #606060;
`

export const DivQuantidadeFotos = styled.div`
height: 3.75rem;
width: 19.6875rem;
margin-bottom: 0.9375rem;
`

export const DivDireção = styled.div`
height: 3.75rem;
width: 19.6875rem;
margin-bottom: 0.9375rem;
`

export const SectionAnguloPlataforma = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding: 0.9375rem 0.625rem;
width: 22.125rem;
height: 8.0625rem;
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
margin-bottom: 3.125rem;
border-radius: 6px;
`

export const ConteudoAnguloPlataforma = styled.div`
height: 3.75rem;
width: 19.6875rem;
margin-bottom: 0.9375rem;
`

export const SectionButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 19.375rem;
`

export const ButtonGoBack = styled.button`
height: 2.1875rem;
width: 2.1875rem;
background-color: #0071E3;
border: none;
border-radius: 8px;
background-image: url(${Play});
background-repeat: no-repeat;
background-position: center;
cursor: pointer;
&:hover{
    background-color: #1C5B99;
}
`

export const ButtonGoForward = styled.button`
height: 2.1875rem;
width: 2.1875rem;
background-color: #0071E3;
border: none;
border-radius: 8px;
background-image: url(${Play2});
background-repeat: no-repeat;
background-position: center;
cursor: pointer;
&:hover{
    background-color: #1C5B99;
}
`

export const ButtonStart = styled.button`
width: 11.25rem;
min-height: 2.75rem;
background-color: #0071E3;
border: none;
border-radius: 4px;
font-family: 'Poppins';
font-weight: bold;
color: #FFFFFF;
font-size: 1rem;
cursor: pointer;
margin-bottom: 15.125rem;
&:hover{
    background-color: #1C5B99;
}
`

export const StyledFooter = styled.div`
font-family: 'Poppins';
font-size: 0.7rem;
font-weight: bold;
color: #e3dede;
line-height: 1.125rem;
`