import React from 'react';
import SystemList from './SystemList'

class Gnss extends React.Component {
  state = {
    Systems : {},
    StandingPoint: {},
    Parameters: {},
    fetching: {
      inProgress: true,
      status: ""
    }
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
      // BAIDU: {
      //   use: true,
      //   satellites: {
      //     in_use: Math.floor((Math.random() * max) + min),
      //     in_view: 9
      //   }
      // }
    }
    this.setState({Systems: Systems});
    // console.log(this.state);
  }

  changeSystem = (checked, event) => {
    console.log(checked, event);
    var glonass = {...this.state.Systems}
    glonass.GLONASS.use = {checked};
    this.setState({glonass})
  }

  render() {
    return (
      <div>
        <SystemList systems={this.state.Systems} changed={(checked, event) => this.changeSystem(checked, event)}/>
      </div>);
  }
};

export default Gnss;