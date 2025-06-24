'use client'
import styled from 'styled-components'

const getThemeBreakpoints =
    (prop: string) =>
    ({ theme }: any) =>
        theme.breakpoints[prop]

const BottomContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-width: ${({ theme }) => theme.windowWidth}px;
    justify-content: space-between;
    @media (min-width: ${getThemeBreakpoints('desktop')}px) {
        flex-direction: row;
    }
`

const StyledImg = styled.img`
    height: 4rem;
    margin: 0.5rem;
`

const LegalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: ${getThemeBreakpoints('desktop')}px) {
        gap: 16px;
        flex-direction: row;
    }
`

const StyledLink = styled.a`
    text-decoration: none;
    display: inline-block;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: ${({ theme }) => theme.colors.secondaryText};
        transform-origin: left;
        transition: transform 0.25s ease-in-out;
    }
    &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
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
            <div>
                {year}© {companyName}. All Rights Reserved.
            </div>
        </BottomContentWrapper>
    )
}

export default BottomContent
