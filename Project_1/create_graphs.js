function createVariablesFromJSON() {
    var expenses = ExcelToJSON();
    console.log(expenses)
}

var expenseData = {
    "Total Expenses": [{
        click: expensesChartDrillDownHandler,
        cursor: "pointer",
        explodeOnClick: false,
        innerRadius: "75%",
        legendMarkerType: "square",
        name: "Total Expenses",
        radius: "100%",
        showInLegend: true,
        startAngle: 90,
        type: "doughnut",
        dataPoints: [
            // Need to find a way to create an object for each expense on the Excel
            // The y number should change based on the Excel, will need to put variables in place
            // Colors should all be different, but warm colors for expenses: red, orange, yellow - darker for largest expense
            // Expense name will need to be a variable too
            { y: 14.27, name: "Alcohol", color: "#ef0b2e" },
            { y: 363040, name: "Amazon Prime", color: "#546BC1" },
            { y: 363040, name: "Car Loan", color: "#546BC1" },
            { y: 363040, name: "Eating Out", color: "#546BC1" },
            { y: 363040, name: "Entertainment", color: "#546BC1" },
            { y: 363040, name: "Gas", color: "#546BC1" },
            { y: 363040, name: "Groceries", color: "#546BC1" },
            { y: 363040, name: "MCTC Parking", color: "#546BC1" },
            { y: 363040, name: "Medical", color: "#546BC1" },
            { y: 363040, name: "Misc", color: "#546BC1" },
            { y: 363040, name: "Rent", color: "#546BC1" },
            { y: 363040, name: "Stocks", color: "#546BC1" },
            { y: 363040, name: "Student Loan", color: "#546BC1" },
            { y: 363040, name: "Spotify", color: "#546BC1" },
            { y: 363040, name: "Utilities", color: "#546BC1" }
        ]
    }],
};


document.getElementById('upload').addEventListener('change', createVariablesFromJSON, false);