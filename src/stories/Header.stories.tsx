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
            { item: 'MenuItem1', link: '/' },
            {
                item: 'MenuItem2',
                link: '/link2',
                subPages: [{ subItem: 'subMenuItem1', subLink: '/subLink1' }],
            },
            { item: 'MenuItem3', link: '/' },
            { item: 'MenuItem4', link: '/' },
            { item: 'MenuItem5', link: '/' },
        ],
    },
}
