// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the metadata field from the dataset
    let metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    // Convert sample variable to int before comparison to match the data type of data.metadata.id, which is int ("metadata":[{"id": 940))
    let resultArray = metadata.filter(sampleObj => sampleObj.id === parseInt(sample));

    let result = resultArray[0];

    // Use d3 to select the panel with id of #sample-metadata
    let panel = d3.select("#sample-metadata");

    // Use .html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, use d3 to append new tags for each key-value in the filtered metadata.
    // Convert keys to uppercase to match the format
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`)
    });
  });
}

// Function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the samples field
    let samples = data.samples;
    
    // Filter the samples for the object with the desired sample number
    // There is no need to convert sample variable to int, because data.samples.id has string data type ("samples":[{"id": "940")
    let resultArray = samples.filter(sampleObj => sampleObj.id === sample);
    let result = resultArray[0];
    
    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = result.otu_ids;
    let otu_labels = result.otu_labels;
    let sample_values = result.sample_values;
    
    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    // Because the source data is sorted by sample_values in descending order, to get top 10 records, method slice(0, 10) is applied
    // However, for the required bar chart format (showing bigger values on top) 
    // the sample values and two other related lists should be sorted in ascending order, therefore, reverse() method is applied to these lists then
    
    // Build a Bar Chart
    let barData = [{
      x: sample_values.slice(0, 10).reverse(),
      y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
      text: otu_labels.slice(0, 10).reverse(),
      type: 'bar',
      orientation: 'h'  // Set horizontal bars
    }];

    // Render the Bar Chart
    // Define margins to meet the required design
    let barLayout = {
      title: 'Top 10 Bacteria Cultures Found',
      margin: { t: 30, l: 150 }
    };

    // Draw a new bar plot within the HTML elemened with id = 'bar'
    Plotly.newPlot('bar', barData, barLayout);
    
    // Build a Bubble Chart
    let bubbleData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth'
      }
    }];

    // Render the Bubble Chart
    // Define margin to meet the required design
    let bubbleLayout = {
      title: 'Bacteria Cultures Per Sample',
      margin: { t: 50 },
      hovermode: 'closest',
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Number of Bacteria' }
    };

    // Draw a new bubble plot within the HTML elemened with id = 'bubble'
    Plotly.newPlot('bubble', bubbleData, bubbleLayout);
  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    // Get the names field from the dataset
    let names = data.names;

    // Use d3 to select the dropdown with id of #selDataset
    let dropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    names.forEach((sample) => {
      dropdown
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Get the first sample from the list
    let firstSample = names[0];

    // Build charts and metadata panel with the first sample
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
