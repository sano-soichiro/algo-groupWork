import { React} from 'react';
import styled from 'styled-components';

function ResultTitle () {

  return(
    <>
      <ResultTitleText>にんじんを星形に切る</ResultTitleText>
    </>
  );

}

export default ResultTitle;

const ResultTitleText = styled.p`
  width: 100%;
  font-size: 16px;
  color: #ffffff;
  padding: 20px 20px 20px 20px;
  text-shadow: 2px 2px 0 #000,
             -2px 2px 0 #000,
             2px -2px 0 #000,
             -2px -2px 0 #000;
  text-shadow: 2px 2px 1px #000,
             -2px 2px 1px #000,
             2px -2px 1px #000,
             -2px -2px 1px #000;

`