import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from 'react-icons/io'

function Header(props) {
    return (
        <Head>
            <Link to={props.link}><Back><IoIosArrowBack/></Back></Link>
            <Title>{props.title}</Title>
        </Head>
    );
}

export default Header;


const Head = styled.div`
    position: fixed;
    top: 0;
    z-index: 10;
    background-color: ${props => props.theme.mainColor_light};
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
`
const Back = styled.div`
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.mainColor_light};
    width: 40px;
    height: 40px;
    border-radius: 100px;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 2px;
    margin-left: 10px;
`
const Title = styled.div`
    color: ${props => props.theme.textColor_light};
    width: 100%;
    text-align: center;
    padding-right: 25px;
    text-shadow:
           2px 2px 0px ${props => props.theme.mainColor_dark}, -2px -2px 0px ${props => props.theme.mainColor_dark},
          -2px 2px 0px ${props => props.theme.mainColor_dark},  2px -2px 0px ${props => props.theme.mainColor_dark},
           2px 0px 0px ${props => props.theme.mainColor_dark}, -2px  0px 0px ${props => props.theme.mainColor_dark},
           0px 2px 0px ${props => props.theme.mainColor_dark},  0px -2px 0px ${props => props.theme.mainColor_dark};
`