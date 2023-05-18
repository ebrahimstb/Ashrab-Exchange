
import React from 'react'
import { Line } from 'react-chartjs-2';
import { Col, Row,  Typography } from 'antd';

const { Title } = Typography

const LineChart = ({coinHistory, currentPrice, coinName}) => {
    const coinprice = [];
    const coinTimestamp = [];   

    for(let i = 0; i < coinHistory?.data?.history?.length; i+= 1) {
        coinprice.push(coinHistory?.data?.history[i].price)
        coinTimestamp.push(new Date(coinHistory?.data.histoy[i].coinTimestamp).toLocaleDateString())
    }
    //this works only on premium plans
    // const data = {
    //     labels: coinTimestamp,
    //     datasets: [
    //         {
    //             label: 'price in USD ',
    //             data: coinprice, 
    //             fill: false, 
    //             backgroundColor: '#0071bd', 
    //             borderColor: '#0071bd'
    //         }
    //     ]
    // }
    // const options = {
    //     scales: {
    //         yAxes: [
    //             {
    //                 ticks: {
    //                     beginAtZero: true
    //                 }
    //             }
    //         ]
    //     }
    // }

  return (
    <>
        <Row className='chart-header'>
            <Title level={2} className='chart-title'>{coinName} price Chart</Title>
            <Col className='price-container'>
                <Title level={5} className='price-change'>{coinHistory?.data?.change}%</Title>
                <Title level={5} className='current-price'>current {coinName} Price: $ {currentPrice}</Title>
            </Col>
        </Row>
    {/* //this works only on premium plans */}
        {/* <Line data={data} options={options} /> */}
    </>
      )
}

export default LineChart