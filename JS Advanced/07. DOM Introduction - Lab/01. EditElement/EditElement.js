function editElement(reference, match, replacer) {
    let text = reference.textContent;
    let matcher = new RegExp(match, 'g');
    let replacedText = text.replace(matcher, replacer);
    reference.textContent = replacedText;
}