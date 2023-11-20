
function mortgageYears() {
    let numbers = [];
    for (let year = 1998; year <= 2022; year++) {
        numbers.push(year);
    }
    return numbers;
}

document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('q1-1').getContext('2d');
    var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                'New dwelllings',
                'Other dwellings',
                'All dwellings',
                'First-Time Buyers', 
                'Former owner occupiers'],
            datasets: [{
                data: [92726, 73915, 76253, 55112, 95728],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)' 
                ],
                borderRadius: 10,
               
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 150000,
                    title: {
                        display: true,
                        text: 'Price (£)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Type of Buyer'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Average UK house prices in 1997 Q4'
                },
                legend: {
                    display: false
                }
            }
        }
    });

    var ctx1 = document.getElementById('q1-2').getContext('2d');
    var barChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: mortgageYears(),
            datasets: [{
                data: [
                    5472, 5472, 3960, 3764, 3559, 
                    3646, 3616, 3689, 3668, 3946, 
                    3756, 2672, 2733, 2735, 2773, 
                    2799, 2804, 2788, 2748, 2695,
                    2780, 2811, 2656, 2612, 2930
                ],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.7)',
                ],
                borderRadius: 0,
               
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 6000,
                    title: {
                        display: true,
                        text: 'Cost (£)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Year'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Capital repayment mortgage plan breakdown'
                },
                legend: {
                    display: false
                }
            }
        }
    });

    var ctx2 = document.getElementById('q2-1').getContext('2d');
    var pieChart = new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ["Buyer's equity (%)", "Bank's equity (%)"],
            datasets: [{
                data: [10, 90],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                ],
               
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Equity split when the house is bought'
                },
                legend: {
                    display: true,
                }
            }
        }
    });

    var ctx3 = document.getElementById('q2-2').getContext('2d');
    var barChart = new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: [
                'London',
                'North East England',
                'West Midlands',
                'South West England', 
                'Yorkshire and the Humber'],
            datasets: [{
                data: [76772, 37051, 47242, 57593, 44984],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)' 
                ],
                borderRadius: 10,
               
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100000,
                    title: {
                        display: true,
                        text: 'Price (£)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Type of Buyer'
                    }
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Average house prices in 1997 Q4 for first time buyers in different UK regions'
                },
                legend: {
                    display: false
                }
            }
        }
    });

    var ctx4 = document.getElementById('q2-3').getContext('2d');
    var polarChart = new Chart(ctx4, {
        type: 'polarArea',
        data: {
            labels: ["House prices", "GDP", "Unemployment", "Inflation", "2 year fixed interest rate", "Income"],
            datasets: [{   
                data: [-4.44, 0.3, 3.9, 19.7, -15.69, -1.67],
                backgroundColor: [
                    '#FFB3C195',
                    '#AAE0DF95',
                    '#FFE6AC95',
                    '#E6CCFF95',
                    '#A1D0F695',
                    '#FFCFA195',
                ],
                borderColor: [
                    '#FFB3C1',
                    '#AAE0DF',
                    '#FFE6AC',
                    '#E6CCFF',
                    '#A1D0F6',
                    '#FFCFA1',                    
                ]
            
            }]
        },
        options: {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                r: {
                    min: -20, 
                    max: 20,  
                }
              },
            plugins: {
                title: {
                    display: true,
                    text: '2023 Q1 feature values fed into the nerual network'
                },
                legend: {
                    display: true,
                    position: 'top',
                }
            }
        }
    });
});

