
function getAscending(){
  // Selecting the input element and get its value 
  var parent = document.getElementById('result');
  var inputVal = document.getElementById("myInput").value;
  if (inputVal === '') {
    alert("Please provide an input");
    return;
  }
  var b = inputVal.split(' ').map(function(item) {
    return parseFloat(item, 10);
  });
  for (var x = 0; x < b.length; x++) {
    if (isNaN(b[x])) {
      alert("Please enter only numbers!");
      return;
    }
  }
  b.sort();
  // Displaying the value
  var z = document.createElement('p'); // is a node
  z.innerHTML = b;
  parent.appendChild(z);
}
function getDescending(){
  // Selecting the input element and get its value 
  var parent = document.getElementById('result');
  var inputVal = document.getElementById("myInput").value;
  if (inputVal === '') {
    alert("Please provide an input");
    return;
  }
  var res = inputVal.split(' ').map(function(item) {
    return parseFloat(item, 10);
  });
  for (var x = 0; x < res.length; x++) {
    if (isNaN(res[x])) {
      alert("Please enter only numbers!");
      return;
    }
  }
  res.sort(function(a, b){return b-a});
  // Displaying the value
  var z = document.createElement('p'); // is a node
  z.innerHTML = res;
  parent.appendChild(z);
}