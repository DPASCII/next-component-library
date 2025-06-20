'use client'
import styled from 'styled-components'

const getThemeColors =
    (prop: string) =>
    ({ theme }: any) =>
        theme.colors[prop]

const CardWrapper = styled.div<{
    $height: number
    $width: number
}>`
    display: grid;
    grid-template-rows: 1fr 0.3fr;
    height: ${({ $height }) => $height}px;
    width: ${({ $width }) => $width}px;
    overflow: hidden;
`

const ImgWrapper = styled.div`
    grid-row: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const StyledImg = styled.img<{ $height: number }>`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all linear 0.5s;
    &:hover {
        opacity: 70%;
        transform: scale(98%);
    }
`

const StyledLink = styled.a`
    text-decoration: none;
`

const TextWrapper = styled.div`
    grid-row: 2;
    color: ${getThemeColors('text')};
    padding: 8px 0;
    h1 {
        margin: 0;
    }
    h2 {
        margin: 0;
        color: gray;
    }
`

const Card = ({
    height = 500,
    width = 500,
    text = 'Place Title Here',
    subText,
    link,
    imgSrc = 'https://www.shutterstock.com/image-vector/no-photo-thumbnail-graphic-element-600nw-2311073121.jpg',
    alt = 'card image',
}: {
    height: number
    width: number
    text: string
    subText?: string
    link?: string
    imgSrc: string
    alt: string
}) => {
    return (
        <CardWrapper $height={height} $width={width}>
            <ImgWrapper>
                <StyledLink href={link}>
                    <StyledImg $height={height} src={imgSrc} alt={alt} />
                </StyledLink>
            </ImgWrapper>
            <TextWrapper>
                <h1>
                    <StyledLink href={link}>{text}</StyledLink>
                </h1>
                {subText && <h2>{subText}</h2>}
            </TextWrapper>
        </CardWrapper>
    )
}

export default Card
