import React from 'react';
import { Space, Row, Col, Alert } from 'antd';
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "./Leaflet.css";

const OsmMap = () => {

    return (
        <Row>
            <Col span={12} offset={6}>
                <Map center={[23.156004, -81.249357]} zoom={17} style={{ "height" : "300px" }}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                <Marker position={[23.156004, -81.249357]}>
                </Marker>
                </Map>
            </Col>
        </Row>
    );
};

export default OsmMap;