// import data with d3 and json
d3.json('samples.json').then((data) => {
    console.log(data);
});

// // filter data by select from drop down
// let dropDown = d3.select("#selDataset");
// dropDown.on("change", runFilter);

// function runFilter() {
//     d3.event.preventDefault();
//     let inputId = d3.select("#selDataset");
//     let inputValue = inputId.property('value');
//     console.log(inputValue);

//     let filterId = data.
// }

// // slice and sort bar graph of top ten OTUs by sample selected
// // sort the data
// function barGraph(filterId) {
//     let sortedByOTU = filterId.sort( (a,b) => b.)
    
// }

// // Sort the data by Greek search results
// let sortedByGreekSearch = data.sort( (a,b) => b.greekSearchResults - a.greekSearchResults);
// // Slice the first 10 objects for plotting
// let slicedData = sortedByGreekSearch.slice(0, 10);

// // Reverse the array to accommodate Plotly's defaults
// let reversedData = slicedData.reverse();
