function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');

    const rows = [...document.querySelectorAll('tbody tr')]
        .filter(r => r.children[1].textContent === input.value);
    rows.forEach(r => r.remove());

    document.querySelector('#result').textContent = rows.length > 0
        ? 'Deleted.'
        : 'Not found.';
}