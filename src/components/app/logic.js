import { html, css, LitElement } from "../../assets/lit-core.min.js";
import "./header.js";
import "../views/promptInputBox.js";
import "../views/promptResponseBox.js";

export class Logic extends LitElement {
    static properties = {
        showResponse: { type: Boolean },
        showPromptInput: { type: Boolean },
        currentPrompt: { type: String }
    };

    static styles = css`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
        }

        .logic-container {
            width: 100%;
            height: 100%;
            position: relative;
        }

        .header-wrapper {
            position: fixed;
            bottom: 16px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 600px;
            z-index: 200;
        }

        prompt-response-box,
        prompt-input-box {
            display: block;
        }

        prompt-response-box[hidden],
        prompt-input-box[hidden] {
            display: none;
        }
    `;

    constructor() {
        super();
        this.showResponse = false;
        this.showPromptInput = false;
        this.currentPrompt = "";
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('Logic component connected');
        console.log('Adding event listeners for:', 'response-closed', 'guide-me', 'prompt-submitted');
        this.addEventListener('response-closed', this.handleResponseClosed);
        this.addEventListener('guide-me', this.handleGuideMeClicked);
        this.addEventListener('prompt-submitted', this.handlePromptSubmitted);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('response-closed', this.handleResponseClosed);
        this.removeEventListener('guide-me', this.handleGuideMeClicked);
        this.removeEventListener('prompt-submitted', this.handlePromptSubmitted);
    }

    handleResponseClosed() {
        this.showResponse = false;
    }

    handleGuideMeClicked() {
        console.log('Guide me event received - showing prompt input');
        this.showPromptInput = true;
        this.showResponse = false;
    }

    handlePromptSubmitted(e) {
        console.log('Prompt submitted:', e.detail.prompt);
        this.currentPrompt = e.detail.prompt;
        this.showPromptInput = false;
        this.showResponse = true;
    }

    render() {
        return html`
            <div class="logic-container">
                <prompt-input-box ?hidden="${!this.showPromptInput}"></prompt-input-box>
                <prompt-response-box 
                    ?hidden="${!this.showResponse}"
                    .taskTitle="${this.currentPrompt}"
                ></prompt-response-box>
                
                <div class="header-wrapper">
                    <app-header></app-header>
                </div>
            </div>
        `;
    }
}

customElements.define('app-logic', Logic);