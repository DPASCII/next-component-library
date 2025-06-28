import Button from '../components/Button'
import type { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
    component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        label: 'primary',
    },
}
