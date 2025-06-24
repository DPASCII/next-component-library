'use client'
import styled from 'styled-components'
import BottomContent from './components/BottomContent'
import ContentList from './components/ContentList'
import SocialsComponent from './components/SocialsComponent'

const getThemeColors =
    (prop: string) =>
    ({ theme }: any) =>
        theme.colors[prop]

const getThemeWidth =
    (prop: string) =>
    ({ theme }: any) =>
        theme[prop]

const getThemeBreakpoints =
    (prop: string) =>
    ({ theme }: any) =>
        theme.breakpoints[prop]

const FooterWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(2, auto);
    background-color: ${getThemeColors('secondary')};
    justify-content: center;
`

const ContentWrapper = styled.div`
    display: grid;
    grid-gap: 16px;
    justify-items: center;
    max-width: ${getThemeWidth('windowWidth')}px;
    background-color: ${getThemeColors('secondary')};
    color: ${getThemeColors('secondaryText')};
    padding: 1rem;
    grid-template-columns: 1fr;
    @media (min-width: ${getThemeBreakpoints('desktop')}px) {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
`

export const FooterLayout = ({
    children,
    bottomContent,
}: {
    children: React.ReactNode
    bottomContent: React.ReactNode
}) => {
    return (
        <FooterWrapper>
            <ContentWrapper>{children}</ContentWrapper>
            <ContentWrapper>{bottomContent}</ContentWrapper>
        </FooterWrapper>
    )
}

export const Footer = ({
    socialsComponent = (
        <SocialsComponent
            socialsurl={['www.facebook.com', 'www.x.com', 'www.instagram.com']}
        />
    ),
    children,
    contents,
    smallLogo,
    companyName = 'made by David Pascual',
}: {
    logo: string
    socialsurl: string[]
    socialsComponent?: React.ReactNode
    children: React.ReactNode
    contents: {
        title: string
        subtitle: string
        itemlist: { item: string; subitem: string }[]
    }[]
    smallLogo: string
    companyName: string
}) => {
    return (
        <FooterLayout
            bottomContent={
                <BottomContent
                    smallLogo={smallLogo}
                    companyName={companyName}
                />
            }
        >
            {socialsComponent}
            {contents &&
                contents.map((contents, index) => (
                    <ContentList key={index} contents={contents} />
                ))}
            {children}
        </FooterLayout>
    )
}

export default Footer
