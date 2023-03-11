import { html } from '../lib.js';

export const detailsTemplate = (item, deleteHandler, isLogged, isOwner, isDonated, donations, donateHandler) => html`
        <!-- Details page -->
        <section id="details-page">
            <h1 class="title">Post Details</h1>

            <div id="container">
                <div id="details">
                    <div class="image-wrapper">
                        <img src=${item.imageUrl} alt="Material Image" class="post-image">
                    </div>
                    <div class="info">
                        <h2 class="title post-title">${item.title}</h2>
                        <p class="post-description">Description: ${item.description}</p>
                        <p class="post-address">Address: ${item.address}</p>
                        <p class="post-number">Phone number: ${item.phone}</p>
                        <p class="donate-Item">Donate Materials: ${donations}</p>

                        <!--Edit and Delete are only for creator-->
                        <div class="btns">
                        ${isOwner 
                          ? html`
                              <a href="/edit/${item._id}" class="edit-btn btn">Edit</a>
                              <a href="javascript:void(0);" class="delete-btn btn" @click=${deleteHandler}>Delete</a>
                          `
                          : ''}

                        <!--Bonus - Only for logged-in users ( not authors )-->
                        ${isLogged && !isOwner && !isDonated
                          ? html`
                              <a href="javascript:void(0);" class="donate-btn btn" @click=${donateHandler}>Donate</a>`
                          : ''}

                        </div>

                    </div>
                </div>
            </div>
        </section>
`;