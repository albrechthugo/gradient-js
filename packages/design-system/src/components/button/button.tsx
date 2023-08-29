import { Component, Prop, h } from '@stencil/core'
import { Host } from '@stencil/core/internal'

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
      <Host
        style={{
          '--gradient': `linear-gradient(165deg, ${this.fromColor}, ${this.toColor}`
        }}
      >
        <button class={`button button-${this.size} button-${this.theme}-theme`}>
          <span class="button__label">{this.label}</span>
        </button>
      </Host>
    )
  }
}
