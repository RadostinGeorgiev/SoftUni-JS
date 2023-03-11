import { html } from '../lib.js';

export const searchTemplate = (items, isLogged, searchHandler, search) => html`
    <section id="searchPage">
        <h1>Search by Name</h1>

        <div class="search">
            <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name" .value=${search}>
            <button @click=${searchHandler} class="button-list">Search</button>
        </div>

        <h2>Results:</h2>

        <div class="search-result">
            ${items.length > 0
            ? html`
                <!--If have matches-->
                ${items.map(i => itemTemplate(i, isLogged))}`
            : html`
                <!--If there are no matches-->
                <p class="no-result">No result.</p>`
            }
        </div>
    </section>
`;

const itemTemplate = (item, viewDetailsBtn) => html`
    <div class="card-box">
        <img src=${item.imgUrl}>
        <div>
            <div class="text-center">
                <p class="name">Name: ${item.name}</p>
                <p class="artist">Artist: ${item.artist}</p>
                <p class="genre">Genre: ${item.genre}</p>
                <p class="price">Price: $${item.price}</p>
                <p class="date">Release Date: ${item.date}</p>
            </div>
            <div class="btn-group">
                 ${viewDetailsBtn
                    ? html`<a href=${`/details/${item._id}`} id="details">Details</a>`
                    : ''}
                
            </div>
        </div>
    </div>
`;
// export const searchTemplate = (items, searchHandler, search, isLogged) => html`
// <section id="search">
//     <h2>Search by Brand</h2>

//     <form class="search-wrapper cf">
//         <input id="#search-input" type="text" name="search" placeholder="Search here..." required .value=${search} />
//         <button @submit=${searchHandler} type="submit">Search</button>
//     </form>

//     <h3>Results:</h3>

//     <div id="search-container">
//         ${items.length == 0
//             ? html`
//             <!-- Display an h2 if there are no posts -->
//             <h2>There are no results found.</h2>`
//             : html`
//             <ul class="card-wrapper">
//                 <!-- Display a li with information about every post (if any)-->
//                 ${items.map(i => itemTemplate(i, isLogged))}
//             </ul>`
//         }
//     </div>
// </section>
// `;