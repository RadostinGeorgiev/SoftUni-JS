import { html } from '../lib.js';

export const detailsTemplate = (item, isOwner, deleteHandler, bought, showBuyBtn, buyHandler) => html`
    <!-- Details page -->
    <section id="details">
        <div id="details-wrapper">
        <img id="details-img" src=${item.imageUrl} alt=${item.alt} />
        <p id="details-title">${item.name}</p>
        <p id="details-category">
            Category: <span id="categories">${item.category}</span>
        </p>
        <p id="details-price">
            Price: <span id="price-number">${item.price}</span>$</p>
        <div id="info-wrapper">
            <div id="details-description">
            <h4>Bought: <span id="buys">${bought}</span> times.</h4>
            <span>${item.description}</span>
            </div>
        </div>
        
        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${itemsControlsTemplate(item, isOwner, deleteHandler)}
            
            <!--Bonus - Only for logged-in users ( not authors )-->
            ${itemsBuyTemplate(showBuyBtn, buyHandler)}

        </div>
        </div>
    </section>
`;

const itemsControlsTemplate = (item, isOwner, deleteHandler) => {
    if (isOwner) {
        return html`
            <a href="/edit/${item._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0);" id="delete-btn" @click=${deleteHandler}>Delete</a>
        `
    } else { return null; }
}

const itemsBuyTemplate = (showBuyBtn, buyHandler) => {
    if (showBuyBtn) {
        return html`
            <a href="javascript:void(0);" id="buy-btn" @click=${buyHandler}>Buy</a>
        `
    } else { return null; }
}