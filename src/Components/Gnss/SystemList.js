import React from 'react';
import { Skeleton, Switch, Card, Statistic, Row, Col, Typography } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Meta } = Card;

const SystemList = ({systems, changed}) => {

    const cards = [];
  
    Object.entries(systems).map(
        ([key, value], index) => {
            const { in_use, in_view } = value.satellites;
            const satellites = in_use + ' / ' + in_view;

            const using = (<Switch
                key={key}
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
                checked = { value.use }
                onClick={ changed }
              />);

            const card =  
                (
                    <Card  title={key} bordered={true} type="inner" extra={using} style={{ marginTop: 20 }}>
                        <Meta title="Satellites" />
                        <Statistic title="In Use / In View" value={satellites} />
                    </Card>
                );

            cards.push(
                <Col span={4} key={index}>
                    { card } 
                </Col>
            );
        }
    )

    return (
        <div>
            <Row gutter={16} justify="center" align="top">{ cards }</Row>
        </div>
    )
}

export default SystemList;