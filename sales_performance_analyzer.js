//Test Your Functions with Sample Data
const salesData = [
    // Array contains data that will be utilized in the coding challenge
    { name: 'Alice', sales: [12000, 15000, 13000] }, 
    { name: 'Bob', sales: [7000, 6000, 7500] },  
    { name: 'Charlie', sales: [3000, 4000, 3500] },   
    { name: 'Diana', sales: [9000, 8500, 9200] },
];

// Create a Function to Calculate Average Sales
function calculateAverageSales(sales) {
    // Compute to find average sales of each salesperson
    if(sales.length === 0){
        return 0;
    }
    // Adds all sales by each salesperson and divides by number of sales, rounds to two decimal points for cents
    const totalSales = sales.reduce((sum,current) => sum + current, 0);
    return (totalSales/ sales.length).toFixed(2);
}

// Create a Function to Determine Performance Rating
function determinePerformanceRating (averageSales){
    const salesNumber = parseFloat(averageSales);
    // if, else if, and else statements to determine rating of salesperson by sales
    if(averageSales>10000){
        return "Excellent";
    }
    else if (averageSales>=7000){
        return "Good";
    }
    else if (averageSales>=4000){
        return "Satisfactory";
    }
    else {
        return "Needs Improvement";
    }
}

// Create a Function to Identify Top and Bottom Performers
function findTopAndBottomPerformers(salesData) {

    // Reduce to find top and bottom performers
    return salesData.reduce((acc, { name, sales }) => {
        // Calculate total sales for the current salesperson
        const totalSales = sales.reduce((sum, sale) => sum + sale, 0);

        // Initialize top and bottom performers if they don't exist
        if (!acc.topPerformer || totalSales > acc.topPerformer.totalSales) {
            acc.topPerformer = { name, totalSales };
        }

        if (!acc.bottomPerformer || totalSales < acc.bottomPerformer.totalSales) {
            acc.bottomPerformer = { name, totalSales };
        }

        return acc;
    }, { topPerformer: null, bottomPerformer: null });
}

// Combine Functions to Generate a Performance Report
function generatePerformanceReport(salesData) {
    // Compute average sales and performance rating for each salesperson
    const performanceData = salesData.map(person => {
        const averageSales = calculateAverageSales(person.sales);
        const rating = determinePerformanceRating(averageSales);
        return {
            name: person.name,
            averageSales,
            rating
        };
    });

    // Find top and bottom performers
    const { topPerformer, bottomPerformer } = findTopAndBottomPerformers(salesData);

    // Create a formatted performance report 
    const report = {
        salespeople: performanceData,
        topPerformer: topPerformer ? `${topPerformer.name} with total sales of ${topPerformer.totalSales}` : 'No top performer',
        bottomPerformer: bottomPerformer ? `${bottomPerformer.name} with total sales of ${bottomPerformer.totalSales}` : 'No bottom performer'
    };

    return report;
}

// Displays performance report
const report = generatePerformanceReport(salesData);
console.log(report);