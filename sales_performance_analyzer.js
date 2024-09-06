const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] }, 
    { name: 'Bob', sales: [7000, 6000, 7500] },  
    { name: 'Charlie', sales: [3000, 4000, 3500] },   
    { name: 'Diana', sales: [9000, 8500, 9200] },
];

function calculateAverageSales(sales) {
    if(sales.length === 0){
        return 0;
    }
    const totalSales = sales.reduce((sum,current) => sum + current, 0);
    return totalSales/ sales.length;
}

function determinePerformanceRating (averageSales){
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
        "Needs Improvement";
    }
}