'use client'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    justify-content: center;
    width: fit-content;
    text-align: center;
    h1 {
        margin: 0;
    }
    h2 {
        margin: 0;
    }
`

const ListWrapper = styled.ul`
    display: grid;
    grid-gap: 8px;
    margin: 0;
    padding: 0;
`

const Item = styled.li`
    font-weight: 600;
    list-style-type: none;
`
const Subitem = styled.p`
    margin: 0;
`

const List = ({
    title,
    subtitle,
    itemlist,
}: {
    title?: string
    subtitle?: string
    itemlist: { item: string; subitem?: string }[]
}) => {
    return (
        <Wrapper>
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
            {itemlist.map((listitem, index) => (
                <ListWrapper key={index}>
                    <Item>{listitem.item}</Item>
                    {listitem.subitem && <Subitem>{listitem.subitem}</Subitem>}
                </ListWrapper>
            ))}
        </Wrapper>
    )
}

export default List
