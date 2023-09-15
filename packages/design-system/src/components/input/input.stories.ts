const Template = (args) =>
  `<div style="width: 264px;">
    <gradient-input
      label=${args.label}
      placeholder=${args.placeholder}
      variant=${args.variant}
      from-color=${args.fromColor}
      to-color=${args.toColor}
      invalid=${args.invalid}
    />
  </div>
  `

const meta = {
  title: 'Components/Input',
  component: 'gradient-input',
  tags: ['autodocs'],
  args: {
    label: 'Documento',
    placeholder: '000.000.000-00',
    variant: 'lined',
    fromColor: '#ff4d4d',
    toColor: '#f9cb28',
    invalid: false
  },
  argTypes: {
    label: {
      description: 'The input label',
      control: 'text'
    },
    placeholder: {
      description: 'The input placeholder',
      control: 'text'
    },
    variant: {
      description: 'The input variant',
      category: `'lined' | 'outlined'`,
      options: ['lined', 'outlined'],
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
    invalid: {
      description: 'Whether input is invalid',
      control: {
        type: 'boolean'
      }
    }
  }
}

export default meta

export const Default = Template.bind({})
