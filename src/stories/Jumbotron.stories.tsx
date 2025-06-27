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
    },
}
