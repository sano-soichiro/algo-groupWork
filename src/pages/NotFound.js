import styled from 'styled-components';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <Div>
            <Er404>404</Er404>
            <div>お探しのページは見つかりませんでした</div>
            <Back><Link to="/">ホームに戻る</Link></Back>
        </Div>
    );
}

export default NotFound;

const Div = styled.div`
    min-height: 100vh;
    display: flex;
    gap: 60px;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    text-align: center;
`
const Er404 = styled.div`
    font-size: 4rem;
`
const Back = styled.p`
    padding: 8px;
    border-radius: 8px;
    width: 50%;
    margin: 0 auto;
    background-color: #FFB901;
`