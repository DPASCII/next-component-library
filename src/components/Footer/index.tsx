'use client'
import styled from 'styled-components'
import ContentList from './components/ContentList'
import LogoSocials from './components/LogoSocials'

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

const ContentWrapper = styled.div<{ $index: string; $number: number }>`
    display: grid;
    grid-template-rows: repeat(auto-fit, ${({ $number }) => $number});
    grid-gap: 16px;
    justify-items: center;
    max-width: ${getThemeWidth('windowWidth')};
    background-color: ${getThemeColors('secondary')};
    color: ${getThemeColors('secondaryText')};
    padding: 1rem;
`

const Footer = ({
    contents,
    logo,
}: {
    contents: {
        title: string
        subtitle: string
        itemlist: { item: string; subitem: string }[]
    }[]
    logo: string
}) => {
    return (
        <FooterWrapper>
            <ContentWrapper $index="top" $number={contents.length}>
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
            <ContentWrapper $index="bottom" $number={1}>
                ay malaki
            </ContentWrapper>
        </FooterWrapper>
    )
}

export default Footer
