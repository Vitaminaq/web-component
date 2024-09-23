import { css as c, LitElement as l, html as a } from "lit";
import { property as b, customElement as m } from "lit/decorators.js";
var f = Object.defineProperty, d = Object.getOwnPropertyDescriptor, u = (p, o, n, r) => {
  for (var t = r > 1 ? void 0 : r ? d(o, n) : o, s = p.length - 1, i; s >= 0; s--)
    (i = p[s]) && (t = (r ? i(o, n, t) : i(t)) || t);
  return r && t && f(o, n, t), t;
};
let e = class extends l {
  constructor() {
    super(...arguments), this.text = "";
  }
  render() {
    return a`
      <button class="px-wc-component">${this.text}<slot></slot></button>
    `;
  }
};
e.styles = c`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: var(--color--brand);
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  `;
u([
  b({ type: String })
], e.prototype, "text", 2);
e = u([
  m("px-wc-button")
], e);
export {
  e as Button
};
