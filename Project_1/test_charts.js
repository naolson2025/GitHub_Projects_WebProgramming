// found parts of code on canvasJS website under drill down chart

function createGraphs(total_expense, total_income, expense_object, income_object) {

    // TODO create two donut graphs: Expenses & income

    // set total expenses
    var totalExpenses = total_expense;
    // Set total income
    var totalIncome = total_income;

    // set expense graph
    var expenseData = expense_object;

    // income graph
    var incomeData = income_object;

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
                return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalIncome * 100) + "%";
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

}