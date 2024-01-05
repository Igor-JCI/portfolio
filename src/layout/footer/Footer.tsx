import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles"

const SocialItemsData = [
    {iconId: "instagram"},
    {iconId: "telegram"},
    {iconId: "vk"},
    {iconId: "in"}
]


export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <S.Name>Igor</S.Name>
                <S.SocialList>
                    {
                        SocialItemsData.map((s, index) => {
                            return <S.SocialItem key={index}>
                                <S.SocialLink>
                                    <Icon height={"21px"} width={"21px"} viewBox={"0 0 21 21"} iconId={s.iconId}/>
                                </S.SocialLink>
                            </S.SocialItem>
                        })
                    }
                </S.SocialList>
                <S.Copyright>© 2024 Igor Anisimov, All Rights Reserved.</S.Copyright>
            </FlexWrapper>
        </S.Footer>
    );
};


