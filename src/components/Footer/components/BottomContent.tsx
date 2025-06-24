'use client'
import styled from 'styled-components'

const BottomContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const StyledImg = styled.img`
    height: 4rem;
    margin: 0.5rem;
`

const CopyrightWrapper = styled.div``

const LegalWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledLink = styled.a`
    text-decoration: none;
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
            <CopyrightWrapper>
                {year}© {companyName}. All Rights Reserved.
            </CopyrightWrapper>
        </BottomContentWrapper>
    )
}

export default BottomContent
