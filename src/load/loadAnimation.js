import styled from 'styled-components';

/* if (window.location.pathname === "/load"){
  const timeout = 3 * 1000;
  setTimeout(() => {
    window.location.href = "play"
  },timeout);
} */

const LoadAnimation = (props) => {
  return(
  <Animation className={props.className}>
    <p className='one ball'></p>
    <p className='two ball'></p>
    <p className='three ball'></p>
    <p className='four ball'></p>
    <p className='five ball'></p>
  </Animation>
  );
}

export default LoadAnimation;

const Animation = styled.div`
  display: flex;

  .ball {
    z-index: 1;
    margin: 0 auto;
    padding: 0;
    background: #21b1c4;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    border-radius: 100px;
    box-sizing: border-box;
    animation: 0.6s cubic-bezier(.662,.115,.88,.1) infinite alternate;
  }

  .ball { animation-name: bound; }

  @keyframes bound {
  	from  { transform: translateY(0vw) scale(1,1); }
  	to { transform: translateY(10vw) scale(1,0.5); }
  }

  .one {
    animation-delay: 0s;
  }
  .two {
    animation-delay: 0.2s;
  }
  .three {
    animation-delay: 0.4s;
  }
  .four {
    animation-delay: 0.6s;
  }
  .five {
    animation-delay: 0.8s;
  }
`