// found parts of code on canvasJS website under drill down chart

window.onload = function () {

    // TODO create two donut graphs: Expenses & income

    // Expenses graph
    var totalExpenses = 4898.58;

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

    // IncomeData
    var incomeData = {
        "Total Income": [{
            click: incomeChartDrilldownHandler,
            cursor: "pointer",
            explodeOnClick: false,
            innerRadius: "75%",
            legendMarkerType: "square",
            name: "Total Income",
            radius: "100%",
            showInLegend: true,
            startAngle: 90,
            type: "doughnut",
            dataPoints: [
                // Need to find a way to create an object for each expense on the Excel
                // The y number should change based on the Excel, will need to put variables in place
                // Colors should all be different, but warm colors for expenses: red, orange, yellow - darker for largest expense
                // Expense name will need to be a variable too
                {y: 14.27, name: "Alcohol", color: "#ef0b2e"},
                {y: 363040, name: "Amazon Prime", color: "#546BC1"},
                {y: 363040, name: "Car Loan", color: "#546BC1"},
                {y: 363040, name: "Eating Out", color: "#546BC1"},
                {y: 363040, name: "Entertainment", color: "#546BC1"},
                {y: 363040, name: "Gas", color: "#546BC1"},
                {y: 363040, name: "Groceries", color: "#546BC1"},
                {y: 363040, name: "MCTC Parking", color: "#546BC1"},
                {y: 363040, name: "Medical", color: "#546BC1"},
                {y: 363040, name: "Misc", color: "#546BC1"},
                {y: 363040, name: "Rent", color: "#546BC1"},
                {y: 363040, name: "Stocks", color: "#546BC1"},
                {y: 363040, name: "Student Loan", color: "#546BC1"},
                {y: 363040, name: "Spotify", color: "#546BC1"},
                {y: 363040, name: "Utilities", color: "#546BC1"}
            ]
        }],
    };

    // Expenses Graph options
    var expensesOptions = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Expenses"
        },
        subtitles: [{
            text: "Click to Drill Down",
            backgroundColor: "",   //#2eacd1
            fontSize: 16,
            fontColor: "Black",
            padding: 5
        }],
        legend: {
            fontFamily: "calibri",
            fontSize: 14,
            itemTextFormatter: function (e) {
                return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalExpenses * 100) + "%";
            }
        },
        data: []
    };

    // Expense drill down chart options
    var expenseDrillDownOptions = {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            labelFontColor: "#717171",
            lineColor: "#a2a2a2",
            tickColor: "#a2a2a2"
        },
        axisY: {
            gridThickness: 0,
            includeZero: false,
            labelFontColor: "#717171",
            lineColor: "#a2a2a2",
            tickColor: "#a2a2a2",
            lineThickness: 1
        },
        data: []
    };

    // Income Graph options
    var incomeOptions = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Income"
        },
        subtitles: [{
            text: "Click to Drill Down",
            backgroundColor: "",  //#2eacd1
            fontSize: 16,
            fontColor: "Black",
            padding: 5
        }],
        legend: {
            fontFamily: "calibri",
            fontSize: 14,
            itemTextFormatter: function (e) {
                return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalExpenses * 100) + "%";
            }
        },
        data: []
    };

    // Income drill down chart options
    var incomeDrillDownOptions = {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            labelFontColor: "#717171",
            lineColor: "#a2a2a2",
            tickColor: "#a2a2a2"
        },
        axisY: {
            gridThickness: 0,
            includeZero: false,
            labelFontColor: "#717171",
            lineColor: "#a2a2a2",
            tickColor: "#a2a2a2",
            lineThickness: 1
        },
        data: []
    };

    // Chart 1 Expenses on left functions ---------------------------------------------------
    var chart = new CanvasJS.Chart("chartContainer", expensesOptions);
    chart.options.data = expenseData["Total Expenses"];
    chart.render();

    function expensesChartDrillDownHandler(e) {
        chart = new CanvasJS.Chart("chartContainer", expenseDrillDownOptions);
        chart.options.data = expenseData[e.dataPoint.name];
        chart.options.title = { text: e.dataPoint.name };
        chart.render();
        $("#backButton").toggleClass("invisible");
    }

    $("#backButton").click(function() {
        $(this).toggleClass("invisible");
        chart = new CanvasJS.Chart("chartContainer", expensesOptions);
        chart.options.data = expenseData["Total Expenses"];
        chart.render();
    });

    // Chart 2 Income on right functions -------------------------------------------------------
    var chart2 = new CanvasJS.Chart("chartContainer2", incomeOptions);
    chart2.options.data = incomeData["Total Income"];
    chart2.render();

    function incomeChartDrilldownHandler(e) {
        chart2 = new CanvasJS.Chart("chartContainer2", incomeDrillDownOptions);
        chart2.options.data = incomeData[e.dataPoint.name];
        chart2.options.title = { text: e.dataPoint.name };
        chart2.render();
        $("#backButton2").toggleClass("invisible");
    }

    $("#backButton2").click(function() {
        $(this).toggleClass("invisible");
        chart2 = new CanvasJS.Chart("chartContainer2", incomeOptions);
        chart2.options.data = incomeData["Total Income"];
        chart2.render();
    });

};