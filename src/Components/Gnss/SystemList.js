import React, { useState, useEffect } from 'react';
import { Skeleton, Card, Statistic, Row, Col, Typography } from 'antd';

const { Text } = Typography;
const { Meta } = Card;

const SystemList = ({systems}) => {
    // const [list, setList] = useState(<Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>);

    console.log(systems);

    const cards = [];
    Object.entries(systems).map(
        ([key, value], index) => {
            console.log(key, value, index);

            const { in_use, in_view } = value.satellites;

            const satellites = in_use + ' / ' + in_view;

            cards.push(
                <Col span={6}>
                    <Card key={index} title={key} bordered={true} type="inner">
                        <Meta title="Satellites" />
                        <Statistic title="In Use / In View" value={satellites} />
                    </Card>
                </Col>
            );
        }
    )

    // systems.map((key, value) => {
    //     console.log(key, value);
    //     cards.push(
    //         <Card key={key} title={key} bordered={true}>
    //             123
    //         </Card>
    //     );
    // });

    // useEffect(() => setList(cards.lenght ? cards : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}/>), [systems]);

    return (
        <div>
            <Row gutter={16} justify="center" align="top">{ cards }</Row>
        </div>
    )
}

export default SystemList;