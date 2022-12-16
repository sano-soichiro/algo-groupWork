import styled from 'styled-components';

const LoadHint = (props) => {
  return(
  <LoadHintBox className={props.className}>
    <p>ヒント</p>
    <LoadHintText>
      <p>{props.hintText}</p>
    </LoadHintText>
  </LoadHintBox>
  );
}

export default LoadHint;

const LoadHintText = styled.div`
  width: 100%;
  background-color: ${props => props.theme.mainColor_dark};
  border-radius: 10px;
  bottom: 5vh;
  p{
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 1px;
    padding: 8px 24px;
  }
`
const LoadHintBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${props => props.theme.white};
  & > p{
    margin: 0 0 20px 0;
  }
`