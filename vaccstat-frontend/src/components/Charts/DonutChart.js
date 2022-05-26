import React from 'react';
import Chart from 'chart.js/auto';
import {Doughnut} from 'react-chartjs-2';

const DonutChart = () => {
    return (
    <div>
        <Doughnut 
            data={{
                labels: ['Pfizer', 'Sinovac', 'AstraZeneca', 'Moderna', 'Johnson&Jonshon', 'Sinophram',  'Sputnik'],
                datasets: [
                    {
                        data: [92934580, 56030400, 38846959, 33081500,  12725650, 10005000, 1100000,],
                        backgroundColor: [
                            'rgba(0, 55, 42, 1)',
                            'rgba(0, 93, 76, 1)',
                            'rgba(0, 132, 113, 1)',
                            'rgba(55, 173, 152, 1)',
                            'rgba(88, 201, 179, 1)',
                            'rgba(133, 244, 222, 1)',
                            'rgba(163, 255, 251, 1)',
                            ],
                        borderColor: [
                            'rgba(0, 55, 42, 1)',
                            'rgba(0, 93, 76, 1)',
                            'rgba(0, 132, 113, 1)',
                            'rgba(55, 173, 152, 1)',
                            'rgba(88, 201, 179, 1)',
                            'rgba(133, 244, 222, 1)',
                            'rgba(163, 255, 251, 1)',
                            ],
                        fill: true,
                    },
                ]
            }}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                cutout: 120,
               
                plugins: {
                    title: {
                        display: true,
                        text: 'Vaccination By Type',
                        align: 'start',
                        padding: {
                            top: 10,
                            bottom: 20,
                        },
                        font: {
                            size: 20,
                            weight: 'bold'
                        },
                    },
                    legend: {
                        align: 'center',
                        position: 'top',
                        font: {
                            weight: 'bold'
                        },
                        labels: {
                            boxWidth: 10,
                          },
                    },
                },
            }}  
            height={450}
        />
    </div>
    )
}


export default DonutChart