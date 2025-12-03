import { html, css, LitElement } from "../../assets/lit-core.min.js";

export class ResponseFooter extends LitElement {
    static properties = {
        inputValue: { type: String }
    };

    static styles = css`
        :host {
            display: block;
            width: 100%;
        }

        .response-footer {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            background: rgba(42, 42, 62, 0.95);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .next-step-button {
            display: flex;
            align-items: center;
            gap: 6px;
            background: rgba(59, 130, 246, 0.2);
            border: 1px solid rgba(59, 130, 246, 0.4);
            border-radius: 8px;
            padding: 8px 12px;
            color: #60a5fa;
            font-size: 13px;
            font-weight: 500;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            cursor: pointer;
            transition: all 0.2s ease;
            white-space: nowrap;
        }

        .next-step-button:hover {
            background: rgba(59, 130, 246, 0.3);
            border-color: rgba(59, 130, 246, 0.6);
        }

        .next-icon {
            font-size: 16px;
        }

        .input-container {
            flex: 1;
            display: flex;
            align-items: center;
            background: rgba(26, 26, 46, 0.8);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 0 12px;
            transition: border-color 0.2s ease;
        }

        .input-container:focus-within {
            border-color: rgba(59, 130, 246, 0.5);
        }

        input {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            color: #e5e5e7;
            font-size: 14px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            padding: 10px 0;
        }

        input::placeholder {
            color: #6b6b7b;
        }

        .ask-button {
            display: flex;
            align-items: center;
            gap: 6px;
            background: rgba(59, 130, 246, 0.2);
            border: 1px solid rgba(59, 130, 246, 0.4);
            border-radius: 8px;
            padding: 8px 16px;
            color: #60a5fa;
            font-size: 13px;
            font-weight: 500;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .ask-button:hover {
            background: rgba(59, 130, 246, 0.3);
            border-color: rgba(59, 130, 246, 0.6);
        }

        .ask-icon {
            font-size: 14px;
        }
    `;

    constructor() {
        super();
        this.inputValue = "";
    }

    handleNextStep() {
        this.dispatchEvent(new CustomEvent('next-step', {
            bubbles: true,
            composed: true
        }));
        console.log('Next step clicked');
    }

    handleAsk() {
        if (this.inputValue.trim()) {
            this.dispatchEvent(new CustomEvent('ask-question', {
                bubbles: true,
                composed: true,
                detail: { question: this.inputValue }
            }));
            console.log('Ask clicked:', this.inputValue);
            this.inputValue = "";
        }
    }

    handleInput(e) {
        this.inputValue = e.target.value;
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleAsk();
        }
    }

    render() {
        return html`
            <div class="response-footer">
                <button class="next-step-button" @click="${this.handleNextStep}">
                    <span class="next-icon">›</span>
                    <span>Next step</span>
                </button>
                
                <div class="input-container">
                    <input 
                        type="text" 
                        placeholder="Ask about this step"
                        .value="${this.inputValue}"
                        @input="${this.handleInput}"
                        @keypress="${this.handleKeyPress}"
                    />
                </div>

                <button class="ask-button" @click="${this.handleAsk}">
                    <span>Ask</span>
                    <span class="ask-icon">↵</span>
                </button>
            </div>
        `;
    }
}

customElements.define('response-footer', ResponseFooter);
