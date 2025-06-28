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
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        width: 100%;
        height: auto;
    }
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

const TextWrapper = styled.div`
    grid-row: 2;
    color: rgb(${getThemeColors('text')});
    padding: 8px 0;
    h1 {
        font-size: 2.5rem;
    }
    h2 {
        color: gray;
    }
`

const Card = ({
    height = 500,
    width = 500,
    text,
    subText,
    link,
    imgSrc,
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
                <a href={link}>
                    <StyledImg $height={height} src={imgSrc} alt={alt} />
                </a>
            </ImgWrapper>
            <TextWrapper>
                <h1>
                    <a
                        href={link}
                        style={link ? { cursor: 'pointer' } : undefined}
                    >
                        {text}
                    </a>
                </h1>
                {subText && <h2>{subText}</h2>}
            </TextWrapper>
        </CardWrapper>
    )
}

export default Card
