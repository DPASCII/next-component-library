'use client'
import styled from 'styled-components'
import Button from '../Button'

const getThemeColors =
    (prop: string) =>
    ({ theme }: any) =>
        theme.colors[prop]

const getThemeBreakpoints =
    (prop: string) =>
    ({ theme }: any) =>
        theme.breakpoints[prop]

const JumbotronWrapper = styled.div`
    display: grid;
    place-items: center;
    height: 80vh;
    background-color: rgb(${getThemeColors('primary')});
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    text-align: center;
    gap: 1rem;
    background-color: rgba(${getThemeColors('secondary')}, 0.7);
    color: rgb(${getThemeColors('secondaryText')});
    border-radius: 32px;
    height: 70%;
    width: calc(100% - 3rem);
    max-width: ${({ theme }) => theme.windowWidth}px;
    margin: 3rem;
    padding: 0 0.5rem;
`

const TextWrapper = styled.div``

const Title = styled.h1`
    font-size: 2.5rem;
    @media (min-width: ${getThemeBreakpoints('tablet')}px) {
        font-size: 3.5rem;
        h2 {
            font-size: 1.5rem;
        }
    }
`

const Subtitle = styled.h2``

const ChildrenWrapper = styled.div`
    display: flex;
    gap: 1rem;
`

const Jumbotron = ({
    title,
    subtitle,
    children,
}: {
    title: string
    subtitle: string
    children: React.ReactNode
}) => (
    <JumbotronWrapper>
        <TitleWrapper>
            <TextWrapper>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </TextWrapper>

            <ChildrenWrapper>
                <Button label="This is Button" />
                <Button label="This is Button" />
                {children}
            </ChildrenWrapper>
        </TitleWrapper>
    </JumbotronWrapper>
)

export default Jumbotron
