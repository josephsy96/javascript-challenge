// from data.js
var tableData = data;


//For the filter button 
var filter_button = d3.select("#filter-btn");

//Filter Function
filter_button.on("click", function() {

    //Select the Date element for the input box
    var input_filter = d3.select("#datetime");

    //Value for the input element in the html file
    var date_value = input_filter.property("value");

    //Log date value and table data
    console.log(date_value);
    console.log(tableData);

    var filter_dates = tableData.filter(d_data => d_data.datetime === date_value);

    console.log(filter_dates);
    
    var date_pull = filter_dates.map(ufo_pull => ufo_pull);

    var date_filter = d3.select("tbody");


    //Appends filtered data.js to the table html
    var work_filter = date_pull.forEach((fitlered) => {
                        var new_ufo_row = date_filter.append("tr");
                        Object.entries(fitlered).forEach(([key,value]) => {
                            var new_ufo_cell = new_ufo_row.append("td");
                            new_ufo_cell.text(value);  
                        });
                    });
    return work_filter;   
});






//====================================
//Appending data into html

// var ufo_tbody = d3.select("tbody");

// //just logs the data for the data.js file
// // console.log(data);

// // data.forEach((ufo_data) => console.log(ufo_data));

// //Appends data.js to the table html
// data.forEach((ufo_data) => {
//     var ufo_row = ufo_tbody.append("tr");
//     Object.entries(ufo_data).forEach(([key,value]) => {
//         var ufo_cell = ufo_row.append("td");
//         ufo_cell.text(value);
//     });
// });
