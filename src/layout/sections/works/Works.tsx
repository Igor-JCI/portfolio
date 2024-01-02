import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./Work/Work";
import socialImg from "../../../assets/images/projects/social network.png"
import timerImg from "../../../assets/images/projects/Timer.png"


const worksItems = ["ALL", "LANDING PAGE", "REACT", "SPA",]

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work title={"Social Network"} text={"ksslslslls"} src={socialImg}/>
                <Work title={"Timer"} text={"qqqqq"} src={timerImg}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: rgba(50, 55, 38, 0.46);
`