import { html } from '../lib.js';

export const editTemplate = (data, editHandler) =>
    html`
        <!-- Edit Page (Only for logged-in users) -->
        <section id="edit">
          <div class="form">
            <h2>Edit Product</h2>
            <form @submit=${editHandler} class="edit-form">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product Name"
                .value=${data.name}
              />
              <input
                type="text"
                name="imageUrl"
                id="product-image"
                placeholder="Product Image"
                .value=${data.imageUrl}
              />
              <input
                type="text"
                name="category"
                id="product-category"
                placeholder="Category"
                .value=${data.category}
              />
              <textarea
                id="product-description"
                name="description"
                placeholder="Description"
                rows="5"
                cols="50"
                .value=${data.description}
              ></textarea>
              
              <input
                type="text"
                name="price"
                id="product-price"
                placeholder="Price"
                .value=${data.price}
              />
              <button type="submit">post</button>
            </form>
          </div>
        </section>
`;