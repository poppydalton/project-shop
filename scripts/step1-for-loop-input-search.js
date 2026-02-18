const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const searchMessage = document.getElementById("searchMessage");




function renderMessage(msg) {
 searchMessage.innerHTML = `<li>${msg}</li>`;
}


searchInput.addEventListener("input", function (event) {
 // const query = event.target.value;
 // constquery = event.target.value.trim(); //remove whitespace
 const query = event
 .target
 .value
 .trim()
 .toLowerCase();


 let found = false;


 for (let i = 0; i < jsArrayData.length; i++) {
   // if (jsArrayData[i] === query) {
   // if (jsArrayData[i].toLowerCase() === query) { //if comparing lowercase only?
   if (jsArrayData[i].toLowerCase().includes(query)) { // substring matches


     found = true;
     break;
   }
 }
  if (!query) {
   renderMessage("Search items you are looking for (example: clothing)");
 } else if (found) {
   renderMessage(`Found substring match: ${query}`);
 } else {
   renderMessage(`No substring match: ${query}`);
 }
});


// initial message
renderMessage("Search items you are looking for (example: clothing or shoes)");
