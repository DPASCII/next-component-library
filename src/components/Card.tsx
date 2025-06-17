'use client'
import styled from 'styled-components'

const getThemeColors =
    (prop: string) =>
    ({ theme }: any) =>
        theme.colors[prop]

const CardWrapper = styled.div<{ $height: number; $width: number }>`
    position: absolute;
    display: grid;
    grid-template-rows: 1fr 0.3fr;
    grid-template-columns: 1fr;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    border: 1px solid black;
`

const StyledImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: top;
    transition: all linear 0.3s;
    transform: translateY(3%);
    &:hover {
        transform: translateY(0%);
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
        <CardWrapper $height={height} $width={width}>
            <StyledImage src={src} alt={alt} />

            <TextWrapper>{content}</TextWrapper>
        </CardWrapper>
    )
}

export default Card
