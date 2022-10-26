function countByUp(firstNum, finalNum) {
  if (firstNum === "" || finalNum === "") {
    return null;
  }
  if (!Number(firstNum) || !Number(finalNum)) {
    return 0;
  }
  if (Math.sign(firstNum) === -1 || Math.sign(finalNum) === -1 ) {
    return 0;
  }
}