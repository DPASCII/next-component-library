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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    justify-self: center;
    align-self: center;
    text-align: center;
    background-color: rgba(${getThemeColors('secondary')}, 0.7);
    color: rgb(${getThemeColors('secondaryText')});
    border-radius: 32px;
    height: 70%;
    width: calc(100% - 3rem);
    max-width: ${({ theme }) => theme.windowWidth}px;
    margin: 3rem;
    padding: 0 0.5rem;
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
