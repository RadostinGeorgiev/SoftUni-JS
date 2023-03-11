import { html } from '../lib.js';

export const detailsTemplate = (item, deleteHandler, isOwner) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${item.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${item.brand}</span></p>
            <p>
                Model: <span id="details-model">${item.model}</span>
            </p>
            <p>Release date: <span id="details-release">${item.release}</span></p>
            <p>Designer: <span id="details-designer">${item.designer}</span></p>
            <p>Value: <span id="details-value">${item.value}</span></p>
        </div>

        <!--Edit and Delete are only for creator-->
        ${isOwner 
            ? html`
                <div id="action-buttons">
                    <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                    <a href="javascript:void(0);" id="delete-btn" @click=${deleteHandler}>Delete</a>
                </div>` 
            : ''}
    </div>
</section>
`;