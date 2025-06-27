'use client'
import styled from 'styled-components'

const getThemeColors =
    (prop: string) =>
    ({ theme }: any) =>
        theme.colors[prop]

const JumbotronWrapper = styled.div`
    display: grid;
    place-items: center;
    height: 80vh;
    background-color: black;
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    background-color: rgba(${getThemeColors('secondary')}, 0.7);
    color: rgb(${getThemeColors('secondaryText')});
    border-radius: 32px;
    height: 70%;
    width: calc(100% - 3rem);
    max-width: ${({ theme }) => theme.windowWidth}px;
    margin: 3rem;
    padding: 0 0.5rem;
    text-align: center;
`

const Title = styled.h1`
    margin: 0;
`

const Subtitle = styled.h2`
    margin: 0;
`

const Jumbotron = ({
    title,
    subtitle,
}: {
    title: string
    subtitle: string
}) => (
    <JumbotronWrapper>
        <TitleWrapper>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </TitleWrapper>
    </JumbotronWrapper>
)

export default Jumbotron
