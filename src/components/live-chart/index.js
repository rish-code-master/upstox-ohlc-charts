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

import React from 'react';
import io from "socket.io-client";
import useWindowSize from '../../hooks/useWindowSize';
import "./_styles.css";
import { FixedSizeList } from 'fixed-size-list'
import * as Util from '../../util';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export const LiveChart = () => {

  let windowSize = useWindowSize();
  let chartHeight = windowSize.height - 240;

  const _chart = React.useRef();
  const _dataPoints = React.useMemo(() => new FixedSizeList(300), []);

  const [chartOptions, setChartOptions] = React.useState({});


  const [socket, setSocket] = React.useState(null);
  const [socketConnected, setSocketConnected] = React.useState(false);
  const [subscribed, setSubscribed] = React.useState(false);

  const subscribeFn = () => {
    socket.emit('sub', {state: true});
    setSubscribed(true);
  }

  const unsubscribeFn = () => {
    console.log("unsubscribeFn----1");
    socket.emit('unsub', {state: false});
    setSubscribed(false);
  }

  const subscribeLiveData = React.useCallback(subscribeFn, [socket]);
  const unsubscribeLiveData = React.useCallback(unsubscribeFn, [socket])



  // establish socket connection
  React.useEffect(() => {
    const _clientSocket = io('http://kaboom.rksv.net/watch');
    setSocket(_clientSocket);
  }, []);

  // subscribe to the socket event
  React.useEffect(() => {
    if (!socket) return;

    if (socketConnected) {
      console.log("socketConnected----0");
      subscribeLiveData();
      return;
    }

    socket.on('connect', () => {
      console.log("SOCKET CONNECTED!!");
      setSocketConnected(socket.connected);
      subscribeLiveData();
    });

    socket.on('disconnect', () => {
      setSocketConnected(socket.connected);
    });

    socket.on('data', (data, ack) => {
      const tokens = data.trim().split(',');
      let dp = {
        x: new Date(parseInt(tokens[0])),
        y: [
            parseFloat(tokens[1]), 
            parseFloat(tokens[2]), 
            parseFloat(tokens[3]), 
            parseFloat(tokens[4]), 
        ]
      };
      _dataPoints.add(dp);

      if (_dataPoints.length % 10 === 0) {
        const newChartOptions = Util.getOptionsForLiveChart([..._dataPoints.data], chartHeight);
        setChartOptions(newChartOptions);
      }
      ack(1);
    });
  
    socket.on('error', (error) => {
      console.log('socket error - ',error);
    });

    return () => {
      unsubscribeLiveData();
    }


  }, [socket, subscribeLiveData, unsubscribeLiveData, _dataPoints, chartHeight, socketConnected]);

return (  
  <> 
  <div className="socket-status">{`Socket Connected: ${socketConnected}`}</div> 
  <div className="live-chart">
      <CanvasJSChart id="chartContainer" options = {chartOptions} ref={_chart} className="chart"/>
  </div>
  <div className="subUnsubBtnContainer lead text-center mb-0">
    <button type="button" className="btn btn-outline-primary mx-1" onClick={subscribeLiveData} disabled={subscribed}>Subscribe</button>
    <button type="button" className="btn btn-light mx-1" onClick={unsubscribeLiveData} disabled={!subscribed}>Unsubscribe</button>
  </div>
  </>
);

}
  

export default LiveChart;