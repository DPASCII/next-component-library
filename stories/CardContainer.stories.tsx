import Card from '../components/Card'
import CardContainer from '../components/CardContainer'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: CardContainer,
    subcomponents: { Card },
} satisfies Meta<typeof CardContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'Card Content',
        columns: 1,
    },
    render: (args) => (
        <CardContainer {...args}>
            <Card
                height={500}
                width={500}
                text="Card 1"
                imgSrc="https://www.shutterstock.com/image-vector/no-photo-thumbnail-graphic-element-600nw-2311073121.jpg"
                alt="Card 1"
            />
            <Card
                height={500}
                width={500}
                text="Card 2"
                imgSrc="https://www.shutterstock.com/image-vector/no-photo-thumbnail-graphic-element-600nw-2311073121.jpg"
                alt="Card 2"
            />
            <Card
                height={500}
                width={500}
                text="Card 3"
                imgSrc="https://www.shutterstock.com/image-vector/no-photo-thumbnail-graphic-element-600nw-2311073121.jpg"
                alt="Card 3"
            />
            <Card
                height={500}
                width={500}
                text="Card 4"
                imgSrc="https://www.shutterstock.com/image-vector/no-photo-thumbnail-graphic-element-600nw-2311073121.jpg"
                alt="Card 4"
            />
        </CardContainer>
    ),
}
