import { render } from '../lib.js';

let nav = undefined;
let root = undefined;

function assignContainers(navExt, rootExt) {
    nav = navExt;
    root = rootExt;
}

function decorateContext(ctx, next) {
    ctx.renderNav = (content) => render(content, nav);
    ctx.renderView = (content) => render(content, root);

    next();
}

export { assignContainers, decorateContext }