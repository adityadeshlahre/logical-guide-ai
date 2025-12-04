// Central export file for all components
import "./app/header.js";
import "./app/logic.js";
import "./app/response.js";
import "./views/response-header.js";
import "./views/response-footer.js";
import "./views/response-renderer.js";
import "./views/promptInputBox.js";
import "./views/promptResponseBox.js";

// Components are auto-registered via customElements.define in each file
// This file ensures all components are loaded when imported
export { Header } from "./app/header.js";
export { Logic } from "./app/logic.js";
export { Response } from "./app/response.js";
export { ResponseHeader } from "./views/response-header.js";
export { ResponseFooter } from "./views/response-footer.js";
export { ResponseRenderer } from "./views/response-renderer.js";
export { PromptInputBox } from "./views/promptInputBox.js";
export { PromptResponseBox } from "./views/promptResponseBox.js";
