import styled from 'styled-components';
import Header from '../parts/Header';
import ToolBar from '../parts/ToolBar';
import TabBar from '../parts/Tabbar';
import {IoAddCircleSharp} from 'react-icons/io5';
import { useState } from "react";
/*
1にんじんを水洗いする
2にんじんの皮を包丁でむく
3にんじんに五角形のしるしをつける
4にんじんを五角形に切る
5にんじんに星型のしるしをつける
6にんじんを星型に切る
7にんじんを好みの厚さに切る */

const answer = [
    ['?にんじん','を','?水洗いする'],
    ['?にんじん','の','?かわ','を','?包丁','で','?むく'],
    ['?にんじん','に','?五角形','の','?しるし','を','?つける'],
    ['?にんじん','を','?五角形','に','?切る'],
    ['?にんじん','に','?星形','の','?しるし','を','?つける'],
    ['?にんじん','を','?星形','に','?切る'],
    ['?にんじん','を','?好きな厚み','に','?切る']
];
const data = [
    ['?','を','?'],
    ['?','の','?','を','?','で','?'],
    ['?','に','?','の','?','を','?'],
    ['?','を','?','に','?'],
    ['?','に','?','の','?','を','?'],
    ['?','を','?','に','?'],
    ['?','を','?','に','?']
];
const regWord = new RegExp("\\?");
function Play() {
    let [instraction, setInstraction] = useState([]);
    let [instractionData, setInstractionData] = useState(data);
    let [isTab, setIsTab] = useState(false);
    let [isToolOpen, setIsToolOpen] = useState(true);
    let [coordinate, setCoordinate] = useState([]);
    let [isListed, setIsListed] = useState(false);
    let [index, setIndex] = useState(0);
    return (
        <Page>
            <Header link="/" title="にんじんを星に切ろう"/>
            <InstractionBox className={isListed ? "hidden" : ""}>
                {instraction.map((row,index)=>(
                    <Instraction key={index}>
                        <Number>{index + 1}</Number>
                        <Text>
                            {row.map((val,key)=>
                                regWord.test(val) ? <Box className={val.length === 1 ? "" : "filled"}
                                onClick={(e)=>{
                                    setIsToolOpen(false);
                                    setIsTab(true);
                                    e.target.classList.add("focus");
                                    setCoordinate([index,key]);
                                    //console.log(instraction)
                                }}>{val.substr(1)}</Box>
                                :<p>{val}</p>
                            )}
                        </Text>
                    </Instraction>
                ))}
                <Finish onClick={setIsListed.bind(null,true)}>完成！</Finish>
            </InstractionBox>
            <TodoArea className={isListed ? "" : "hidden"}>
                <TodoNum>手順{index + 1}</TodoNum>
                <TodoContent>{instraction.length >= 1 ? instraction[index].map((val)=>regWord.test(val) ? val.substr(1) : val) : ""}</TodoContent>
                <TodoButtons>
                    <button className={index <= 0 ? "un" : "hidden"}>戻る</button>
                    <button className={index > 0 ? "" : "hidden"} onClick={setIndex.bind(null,index-1)}>戻る</button>
                    <button className={index >= instraction.length-1 ? "un" : "hidden"}>次へ</button>
                    <button className={index < instraction.length-1 ? "" : "hidden"} onClick={setIndex.bind(null,index+1)}>次へ</button>
                </TodoButtons>
            </TodoArea>
            <Finish className={isListed ? "" : "hidden"} onClick={()=>{
                JSON.stringify(instraction) ===  JSON.stringify(answer) ? window.location.href = "success" : window.location.href = "fail"
            }
            }>結果へ</Finish>
            {
            isTab ? <TabBar close={setIsTab} setter={{"coordinate":coordinate, "instraction":instraction, "setInstraction": setInstraction}}/> :
                <ToolBar isOpen={isToolOpen} setIsOpen={setIsToolOpen}
                    content={isListed ?
                        <List>
                            {instraction.map((row,index)=>(
                                <Row>
                                    <RowNum>{index + 1}</RowNum>
                                    <RowText>
                                        {row.map((val)=>
                                            regWord.test(val) ? val.substr(1) : val
                                        )}
                                    </RowText>
                                </Row>
                            ))}
                        </List> :
                    <DummyInstractionBox>
                        {instractionData.map((row,index)=>(
                            <DummyInstraction key={index}>
                                <Text>
                                    {row.map((val)=>
                                        regWord.test(val) ? <Word/> :<p>{val}</p>
                                    )}
                                </Text>
                                <IoAddCircleSharpIcon onClick={()=>{
                                    setInstraction([...instraction,instractionData[index]]);
                                    setInstractionData(instractionData.filter((val,key) => (key !== index)))
                                }}/>
                            </DummyInstraction>
                        ))}
                    </DummyInstractionBox>
                }/>
            }
        </Page>
    );
}
export default Play;

const Page = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.mainColor};
    position: relative;
    background: linear-gradient(-45deg,${props => props.theme.mainColor} 25%, ${props => props.theme.mainColor_light} 25%,${props => props.theme.mainColor_light} 50%, ${props => props.theme.mainColor} 50%,${props => props.theme.mainColor} 75%, ${props => props.theme.mainColor_light} 75%,${props => props.theme.mainColor_light});
    background-size: 30px 30px;
    animation: anime_stripe_1 2s infinite linear;
    background-attachment: fixed;
    @keyframes anime_stripe_1 {
        0% {  background-position-x: 0;}
        100% {  background-position-x: -30px;}
    }
    min-height: 100vh;
`
const InstractionBox = styled.div`
    width: 100%;
    padding-top: 60px;
    padding-bottom: 250px;
    max-height: calc(100% - 65px);
    overflow-y: auto;
    &.hidden{
        display: none;
    }
`
const Instraction = styled.div`
    width: 90%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 10px auto 10px auto;
    background-color: white;
    border: 2px solid #2C96A3;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Number = styled.div`
    width: 1rem;
    padding-left: 1rem;
    padding-right: 2rem;
    text-align: center;
    color: #2C96A3;
`
const Box = styled.div`
    min-width: 80px;
    width: auto;
    padding-left: 20px;
    padding-right: 20px;
    height: 30px;
    border: black 2px solid;
    border-radius: 5px;
    background-color: #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;`

const DummyInstractionBox = styled.ul`
    width: 90%;
    height: calc(100% - 65px);
    margin: 0 auto;
    padding-bottom: 20px;
    overflow-y: auto;
`
const DummyInstraction = styled.li`
    width: 100%;
    height: auto;
    min-height: 55px;
    padding-left: 12%;
    padding-right: 3%;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: white;
    border: black solid 2px;
    border-radius: 500px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`
const Text = styled.div`
    width: calc(100% - 40px);
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    p{
        padding-left: 5px;
        padding-right: 5px;
        margin: 5px 0;
        font-size: 14px;
    }
    .filled{
        background-color: black;
        color: white;
    }
    .focus{
        transition: background-color 0.2s;
        background-color: ${props => props.theme.mainColor_light};
    }
`
const Word = styled.div`
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 80px;
    height: 30px;
    border: rgb(35, 35, 35) solid 2px;
    border-radius: 4px;
    background-color: rgb(233, 233, 233);
`
const IoAddCircleSharpIcon = styled(IoAddCircleSharp)`
    font-size: 2.5rem;
`
const Finish = styled.div`
    position: fixed;
    bottom: 75px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    border: 2px solid #000;
    text-align: center;
    background-color: ${props => props.theme.subColor};
    padding: 8px 24px;
    border-radius: 8px;
    box-shadow: 2px 2px 4px #00000066;
`
const TodoArea = styled.div`
    width: 90%;
    height: 50%;
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%,-50%);
    margin: 10px auto 20px auto;
    border: 3px solid white;
    border-radius: 5px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(2px);
    &.hidden{
        display: none;
    }
`
const TodoNum = styled.div`
    width: 101%;
    height: 11%;
    background-color: white;
    border: 3px solid white;
    color: #2C96A3;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
`
const TodoContent = styled.div`
    font-size: 1.1rem;
    width: 80%;
    height: 73%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-shadow:
           2px 2px 0px ${props => props.theme.mainColor_dark}, -2px -2px 0px ${props => props.theme.mainColor_dark},
          -2px 2px 0px ${props => props.theme.mainColor_dark},  2px -2px 0px ${props => props.theme.mainColor_dark},
           2px 0px 0px ${props => props.theme.mainColor_dark}, -2px  0px 0px ${props => props.theme.mainColor_dark},
           0px 2px 0px ${props => props.theme.mainColor_dark},  0px -2px 0px ${props => props.theme.mainColor_dark};
`
const TodoButtons = styled.div`
    width: 100%;
    height: 12%;
    margin-top: 2%;
    margin-bottom: 2%;
    display: flex;
    justify-content: center;
    button{
        text-align: center;
        background-color: white;
        border: 2px solid #2C96A3;;
        border-radius: 5px;
        color: #2C96A3;
    }
    button:nth-of-type(1),button:nth-of-type(2){
        width: 30%;
        margin-left: 1.25%;
        margin-right: 1.25%;
    }
    button:nth-of-type(3),button:nth-of-type(4){
        width: 60%;
        margin-left: 1.25%;
        margin-right: 1.25%;
    }
    .un{
        background-color: #e2e2e2;
        color: #000;
    }
    .hidden{
        display: none;
    }
`
const List = styled.ul`
    width: 100%;
    height: calc(100% - 65px);
    overflow-y: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    box-sizing: border-box;
`
const Row = styled.li`
    width: 90%;
    margin: 0 auto;
    padding-top: 3px;
    padding-bottom: 3px;
    display: flex;
    align-items: center;
    border-bottom: 3px dotted black;
`
const RowNum = styled.div`
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    border-radius: 50%;
    margin-right: 15px;
`
const RowText = styled.p`
    width: calc(100% - 50px);
    color: #fff;
    text-shadow:
           2px 2px 0px #000, -2px -2px 0px #000,
          -2px 2px 0px #000,  2px -2px 0px #000,
           2px 0px 0px #000, -2px  0px 0px #000,
           0px 2px 0px #000,  0px -2px 0px #000;
`