import {useEffect} from 'react';
import Chart from 'chart.js/auto'
import {Doughnut, Line, Pie, Bar} from 'react-chartjs-2';
import {getAdminProducts} from '../../actions/productAction';
import {useSelector, useDispatch} from 'react-redux';
import {getAllOrders} from '../../actions/orderAction';
import {getAllUsers} from '../../actions/userAction';
import MetaData from '../Layouts/MetaData';

const MainData = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAdminProducts());
        dispatch(getAllOrders());
        dispatch(getAllUsers());
    }, [dispatch]);


    const years = ['2017', '2018', '2019', '2020', '2021', '2022']

    const lineState = {
        labels: years,
        datasets: [
            {
                label: `Percentage of Library Staff Providing Electronic Services`,
                borderColor: '#8A39E1',
                backgroundColor: '#8A39E1',
                // toolTipContent: "Week {x}: {y}%",
                data: [
                    {x: 1, y: 15},
                    {x: 2, y: 19},
                    {x: 3, y: 13},
                    {x: 4, y: 27},
                    {x: 5, y: 19},
                    {x: 6, y: 19}
                ],
            },
        ],
    };


    const lineState2 = {
        labels: years,
        datasets: [
            {
                label: `Number of Downloads per Document Digitized`,
                borderColor: '#8A39E1',
                backgroundColor: '#8A39E1',
                // toolTipContent: "Week {x}: {y}%",
                data: [
                    {x: 1, y: 1465},
                    {x: 2, y: 900},
                    {x: 3, y: 1113},
                    {x: 4, y: 830},
                    {x: 5, y: 754},
                    {x: 6, y: 830}
                ],
            },
        ],
    };

    const pieState = {
        labels: ['Scientific ,Educational', 'Seminars, Conferences', 'Outreach activities'],
        datasets: [
            {
                backgroundColor: ['#9333ea', '#facc15', '#4ade80'],
                hoverBackgroundColor: ['#a855f7', '#fde047', '#86efac'],
                data: [14, 23,19],
            },

        ],
    };

    const doughnutState = {
        labels: ['Digital active users', 'Active users'],
        datasets: [
            {
                backgroundColor: ['#ef4444', '#22c55e'],
                hoverBackgroundColor: ['#dc2626', '#16a34a'],
                data: [22, 100 - 22],
            },
        ],
    };

    const barState = {
        labels: years,
        datasets: [
            {
                label: "Collection Turnover",
                borderColor: '#22c55e',
                backgroundColor: '#22c55e',
                hoverBackgroundColor: '#22c55e',
                data: [
                    {x: 1, y: 4.60},
                    {x: 2, y: 2.90},
                    {x: 3, y: 3.70},
                    {x: 4, y: 2.20},
                    {x: 5, y: 1.90},
                    {x: 6, y: 3.10}
                ],
            },
        ],
    };
    const barState2 = {
        labels: years,
        datasets: [
            {
                label: "Library Visits per Capital",
                borderColor: '#facc15',
                backgroundColor: '#facc15',
                hoverBackgroundColor: '#facc15',
                data: [
                    {x: 1, y: 12},
                    {x: 2, y: 8},
                    {x: 3, y: 7},
                    {x: 4, y: 8},
                    {x: 5, y: 12},
                    {x: 6, y: 3}
                ],
            },
        ],
    };
    return (
        <>
            <MetaData title="OKRs And KPIs"/>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-6">
                <div className="flex flex-col bg-purple-600 text-white gap-2 rounded-xl shadow-lg hover:shadow-xl p-6">
                    <h4 className="text-gray-100 font-medium">Collection Turnover</h4>
                    <h2 className="text-2xl font-bold">4.6</h2>
                </div>
                <div className="flex flex-col bg-red-500 text-white gap-2 rounded-xl shadow-lg hover:shadow-xl p-6">
                    <h4 className="text-gray-100 font-medium">Digitized Documents per 1000 Documents</h4>
                    <h2 className="text-2xl font-bold">78</h2>
                </div>
                <div className="flex flex-col bg-yellow-500 text-white gap-2 rounded-xl shadow-lg hover:shadow-xl p-6">
                    <h4 className="text-gray-100 font-medium">Downloads per Document Digitized</h4>
                    <h2 className="text-2xl font-bold">25782</h2>
                </div>
                <div className="flex flex-col bg-green-500 text-white gap-2 rounded-xl shadow-lg hover:shadow-xl p-6">
                    <h4 className="text-gray-100 font-medium">Expenditure on Information Provision Spent on the
                        Electronic Collection</h4>
                    <h2 className="text-2xl font-bold">29.54 %</h2>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-8 min-w-full">
                <div className="bg-white rounded-xl h-auto w-full shadow-lg p-2">
                    <Line data={lineState}/>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                    <span className="font-medium uppercase text-gray-800">Activities 2022</span>
                    <Pie data={pieState}/>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-8 min-w-full mb-6">
                <div className="bg-white rounded-xl h-auto w-full shadow-lg p-2">
                    <Bar data={barState}/>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                    <span className="font-medium uppercase text-gray-800">Digital Users Status</span>
                    <Doughnut data={doughnutState}/>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-8 min-w-full">
                <div className="bg-white rounded-xl h-auto w-full shadow-lg p-2">
                    <Line data={lineState2}/>
                </div>

                <div className="bg-white rounded-xl h-auto w-full shadow-lg p-2">
                    <Bar data={barState2}/>
                </div>
            </div>
        </>
    );
};

export default MainData;
