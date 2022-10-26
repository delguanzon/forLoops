function countByUp(countByNum, countToNum) {
  if (countToNum === "" || countByNum === "") {
    return null;
  }
  if (!Number(countToNum) || !Number(countByNum)) {
    return 0;
  }
  if (Math.sign(countToNum) === -1 || Math.sign(countByNum) === -1 ) {
    return 0;
  }
  if (countByNum > countToNum) {
    return 0;
  }
  
}