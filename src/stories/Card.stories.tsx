import Card from '../components/Card'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: Card,
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        height: 500,
        width: 500,
        imgSrc: 'https://www.shutterstock.com/image-vector/no-photo-thumbnail-graphic-element-600nw-2311073121.jpg',
        text: 'primary',
    },
}
