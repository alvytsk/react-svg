import React from 'react';
import { Card, Statistic } from 'antd';
import { QuestionCircleOutlined, 
    CheckCircleOutlined, 
    WarningOutlined, 
    CloseCircleOutlined } from '@ant-design/icons';

const Status = ({status}) => {

    var text = "Unknown";
    var icon = <QuestionCircleOutlined />;
    var style = { color: "grey"}

    switch (status) {
        case "Normal":
            icon = <CheckCircleOutlined />;
            text = "Normal";
            style = { color: "#52c41a"}
            break;
        case "Warning":
            icon = <WarningOutlined />;
            text = "Warning";
            style = { color: "#faad14"}
            break;
        case "Failed":
            icon = <CloseCircleOutlined />;
            text = "Failed";
            style = { color: "#f5222d"}
            break;
        default:
            icon = <QuestionCircleOutlined />;
            text = "Unknown";
            style = { color: "grey"}
    }

    return (
        <div>
            <Card bordered={false}>
                <Statistic
                    title="Gnss module status"
                    value={text}
                    valueStyle={style}
                    prefix={icon}
                />
            </Card>
              
        </div>
    );
};

export default Status;