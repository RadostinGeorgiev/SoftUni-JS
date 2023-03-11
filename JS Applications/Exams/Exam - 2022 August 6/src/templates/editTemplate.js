import { html } from '../lib.js';

export const editTemplate = (data, editHandler) =>
    html`
        <!-- Edit Page (Only for logged-in users) -->
        <section id="edit">
            <div class="form">
                <h2>Edit Offer</h2>
                <form @submit=${editHandler} class="edit-form">
                    <input type="text" name="title" id="job-title" placeholder="Title" .value=${data.title} />
                    <input type="text" name="imageUrl" id="job-logo" placeholder="Company logo url" .value=${data.imageUrl} />
                    <input type="text" name="category" id="job-category" placeholder="Category" .value=${data.category} />
                    <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50" .value=${data.description}></textarea>
                    <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                        cols="50" .value=${data.requirements}></textarea>
                    <input type="text" name="salary" id="job-salary" placeholder="Salary" .value=${data.salary} />
        
                    <button type="submit">post</button>
                </form>
            </div>
        </section>
`;