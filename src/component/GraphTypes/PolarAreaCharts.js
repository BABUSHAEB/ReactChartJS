import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { Container } from 'react-bootstrap';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {

    labels: ['60+ (Old)', '20-60 (Adult)', '12-20 (Teengers)', '0-12 (Children)'],
    datasets: [
        {
            label: '# of Patient',
            data: [1005, 2000, 3000, 4200],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(53, 162, 235, 0.5)',
                'rgba(53, 162, 42, 0.5)',
                'rgba(53, 16, 235, 0.5)',
            ],
            borderWidth: 1,
        },
    ],
};

export const options = {
    responsive: true,
    width: "60rem",
    height: "30rem",
    plugins: {
        legend: {
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'Patient Ratio',
        },
    },
};

export default function PolarAreaCharts() {
    return (
        <Container className='mb-3' style={{ width: "40rem", height: "20rem" }}>
            <PolarArea data={data} options={options} />
        </Container>
    )
}
