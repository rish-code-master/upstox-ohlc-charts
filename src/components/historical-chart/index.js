/**
 * Copyright (c) 2021 Upstox
 *
 * long description for the file
 *
 * @summary App Component
 * @author Rishabh <rishabh.it.007@gmail.com>
 *
 * Created at     : 2021-01-16 05:00:00 
 * Last modified  : 2021-06-06 05:00:00
 */
import React from 'react';
import "./_styles.css";
import * as Util from '../../util';
import * as KaboomAPI from '../../api-kaboom';
import useWindowSize from '../../hooks/useWindowSize';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const HistoricalChart = ({interval}) => {

    const _chart = React.useRef();

    const [chartOptions, setChartOptions] = React.useState({});

    let windowSize = useWindowSize();
    let chartHeight = windowSize.height - 240;
    console.log("windowHeight = ",windowSize.height);
    console.log("chartHeight = ",chartHeight);

    React.useEffect(() => {
        async function getNewChartOptions() {
            const dataPoints = await KaboomAPI.getHistoricalDataPoints(interval);
            console.log("dataPoints --> ", dataPoints);
            const newChartOptions = Util.getOptionsForHistoryChart(dataPoints, chartHeight);
            setChartOptions(newChartOptions);
          }
          getNewChartOptions();
      }, [chartHeight, interval]);


  return (
    <div>
		<CanvasJSChart id="chartContainer" options = {chartOptions} ref={_chart} className="chart"/>
	</div>
  );
}
export default HistoricalChart;