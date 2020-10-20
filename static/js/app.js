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
        .property("value", dropDownMenu)
    });
});

// listens for when there is a change to the selDataset, when there is a change then it runs function updateDisplay
d3.selectAll('#selDataset').on("change", handleSubmit); 

// function to to populate displays wit the selected value in selDataset

function handleSubmit() {
    // use this to prevent the page from refreshing... may or may not be necessary.
    d3.event.preventDefault();

    // select the value from the dropdown
    let selectedId = d3.select('#selDataset').node().value;
    console.log(selectedId);

    // build your plots
    buildPlots(selectedId);
    //demogInfoBox(selectedId);
};

// create a function that creates a bar chart that displays the top 10 OTUs found in the individual
function buildPlots(anyVariable) {

    let filteredSamples = data.samples.filter(cow => cow.id === anyVariable);

    console.log(filteredSamples);

    let top10OTUs = filteredSamples[0]["sample_values"].slice(0,10);
    console.log(top10OTUs);
    //let reverseOrder = top10OTUs.reverse();
    //console.log(reverseOrder);
};





// create a function that displays each sample
//function buildBubblePlot(selectedId)



// populate the html box with key value pairs from the metadata of the selected ID
//function demogInfoBox(selectedId)