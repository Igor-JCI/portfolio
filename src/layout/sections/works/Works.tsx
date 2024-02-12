import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from "../../../assets/images/projects/social network.png"
import timerImg from "../../../assets/images/projects/Timer.png"
import {Container} from "../../../components/Container";
import {S} from "./Works_Styles"
import {AnimatePresence, motion} from "framer-motion"


const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
    {
        title: "ALL",
        status: "all"
    },
    {
        title: "ToDoList",
        status: "ToDoList"
    },
    {
        title: "Social Media",
        status: "SocialNetwork"
    },
    /*{
        title: "SPA",
        status: "spa"
    }*/
]
const worksData = [
    {
        title: "ToDoList",
        text: "Following values to test the application:\n" +
            "\n" +
            "EMAIL: 7.jciab.7@gmail.com\n" +
            "\n" +
            "PASSWORD: 111",
        src: timerImg,
        type: "ToDoList",
        id: 1,
        gitCode: "https://github.com/Igor-JCI/todolist",
        demoUrl: "https://igor-jci.github.io/todolist/"
    },
    {
        title: "Social Network",
        text: "Following values to test the application:\n" +
            "\n" +
            "EMAIL: 7.jciab.7@gmail.com\n" +
            "\n" +
            "PASSWORD: 111",
        src: socialImg,
        type: "SocialNetwork",
        id: 2,
        gitCode: "https://github.com/Igor-JCI/social-network",
        demoUrl: "https://igor-jci.github.io/social-network/"
    },
    /*{
        title: "Social Media",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        src: socialImg,
        type: "SocialNetwork",
        id: 3
    },
    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        src: timerImg,
        type: "react",
        id: 4
    },
    {
        title: "Social Network",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        src: socialImg,
        type: "spa",
        id: 5
    },
    {
        title: "Timer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        src: timerImg,
        type: "react",
        id: 6
    },*/
]


export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabsStatusType>("all")
    let filteredWorks = worksData

    if (currentFilterStatus === "ToDoList") {
        filteredWorks = worksData.filter(work => work.type === "ToDoList")
    }
    if (currentFilterStatus === "SocialNetwork") {
        filteredWorks = worksData.filter(work => work.type === "SocialNetwork")
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
                    <AnimatePresence>
                        {
                            filteredWorks.map((w, index) => {
                                return (
                                    <motion.div style={{
                                        width: "400px",
                                        flexGrow: 1,
                                        maxWidth: "540px"
                                    }}
                                                layout={true}
                                                initial={{opacity: 0}}
                                                animate={{opacity: 1}}
                                                exit={{opacity: 0}}
                                                key={w.id}
                                    >
                                        <Work key={w.id} demoUrl={w.demoUrl} gitCode={w.gitCode} title={w.title}
                                              text={w.text} src={w.src}/>
                                    </motion.div>
                                )
                            })
                        }
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};

