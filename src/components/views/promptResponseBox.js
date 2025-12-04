import { html, css, LitElement } from "../../assets/lit-core.min.js";
import "./response-header.js";
import "./response-footer.js";
import "./response-renderer.js";

export class PromptResponseBox extends LitElement {
    static properties = {
        taskTitle: { type: String },
        responseText: { type: String }
    };

    static styles = css`
        :host {
            display: block;
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 960px;
            z-index: 100;
        }

        .response-container {
            background: rgba(26, 26, 46, 0.95);
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(10px);
            overflow: hidden;
            display: flex;
            flex-direction: column;
        }

        hr {
            margin: 0;
            border: none;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .response-body {
            flex: 1;
            min-height: 200px;
            max-height: 400px;
            overflow: hidden;
        }
    `;

    constructor() {
        super();
        this.taskTitle = "how do i create a website usin...";
        this.responseText = 'Type "wix.com" into the "Search Google or type a URL" bar and press Enter.';
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('PromptResponseBox connected');
    }

    render() {
        return html`
            <div class="response-container">
                <response-header .taskTitle="${this.taskTitle}"></response-header>
                <hr />
                <div class="response-body">
                    <response-renderer .responseText="${this.responseText}"></response-renderer>
                </div>
                <hr />
                <response-footer></response-footer>
            </div>
        `;
    }
}

customElements.define('prompt-response-box', PromptResponseBox);
