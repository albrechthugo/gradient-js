import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'gradient-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {
  @Prop()
  size?: 'sm' | 'md' | 'lg' = 'md'

  @Prop()
  label: string

  @Prop()
  fromColor = '#ff4d4d'

  @Prop()
  toColor = '#f9cb28'

  @Prop()
  theme: 'dark' | 'light' = 'light'

  render(): any {
    return (
      <button
        class={`button button-${this.size} button-${this.theme}-theme`}
        style={{ '--fromColor': this.fromColor, '--toColor': this.toColor }}
      >
        <span class="button__label">{this.label}</span>
      </button>
    )
  }
}
