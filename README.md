# Belly Button Biodiversity Dashboard

## Overview

This project involves creating an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dashboard visualizes the microbial species found in human navels, highlighting the most prevalent operational taxonomic units (OTUs).

The project is based on the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Features
- **Horizontal Bar Chart**: Displays the top 10 OTUs found in an individual, using `sample_values` for the chart values, `otu_ids` for the labels, and `otu_labels` for the hover text.
- **Bubble Chart**: Visualizes each sample with `otu_ids` as the x-values, `sample_values` as both the y-values and marker sizes, and `otu_labels` for text values.
- **Metadata Display**: Shows demographic information about the individuals from whom navel samples were taken, dynamically updating with each sample selected.
- **Dropdown selector**: Allows to switch between individuals' results.

## Technologies Used
- JavaScript
- D3.js for data loading and manipulation
- Plotly.js for creating interactive charts
- HTML/CSS for webpage layout and styling

## Project Structure

The project is organized as follows:

- `static/`: 
  - `css`: 
    - `styles.css`: additional styles to meet the requirements for color of HTML elements
  - `js`
    - `app.js`: JavaScript applicaiton code that performs all the logic

- `index.html`: a web page with interactive analytics
- `samples.json`: JSON file that contains a whole Belly Button Biodiversity dataset. Can be used for reference purposes.

## Installation

1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/NataliiaShevchenko620/belly-button-challenge.git
cd belly-button-challenge
```
2. Open `index.html` in your web browser to view the dashboard locally.

## Usage

This application is also deployed on GitHub Pages. You can access it [here](https://NataliiaShevchenko620.github.io).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.






