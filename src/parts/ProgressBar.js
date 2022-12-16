import styled from 'styled-components';
import fontSize from '../Mixin';
function ProgressBar(props) {
    return (
        <StyledProgressBar className={props.className}>
            <Bar>
                <Progress width={props.percentage}></Progress>
            </Bar>
            <Percent>{props.percentage}%</Percent>
        </StyledProgressBar>
    );
}

export default ProgressBar;

const StyledProgressBar = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: center;
`
const Bar = styled.div`
    background-color: ${props => props.theme.white};
    border: ${props => props.theme.white} solid 3px;
    border-radius: 100px;
    height: 22px;
    overflow: hidden;
    width: 100%;
`
const Progress = styled.div`
    background-color: ${props => props.theme.subColor};
    border-radius: 100px;
    height: 100%;
    width: ${props => String(props.width)}%;
`
const Percent = styled.div`
    font-size: ${fontSize.s};
    color: ${props => props.theme.white};
`