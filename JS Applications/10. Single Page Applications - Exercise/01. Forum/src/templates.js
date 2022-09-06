function createTopicHome(record) {
	const { title, username, content, time, _id } = record;
	const wrap = document.createElement('div');
	wrap.className = 'topic-name-wrapper';

	//exercise for templating; don't use in production code
	wrap.innerHTML = `<div class="topic-name">
		<a href="#" class="normal">
			<h2>${title}</h2>
		</a>
		<div class="columns">
			<div>
				<p>Date: <time>${time}</time></p>
				<div class="nick-name">
					<p>Username: <span>${username}</span></p>
				</div>
			</div>


		</div>
	</div>`;

	wrap.id = _id;

	return wrap;
}

function createTopicTitle(record) {
	const { title, username, content, time, _id } = record;
	const wrap = document.createElement('div');
	wrap.className = 'theme-title';

	//exercise for templating; don't use in production code
	wrap.innerHTML = `<div class="theme-name-wrapper">
	<div class="theme-name">
		<h2>${title}</h2>

	</div>

</div>`;

	return wrap;
}

function createCommentsHeader(record) {
	const { title, username, content, time, _id } = record;
	const wrap = document.createElement('div');
	wrap.className = 'header';

	//exercise for templating; don't use in production code
	wrap.innerHTML = `<img src="./static/profile.png" alt="avatar">
	<p><span>${username}</span> posted on <time>${time}</time></p>

	<p class="post-content">${content}</p>`;

	return wrap;
}

function createCommentsBody() {
	const wrap = document.createElement('div');
	wrap.className = 'user-comment';

	//exercise for templating; don't use in production code
	wrap.innerHTML = `<div class="topic-name-wrapper">
	</div>`;

	return wrap;
}

function createCommentPost(record) {
	const { text, username, postId, time, _id } = record;
	const wrap = document.createElement('div');
	wrap.className = 'topic-name';

	wrap.innerHTML = `<p><strong>${username}</strong> commented on <time>${time.toLocaleString()}</time></p>
	<div class="post-content">
		<p>${text}</p>
	</div>`;

	return wrap;
}

export { createTopicHome, createTopicTitle, createCommentsHeader, createCommentsBody, createCommentPost }