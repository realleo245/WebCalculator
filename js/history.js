var numEntries = 0;
function updateHistory() {
    var table = document.getElementById("history");
    var entry = table.insertRow(-1);
    var key = entry.insertCell(-1);
    var value = entry.insertCell(-1);
    var input = window.localStorage.getItem(numEntries);
    key.innerHTML = input.split(":")[0];
    value.innerHTML = input.split(":")[1];
    numEntries++;
    console.log("History updated with" + key.innerHTML + value.innerHTML); 
}