import { css, customElement, html, FASTElement } from '@microsoft/fast-element';
import '@fluentui/web-components/button.js';

const template = html`
  <fluent-button appearance="primary">Change Your Password</fluent-button>
`;

const styles = css`
  fluent-button {
    width: 100px;
    min-width: 0;
  }
  fluent-button::part(content) {
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

@customElement({
  name: 'test-app',
  template,
  styles,
})
export class TestApp extends FASTElement {}
