'use client'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    justify-content: center;
    width: fit-content;
`

const ListWrapper = styled.ul`
    display: grid;
    grid-gap: 0.5rem;
`

const Item = styled.li`
    font-weight: 600;
    list-style-type: none;
`

const List = ({
    contents: { title, subtitle, itemlist },
}: {
    contents: {
        title?: string
        subtitle?: string
        itemlist: { item: string; subitem?: string }[]
    }
}) => {
    return (
        <Wrapper>
            {title && <h1>{title}</h1>}
            {subtitle && <h2>{subtitle}</h2>}
            {itemlist.map((listitem, index) => (
                <ListWrapper key={index}>
                    <Item>{listitem.item}</Item>
                    {listitem.subitem && <p>{listitem.subitem}</p>}
                </ListWrapper>
            ))}
        </Wrapper>
    )
}

export default List
