// import data with d3 and json and set dropdown menu to names array
let data = []
// read the json file in and set it to a variable. Then set that variable to the empty array "data"
d3.json("samples.json").then((sample) => {
    console.log(sample);
    data = sample;

    // 
    data['names'].forEach(dropDownMenu => {
        d3.select("#selDataset")
        .append("option")
        .text(dropDownMenu)
        .property("value",dropDownMenu)
    });
});