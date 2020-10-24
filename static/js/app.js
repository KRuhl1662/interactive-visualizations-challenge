// import data with d3 and json and set dropdown menu to names array
let data = []
// read the json file in and set it to a variable. Then set that variable to the empty array "data"
d3.json("samples.json").then((sample) => {
    console.log(sample);
    data = sample;

    // 
    data['names'].forEach(dropDownMenu => {
        d3.select("#selDataset")
        // option is the html element
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
    demogInfoBox(selectedId);
};

// create a function that creates and updates bar chart and bubble chart based on selected id
function buildPlots(anyVariable) {

    // filter the data to the sample selected
    let filteredSamples = data.samples.filter(cow => cow.id === anyVariable);
    console.log(filteredSamples);

    // bar chart - that displays the top 10 OTUs found in the individual
    let top10OTUs = filteredSamples[0]["sample_values"].slice(0,10);
    console.log(top10OTUs);
    // reverse the order to accomidate plotly plotting orders
    let reverseOrder = top10OTUs.reverse();
    console.log(reverseOrder);

    // now we need to get corresponding ids and labels
    let top10OTUsIds = filteredSamples[0]["otu_ids"].slice(0,10);
    console.log(top10OTUsIds);
    let reverseOrderIds = top10OTUsIds.reverse();
    console.log(reverseOrderIds);

    let top10OTUsNames = filteredSamples[0]["otu_labels"].slice(0,10);
    console.log(top10OTUsNames);
    let reverseOrderNames = top10OTUsNames.reverse();
    console.log(reverseOrderNames);

    // create the trace
    let trace1 = {
        x: top10OTUs,
        y: top10OTUsIds.map(object => `OTU ${object}`),
        text: top10OTUsNames,
        type: "bar",
        orientation: "h"
    };

    // bar chart plotting time
    let dataTrace = [trace1];

    let layout = {
        title: `Top 10 OTUs for ${anyVariable}`,
        xaxis:{title: "number of samples"}
    };

    Plotly.newPlot('bar', dataTrace, layout);

    // Bubble Chart

    let trace2 = {
        x: filteredSamples[0]["otu_ids"],
        y: filteredSamples[0]["sample_values"],
        text: filteredSamples[0]["otu_labels"],
        mode: 'markers',
        marker: {
            size: filteredSamples[0]["sample_values"],
            sizeref: 1.15,
            color: filteredSamples[0]["otu_ids"],
            colorscale: 'Earth'
        }
    };

    let dataTrace2 = [trace2];

    let layout2 = {
        title: `OTU Samples for ${anyVariable}`,
        xaxis:{title: "number of samples"}
    };

    Plotly.newPlot('bubble', dataTrace2, layout2);

};


// populate the html box with key value pairs from the metadata of the selected ID
//function demogInfoBox(selectedId)

function demogInfoBox(selectedID) {
    // have to use the == because the sample name is a string and the metadata id is a integer
    // used variables like cow, chicken, anyVariable, anotherVariable to remind myself these can be anything and are not specific words that have to be used. Would use more professional variables in a work setting... please don't dock points
    let filteredMetadata = data.metadata.filter(chicken => chicken.id == selectedID);
    //console.log(data.metadata);
    console.log(filteredMetadata);
};