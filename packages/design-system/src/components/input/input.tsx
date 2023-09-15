import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'gradient-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {
  @Prop()
  label: string

  @Prop()
  placeholder: string

  @Prop()
  invalid? = false

  @Prop()
  variant?: 'lined' | 'outlined' = 'lined'

  @Prop()
  fromColor = '#ff4d4d'

  @Prop()
  toColor = '#f9cb28'

  render() {
    return (
      <Host
        invalid={this.invalid ? 'true' : 'false'}
        variant={this.variant}
        style={{
          '--gradient': `linear-gradient(165deg, ${this.fromColor}, ${this.toColor}`
        }}
      >
        <div class="gradient-input">
          <label htmlFor="my-input" class="gradient-input__label">
            {this.label}
          </label>

          <input
            type="text"
            name="my-input"
            class="gradient-input__input"
            placeholder={this.placeholder}
          />
        </div>
      </Host>
    )
  }
}
