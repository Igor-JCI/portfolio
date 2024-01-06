import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {Skill} from "./skill/Skill";
import {S} from "./Skills_Styles"
import {Fade} from "react-awesome-reveal";

const skillData = [
    {
        iconId: "code",
        title: "HTML5",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        viewBox: '0 0 50 50'
    },
    {
        iconId: "css",
        title: "CSS3",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        viewBox: '0 0 43 40'
    },
    {
        iconId: "react",
        title: "React",
        description: "I can  develop general purpose applications with React",
        viewBox: '0 0 45 41'
    },
    {
        iconId: "typesScript",
        title: "TypesScript",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        viewBox: '0 0 41 43'
    },
    {
        iconId: "redux",
        title: "Redux/Redux Toolkit",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim",
        viewBox: '0 0 110 110'
    },
    {
        iconId: "git",
        title: "VERSION CONTROL",
        description: "I can use version control systems well, and Git are my go-to tool.",
        viewBox: '0 0 110 110'
    },
]

export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true} damping={0.1}>
                        {
                            skillData.map((s, index) => {
                                return <Skill key={index} iconId={s.iconId} title={s.title} viewBox={s.viewBox}
                                              description={s.description}/>
                            })
                        }
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

