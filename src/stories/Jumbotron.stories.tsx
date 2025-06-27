import Jumbotron from '../components/Jumbotron'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: Jumbotron,
} satisfies Meta<typeof Jumbotron>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        height: 500,
        width: 500,
        imgSrc: '',
        text: 'primary',
    },
}
