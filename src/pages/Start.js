import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../parts/Logo';
import fontSize from '../Mixin';

function  Start(props) {
    let [isStart, setIsStart] = useState(false);

    return(
    <>
            <Link to="" onClick={() => setIsStart(true)}>
                <Page>
                    <Logo className='logo'></Logo>
                    <StartText className='stroke start'>画面をタップしてスタート</StartText>
                    <Address className='copy'>
                        <Copyright>&copy; 2022 Algo.</Copyright>
                        <Version>v1.0.0 alpha</Version>
                    </Address>
                </Page>
            </Link>
        {isStart &&
        <UnderBar>
            <CreatePath>
                <Link to="/load" onClick={props.setIsPath(true)}><p>algoであそぶ</p></Link>
            </CreatePath>
            <HowAndOp>
                <HowToUse>
                    <Link to="/howto"><p>あそびかた</p></Link>
                </HowToUse>
                <Option>
                    <Link to="/option"><p>オプション</p></Link>
                </Option>
            </HowAndOp>
        </UnderBar>
        }
    {console.log(isStart)}
    </>
    )
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

const UnderBar = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border-top: 3px white solid;
    border-right: 3px white solid;
    border-left: 3px white solid;
    border-radius: 10px 10px 0px 0px;
    background: linear-gradient(-45deg,#FFB901 25%, #FCCC48 25%,#FCCC48 50%, #FFB901 50%,#FFB901 75%, #FCCC48 75%,#FCCC48);
    background-size: 30px 30px;
    background-attachment: fixed;
    @keyframes anime_stripe_1 {
        0% {  background-position-x: 0;}
        100% {  background-position-x: -30px;}
    }

    @keyframes fadeUpAnime{
        from {
            opacity: 0;
            transform: translateY(100px);
        }
        
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    animation: fadeUpAnime 0.5s forwards , anime_stripe_1 2s infinite linear;
    opacity:0;
`
const CreatePath = styled.div`
    width: 90%;
    height: 20%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.white};
    border: ${props => props.theme.mainColor} 4px solid;
    border-radius: 10px;
    p{
        text-align: center;
    }
`
const HowToUse = styled.div`
    width: 48%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.white};
    border: ${props => props.theme.mainColor} 4px solid;
    border-radius: 10px;
    p{
        text-align: center;
    }
`
const Option = styled.div`
    width: 48%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.white};
    border: ${props => props.theme.mainColor} 4px solid;
    border-radius: 10px;
    p{
        text-align: center;
    }
`
const HowAndOp = styled.div`
    margin: 0 auto;
    width: 90%;
    height: 20%;
    display: flex;
    justify-content: space-between;
`