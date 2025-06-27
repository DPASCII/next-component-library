'use client'
import styled from 'styled-components'
import Button from '../Button'
import TitleBlock from './components/titleblock'
import { useEffect, useState } from 'react'

const getThemeColors =
    (prop: string) =>
    ({ theme }: any) =>
        theme.colors[prop]

const JumbotronWrapper = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    height: 80vh;
    background-color: rgb(${getThemeColors('primary')});
    overflow: hidden;
`

const BackgroundImage = styled.div<{ $image: string; $visible: boolean }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ $image }) => $image});
    background-size: cover;
    background-position: center;
    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: scale(${({ $visible }) => ($visible ? 1.1 : 1)});
    transition: opacity 1s ease-in-out, transform 5s ease-in-out;
    z-index: 0;
`

const ContentWrapper = styled.div`
    z-index: 1;
    text-align: center;
`

const Jumbotron = ({
    images,
    title,
    subtitle,
    children,
}: {
    images: string[]
    title: string
    subtitle: string
    children: React.ReactNode
}) => {
    const [index, setIndex] = useState(0)

    // Preload all images once
    useEffect(() => {
        images.forEach((src) => {
            const img = new Image()
            img.src = src
        })
    }, [images])

    // Image switch timer
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [images.length])

    return (
        <JumbotronWrapper>
            {images.map((img, i) => (
                <BackgroundImage key={i} $image={img} $visible={i === index} />
            ))}

            <ContentWrapper>
                <TitleBlock title={title} subtitle={subtitle}>
                    <Button label="This is Button" />
                    <Button label="This is Button" />
                    {children}
                </TitleBlock>
            </ContentWrapper>
        </JumbotronWrapper>
    )
}

export default Jumbotron
