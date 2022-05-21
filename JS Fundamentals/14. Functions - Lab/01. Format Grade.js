function formatGrade(input) {
    if (input < 3.0) {
        console.log('Fail (2)');
    }
    else if (input >= 3.0 && input < 3.50) {
        console.log(`Poor (${input.toFixed(2)})`);
    }
    else if (input >= 3.50 && input < 4.50) {
        console.log(`Good (${input.toFixed(2)})`);
    }
    else if (input >= 4.50 && input < 5.50) {
        console.log(`Very good (${input.toFixed(2)})`);
    }
    else {
        console.log(`Excellent (${input.toFixed(2)})`);
    }
}

formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)