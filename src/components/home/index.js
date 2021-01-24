import * as React from 'react';
import HistoricalChart from '../historical-chart';
import "./_styles.css"; 

export const Home = () => {

    const[interval, setInterval] = React.useState(1); 

    const incrementInterval = e => {
        console.log("incrementInterval - interval = "+interval);
        if (interval <= 12) {
            setInterval(interval => interval + 1);
        }
    }
    const decrementInterval = e => {
        console.log("decrementInterval - interval = "+interval);
        if (interval > 1) {
            setInterval(interval => interval - 1);
        }
    }


    return (  
        <>  

        <div className="chart">
            <HistoricalChart interval={interval} />
        </div>
        <div className="prevNextBtnContainer">
        <ul className="pagination lead justify-content-center mb-0">
            <li className="page-item">
                <a className="page-link" href="#!" onClick={decrementInterval}>&laquo; Previous</a>
            </li>
            <li className="page-item">
                <a className="page-link" href="#!" onClick={incrementInterval}>Next &raquo;</a>
            </li>
        </ul>
        </div>
        </>
    );
};

export default Home;