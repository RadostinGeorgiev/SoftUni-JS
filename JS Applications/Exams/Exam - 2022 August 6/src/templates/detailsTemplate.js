import { html } from '../lib.js';

export const detailsTemplate = (item, deleteHandler, isOwner, isLogged, applications, isApplied, applyHandler) => html`
        <!-- Details page -->
        <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt=${item.alt} />
            <p id="details-title">${item.title}</p>
            <p id="details-category">
              Category: <span id="categories">${item.category}</span>
            </p>
            <p id="details-salary">
              Salary: <span id="salary-number">${item.salary}</span>
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Description</h4>
                <span>${item.description}</span>
              </div>
              <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${item.requirements}</span>
              </div>
            </div>
            <p>Applications: <strong id="applications">${applications}</strong></p>
            
            <div id="action-buttons">
            <!--Edit and Delete are only for creator-->
            ${isOwner 
            ? html`
                  <a href="/edit/${item._id}" id="edit-btn">Edit</a>
                  <a href="javascript:void(0);" id="delete-btn" @click=${deleteHandler}>Delete</a>`
                  : ''}
            
            <!--Bonus - Only for logged-in users ( not authors )-->
            ${isLogged && !isOwner && !isApplied
            ? html`
                <a href="javascript:void(0);" id="apply-btn" @click=${applyHandler}>Apply</a>`
            : ''}
            </div> 
    </div>
</section>
`;