import type { Meta, StoryObj } from '@storybook/react-vite'
import Header from '../components/Header'

const meta = {
    component: Header,
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        height: 60,
        pages: [
            { name: 'MenuItem1', link: '/' },
            {
                name: 'MenuItem2',
                link: '/link2',
                subPages: [{ subName: 'subMenuItem1', subLink: '/subLink1' }],
            },
            { name: 'MenuItem3', link: '/' },
            { name: 'MenuItem4', link: '/' },
            { name: 'MenuItem5', link: '/' },
        ],
    },
}
