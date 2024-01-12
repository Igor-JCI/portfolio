import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles"

const SocialItemsData = [
    {
        iconId: "gitHub",
        viewBox: "0 0 38 38"
    },
    {
        iconId: "telegram",
        viewBox: "8 7 20 20"
    },
    {
        iconId: "whatsapp",
        viewBox: "0 0 30 30"
    },
    {
        iconId: "in",
        viewBox: "8 7 19 22"
    }
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
                                    <Icon height={"21"} width={"21"} viewBox={s.viewBox} iconId={s.iconId}/>
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


