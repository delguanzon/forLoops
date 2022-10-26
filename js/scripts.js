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
  const outputNums = [];
  for(let i = countByNum; i <= countToNum; i+=countByNum) {
    outputNums.push(i);
  }  
  return outputNums;
}

// UI Logic

function handleFormSubmission() {
  // Retrieve count-to number
  const countTo = document.getElementById("countToNum").value;
  // Retrieve count-by number
  const countBy = document.getElementById("countByNum").value;
  // Pass nums to bussiness logic
  const output = countByUp(countBy, countTo);
  // Display results
  const p = document.createElement("p");
  //  Count to: #
  p.append("Count To: " + countTo)
  //  Count by: #
  p.append("Count By: " + countBy)
  //  Output: #, #, # ...
  p.append("Output: " + output)
  // Add p elements to body
  const body = document.querySelector("body");
  body.append("p");
};

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault;
      handleFormSubmission();
  });
});
