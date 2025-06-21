'use client'
import styled from 'styled-components'

const CardContainerWrapper = styled.div<{ $columns: number }>`
    display: grid;
    grid-template-columns: repeat(${({ $columns }) => $columns}, max-content);
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid black;
    grid-gap: 32px;
    max-width: 1320px;
    justify-content: center;
    padding: 16px;
`

const CardContainer = ({
    columns,
    children,
    ...props
}: {
    columns: number
    children: React.ReactNode
}) => {
    return (
        <CardContainerWrapper $columns={columns} style={{ ...props }}>
            {children}
        </CardContainerWrapper>
    )
}

export default CardContainer
