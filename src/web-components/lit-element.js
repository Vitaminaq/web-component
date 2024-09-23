import 'lit/experimental-hydrate-support.js'
import { css as f, LitElement as p, html as d } from 'lit'
import { property as l, customElement as h } from 'lit/decorators.js'
var m = Object.defineProperty,
  u = Object.getOwnPropertyDescriptor,
  i = (a, e, n, r) => {
    for (var t = r > 1 ? void 0 : r ? u(e, n) : e, s = a.length - 1, c; s >= 0; s--)
      (c = a[s]) && (t = (r ? c(e, n, t) : c(t)) || t)
    return r && t && m(e, n, t), t
  }
let o = class extends p {
  constructor() {
    super(),
      (this.docsHint = 'Click on the Vite and Lit logos to learn more'),
      (this.count = 0),
      (this.text = '')
  }
  render() {
    return d`
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
    `
  }
  _onClick() {
    this.count++
  }
}
o.styles = f`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    h1 {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
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

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `
i([l()], o.prototype, 'docsHint', 2)
i([l({ type: Number })], o.prototype, 'count', 2)
i([l({ type: String })], o.prototype, 'text', 2)
o = i([h('my-element')], o)
