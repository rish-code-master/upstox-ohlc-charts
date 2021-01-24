/**
 * Copyright (c) 2021
 *
 * long description for the file
 *
 * @summary App Component
 * @author Rishabh <rishabh.it.007@gmail.com>
 *
 * Created at     : 2021-01-16 05:00:00 
 * Last modified  : 2021-01-16 05:00:00 
 */
import moment from 'moment';
import is_mobile from 'ismobilejs';

const deviceQueryObject = is_mobile(navigator.userAgent);

export const currentTime = () => moment().format("HH:mm");
export const currentDay = () => moment().format('dddd');
export const currentDate = () => moment().format("DD MMMM YYYY");
export const currentYear = () => moment().format("YYYY");

export const isMobile = () => deviceQueryObject.any && !deviceQueryObject.tablet;
export const isTablet = () => deviceQueryObject.any && deviceQueryObject.tablet;
export const isMobileORTablet = () => deviceQueryObject.any || deviceQueryObject.tablet;

export const getOptionsForHistoryChart = (dataPointsArray, chartHeight) => {

  let startYear = dataPointsArray[0].x.getFullYear();
  let endYear = dataPointsArray[dataPointsArray.length -1].x.getFullYear();
  let fyString = `FY - ${endYear} - ${startYear}`;

  return {
      height: chartHeight,
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2",
      zoomEnabled: true, 
      zoomType: "xy",
      exportFileName: "Upstox-StockChart",
      title:{
          text: fyString,
          fontColor: "#007bff",
          fontSize: 33,
      },
      axisX: {
          interval:1,
          intervalType: "month",
          valueFormatString: "MMM"
      },
      axisY: {
          prefix: "$",
          title: "Price (in USD)"
      },
      data: [{
          type: "ohlc",
          yValueFormatString: "$###0.00",
          xValueFormatString: "MMM YYYY",
          dataPoints: dataPointsArray
      }]
  }
}

export const getOptionsForLiveChart = (dataPointsArray, chartHeight) => {
    let curentDateTime = dataPointsArray[0].x;
    let currentDateTimeFormatted = moment(curentDateTime).format("DD-MMM-YYYY hh:mm:ss");
  
    return {
        height: chartHeight,
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        zoomEnabled: true, 
        zoomType: "xy",
        exportFileName: "Upstox-StockChart",
        title:{
            text: currentDateTimeFormatted,
            fontColor: "#007bff",
            fontSize: 20,
            padding: 20,
        },
        axisX: {
            interval:2,
            intervalType: "second",
            valueFormatString: "hh:mm:ss",
            fontSize: 20,
            labelAngle: 45,
            labelFontSize: 15,
        },
        axisY: {
            prefix: "$",
            title: "Price (in USD)",
            labelFontSize: 15,
        },
        data: [{
            type: "ohlc",
            yValueFormatString: "$###0.00",
            xValueFormatString: "hh:mm:ss",
            dataPoints: dataPointsArray
        }]
    }
  }
