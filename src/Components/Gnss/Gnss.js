import React from 'react';
import SystemList from './SystemList'
import System from './System'
import OsmMap from './OsmMap'
import InfoPanel from './InfoPanel'
import StandingPoint from './StandingPoint'
import Status from './Status'

class Gnss extends React.Component {
  state = {
    Systems : {},
    StandingPoint: {},
    Parameters: {
      InProgress: []
    },
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

    const Parameters = {
      ...this.state.Parameters,
      status: "Normal",
      InProgress: []
    }

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
    this.setState({Parameters: Parameters});
    // console.log(this.state);
  }

  changeSystem = (checked, event) => {
    console.log(checked, event);
    var glonass = {...this.state.Systems};
    glonass.GLONASS.use = {checked};
    this.setState({glonass});

    var params = {...this.state.Parameters};
    params['InProgress'].push("Systems");
    params.status = "Warning";
    this.setState({params});
  }

  render() {
    return (
      <div>
        {/* <InfoPanel /> */}
        <Status status={this.state.Parameters.status}/>
        <SystemList systems={this.state.Systems} inProgress={this.state.Parameters['InProgress'].includes('Systems')} changed={(checked, event) => this.changeSystem(checked, event)}/>
        <br /><p/>
        <StandingPoint />
        <br /><p/>
        <OsmMap />
      </div>);
  }
};

export default Gnss;