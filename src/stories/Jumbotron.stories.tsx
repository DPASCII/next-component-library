import Jumbotron from '../components/Jumbotron'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: Jumbotron,
} satisfies Meta<typeof Jumbotron>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        title: 'This is the Title',
        subtitle: 'This is the Subtitle',
        images: [
            'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=',
            'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=',
        ],
    },
}
