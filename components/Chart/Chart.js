import { Bar } from 'react-chartjs-2';

function Chart({ data }) {
  return (
    <div style={{ width: '600px', height: '600px' }}>
      <Bar
        data={data}
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
