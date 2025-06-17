'use client'
import styled from 'styled-components'

const CardWrapper = styled.div``

const ImageWrapper = styled.div``

const TextWrapper = styled.div``

const Card = ({
    content,
    src,
    alt = 'card image',
}: {
    content: string
    src: string
    alt: string
}) => {
    return (
        <CardWrapper>
            <ImageWrapper>
                <img src={src} alt={alt} />
            </ImageWrapper>
            <TextWrapper>{content}</TextWrapper>
        </CardWrapper>
    )
}

export default Card
