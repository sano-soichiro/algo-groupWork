import styled from 'styled-components';
import ResultTitle from './resultTitle';
import ResultRestart from './resultRestart';
import ResultFinish from './resultFinish';
import { themes } from '../Theme';


function result (props) {

  return (
    <BgStripe>
      <ResultWrapper>
        <ResultHeader shadowColor={themes.original.mainColor_dark} />
        <ResultTop>
          <ResultTitle />
          <ResultTopHr></ResultTopHr>
          <ResultTextBox shadowColor={themes.original.subColor} text="成功！！" />
        </ResultTop>
        <ResultBottom>
          <ResultRestart shadowColor={themes.original.black} bgColor={themes.original.white} outlineColor={themes.original.subColor} />
          <ResultFinish shadowColor={themes.original.black} bgColor={themes.original.subColor} outlineColor={themes.original.white} />
        </ResultBottom>
      </ResultWrapper>
    </BgStripe>
  );
}

export default result;

const BgStripe = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #49C6D4;
  position: relative;
  background: linear-gradient(-45deg,#49C6D4 25%, #7EDCE7 25%,#7EDCE7 50%, #49C6D4 50%,#49C6D4 75%, #7EDCE7 75%,#7EDCE7);
  background-size: 30px 30px;
  animation: anime_stripe_1 2s infinite linear;
  background-attachment: fixed;
  @keyframes anime_stripe_1 {
    0% {  background-position-x: 0;}
    100% {  background-position-x: -30px;}
  }
`

const ResultWrapper = styled.div`
  padding: 200px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const ResultHeaderText = styled.p`
  font-size: 28px;
  color: ${(themes.original.white)};
  text-align: center;
  margin: 0 0 50px 0;
  text-shadow: 2px 2px 0 ${({shadowColor}) => shadowColor},
             -2px 2px 0 ${({shadowColor}) => shadowColor},
             2px -2px 0 ${({shadowColor}) => shadowColor},
             -2px -2px 0 ${({shadowColor}) => shadowColor};
  text-shadow: 2px 2px 1px ${({shadowColor}) => shadowColor},
             -2px 2px 1px ${({shadowColor}) => shadowColor},
             2px -2px 1px ${({shadowColor}) => shadowColor},
             -2px -2px 1px ${({shadowColor}) => shadowColor};
`

const ResultHeader = ({ shadowColor }) => (
  <ResultHeaderText shadowColor={shadowColor}>結果画面</ResultHeaderText>
)

const ResultTop = styled.div`
  width: 80%;
  height: 110px;
  margin: 0 auto;
  border-radius: 5px;
  position: relative;
  background-color: ${(themes.original.subColor)};
	/* clip-path: polygon(0% 80%, 0% 0%, 100% 0%, 100% 100%); */
`

const ResultTopHr = styled.hr`
  width: 96%;
  color: ${(themes.original.white)};
  margin: 0 auto;
`

const ResultBottom = styled.div`
  width: 80%;
  margin: 5% auto;
  display: flex;
  justify-content: space-between;
`

const ResultTextWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
`

const ResultText = styled.p`
  position: absolute;
  right: 5%;
  bottom: -30%;
  z-index: 1000;
  color: ${(themes.original.white)};
  font-size: 40px;
  text-shadow: 2px 2px 0 ${({shadowColor}) => shadowColor},
             -2px 2px 0 ${({shadowColor}) => shadowColor},
             2px -2px 0 ${({shadowColor}) => shadowColor},
             -2px -2px 0 ${({shadowColor}) => shadowColor};
  text-shadow: 2px 2px 1px ${({shadowColor}) => shadowColor},
             -2px 2px 1px ${({shadowColor}) => shadowColor},
             2px -2px 1px ${({shadowColor}) => shadowColor},
             -2px -2px 1px ${({shadowColor}) => shadowColor};
`

/* type ResultTextBoxProps = {
  shadowColor: string ,
  text: string
} */

const ResultTextBox/* : FC<ResultTextBoxProps> */ = ({shadowColor , text}) => (
  <ResultTextWrapper>
    <ResultText shadowColor={shadowColor}>{text}</ResultText>
  </ResultTextWrapper>
)