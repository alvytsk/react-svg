import React from 'react';
import SystemList from './SystemList'
import { Button } from 'antd';

class Gnss extends React.Component {
  state = {
    Systems : {},
    StandingPoint: {}
  }

  componentDidMount() {
    // this.fetchGnss();
    this.timer = setInterval(() => this.fetchGnss(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  fetchGnss() {
    const min = 1;
    const max = 30;

    const Systems = {
      GPS: {
        use: true,
        satellites: {
          in_use: Math.floor((Math.random() * max) + min),
          in_view: 19
        }
      },
      GLONASS: {
        use: false,
        satellites: {
          in_use: Math.floor((Math.random() * max) + min),
          in_view: Math.floor((Math.random() * max) + min)
        }
      },
      BAIDU: {
        use: true,
        satellites: {
          in_use: Math.floor((Math.random() * max) + min),
          in_view: 9
        }
      }
    }
    this.setState({...this.state, Systems});
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <SystemList systems={this.state.Systems}/>
        <Button type="primary">Get data </Button>
      </div>);
  }
};

export default Gnss;