import { html } from './../lib.js';

export const editTemplate = (data, editHandler, errorMsg, errors) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Edit Furniture</h1>
        <p>Please fill all fields.</p>
    </div>
</div>
${errorMsg ? html`<div class="col-md-12 error">${errorMsg}</div>` : null}
<form @submit=${editHandler}>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-make">Make</label>
                <input class="form-control ${errors.make ? 'is-invalid' : 'is-valid'}" id="new-make" type="text"
                    name="make" .value=${data.make}>
            </div>
            <div class="form-group has-success">
                <label class="form-control-label" for="new-model">Model</label>
                <input class="form-control ${errors.model ? 'is-invalid' : 'is-valid'}" id="new-model" type="text"
                    name="model" .value=${data.model}>
            </div>
            <div class="form-group has-danger">
                <label class="form-control-label" for="new-year">Year</label>
                <input class="form-control ${errors.year ? 'is-invalid' : 'is-valid'}" id="new-year" type="number"
                    name="year" .value=${data.year}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-description">Description</label>
                <input class="form-control ${errors.description ? 'is-invalid' : 'is-valid'}" id="new-description"
                    type="text" name="description" .value=${data.description}>
            </div>
        </div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="form-control-label" for="new-price">Price</label>
                <input class="form-control ${errors.price ? 'is-invalid' : 'is-valid'}" id="new-price" type="number"
                    name="price" .value=${data.price}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-image">Image</label>
                <input class="form-control ${errors.img ? 'is-invalid' : 'is-valid'}" id="new-image" type="text"
                    name="img" .value=${data.img}>
            </div>
            <div class="form-group">
                <label class="form-control-label" for="new-material">Material (optional)</label>
                <input class="form-control ${errors.material ? 'is-invalid' : 'is-valid'}" id="new-material" type="text"
                    name="material" .value=${data.material}>
            </div>
            <input type="submit" class="btn btn-primary" value="Edit" />
        </div>
    </div>
</form>
`;