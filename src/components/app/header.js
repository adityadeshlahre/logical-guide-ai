import { html, css, LitElement } from "../../assets/lit-core.min.js";

export class Header extends LitElement {
    static properties = {
        menuOpen: { type: Boolean }
    };

    static styles = css`
        :host {
            display: block;
            width: 100%;
            padding: 16px;
        }

        .header-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: #5a5a6e;
            border-radius: 50px;
            padding: 12px 20px;
            gap: 16px;
            position: relative;
        }

        .header-section {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .header-section.left {
            flex: 0 0 auto;
        }

        .header-section.center {
            flex: 0 0 auto;
        }

        .header-section.right {
            flex: 0 0 auto;
            position: relative;
        }

        button {
            display: flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            border-radius: 8px;
            padding: 8px 16px;
            color: #ffffff;
            font-size: 14px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            cursor: pointer;
            transition: background 0.2s ease;
        }

        button:hover {
            background: rgba(255, 255, 255, 0.15);
        }

        .kbd {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 20px;
            height: 20px;
            padding: 0 4px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
            font-size: 12px;
            font-weight: 500;
        }

        .menu-button {
            background: transparent;
            padding: 4px 8px;
            min-width: auto;
        }

        .menu-button:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .menu-icon {
            font-size: 20px;
            line-height: 1;
            font-weight: bold;
        }

        .dropdown-menu {
            position: absolute;
            top: calc(100% + 8px);
            right: 0;
            background: #4a4a5e;
            border-radius: 8px;
            padding: 8px 0;
            min-width: 150px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            opacity: 0;
            visibility: hidden;
            transform: translateY(-8px);
            transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;
            z-index: 1000;
        }

        .dropdown-menu.open {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .menu-item {
            padding: 10px 16px;
            color: #ffffff;
            font-size: 14px;
            cursor: pointer;
            transition: background 0.2s ease;
        }

        .menu-item:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .menu-item.disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .divider {
            width: 1px;
            height: 24px;
            background: rgba(255, 255, 255, 0.2);
        }
    `;

    constructor() {
        super();
        this.menuOpen = false;
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    handleGuideMe() {
        this.dispatchEvent(new CustomEvent('guide-me', {
            bubbles: true,
            composed: true
        }));
        console.log('Guide me clicked');
    }

    handleShowHide() {
        // Placeholder for Show/Hide functionality
        console.log('Show/Hide clicked');
    }

    handleMenuItemClick(action) {
        console.log(`Menu action: ${action}`);
        this.menuOpen = false;
    }

    render() {
        return html`
            <div class="header-container">
                <!-- Left Section: Guide me button -->
                <div class="header-section left">
                    <button @click="${this.handleGuideMe}">
                        <span>Guide me</span>
                        <span class="kbd">⌘</span>
                        <span class="kbd">←</span>
                    </button>
                </div>

                <!-- Center Section: Show/Hide button -->
                <div class="header-section center">
                    <button @click="${this.handleShowHide}">
                        <span>Show/Hide</span>
                        <span class="kbd">⌘</span>
                    </button>
                </div>

                <!-- Divider -->
                <div class="divider"></div>

                <!-- Right Section: Three-dot menu -->
                <div class="header-section right">
                    <button class="menu-button" @click="${this.toggleMenu}">
                        <span class="menu-icon">⋮</span>
                    </button>
                    
                    <div class="dropdown-menu ${this.menuOpen ? 'open' : ''}">
                        <div class="menu-item disabled" @click="${() => this.handleMenuItemClick('settings')}">
                            Coming Soon
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-header', Header);