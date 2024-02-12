import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {S} from "./Footer_Styles"

const SocialItemsData = [
    {
        iconId: "gitHub",
        viewBox: "0 0 38 38",
        url:"https://github.com/Igor-JCI"
    },
    {
        iconId: "telegram",
        viewBox: "8 7 20 20",
        url:"https://t.me/JCIAB"
    },
    {
        iconId: "whatsapp",
        viewBox: "0 0 30 30",
        url:"https://api.whatsapp.com/send/?phone=%2B79773438272&text&type=phone_number&app_absent=0"
    },
    {
        iconId: "in",
        viewBox: "8 7 19 22",
        url:"https://www.linkedin.com/in/jciab/"
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
                                <S.SocialLink href={s.url}>
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


