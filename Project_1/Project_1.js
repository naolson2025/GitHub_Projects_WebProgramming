window.onload = function () {

    // TODO create two donut graphs: Expenses & income

    // Expenses graph
    var totalExpenses = 4898.58;
    var expenseData = {
        "Total Expenses": [{
            click: visitorsChartDrilldownHandler,
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
        // Need to create a data set for each expense in the Excel
        "Alcohol": [{
            color: "#E7823A",
            name: "Alcohol",
            type: "pie",
            dataPoints: [
                { x: new Date("1 Jan 2015"), y: 33000 },
                { x: new Date("1 Feb 2015"), y: 35960 },
                { x: new Date("1 Mar 2015"), y: 42160 },
                { x: new Date("1 Apr 2015"), y: 42240 },
                { x: new Date("1 May 2015"), y: 43200 },
                { x: new Date("1 Jun 2015"), y: 40600 },
                { x: new Date("1 Jul 2015"), y: 42560 },
                { x: new Date("1 Aug 2015"), y: 44280 },
                { x: new Date("1 Sep 2015"), y: 44800 },
                { x: new Date("1 Oct 2015"), y: 48720 },
                { x: new Date("1 Nov 2015"), y: 50840 },
                { x: new Date("1 Dec 2015"), y: 51600 }
            ]
        }],
        "Amazon Prime": [{
            color: "#546BC1",
            name: "Amazon Prime",
            type: "column",
            dataPoints: [
                { x: new Date("1 Jan 2015"), y: 22000 },
                { x: new Date("1 Feb 2015"), y: 26040 },
                { x: new Date("1 Mar 2015"), y: 25840 },
                { x: new Date("1 Apr 2015"), y: 23760 },
                { x: new Date("1 May 2015"), y: 28800 },
                { x: new Date("1 Jun 2015"), y: 29400 },
                { x: new Date("1 Jul 2015"), y: 33440 },
                { x: new Date("1 Aug 2015"), y: 37720 },
                { x: new Date("1 Sep 2015"), y: 35200 },
                { x: new Date("1 Oct 2015"), y: 35280 },
                { x: new Date("1 Nov 2015"), y: 31160 },
                { x: new Date("1 Dec 2015"), y: 34400 }
            ]
        }]
    };

    var newVSReturningVisitorsOptions = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "New VS Amazon Prime"
        },
        subtitles: [{
            text: "Click on Any Segment to Drilldown",
            backgroundColor: "#2eacd1",
            fontSize: 16,
            fontColor: "white",
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

    var visitorsDrilldownedChartOptions = {
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

    var chart = new CanvasJS.Chart("chartContainer", newVSReturningVisitorsOptions);
    chart.options.data = expenseData["Total Expenses"];
    chart.render();

    function visitorsChartDrilldownHandler(e) {
        chart = new CanvasJS.Chart("chartContainer", visitorsDrilldownedChartOptions);
        chart.options.data = expenseData[e.dataPoint.name];
        chart.options.title = { text: e.dataPoint.name };
        chart.render();
        $("#backButton").toggleClass("invisible");
    }

    $("#backButton").click(function() {
        $(this).toggleClass("invisible");
        chart = new CanvasJS.Chart("chartContainer", newVSReturningVisitorsOptions);
        chart.options.data = expenseData["Total Expenses"];
        chart.render();
    });

};