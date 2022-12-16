import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../parts/Header';
import { themes } from '../Theme';

export default function Option(props) {

    return(
        <Page>
            <Header link='/' title='オプション' />
            <Checkbox>
                {props.isTheme === themes.original ?
                    <button onClick={ () => {props.setIsTheme(themes.dark); }} >ダークモード</button>:
                    <button onClick={ () => {props.setIsTheme(themes.original); }} >ノーマルモード</button>
                }
            </Checkbox>
        </Page>
    )
}

const Page = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.mainColor};
    position: relative;
    background: linear-gradient(-45deg,${props => props.theme.mainColor} 25%, ${props => props.theme.mainColor_light} 25%,${props => props.theme.mainColor_light} 50%, ${props => props.theme.mainColor} 50%,${props => props.theme.mainColor} 75%, ${props => props.theme.mainColor_light} 75%,${props => props.theme.mainColor_light});
    background-size: 30px 30px;
    animation: anime_stripe_1 2s infinite linear;
    background-attachment: fixed;
    @keyframes anime_stripe_1 {
        0% {  background-position-x: 0;}
        100% {  background-position-x: -30px;}
    }
    min-height: 100vh;
`
const Checkbox = styled.div`
    margin: 100px 0;
    width: 90%;
    height: 50px;
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.white};
    border-radius: 10px;
`