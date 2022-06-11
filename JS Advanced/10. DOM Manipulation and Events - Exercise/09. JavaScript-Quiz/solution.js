function solve() {
  Array.from(document.getElementsByClassName('answer-text'))
    .forEach(el => el.addEventListener('click', onClick));
  const sections = Array.from(document.querySelectorAll('section'));

  const rightAnswers = [
    'onclick',
    'JSON.stringify()',
    'A programming API for HTML and XML documents'];

  let rightAnswersCounter = 0;
  let currentSection = 0;

  function onClick(ev) {
    let answer = ev.currentTarget;

    if (rightAnswers.includes(answer.textContent)) {
      rightAnswersCounter++;
    }

    if (currentSection < 2) {
      sections[currentSection++].style.display = 'none';
      sections[currentSection].style.display = 'block';
    } else {
      sections[currentSection].style.display = 'none';

      result = document.querySelector('#results');
      result.style.display = 'block';

      document.querySelector('.results-inner h1').textContent =
        rightAnswersCounter == 3
          ? `You are recognized as top JavaScript fan!`
          : `You have ${rightAnswersCounter} right answers`;
    }
  }
}