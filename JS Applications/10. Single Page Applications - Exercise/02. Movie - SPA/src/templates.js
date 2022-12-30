export function templateMovie(record) {
	const { _ownerId, title, description, img, _createdOn, _id } = record;

	const wrap = document.createElement('li');
	wrap.className = 'card mb-4';

	//exercise for templating; don't use in production code
	wrap.innerHTML = `
<img class="card-img-top" src=${img} alt="Card image cap" width="400">
<div class="card-body">
   <h4 class="card-title">${title}</h4>
</div>
<div class="card-footer">
   <a href="#/details/">
	   <button id=${_id} type="button" class="btn btn-info">Details</button>
   </a>
</div>`;

	return wrap;
}

export function templateMovieDetails(record, likes) {
	const { _ownerId, title, description, img, _createdOn, _id } = record;

	const wrap = document.createElement('div');
	wrap.className = 'container';

	//exercise for templating; don't use in production code
	wrap.innerHTML = `
	<div class="row bg-light text-dark">
	<h1>Movie title: ${title}</h1>

	<div class="col-md-8">
	  <img class="img-thumbnail" src=${img}
		alt="Movie" />
	</div>
	<div class="col-md-4 text-center">
	  <h3 class="my-3">Movie Description</h3>
	  <p>
		${description}
	  </p>
	  <a class="btn btn-danger" href="#">Delete</a>
	  <a class="btn btn-warning" href="#">Edit</a>
	  <a class="btn btn-primary" href="#">Like</a>
	  <span class="enrolled-span">Liked ${likes}</span>
	</div>
  </div>
`;

	return wrap;
}