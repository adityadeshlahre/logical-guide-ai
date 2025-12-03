import { html, css, LitElement } from "../../assets/lit-core.min.js";
import "./header.js";

export class Logic extends LitElement {
    static styles = css`
        :host {
            display: block;
            width: 100%;
            height: 100%;
        }
    `;

    render() {
        return html`
            <header></header>
        `;
    }
}

customElements.define('logic', Logic);