import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/projects/social network.png"
import timerImg from "../../../assets/images/projects/Timer.png"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"


const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
    {
        title: "ALL",
        status: "all"
    },
    {
        title: "LANDING PAGE",
        status: "landing"
    },
    {
        title: "REACT",
        status: "react"
    },
    {
        title: "SPA",
        status: "spa"
    }
]
const worksData = [
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        src: socialImg,
        type: "spa"
    },
    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        src: timerImg,
        type: "react"
    },
]


export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabsStatusType>("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu
                    tabsItems={tabsItems}
                    changeFilterStatus={changeFilterStatus}
                    currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>

                    {
                        filteredWorks.map((w, index) => {
                            return <Work key={index} title={w.title} text={w.text} src={w.src}/>
                        })
                    }

                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

