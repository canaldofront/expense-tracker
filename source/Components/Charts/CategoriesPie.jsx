import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoriesPie = () => {
  const { categories } = useSelector((state) => state.app);

  const labels = categories.map((category) => category.title);
  const amount = labels.map(
    (label) => categories.find((category) => category.title === label).amount
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Valor Acumulado',
        data: amount,
        backgroundColor: [
          '#FD7477',
          '#359EE5',
          '#FF9F40',
          '#4BC0C0',
          '#7F60F3',
        ],
      },
    ],
  };

  return (
    <div>
      <Doughnut options={options} data={data} />
    </div>
  );
};

export default CategoriesPie;
