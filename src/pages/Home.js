import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Logo from '../parts/Logo';
import fontSize from '../Mixin';

function  Start() {
    return (
        <Page>
            <Logo className='logo'></Logo>
            <ProgressBar className='loading' percentage={loadProgress}/>
            <Address className='copy'>
                <Copyright>&copy; 2022 Algo.</Copyright>
                <Version>v1.0.0</Version>
            </Address>
        </Page>
    );
}

export default  Start;

const Page = styled.div`
    background-color: ${props => props.theme.mainColor};
    color: ${props => props.theme.textColor};

    display: grid;
    grid-template-columns: 75px 1fr 75px;
    grid-template-rows: 75px 1fr 100px 1fr 100px;

    min-height: 100vh;
    min-height: 100dvh;
    width: 100vw;
    .logo{
        margin: auto;
        grid-area: 2 / 2 / 3 / 3;
    }
    .loading{
        margin: auto 0;
        grid-area: 3 / 2 / 4 / 3;
    }
    .start{
        margin: auto;
        grid-area: 4 / 2 / 5 / 3;
    }
    .copy{
        grid-area: 5 / 2 / 6 / 3;
    }
`
const StartText = styled.div`
    color: ${props => props.theme.mainColor};
    text-align: center;
`

const Address = styled.address`
    color: ${props => props.theme.white};
    margin: auto;
    padding-bottom: env(safe-area-inset-bottom);
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: center;
`

const Copyright = styled.address`
    font-size: ${fontSize.s};
`
const Version = styled.address`
    font-size: ${fontSize.l};
`

