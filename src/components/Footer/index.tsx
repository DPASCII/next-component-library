'use client'
import styled from 'styled-components'
import BottomContent from './components/BottomContent'
import ContentList from './components/ContentList'

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
    grid-template-rows: repeat(2, auto);
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
    SocialsComponent,
    children,
    contents,
    smallLogo,
    companyName,
}: {
    SocialsComponent?: React.ReactNode
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
        <FooterWrapper>
            <ContentWrapper>
                {SocialsComponent}
                {contents &&
                    contents.map((contents, index) => (
                        <ContentList
                            key={index}
                            title={contents.title}
                            subtitle={contents.subtitle}
                            itemlist={contents.itemlist}
                        />
                    ))}
                {children}
            </ContentWrapper>
            <ContentWrapper>
                <BottomContent
                    smallLogo={smallLogo}
                    companyName={companyName}
                />
            </ContentWrapper>
        </FooterWrapper>
    )
}

export default Footer
