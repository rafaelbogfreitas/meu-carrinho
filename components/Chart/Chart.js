import { Bar } from 'react-chartjs-2';

function Chart({ orders }) {
  const formatData = (data) => {
    const chart = {
      dates: [],
      totals: [],
    };

    data.forEach((order) => {
      const date = formatTimesStamp(order.updatedAt);

      if (!chart.dates.includes(date)) {
        chart.dates.push(date);
        chart.totals.push(order.total);
      } else {
        chart.totals[chart.totals.length - 1] += order.total;
      }
    });

    return chart;
  };

  const formatTimesStamp = (date) => {
    const [year, month, day] = date.split('-');
    return `${day.slice(0, 2)}/${month}/${year}`;
  };

  return (
    <div style={{ width: '600px', height: '600px' }}>
      <Bar
        data={{
          labels: formatData(orders).dates,
          datasets: [
            {
              label: 'Valor',
              data: formatData(orders).totals,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
              ],
            },
          ],
        }}
        options={{
          maintainAspectRatio: true,
          title: {
            display: true,
            text: 'Controle de vendas',
            fontSize: 25,
          },
          legend: {
            display: true,
          },
        }}
      />
    </div>
  );
}

export default Chart;
