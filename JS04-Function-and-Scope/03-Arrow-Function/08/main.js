let calScoreFootball = (result) => {
    if (result === 'win') {
        return 3
    } else if (result === 'draw') {
        return 1
    } else if (result === 'lose') {
        return 0
    } else {
        return 'Value invalid';
    }
}