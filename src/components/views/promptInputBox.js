import { html, css, LitElement } from "../../assets/lit-core.min.js";

export class PromptInputBox extends LitElement {
    static properties = {
        inputValue: { type: String }
    };

    static styles = css`
        :host {
            display: block;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 900px;
            z-index: 150;
        }

        .prompt-container {
            background: rgba(26, 26, 46, 0.95);
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(10px);
            padding: 20px 24px;
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .input-wrapper {
            flex: 1;
            display: flex;
            align-items: center;
            background: rgba(42, 42, 62, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            padding: 0 20px;
            transition: border-color 0.2s ease;
            -webkit-app-region: no-drag;
        }

        .input-wrapper:focus-within {
            border-color: rgba(59, 130, 246, 0.5);
        }

        input {
            flex: 1;
            background: transparent;
            border: none;
            outline: none;
            color: #e5e5e7;
            font-size: 18px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            padding: 18px 0;
        }

        input::placeholder {
            color: #6b6b7b;
        }

        .submit-button {
            display: flex;
            align-items: center;
            gap: 8px;
            background: rgba(59, 130, 246, 0.2);
            border: 1px solid rgba(59, 130, 246, 0.4);
            border-radius: 12px;
            padding: 14px 24px;
            color: #60a5fa;
            font-size: 16px;
            font-weight: 500;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            cursor: pointer;
            transition: all 0.2s ease;
            white-space: nowrap;
            -webkit-app-region: no-drag;
        }

        .submit-button:hover {
            background: rgba(59, 130, 246, 0.3);
            border-color: rgba(59, 130, 246, 0.6);
        }

        .submit-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .submit-icon {
            font-size: 18px;
        }
    `;

    constructor() {
        super();
        this.inputValue = "";
    }

    connectedCallback() {
        super.connectedCallback();
        console.log('PromptInputBox connected and visible');
        // Focus input after component renders
        setTimeout(() => this.focusInput(), 100);
    }

    focusInput() {
        const input = this.shadowRoot?.querySelector('input');
        if (input) {
            input.focus();
        }
    }

    handleInput(e) {
        this.inputValue = e.target.value;
    }

    handleKeyPress(e) {
        if (e.key === 'Enter' && this.inputValue.trim()) {
            this.handleSubmit();
        }
    }

    handleSubmit() {
        if (this.inputValue.trim()) {
            this.dispatchEvent(new CustomEvent('prompt-submitted', {
                bubbles: true,
                composed: true,
                detail: { prompt: this.inputValue.trim() }
            }));
            console.log('Prompt submitted:', this.inputValue);
        }
    }

    render() {
        return html`
            <div class="prompt-container">
                <div class="input-wrapper">
                    <input 
                        type="text" 
                        placeholder="how do i create a website..."
                        .value="${this.inputValue}"
                        @input="${this.handleInput}"
                        @keypress="${this.handleKeyPress}"
                    />
                </div>

                <button 
                    class="submit-button" 
                    @click="${this.handleSubmit}"
                    ?disabled="${!this.inputValue.trim()}"
                >
                    <span>Submit</span>
                    <span class="submit-icon">↵</span>
                </button>
            </div>
        `;
    }
}

customElements.define('prompt-input-box', PromptInputBox);
