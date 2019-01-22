import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Typography from '@material-ui/core/Typography'
import { Scale } from '../components/Scale'
import { loadRandomScale } from '../actions/scales'
import Button from '@material-ui/core/Button';

class Random extends React.Component {
 
  handleOnClick = () => {
    this.props.loadRandomScale()
  }
  render() {
    return (
      <div className="center-align">
      < br />
      < br />
        <Typography variant='display2' className='brown-text text-lighten-3 '>Generate Random Scale</Typography ><br/>
        < br />
        < br />
      <Button size='large' color='primary' className="waves-effect waves-light btn" onClick={this.handleOnClick}>R A N D O M</Button>
        <br /><br />
        {this.props.scale !== undefined ? <Scale scale={this.props.scale} /> : null}
        <br /><br />
        <br /><br />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    scale: state.scales.scale
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadRandomScale: loadRandomScale
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Random)