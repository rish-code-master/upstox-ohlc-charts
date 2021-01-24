import axios from 'axios';
import Config from '../config';


export const getHistoricalDataPoints = async (interval) => {

  console.log("interval = "+interval);
  
  //const headers = {'Accept-Encoding': 'gzip'};  // If set throws Error, not accepted
    try {
      // fetch data from a url endpoint
      const response = await axios.get(`${Config.API_URL}/api/historical?interval=${interval}`);

      if (response.status !== 200) return [{ x: new Date("2017-01-01"), y: [22.60, 23.55, 22.01, 22.64] }];

      console.log("response.data = ",response.data);

      const csvArray = (interval > 1) ? response.data.slice((interval -1)*200) : response.data;

      const dataPoints = csvArray.map(csv => {
        const tokens = csv.split(',');
        return {
            x: new Date(parseInt(tokens[0])),
            y: [
                parseFloat(tokens[1]), 
                parseFloat(tokens[2]), 
                parseFloat(tokens[3]), 
                parseFloat(tokens[4]), 
            ]
        };
      });
      return dataPoints;
    } catch (error) {
      console.log(error);
    }
  }
  