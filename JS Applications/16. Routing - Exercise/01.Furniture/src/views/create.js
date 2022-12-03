import { createItem } from "../api/data.js";
import { createTemplate } from "../templates/createTemplate.js";
import { getEmptyRequiredFields, isEmptyRequiredField } from "../utils.js";

let errorType = {};

export async function createView(ctx) {
    const ctxSubmit = onSubmit.bind(null, ctx);

    update(null, {});

    function update(errorMsg, errors) {
        const template = createTemplate(ctxSubmit, errorMsg, errors);

        ctx.renderView(template);
    }

    async function onSubmit(ctx, event) {
        event.preventDefault();
        const form = event.target;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        try {
            //---- checking for empty fields -------------------------------------------
            if (isEmptyRequiredField(form, 'material')) {
                const emptyFields = getEmptyRequiredFields(form, 'material').map(x => x.name);
                const errorType = emptyFields.reduce((a, key) => Object.assign(a, { [key]: true }), {});

                throw {
                    Msg: Error('Please, fill the required fields!'),
                    errorType
                }
            }

            data.year = Number(data.year);
            data.price = Number(data.price);

            if (data.make.length < 4) {
                errorType.make = true;
                throw {
                    Msg: Error('Make must be at least 4 symbols long'),
                    errorType
                }
            } else { errorType.make = false; }
            if (data.model.length < 4) {
                errorType.model = true;
                throw {
                    Msg: Error('Model must be at least 4 symbols long'),
                    errorType
                }
            } else { errorType.model = false; }
            if (data.year < 1950 || data.year > 2050) {
                errorType.year = true;
                throw {
                    Msg: Error('Year must be between 1950 and 2050'),
                    errorType
                }
            } else { errorType.year = false; }
            if (data.description.length <= 10) {
                errorType.description = true;
                throw {
                    Msg: Error('Description must be more than 10 symbols'),
                    errorType
                }
            } else { errorType.description = false; }
            if (data.price < 0) {
                errorType.price = true;
                throw {
                    Msg: Error('Price must be a positive number'),
                    errorType
                }
            } else { errorType.price = false; }

            const result = await createItem(data);
            // alert('Item added to dashboard successfully!');

            form.reset();

            //---- redirect to dashboard page -----------------------------------------------
            ctx.page.redirect('/dashboard');
        } catch (error) {
            const message = error.message || error.Msg.message;
            update(message, error.errorType || {});
        }
    }
}