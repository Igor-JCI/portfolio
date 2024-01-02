import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId:string,
    title:string,
    description:string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div>
            <StyledSkill>
                <Icon iconId={props.iconId}/>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.description}</SkillText>
            </StyledSkill>
        </div>
    );
};
const StyledSkill = styled.div`
    width: 30%;
  background-color: rgba(55,2,22,0.33);
`

const SkillTitle = styled.h3`
`
const SkillText = styled.p`
`