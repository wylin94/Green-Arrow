import './Graph.css'
import { Line } from 'react-chartjs-2';

// const data = {
// 	labels: ['1', '2', '3', '4', '5', '6'],
// 	datasets: [
// 		{
// 			label: '# of Votes',
// 			data: [12, 19, 3, 5, 2, 3],
// 			fill: false,
// 			backgroundColor: 'rgb(255, 99, 132)',
// 			borderColor: 'rgba(255, 99, 132, 0.2)',
// 		},	
// 	],
// };

// const options = {
// 	scales: {
// 		y: {
// 			beginAtZero: true
// 		}
// 	}
// };






// const data = {
// 	datasets: [
// 		{
// 			type: 'line',
// 			data: [{x: 10, y: 20}, {x: 15, y: 10}, {x: 12, y: 4}],
// 			backgroundColor: 'rgb(255, 255, 255)',
// 			borderColor: '#5AC53B',
// 			borderWidth: 2,
// 			pointBorderColor: 'rgb(0, 0, 0, 0)',
// 			pointBackgroundColor: 'rgb(0, 0, 0, 0)',
// 			pointHoverBackgroundColor: '#5AC53B',
// 			pointHoverBorderColor: '#000000',
// 			pointHoverBorderWidth: 4,
// 			pointHoverRadius: 6,
// 		},
// 	],
// };

// const options = {
// 	legend: {
// 		display: false
// 	},
// 	tooltips: {
// 		mode: 'index',
// 		intersect: false
// 	},	
// 	scales: {
//     y: {gridLines: {display: false}, ticks: {display: false}},
// 		x: {gridLines: {display: false}, ticks: {display: false}}
// 	}

	// scales: {
	// 	yAxes: [{
	// 		gridLines: {display: false},
	// 		ticks: {display: false}
	// 	}]
	// }

// };

function Graph({stockGraph}) {
	const xLabel = stockGraph.map(ele => ele.label)
	const yLable = stockGraph.map(ele => ele.close)

	const data = {
		labels: [...xLabel],
		datasets: [{
				// label: '# of Votes',
				data: [...yLable],
				fill: false,
				backgroundColor: 'rgb(255, 255, 255)',
				borderColor: '#00C805',
				borderWidth: 2,
				pointBorderColor: 'rgb(0, 0, 0, 0)',
				pointBackgroundColor: 'rgb(0, 0, 0, 0)',
				pointHoverBackgroundColor: '#5AC53B',
				pointHoverBorderColor: '#FFFFFF',
				pointHoverBorderWidth: 2,
				pointHoverRadius: 5,
				tension: 0.1,
		},],
	};

	// const tooltipLine = {
	// 	id: 'tooltipLine',
	// 	afterDraw: chart => {	
	// 		if (chart.tooltip._active && chart.tooltip._active.length) {
	// 			const ctx = chart.ctx;
	// 			ctx.save();
	// 			const activePoint = chart.tooltip._active[0];

	// 			ctx.beginPath();
	// 			ctx.setLineDash([5, 7])
	// 			ctx.moveTo(activePoint.element.x, chart.chartArea.top);
	// 			ctx.lineTo(activePoint.element.x, activePoint.element.y);
	// 			ctx.lineWidth= 2;
	// 			ctx.strokeStyle = 'red';
	// 			ctx.stroke();
	// 			ctx.restore(); 

	// 		}
	// 	}
	// }

	const options = {
		type: 'line',
		maintainAspectRatio: false,
		plugins: {
			legend: {display: false},
			// tooltipLine: tooltipLine
		},
		tooltips: {
			mode: 'index',
			intersect: false,
			// enabled: false
		},
		hover: {
			mode: 'index',
			intersect: false,
		},
		scales: {
			y: {grid: {display: false, borderColor: 'white'}, ticks: {display: false}},
			x: {grid: {display: false, borderColor: 'white'}, ticks: {display: false}},
		},
	};


	return(
		<div className='graphContainer'>
			<Line data={data} options={options} />
		</div>
	)
}

export default Graph;