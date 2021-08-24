import styles from './chart.module.css'
import Plot from 'react-plotly.js';
//remove below line and use getJson to fetch
import dat from './trial.json'; //temproary to file details

const getJson = (name)=>{
    const path=`./${name}`
    fetch(path).then(
        response=>response.json()
    ).then(
        result=>console.log(result)
    ).catch(err=>console.log(err))
}


function unpack(rows, key,format=false) {
    return rows.map(function(row) {
      if (!format) return row[key];
      if (format==='int') return parseInt(row[key]);
      if (format==='float') return parseFloat(row[key]);
      return row[key];
    });
  }

function compare (obj1,obj2){
    return Date.parse(obj1.DATE)-Date.parse(obj2.DATE)
}

function formatData(data,keys) {
    data.sort(compare) 
    return [ 
        {
            x :unpack(data,keys.date),
            close:unpack(data,keys.close,'float'),
            decreasing: {line: {color: 'red'}},
            high:unpack(data,keys.high,'float'),
            increasing: {line: {color: 'black'}},
            low:unpack(data,keys.low,'float'),
            open: unpack(data,keys.open,'float'),
            type: 'candlestick', 
            xaxis: 'x', 
            yaxis: 'y',
            line: {color: 'rgba(31,119,180,1)'},
        },
    ]
}

function layoutConfig(titleString){
    return {
        dragmode: 'zoom',
        title: titleString, 
        margin: {
        r: 10, 
        t: 25, 
        b: 40, 
        l: 60
        },
        showlegend: false, 
        xaxis: {
        autorange: true, 
        domain: [0, 1], 
        range: ['2007-01-01', '2021-09-01'], 
        rangeslider: {range: ['2007-01-01', '2021-09-01']}, 
        title: 'Date', 
        type: 'date'
        }, 
        yaxis: {
        autorange: true, 
        domain: [0, 1], 
        range: [50, 1500], 
        type: 'linear'
        } 
    }
}

const StockChart= () =>{
    //plotly support https://plotly.com/javascript/candlestick-charts/
    // lib react-plotly https://github.com/plotly/react-plotly.js/blob/master/README.md
    //const url='https://stocks-cwrz7epcxa-el.a.run.app'
    //example:https://stocks-cwrz7epcxa-el.a.run.app/stocks/BSE500112
    const variable='BSE500112'
    const KEYS = {
        close: 'CLOSE',
        date: 'DATE',
        high: 'HIGH',
        last: 'LAST',
        low: 'LOW',
        net: 'NET_TURNOV',
        shrs: 'NO_OF_SHRS',
        trades: 'NO_TRADES',
        open: 'OPEN',
        prevClose: 'PREVCLOSE',
        remark: 'TDCLOINDI'
      }

    return (
        <div className={styles.chart}>
            <div className={styles.chartPiece}>
                <Plot
                    data={formatData(dat,KEYS)}
                    layout={layoutConfig('Historical '+ variable)}
                />
            </div>
        </div>
    )
}

export default StockChart;