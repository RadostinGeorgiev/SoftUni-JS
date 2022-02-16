function getArticleGenerator(articles) {
    let content = document.querySelector('#content');

    function showArticle() {
        if (articles.length > 0) {
            let articleElement = document.createElement('article');
            articleElement.textContent = articles.shift();

            content.appendChild(articleElement);
        }
    }

    return showArticle;
}