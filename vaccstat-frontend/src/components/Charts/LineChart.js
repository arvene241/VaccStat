import React from 'react';
import Chart from 'chart.js/auto';
import {Line} from 'react-chartjs-2';
import gradient from 'chartjs-plugin-gradient';
//import ChartDataSource from 'chartjs-plugin-datasource';

Chart.register(gradient);
//Chart.plugins.register(ChartDatasourcePrometheusPlugin);
//Chart.plugins.register(ChartDataSource);

const LineChart = () => {
    return (
    <div>
        <Line 
            data={{
                labels: ['May 12', 'May 13','May 14', 'May 15', 'May 16', 'May 17', 'May 18', 'May 19', 'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25'],
                datasets: [
                    {
                        label: 'Booster Dose',
                        data: [26365488, 26353019, 26313803, 26373413, 26401570, 26432664, 26494264, 26527446, 26566235, 26566235, 26583731, 26608904, 26647633, 26697054],
                        gradient: {
                            backgroundColor: {
                              axis: 'y',
                              colors: {
                                0: 'rgba(255, 255, 255, 0.2)',
                                15: 'rgba(54, 240, 151, 0.4)'
                              },
                            },
                        },
                        pointBackgroundColor: [
                            'rgba(54, 240, 151, 1)',
                        ],
                        borderColor: [
                            'rgba(54, 240, 151, 1)',
                        ],
                        fill: true,
                        pointRadius: 3,
                    },

                    {
                        label: 'Second Dose',
                        data: [72358215, 72414337, 72429487, 72437180, 72488171, 72547531, 72612379, 72739576, 73054103, 73081650, 73086409, 74379479, 74423663, 74723656],
                        gradient: {
                            backgroundColor: {
                              axis: 'y',
                              colors: {
                                0: 'rgba(255, 255, 255, 0.2)',
                                50: 'rgba(30, 214, 255, 0.6)'
                              },
                            },
                        },
                        pointBackgroundColor: [
                            'rgba(30, 214, 255, 1)',
                        ],
                        borderColor: [
                            'rgba(30, 214, 255, 1)',
                        ],
                        fill: true,
                        pointRadius: 3,
                    },

                    {
                        label: 'First Dose',
                        data: [81538869, 81574889, 81585568, 81586577, 81594970, 81603641, 81748813, 81817359, 81904453, 81956257, 81958402, 82003110, 82058102, 82058957],
                        gradient: {
                            backgroundColor: {
                              axis: 'y',
                              colors: {
                                0: 'rgba(255, 255, 255, 0.2)',
                                90: 'rgba(38, 138, 255, 0.6)'
                              },
                            },
                        },
                        pointBackgroundColor: [
                            'rgba(38, 138, 255, 0.6)',
                        ],
                        borderColor: [
                            'rgba(38, 138, 255, 0.6)',
                        ],
                        fill: true,
                        pointRadius: 3,
                    },
                
                ]
            }}
            options={{
                maintainAspectRatio: false,
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
                elements: {
                    line: {
                        borderJoinStyle: 'round',
                        tension: 0.1,
                        borderWidth: 1,
                    },
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'Vaccination Trends',
                        align: 'start',
                        padding: {
                            top: 10,
                            bottom: 5,
                        },
                        font: {
                            size: 20,
                            weight: 'bold'
                        },
                    },
                    subtitle: {
                        display: true,
                        text: ' Daily doses in the last 14 days',
                        align: 'start',
                        padding: {
                            bottom: 20,
                        },
                        font: {
                            size: 12,
                        },
                    },
                    legend: {
                        align: 'end',
                        position: 'bottom',
                        font: {
                            weight: 'bold'
                        },
                        labels: {
                            boxWidth: 10,
                          },
                        //reverse: true, 
                    },
                },
            }}  
            height={500}
        />
    </div>
    )
}


export default LineChart