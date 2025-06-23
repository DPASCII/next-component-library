'use client'
import styled from 'styled-components'
import ContentList from './components/ContentList'
import LogoSocials from './components/LogoSocials'
import BottomContent from './components/BottomContent'

const getThemeColors =
    (prop: string) =>
    ({ theme }: any) =>
        theme.colors[prop]

const getThemeWidth =
    (prop: string) =>
    ({ theme }: any) =>
        theme[prop]

const FooterWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fit, 2);
    background-color: ${getThemeColors('secondary')};
    justify-content: center;
`

const ContentWrapper = styled.div`
    display: grid;
    grid-gap: 16px;
    justify-items: center;
    max-width: ${getThemeWidth('windowWidth')};
    background-color: ${getThemeColors('secondary')};
    color: ${getThemeColors('secondaryText')};
    padding: 1rem;
`

const Footer = ({
    children,
    logo,
}: {
    children: React.ReactNode
    contents: {
        title: string
        subtitle: string
        itemlist: { item: string; subitem: string }[]
    }[]
    logo: string
}) => {
    return (
        <FooterWrapper>
            <ContentWrapper>
                {children}
                <LogoSocials
                    logo={logo}
                    socialsurl={['www.facebook.com', 'www.x.com']}
                />
                <ContentList
                    title="This is the title"
                    subtitle="this is the subtitle"
                    itemlist={[
                        {
                            item: 'ths is one item',
                            subitem: 'this is subitem',
                        },
                        {
                            item: 'ths is one item',
                            subitem: 'this is subitem',
                        },
                        {
                            item: 'ths is one item',
                            subitem: 'this is subitem',
                        },
                    ]}
                />
                <ContentList
                    title="This is the title"
                    subtitle="this is the subtitle"
                    itemlist={[
                        {
                            item: 'ths is one item',
                            subitem: 'this is subitem',
                        },
                        {
                            item: 'ths is one item',
                            subitem: 'this is subitem',
                        },
                        {
                            item: 'ths is one item',
                            subitem: 'this is subitem',
                        },
                    ]}
                />
            </ContentWrapper>
            <ContentWrapper>
                <BottomContent
                    altLogo="https://shop.raceya.fit/wp-content/uploads/2020/11/logo-placeholder.jpg"
                    companyName="Company Name"
                />
            </ContentWrapper>
        </FooterWrapper>
    )
}

export default Footer
