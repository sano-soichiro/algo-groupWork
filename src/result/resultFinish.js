import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ResultFinish (props) {

  return(
      <LinkTextWrapper shadowColor={props.shadowColor} bgColor={props.bgColor} outlineColor={props.outlineColor} />
  );

}

export default ResultFinish;

const ResultFinishWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47%;
  height: 100px;
  background-color: ${({bgColor}) => bgColor};
  border-radius: 5px;
  margin: 5px 0 0 5px;
/*   clip-path: polygon(0% 100%, 0% 10%, 100% 20%, 100% 100%); */
  outline: 2px dashed ${({outlineColor}) => outlineColor};
	outline-offset: -8px;
`

const ResultFinishText = styled.p`
  width: 100%;
  color: #ffffff;
  text-shadow: 2px 2px 0 ${({shadowColor}) => shadowColor},
             -2px 2px 0 ${({shadowColor}) => shadowColor},
             2px -2px 0 ${({shadowColor}) => shadowColor},
             -2px -2px 0 ${({shadowColor}) => shadowColor};
  text-shadow: 2px 2px 1px ${({shadowColor}) => shadowColor},
             -2px 2px 1px ${({shadowColor}) => shadowColor},
             2px -2px 1px ${({shadowColor}) => shadowColor},
             -2px -2px 1px ${({shadowColor}) => shadowColor};
`

/* type LinkTextProps = {
  shadowColor: string
} */

const LinkTextWrapper/* : FC<LinkTextProps> */ = ({ shadowColor , bgColor , outlineColor }) => (
  <ResultFinishWrapper bgColor={bgColor} outlineColor={outlineColor}>
    <Link to={`/`}><ResultFinishText shadowColor={shadowColor}>しゅうりょう</ResultFinishText></Link>
  </ResultFinishWrapper>
)