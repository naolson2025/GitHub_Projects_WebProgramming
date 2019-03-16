// found parts of code on canvasJS website under drill down chart

function createGraphs(total_expense, total_income, expense_categories, income_categories, expense_drill_downs) {
    // set expense graph
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
            dataPoints: expense_categories
        }],
        expense_drill_downs
        // "Alcohol": [{
        //     color: "#E7823A",
        //     name: "Alcohol",
        //     type: "pie",
        //     dataPoints: [
        //         { x: new Date("1 Jan 2015"), y: 33000 },
        //         { x: new Date("1 Feb 2015"), y: 35960 },
        //         { x: new Date("1 Mar 2015"), y: 42160 },
        //         { x: new Date("1 Apr 2015"), y: 42240 },
        //         { x: new Date("1 May 2015"), y: 43200 },
        //         { x: new Date("1 Jun 2015"), y: 40600 },
        //         { x: new Date("1 Jul 2015"), y: 42560 },
        //         { x: new Date("1 Aug 2015"), y: 44280 },
        //         { x: new Date("1 Sep 2015"), y: 44800 },
        //         { x: new Date("1 Oct 2015"), y: 48720 },
        //         { x: new Date("1 Nov 2015"), y: 50840 },
        //         { x: new Date("1 Dec 2015"), y: 51600 }
        //     ]
        // }],
    };

    // income graph
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
            dataPoints: income_categories
        }],
    };

    // Expenses Graph options
    var expensesOptions = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: `Expenses $${total_expense.toFixed(2)}`
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
                return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / total_expense * 100) + "%";
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
            text: `Income $${total_income.toFixed(2)}`
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
                return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / total_income * 100) + "%";
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
        // console.log(e);
        // console.log(e.dataPoint.name);
        // console.log(expenseData.expense_drill_downs);

        chart = new CanvasJS.Chart("chartContainer", expenseDrillDownOptions);
        //chart.options.data = expenseData[e.dataPoint.name];
        //chart.options.data = expenseData[expense_drill_downs.name[e.dataPoint.name]];

        //console.log(expense_drill_downs);
        expenseData.expense_drill_downs.forEach(function (category) {
            // console.log(category);

            if (category[0].name.toString() === e.dataPoint.name.toString()){
               chart.options.data = category;
               // console.log(chart.options.data)
                //console.log("Success");
           }
        });

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