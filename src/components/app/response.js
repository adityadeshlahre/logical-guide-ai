import { html, css, LitElement } from "../../assets/lit-core.min.js";
import "../views/response-header.js";
import "../views/response-footer.js";
import "../views/response-renderer.js";

export class Response extends LitElement {
    static properties = {
        visible: { type: Boolean },
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
            transition: opacity 0.3s ease, transform 0.3s ease;
        }

        :host([hidden]) {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
            pointer-events: none;
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

        .response-body {
            flex: 1;
            min-height: 200px;
            max-height: 400px;
            overflow: hidden;
        }
    `;

    constructor() {
        super();
        this.visible = true;
        this.taskTitle = "how do i create a website usin...";
        this.responseText = 'Type "wix.com" into the "Search Google or type a URL" bar and press Enter.';
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('close-response', this.handleClose);
        this.addEventListener('new-task', this.handleNewTask);
        this.addEventListener('copy-task', this.handleCopy);
        this.addEventListener('next-step', this.handleNextStep);
        this.addEventListener('ask-question', this.handleAskQuestion);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('close-response', this.handleClose);
        this.removeEventListener('new-task', this.handleNewTask);
        this.removeEventListener('copy-task', this.handleCopy);
        this.removeEventListener('next-step', this.handleNextStep);
        this.removeEventListener('ask-question', this.handleAskQuestion);
    }

    handleClose() {
        this.visible = false;
        this.dispatchEvent(new CustomEvent('response-closed', {
            bubbles: true,
            composed: true
        }));
    }

    handleNewTask() {
        console.log('Starting new task...');
        // Placeholder for new task logic
    }

    handleCopy() {
        console.log('Copying task:', this.taskTitle);
        // Placeholder for copy logic
    }

    handleNextStep() {
        console.log('Moving to next step...');
        // Placeholder for next step logic
    }

    handleAskQuestion(e) {
        console.log('Asking question:', e.detail.question);
        // Placeholder for ask question logic
    }

    render() {
        return html`
            <div class="response-container">
                <response-header .taskTitle="${this.taskTitle}"></response-header>
                <div class="response-body">
                    <response-renderer .responseText="${this.responseText}"></response-renderer>
                </div>
                <response-footer></response-footer>
            </div>
        `;
    }
}

customElements.define('response', Response);