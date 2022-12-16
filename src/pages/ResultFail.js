import styled from 'styled-components';
import { Link } from 'react-router-dom';
function handle(event) {
    event.preventDefault();
}
function ResultFail (props) {
    document.addEventListener('touchmove', handle, { passive: false });
    document.addEventListener('mousewheel', handle, { passive: false });
  return (
        <ResultArea>
            <Header>結果発表</Header>
            <ResultGroup>
                <Subject>にんじんを星形にきる</Subject>
                <Result>失敗</Result>
            </ResultGroup>
            <ResultButtons>
                <Link to="/play"><Back>やりなおす</Back></Link>
                <Link to="/"><Home>ホームへ戻る</Home></Link>
            </ResultButtons>

            <LineContainer></LineContainer>
        <CenterFocus></CenterFocus>
        </ResultArea>
  );
}

export default ResultFail;

const ResultArea = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.mainColor_light};
`
const ResultGroup = styled.div`
    width: 65%;
    margin: 0 auto;
    text-align: center;
    padding-top: 90px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 3;
`
const Header = styled.div`
    font-size: 1.2rem;
    padding-top: 70px;
    text-align: center;
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    color: #ffffff;
    text-shadow:
           2px 2px 0px ${props => props.theme.mainColor_dark}, -2px -2px 0px ${props => props.theme.mainColor_dark},
          -2px 2px 0px ${props => props.theme.mainColor_dark},  2px -2px 0px ${props => props.theme.mainColor_dark},
           2px 0px 0px ${props => props.theme.mainColor_dark}, -2px  0px 0px ${props => props.theme.mainColor_dark},
           0px 2px 0px ${props => props.theme.mainColor_dark},  0px -2px 0px ${props => props.theme.mainColor_dark};
`
const Result = styled.div`
    width: 100%;
    padding-top: 20px;
    font-size: 40px;
    color: #ffffff;
    text-shadow:
           2px 2px 0px ${props => props.theme.mainColor_dark}, -2px -2px 0px ${props => props.theme.mainColor_dark},
          -2px 2px 0px ${props => props.theme.mainColor_dark},  2px -2px 0px ${props => props.theme.mainColor_dark},
           2px 0px 0px ${props => props.theme.mainColor_dark}, -2px  0px 0px ${props => props.theme.mainColor_dark},
           0px 2px 0px ${props => props.theme.mainColor_dark},  0px -2px 0px ${props => props.theme.mainColor_dark};
`
const Subject = styled.div`
    width: 100%;
    padding-top: 15px;
    padding-bottom: 10px;
    border-bottom: white solid 1px;
    font-size: 18px;
    width: 100%;
    color: #ffffff;
    text-shadow:
           2px 2px 0px ${props => props.theme.mainColor_dark}, -2px -2px 0px ${props => props.theme.mainColor_dark},
          -2px 2px 0px ${props => props.theme.mainColor_dark},  2px -2px 0px ${props => props.theme.mainColor_dark},
           2px 0px 0px ${props => props.theme.mainColor_dark}, -2px  0px 0px ${props => props.theme.mainColor_dark},
           0px 2px 0px ${props => props.theme.mainColor_dark},  0px -2px 0px ${props => props.theme.mainColor_dark};
`
const ResultButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    position: absolute;
    bottom: 30px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    a{
        width: 45%;
        margin: 0 auto;
    }
`
const Back = styled.button`
    text-align: center;
    width: 100%;
    height: 45px;
    background-color: white;
    border: 2px solid black;
    border-radius: 5px;
    margin-right: 1.5%;
    margin-left: 1.5%;
`
const Home = styled.button`
    text-align: center;
    width: 100%;
    height: 45px;
    background-color: #FCCC48;
    border: 2px solid black;
    border-radius: 5px;
    margin-right: 1.5%;
    margin-left: 1.5%;
`
const CenterFocus = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle, ${props => props.theme.mainColor_light} 0%, rgba(0,212,255,0) 100%);
    z-index: -1;
`
const LineContainer = styled.div`
    position: absolute;
    width: 140vh;
    height: 140vh;
    left: calc(50% - 70vh);
    top: calc(50% - 70vh);
    //z-index: -1 !important;
    background-image: repeating-conic-gradient(
        transparent 0,
        transparent 13deg,
        ${props => props.theme.mainColor} 13deg,
        ${props => props.theme.mainColor} 16deg
    ),
    repeating-conic-gradient(
        transparent 0,
        transparent 20deg,
        ${props => props.theme.mainColor} 20deg,
        ${props => props.theme.mainColor} 23deg
    ),
    repeating-conic-gradient(
        transparent 0,
        transparent 5deg,
        ${props => props.theme.mainColor} 5deg,
        ${props => props.theme.mainColor} 8deg
    ),
    repeating-conic-gradient(
        transparent 0,
        transparent 40deg,
        ${props => props.theme.mainColor} 40deg,
        ${props => props.theme.mainColor} 44deg
    ),
    repeating-conic-gradient(
        transparent 0,
        transparent 10deg,
        ${props => props.theme.mainColor} 10deg,
        ${props => props.theme.mainColor} 13deg
    );
  animation: backgroundAnimation 20s infinite linear;
  @keyframes backgroundAnimation {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  &::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;

    background-image: radial-gradient(
        ${props => props.theme.mainColor_dark} 0%,
        ${props => props.theme.mainColor_dark} 12%,
        transparent 30%,
        transparent
    );
  }
  &::after{
    /* 中心をくり抜く */
    mask-image: radial-gradient(
        transparent 0%,
        transparent 12%,
        white 30%,
        white
    );
  }
`