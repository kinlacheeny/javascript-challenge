// from data.js
var tableData = data;

// YOUR CODE HERE!
function showTable(tableData) {
    var tbody = d3.select(".table").select("tbody");
    tbody.html("");
    tableData.forEach((i) => {
      var row = tbody.append("tr");
      Object.entries(i).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };
  
  //write tabledata to html
  showTable(tableData);
  
  //Create Event Listener for filter button
  var button1 = d3.select("#filter-btn");
  button1.on("click", function() {
    var inputElement1 = d3.select("#datetime");
    var inputValue = inputElement1.property("value");
    var filteredData = tableData.filter(function(event){
        if(inputValue !== null && inputValue !== ""){
            return event.datetime === inputValue;};
            return event.datetime;
          });
  
    //write filtered table to html
    showTable(filteredData);
  });
  
  //clear the form filters and show full table
  function resetForm(element) {
    element.form.reset();
    showTable(tableData);
  };
  