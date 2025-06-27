'use client'
import styled from 'styled-components'

const getThemeColors =
    (props: string) =>
    ({ theme }: any) =>
        theme.colors[props]

const JumbotronWrapper = styled.div`
    display: grid;
    height: 80vh;
    background-color: black;
`

const TitleWrapper = styled.div`
    justify-self: center;
    align-self: center;
    background-color: rgba(${getThemeColors('secondary')}, 0.7);
    border-radius: 32px;
    height: 80%;
    width: 80%;
    max-width: ${({ theme }) => theme.windowWidth}px;
    margin: 3rem;
`
const Title = styled.h1``

const Subtitle = styled.h2``

const Jumbotron = ({
    title,
    subtitle,
}: {
    title: string
    subtitle: string
}) => {
    return (
        <JumbotronWrapper>
            <TitleWrapper>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </TitleWrapper>
        </JumbotronWrapper>
    )
}

export default Jumbotron
