const sandwiches = [
    { name: "Thesis", price: 7.95, size: "large" },
    { name: "Dissertation", price: 8.95, size: "large" },
    { name: "Highlander", price: 6.50, size: "small" },
    { name: "Just Tuna", price: 6.50, size: "small" },
    { name: "So-La", price: 7.95, size: "large" },
    { name: "Special", price: 12.50, size: "small" }
];

function sandwichSizeRadius(size) {

    largeSandwichRadius = 30
    smallSandwichRadius = 15

    if(size == "large") {
        console.log(size);
        return largeSandwichRadius;
    }
    else {
        console.log(size);
        return smallSandwichRadius;
    }

}

function sandwichPriceColor(price) {

    largeSandwichColor = 'yellow'
    smallSandwichColor= 'green'

    if(price < 7.00) {
        console.log(price);
        return smallSandwichColor;
    }
    else {
        console.log(price);
        return largeSandwichColor;
    }

}

const svg = d3.select('svg')
    .classed('svg', true);

const circles = svg
    .selectAll('.circle')
    .data(sandwiches)
    .enter()
    .append('circle')
    .classed('circle', true)
    .attr('cx', function(d, i) { return i * 70 + 40; })
    .attr('cy', 40)
    .attr('r', (data) => sandwichSizeRadius(data.size))
    .attr('fill', (data) => sandwichPriceColor(data.price));


