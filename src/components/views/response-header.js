import { html, css, LitElement } from "../../assets/lit-core.min.js";

export class ResponseHeader extends LitElement {
    static properties = {
        taskTitle: { type: String }
    };

    static styles = css`
        :host {
            display: block;
            width: 100%;
        }

        .response-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 16px;
            background: rgba(42, 42, 62, 0.95);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            gap: 12px;
        }

        .task-title {
            flex: 1;
            color: #a0a0b0;
            font-size: 14px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            max-width: 400px;
        }

        .header-actions {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        button {
            display: flex;
            align-items: center;
            gap: 6px;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            border-radius: 6px;
            padding: 6px 12px;
            color: #ffffff;
            font-size: 13px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            cursor: pointer;
            transition: background 0.2s ease;
            -webkit-app-region: no-drag;
        }

        button:hover {
            background: rgba(255, 255, 255, 0.15);
        }

        .icon-button {
            padding: 6px;
            min-width: auto;
            font-size: 16px;
        }

        .close-button {
            background: transparent;
        }

        .close-button:hover {
            background: rgba(255, 88, 88, 0.2);
        }
    `;

    constructor() {
        super();
        this.taskTitle = "how do i create a website usin...";
    }

    handleCopy() {
        this.dispatchEvent(new CustomEvent('copy-task', {
            bubbles: true,
            composed: true
        }));
        console.log('Copy task clicked');
    }

    handleNewTask() {
        this.dispatchEvent(new CustomEvent('new-task', {
            bubbles: true,
            composed: true
        }));
        console.log('New task clicked');
    }

    handleClose() {
        this.dispatchEvent(new CustomEvent('close-response', {
            bubbles: true,
            composed: true
        }));
        console.log('Close clicked');
    }

    render() {
        return html`
            <div class="response-header">
                <div class="task-title">${this.taskTitle}</div>
                <div class="header-actions">
                    <button class="icon-button" @click="${this.handleCopy}" title="Copy">
                        📋
                    </button>
                    <button @click="${this.handleNewTask}">
                        <span>🎯</span>
                        <span>New Task</span>
                    </button>
                    <button class="icon-button close-button" @click="${this.handleClose}" title="Close">
                        ×
                    </button>
                </div>
            </div>
        `;
    }
}

customElements.define('response-header', ResponseHeader);
