import styled from 'styled-components';
import { useState } from "react";

function TabBar(props) {
    let [tabIndex, setTabIndex] = useState(0);
    return (
        <Toolbar>
            <Close onClick={()=>{
                props.close(false);
                document.querySelector(".focus").classList.remove("focus");
                console.log(tabIndex);
            }}/>
            <TabList>
                <Tab className={tabIndex === 0 ? "" : "unselected"} onClick={setTabIndex.bind(null,0)}>もの</Tab>
                <Tab className={tabIndex === 1 ? "" : "unselected"} onClick={setTabIndex.bind(null,1)}>うごき</Tab>
                <Tab className={tabIndex === 2 ? "" : "unselected"} onClick={setTabIndex.bind(null,2)}>その他</Tab>
            </TabList>
            <Content>
                <Box className={tabIndex === 0 ? "" : "unselected"}>
                    <Word word="にんじん" setter={props.setter}></Word>
                    <Word word="かわ" setter={props.setter}></Word>
                    <Word word="包丁" setter={props.setter}></Word>
                </Box>
                <Box className={tabIndex === 1 ? "" : "unselected"}>
                    <Word word="水洗いする" setter={props.setter}></Word>
                    <Word word="むく" setter={props.setter}></Word>
                    <Word word="つける" setter={props.setter}></Word>
                    <Word word="切る" setter={props.setter}></Word>
                </Box>
                <Box className={tabIndex === 2 ? "" : "unselected"}>
                    <Word word="五角形" setter={props.setter}></Word>
                    <Word word="星形" setter={props.setter}></Word>
                    <Word word="しるし" setter={props.setter}></Word>
                    <Word word="好きな厚み" setter={props.setter}></Word>
                </Box>
            </Content>
        </Toolbar>
    );
}
function Word(props){
    return(
        <Wordn onClick={()=>{
            props.setter.setInstraction(
                props.setter.instraction.map((val,row)=>{
                        return(
                        row === props.setter.coordinate[0] ? val.map((word,col)=>{
                            return(col === props.setter.coordinate[1] ? "?" + props.word : word)

                        }) : val
                        )
                    }
                )
            )
        }}>{props.word}</Wordn>
    )
}
export default TabBar;
const Toolbar = styled.div`
    width: 100%;
    height: 40vh;
    position: fixed;
    bottom: 0px;
    transition: height 0.3s;
`
const TabList = styled.ul`
    width: 100%;
    height: 50px;
    color: white;
    display: flex;
    margin-bottom: -1px;
`
const Tab = styled.li`
    width: calc(100% / 3);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px white solid;
    border-right: 3px white solid;
    border-left: 3px white solid;
    border-radius: 10px 10px 0px 0px;
    background: linear-gradient(-45deg,#FFB901 25%, #FCCC48 25%,#FCCC48 50%, #FFB901 50%,#FFB901 75%, #FCCC48 75%,#FCCC48);
    animation: anime_stripe_1 2s infinite linear;
    background-size: 30px 30px;
    background-attachment: fixed;
    &.unselected{
        border-bottom: 3px solid white;
        background: linear-gradient(-45deg,#996E00 25%, #ac8b31 25%,#ac8b31 50%, #996E00 50%,#996E00 75%, #ac8b31 75%,#ac8b31);
        animation: anime_stripe_1 2s infinite linear;
        background-size: 30px 30px;
        background-attachment: fixed;
    }
`
const Content = styled.div`
    width: 100%;
    border-left: 3px solid white;
    border-right: 3px solid white;
    height: calc(100% - 50px);
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 20px;
    padding-bottom: 10px;
    box-sizing: border-box;
    background: linear-gradient(-45deg,#FFB901 25%, #FCCC48 25%,#FCCC48 50%, #FFB901 50%,#FFB901 75%, #FCCC48 75%,#FCCC48);
    animation: anime_stripe_1 2s infinite linear;
    background-size: 30px 30px;
    background-attachment: fixed;
`
const Box = styled.div`
    width: 95%;
    margin: 0 auto;
    max-height: 100%;
    overflow-y: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &.unselected{
        display: none;
    }
`
const Wordn = styled.div`
    width: 48%;
    margin-bottom: 15px;
    height: 45px;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    border: 2px solid black;
    border-radius: 5px;
`
const Close = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: -1;
`