import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title} = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'cryptocurrency', count: simplified ? 6 : 12})
console.log(cryptoNews);
  if(!cryptoNews?.value) return 'Loading...';

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news) =>(
        <Col xs={24} sm={12} lg={8}>
          <Card hoverable className='news-card'>
            <a href={news.url} target="blank" rel="noreferrer">
              <div className='news-image-container'>
                <Title className='news-title' level={4}>
                  {news.name}
                </Title>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News