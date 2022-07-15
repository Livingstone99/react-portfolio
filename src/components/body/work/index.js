import React from 'react'
import Separator from '../../../common/social-content/seperator'
import { WorkData } from '../../../data/work'
import WorkCard from './work-card'
import './work.css'
import { Card, Col, Row } from 'antd'
import 'antd/dist/antd.css'

function Work() {
  const data = WorkData

  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      {/* <div className="work-list">
                {data.map((item)=>{
                    return (
                     <WorkCard item={item} />     
                    )
                })}
            </div> */}

      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card  title="Raaxo Synergy" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Xearth inc." bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={8}>
            <Card title="ASIN5" bordered={false}>
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Work
