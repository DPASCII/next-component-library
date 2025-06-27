'use client'
import styled from 'styled-components'

const getThemeBreakpoints =
    (prop: string) =>
    ({ theme }: any) =>
        theme.breakpoints[prop]

const BottomContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    align-items: center;
    text-align: center;
    @media (min-width: ${getThemeBreakpoints('desktop')}px) {
        grid-template-columns: 1fr 0.5fr 1fr;
        row-gap: 0;
    }
`

const StyledImg = styled.img`
    justify-self: center;
    height: 4rem;
    margin: 0.5rem;
`

const LegalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${getThemeBreakpoints('desktop')}px) {
        gap: 16px;
        flex-direction: row;
    }
`

const StyledLink = styled.a`
    display: inline-block;
    width: fit-content;
    position: relative;
    padding-bottom: 2px;
    color: rgb(${({ theme }) => theme.colors.secondaryText});
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: rgb(${({ theme }) => theme.colors.secondaryText});
        transform-origin: left;
        transition: transform 0.25s ease-in-out;
    }
    &:hover::after {
        transform: scaleX(1);
    }
`

const YearText = styled.div`
    @media (min-width: ${getThemeBreakpoints('desktop')}px) {
        grid-column: 3;
    }
`
const BottomContent = ({
    smallLogo,
    companyName,
}: {
    smallLogo?: string
    companyName: string
}) => {
    const year = new Date().getFullYear()
    return (
        <BottomContentWrapper>
            <LegalWrapper>
                <StyledLink href="/privacy">Privacy</StyledLink>
                <StyledLink href="/terms">Terms and Conditions</StyledLink>
            </LegalWrapper>
            {smallLogo && <StyledImg src={smallLogo} alt="logo" />}
            <YearText>
                {year}© {companyName}. All Rights Reserved.
            </YearText>
        </BottomContentWrapper>
    )
}

export default BottomContent
