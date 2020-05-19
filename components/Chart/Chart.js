import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

function Chart({ orders }) {
  const [ordersChart, setOrdersChart] = useState(orders);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [showClear, setShowClear] = useState(false);

  useEffect(() => {
    if (start && end) {
      setShowClear(true);
      const startTime = new Date(start).getTime();
      const endTime = new Date(end).getTime();

      const updatedOrdersChart = orders.filter((order) => {
        const orderTime = new Date(order.updatedAt).getTime();
        return orderTime > startTime && orderTime < endTime;
      });

      setOrdersChart(updatedOrdersChart);
      return;
    }

    setOrdersChart(orders);
  }, [start, end, orders]);

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
    <>
     <label htmlFor="start">Start</label>
      <input
        type="date"
        name="start"
        id="start"
        value={start || ''}
        onChange={(event) => setStart(event.target.value)}
      />
      <label htmlFor="end">End</label>
      <input
        type="date"
        name="end"
        id="end"
        value={end || ''}
        onChange={(event) => setEnd(event.target.value)}
      />
      {showClear && (
        <button
          onClick={() => {
            setShowClear(false);
            setStart(null);
            setEnd(null);
          }}
        >
          Clear
        </button>
      )}
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
    </>
  );
}

export default Chart;
