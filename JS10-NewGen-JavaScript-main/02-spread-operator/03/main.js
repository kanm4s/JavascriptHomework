function countHobby(firstname, lastname, ...hobby) {
    let hobbyCount = hobby;
    console.log(hobbyCount);
    return `${firstname} ${lastname} ${hobbyCount} Hobby Number:${hobbyCount.length}`;
}

countHobby("Kan", "Tar", "test1", "test2");
