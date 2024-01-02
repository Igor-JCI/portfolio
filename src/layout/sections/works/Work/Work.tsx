import React from 'react';
import styled from "styled-components";

type WorksPropsType = {
    title: string,
    text: string,
    src: string
}

export const Work = (props: WorksPropsType) => {
    return (
        <StyledWork>
            <Image src={props.src}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Link href={"#"}>demo</Link>
            <Link href={"#"}>code</Link>
        </StyledWork>
    );
};

const StyledWork = styled.div`
  background-color: wheat;
  max-width: 500px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`
const Title = styled.h3`

`
const Text = styled.p`

`
const Link = styled.a`

`