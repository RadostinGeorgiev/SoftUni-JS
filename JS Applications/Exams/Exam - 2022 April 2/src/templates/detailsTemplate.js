import { html } from '../lib.js';

export const detailsTemplate = (item, deleteHandler, isLogged, isOwner, isDonated, donations, donateHandler) => html`
        <!-- Details page -->
        <section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src=${item.image}>
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name: ${item.name}</h1>
                        <h3>Breed: ${item.breed}</h3>
                        <h4>Age: ${item.age}</h4>
                        <h4>Weight: ${item.weight}</h4>
                        <h4 class="donation">Donation: ${donations * 100}$</h4>
                    </div>
                    <!-- if there is no registered user, do not display div-->
                    <div class="actionBtn">
                        <!-- Only for registered user and creator of the pets-->
                         ${isOwner 
                          ? html`
                            <a href="/edit/${item._id}" class="edit">Edit</a>
                            <a href="javascript:void(0);" class="remove" @click=${deleteHandler}>Delete</a>
                          `
                          : ''}

                        <!--(Bonus Part) Only for no creator and user-->
                         ${isLogged && !isOwner && !isDonated
                          ? html`
                                <a href="javascript:void(0);" class="donate" @click=${donateHandler}>Donate</a>`
                          : ''}

                    </div>
                </div>
            </div>
        </section>
`;