import { html, css, LitElement } from "../../assets/lit-core.min.js";

export class ResponseRenderer extends LitElement {
    static properties = {
        responseText: { type: String }
    };

    static styles = css`
        :host {
            display: block;
            width: 100%;
            height: 100%;
        }

        .response-content {
            padding: 20px;
            color: #e5e5e7;
            font-size: 15px;
            line-height: 1.6;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            overflow-y: auto;
            height: 100%;
            max-height: 400px;
        }

        .response-content::-webkit-scrollbar {
            width: 8px;
        }

        .response-content::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
        }

        .response-content::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
        }

        .response-content::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        .response-text {
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        .placeholder {
            color: #6b6b7b;
            font-style: italic;
        }

        /* Code blocks */
        code {
            background: rgba(0, 0, 0, 0.3);
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Monaco', 'Menlo', monospace;
            font-size: 13px;
        }

        /* Links */
        a {
            color: #60a5fa;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        /* Lists */
        ul, ol {
            margin: 12px 0;
            padding-left: 24px;
        }

        li {
            margin: 6px 0;
        }

        /* Paragraphs */
        p {
            margin: 12px 0;
        }
    `;

    constructor() {
        super();
        this.responseText = 'Type "wix.com" into the "Search Google or type a URL" bar and press Enter.';
    }

    render() {
        return html`
            <div class="response-content">
                ${this.responseText
                ? html`<div class="response-text">${this.responseText}</div>`
                : html`<div class="placeholder">AI response will appear here...</div>`
            }
            </div>
        `;
    }
}

customElements.define('response-renderer', ResponseRenderer);
