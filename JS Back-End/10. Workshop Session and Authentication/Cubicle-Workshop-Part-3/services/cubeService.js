const setDifficultyLevel = (difficulty) => {
    const options = 
    [
        { value: '1', label: 'Very Easy' },
        { value: '2', label: 'Easy' },
        { value: '3', label: 'Medium (Standard 3x3)' },
        { value: '4', label: 'Intermediate' },
        { value: '5', label: 'Expert' },
        { value: '6', label: 'Hardcore' },
    ].map(x => x.value == difficulty 
        ? { ...x, selected: true } 
        : x)

    return options;
}

module.exports = { setDifficultyLevel };