'use client'
import styled from 'styled-components'

const getThemeColors =
    (prop: string) =>
    ({ theme }: any) =>
        theme.colors[prop]

const CardWrapper = styled.div<{
    $height: number
    $width: number
    $src: string
}>`
    position: absolute;
    display: grid;
    grid-template-rows: 0.3fr;
    grid-template-columns: 1fr;
    align-content: end;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    background-image: url(${({ $src }) => $src});
    background-repeat: no-repeat;
    background-size: auto 110%;
    border: 1px solid black;
    background-position: top;
    &:hover {
        background-position: px -16px;
    }
`

const TextWrapper = styled.div`
    z-index: 1;
    position: relative;
    bottom: 0;
    padding: 16px;
    background-color: ${getThemeColors('secondary')};
    color: ${getThemeColors('secondaryText')};
    overflow: hidden;
`

const Card = ({
    height = 500,
    width = 500,
    content,
    src,
    alt = 'card image',
}: {
    height: number
    width: number
    content: string
    src: string
    alt?: string
}) => {
    return (
        <CardWrapper $src={src} $height={height} $width={width}>
            <TextWrapper>{content}</TextWrapper>
        </CardWrapper>
    )
}

export default Card
