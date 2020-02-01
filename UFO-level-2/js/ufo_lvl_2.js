//From data.js
let ufo_table = data;

//For the dropdown menus

let filter_button = d3.select("filter");

filter_button.on("click", function() {

    //Select the date input
    let date_input = d3.select("datetime");

    let date_value = date_input.property("value");

    console.log('datetime id selected');
    console.log(date_value);


    let filtered_date = ufo_table.filter(info => info.datetime);
    let fitlered_city = ufo_table.filter(city_info => city_info.city);

    

});



$(document).ready(function(){
    for( index in ufo_table.city ) {
        $("#city-dropdown").append('.dropdown-item');
    }
});

let city_select = d3.select("#city-dropdown");

ufo_table.forEach((city) => {
    let city_item = city_select.append("a");
    Object.defineProperties(city).forEach(([key,value]) => {
        let city_cell = city_item.append("a");
        city_cell.text(value);
    });
});