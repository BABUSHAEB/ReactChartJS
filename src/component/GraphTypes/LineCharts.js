import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';
import { Container } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom'
        },
        title: {
            display: true,
            text: 'Patient Case',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: '60+ (Old)',
            data: [100, 2000, 3000, 4200, 3000, 3435, 4400],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: '20-60 (Adult)',
            data: [1203, 111, 4250, 4200, 800, 4210, 521],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: '12-20 (Teengers)',
            data: [2823, 1245, 3245, 1050, 3808, 1002, 3211],
            borderColor: 'rgb(53, 162, 42)',
            backgroundColor: 'rgba(53, 162, 42, 0.5)',
        },
        {
            label: '0-12 (Children)',
            data: [1128, 2800, 1025, 4005, 2003, 3050, 2310],
            borderColor: 'rgb(53, 16, 111)',
            backgroundColor: 'rgba(53, 16, 235, 0.5)',
        },
    ],
};

export default function LineCharts() {
    return (
        <>
            <Container style={{ width: "60rem", height: "30rem" }}>

                <Line options={options} data={data} />

            </Container>

        </>
    )
}







