import styled from 'styled-components';
import {FiChevronsDown,FiChevronsUp} from 'react-icons/fi';

function ToolBar(props) {
    return (
        <Toolbar id='toolBar' className={props.isOpen ? "isOpen" : ""}>
            <Knob onClick={(e)=>{
                props.setIsOpen(!props.isOpen);
            }}>
                <FiChevronsDown className={props.isOpen ? "" : "hidden"}/>
                <FiChevronsUp className={props.isOpen ? "hidden" : ""}/>
            </Knob>
            {props.content}
        </Toolbar>
    );
}

export default ToolBar;
const Toolbar = styled.div`
    width: 100%;
    height: 65px;
    position: fixed;
    bottom: 0px;
    border-top: 3px white solid;
    border-right: 3px white solid;
    border-left: 3px white solid;
    border-radius: 10px 10px 0px 0px;
    box-sizing: border-box;
    background: linear-gradient(-45deg,${props => props.theme.subColor} 25%, ${props => props.theme.subColor_light} 25%,${props => props.theme.subColor_light} 50%, ${props => props.theme.subColor} 50%,${props => props.theme.subColor} 75%, ${props => props.theme.subColor_light} 75%,#FCCC48);
    background-size: 30px 30px;
    animation: anime_stripe_1 2s infinite linear;
    z-index: 99;
    background-color: ${props => props.theme.subColor};
    transition: height 0.3s;
    &.isOpen{
        height: 60vh;
    }
`
const Knob = styled.div`
    font-size: 2rem;
    width: 100%;
    height: 65px;
    background: linear-gradient(180deg, #FFB800 15%, transparent 85%);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px 10px 0px 0px;
    color: white;
    .hidden{
        display: none;
    }
`