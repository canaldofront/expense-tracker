import React from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

const Balance = () => {
  const { transactions } = useSelector((state) => state.app);
  Chart.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const getMonth = (date) => {
    return date?.toDate().toLocaleString('pt-BR', { month: 'long' });
  };

  const getBalance = (labels, type, transactions) => {
    return labels.map((label) => {
      return transactions
        .filter((transaction) => getMonth(transaction.date) === label)
        .filter((transaction) => transaction.type === type)
        .reduce((acc, cur) => acc + cur.amount, 0);
    });
  };

  const labels = [
    ...new Set(
      [...transactions]
        .sort((a, b) => a.date?.toDate() - b.date?.toDate())
        .map((transaction) => getMonth(transaction.date))
    ),
  ];

  const incomes = getBalance(labels, 'income', transactions);
  const expenses = getBalance(labels, 'expense', transactions);

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: incomes,
        backgroundColor: '#7f60f3',
      },
      {
        label: 'Dataset 2',
        data: expenses,
        backgroundColor: '#fd7477',
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default Balance;
