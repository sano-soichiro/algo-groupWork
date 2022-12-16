import styled from 'styled-components';
import { Link } from 'react-router-dom';
function handle(event) {
    event.preventDefault();
}
function ResultSuccess (props) {
    document.addEventListener('touchmove', handle, { passive: false });
    document.addEventListener('mousewheel', handle, { passive: false });
  return (
        <ResultArea>
            <Header>結果発表</Header>
            <ResultGroup>
                <Crown id="ss" width="87" height="69" viewBox="0 0 58 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_456_583)">
                        <path d="M47.85 40.25H10.15C9.3525 40.25 8.7 40.8969 8.7 41.6875V44.5625C8.7 45.3531 9.3525 46 10.15 46H47.85C48.6475 46 49.3 45.3531 49.3 44.5625V41.6875C49.3 40.8969 48.6475 40.25 47.85 40.25ZM53.65 11.5C51.2484 11.5 49.3 13.4316 49.3 15.8125C49.3 16.4504 49.445 17.0434 49.6988 17.5914L43.1375 21.4906C41.7419 22.3172 39.9384 21.85 39.1319 20.4484L31.7459 7.63672C32.7156 6.84609 33.35 5.66016 33.35 4.3125C33.35 1.93164 31.4016 0 29 0C26.5984 0 24.65 1.93164 24.65 4.3125C24.65 5.66016 25.2844 6.84609 26.2541 7.63672L18.8681 20.4484C18.0616 21.85 16.2491 22.3172 14.8625 21.4906L8.31031 17.5914C8.555 17.0523 8.70906 16.4504 8.70906 15.8125C8.70906 13.4316 6.76063 11.5 4.35906 11.5C1.9575 11.5 0 13.4316 0 15.8125C0 18.1934 1.94844 20.125 4.35 20.125C4.58563 20.125 4.82125 20.0891 5.04781 20.0531L11.6 37.375H46.4L52.9522 20.0531C53.1788 20.0891 53.4144 20.125 53.65 20.125C56.0516 20.125 58 18.1934 58 15.8125C58 13.4316 56.0516 11.5 53.65 11.5Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_456_583">
                            <rect width="58" height="46" fill="white"/>
                        </clipPath>
                    </defs>
                </Crown>
                <Subject>にんじんを星形にきる</Subject>
                <Result>成功</Result>
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

export default ResultSuccess;

const ResultArea = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.subColor_light};
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
           2px 2px 0px ${props => props.theme.subColor_dark}, -2px -2px 0px ${props => props.theme.subColor_dark},
          -2px 2px 0px ${props => props.theme.subColor_dark},  2px -2px 0px ${props => props.theme.subColor_dark},
           2px 0px 0px ${props => props.theme.subColor_dark}, -2px  0px 0px ${props => props.theme.subColor_dark},
           0px 2px 0px ${props => props.theme.subColor_dark},  0px -2px 0px ${props => props.theme.subColor_dark};
`
const Crown = styled.svg`
    z-index: 3;
    width: 100%;
`
const Result = styled.div`
    width: 100%;
    padding-top: 20px;
    font-size: 40px;
    color: #ffffff;
    text-shadow:
           2px 2px 0px ${props => props.theme.subColor_dark}, -2px -2px 0px ${props => props.theme.subColor_dark},
          -2px 2px 0px ${props => props.theme.subColor_dark},  2px -2px 0px ${props => props.theme.subColor_dark},
           2px 0px 0px ${props => props.theme.subColor_dark}, -2px  0px 0px ${props => props.theme.subColor_dark},
           0px 2px 0px ${props => props.theme.subColor_dark},  0px -2px 0px ${props => props.theme.subColor_dark};
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
           2px 2px 0px ${props => props.theme.subColor_dark}, -2px -2px 0px ${props => props.theme.subColor_dark},
          -2px 2px 0px ${props => props.theme.subColor_dark},  2px -2px 0px ${props => props.theme.subColor_dark},
           2px 0px 0px ${props => props.theme.subColor_dark}, -2px  0px 0px ${props => props.theme.subColor_dark},
           0px 2px 0px ${props => props.theme.subColor_dark},  0px -2px 0px ${props => props.theme.subColor_dark};
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
    background: radial-gradient(circle, rgb(255, 217, 112) 0%, rgba(0,212,255,0) 100%);
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
        #FFB901 13deg,
        #FFB901 16deg
    ),
    repeating-conic-gradient(
        transparent 0,
        transparent 20deg,
        #FFB901 20deg,
        #FFB901 23deg
    ),
    repeating-conic-gradient(
        transparent 0,
        transparent 5deg,
        #FFB901 5deg,
        #FFB901 8deg
    ),
    repeating-conic-gradient(
        transparent 0,
        transparent 40deg,
        #FFB901 40deg,
        #FFB901 44deg
    ),
    repeating-conic-gradient(
        transparent 0,
        transparent 10deg,
        #FFB901 10deg,
        #FFB901 13deg
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
        #ffee33 0%,
        #ffee33 12%,
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