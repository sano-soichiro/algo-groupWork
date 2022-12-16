import styled from 'styled-components';
import LoadHint from './loadHint';
import LoadAnimation from './loadAnimation';
import Logo from '.././parts/Logo';
import { Link , useNavigate } from 'react-router-dom';

function Load (props) {
  const navi = useNavigate();

  if (props.isPath){
      const timeout = 3 * 1000;
      setTimeout(() => {
        navi('/play');
      },timeout);
      props.setIsPath(false);
  }
  
  return(
    <LoadWrapper>
      <Logo className='logo'/>
      <LoadAnimation className='loading'/>
      <LoadHint className='hintText' hintText='手順がより少なくなるようにしてみよう！'/>
    </LoadWrapper>
  );
}

export default Load;

const LoadWrapper = styled.div`
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
  .hintText{
    margin: auto;
    grid-area: 4 / 2 / 5 / 3;
  }
`
