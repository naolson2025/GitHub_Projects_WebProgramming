let canvas = document.getElementById('bridge-chart');
console.log(canvas);
let ctx = canvas.getContext('2d');

chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Verrazano-Narrows Bridge", "Golden Gate Bridge", "Mackinac Bridge", "George Washington Bridge", "Tacoma Narrows Bridge"],
        datasets: [{
            label: 'Length in Meters',
            data: [1298.4, 1280.2, 1158, 1067, 853.44],
            backgroundColor: ['red', 'blue', 'yellow', 'green', "orange"]
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});