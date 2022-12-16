import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ResultRestart (props) {

  return(
    <LinkTextWrapper shadowColor={props.shadowColor} bgColor={props.bgColor} outlineColor={props.outlineColor} />
  );

}

export default ResultRestart;

const ResultRestartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 47%;
  height: 100px;
  background-color: ${({bgColor}) => bgColor};
  border-radius: 5px;
  margin: 5px 5px 0 0;
/*   clip-path: polygon(0% 100%, 0% 0%, 100% 10%, 100% 100%); */
  outline: 2px dashed ${({outlineColor}) => outlineColor};
  outline-offset: -8px;
  `

const ResultRestartText = styled.p`
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
  <ResultRestartWrapper bgColor={bgColor} outlineColor={outlineColor}>
    <Link to={`/`}><ResultRestartText shadowColor={shadowColor}>やりなおす</ResultRestartText></Link>
  </ResultRestartWrapper>
)
