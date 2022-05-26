import React from 'react';
import Chart from 'chart.js/auto';
import {Bar} from 'react-chartjs-2';

const BarChart = () => {
    return (
    <div>
        <Bar 
            data={{
                labels: ['CAR', 'Ilocos Region', 'Cagayan Valley', 'Central Luzon', 'CALABARZON', 'NCR', 'MIMAROPA',
                'Bicol Region', 'Western Visayas', 'Central Visayas', 'Eastern Visayas', 'Zamboanga Peninsula',
                'Northen Mindanao', 'Davao Region', 'SOCCSKSARGEN', 'CARAGA', 'BARMM'],
                datasets: [
                    {
                        data: [1228831, 3823141, 2615771, 8578563, 10652010, 12677621, 1836711, 3635821, 5086474,
                            4665244, 2881259, 2285233, 3180326, 3336554, 2675137, 1713309, 1203349],
                        backgroundColor: [  
                            'rgba(0, 44, 31, 1)',
                            'rgba(0, 55, 42, 1)',
                            'rgba(0, 67, 52, 1)',
                            'rgba(0, 80, 64, 1)',
                            'rgba(0, 93, 76, 1)',
                            'rgba(0, 105, 88, 1)',
                            'rgba(0, 118, 100, 1)',
                            'rgba(0, 132, 113, 1)',
                            'rgba(5, 145, 126, 1)',
                            'rgba(36, 159, 139, 1)',
                            'rgba(55, 173, 152, 1)',
                            'rgba(72, 187, 166, 1)',
                            'rgba(88, 201, 179, 1)',
                            'rgba(104, 216, 193, 1)',
                            'rgba(119, 230, 208, 1)',
                            'rgba(133, 244, 222, 1)',
                            'rgba(148, 255, 236, 1)',
                            'rgba(163, 255, 251, 1)',
    
                                ],
                        borderColor: [
                            'rgba(0, 44, 31, 1)',
                            'rgba(0, 55, 42, 1)',
                            'rgba(0, 67, 52, 1)',
                            'rgba(0, 80, 64, 1)',
                            'rgba(0, 93, 76, 1)',
                            'rgba(0, 105, 88, 1)',
                            'rgba(0, 118, 100, 1)',
                            'rgba(0, 132, 113, 1)',
                            'rgba(5, 145, 126, 1)',
                            'rgba(36, 159, 139, 1)',
                            'rgba(55, 173, 152, 1)',
                            'rgba(72, 187, 166, 1)',
                            'rgba(88, 201, 179, 1)',
                            'rgba(104, 216, 193, 1)',
                            'rgba(119, 230, 208, 1)',
                            'rgba(133, 244, 222, 1)',
                            'rgba(148, 255, 236, 1)',
                            'rgba(163, 255, 251, 1)',
                            ],
                        fill: true,
                        barPercentage: 1,
                        categoryPercentage: 1,
                        borderRadius: 5,
                    },
                ]
            }}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        display: false,
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                    },
                    },
                plugins: {
                    title: {
                        display: true,
                        text: 'Local Breakdown',
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
                        text: ' Total doses per region',
                        align: 'start',
                        padding: {
                            bottom: 20,
                        },
                        font: {
                            size: 12,
                        },
                    },
                    legend: {
                        display: false,
                    },
                    // datalabels: {
                    //     color: 'white',
                    //   }
                },
            }}  
            height={600}
            width={350}
        />
    </div>
    )
}


export default BarChart