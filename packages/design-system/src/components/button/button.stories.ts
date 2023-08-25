const Template = (args) =>
  `<gradient-button
    label=${args.label}
    size=${args.size}
    fromColor=${args.fromColor}
    toColor=${args.toColor}
    theme=${args.theme}>
  </gradient-button>`

const meta = {
  title: 'Components/Button',
  component: 'gradient-button',
  tags: ['autodocs'],
  args: {
    label: 'Label',
    size: 'md',
    fromColor: '#ff4d4d',
    toColor: '#f9cb28',
    theme: 'light'
  },
  argTypes: {
    label: {
      description: 'The button label',
      control: 'text'
    },
    size: {
      description: 'The size of button',
      category: `'sm' | 'md' | 'lg'`,
      options: ['sm', 'md', 'lg'],
      control: { type: 'select' }
    },
    fromColor: {
      description: 'The color to start gradient',
      control: {
        type: 'color'
      }
    },
    toColor: {
      description: 'The color to end gradient',
      control: {
        type: 'color'
      }
    },
    theme: {
      description: 'The theme of button color scheme',
      category: `'dark' | 'light'`,
      options: ['dark', 'light'],
      control: { type: 'select' }
    }
  }
}

export default meta

export const Default = Template.bind({})

export const Dark = Template.bind({})

Dark.args = {
  label: 'Label',
  size: 'md',
  fromColor: '#ff4d4d',
  toColor: '#f9cb28',
  theme: 'dark'
}

Dark.parameters = {
  backgrounds: {
    default: 'black',
    values: [{ name: 'black', value: '#09090b' }]
  }
}
