import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography'
import { Scale } from '../components/Scale'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// import logo from '../lamp-logo.png'
const types = [
  {
    value: 'major',
    label: 'MAJOR',
  },
  {
    value: 'minor',
    label: 'MINOR',
  },
  {
    value: 'mixolydian',
    label: 'MIXOLYDIAN',
  },
  {
    value: 'phrygian',
    label: 'PHRYGIAN',
  },
  {
    value: 'dorian',
    label: 'DORIAN',
  },
];

const notes = [
  {
    value: 'C',
    label: 'C',
  },
  {
    value: 'C#',
    label: 'C#',
  },
  {
    value: 'D',
    label: 'D',
  },
  {
    value: 'D#',
    label: 'D#',
  },
  {
    value: 'E',
    label: 'E',
  },
  {
    value: 'F',
    label: 'F',
  },
  {
    value: 'G',
    label: 'G',
  },
  {
    value: 'G#',
    label: 'G#',
  },
  {
    value: 'A',
    label: 'A',
  },
  {
    value: 'A#',
    label: 'A#',
  },
  {
    value: 'B',
    label: 'B',
  },
];

class Generator extends React.Component {
  state = {
    type: 'major',
    note: 'C'
  };


  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render(){
    return (
      <div>
        <div className="center-align">
        <br /><br />
        <br /><br />
        <br />
    
              <div className="center-align">
             
                <Typography variant='display2' className='brown-text text-lighten-3 '>S C A L E</Typography ><br/>
                < br />
                < br />
                <TextField
                  id="select-scale-type"
                  select
                  label="Select"
                  value={this.state.type}
                  onChange={this.handleChange('type')}
                  helperText="Please select your scale type"
                  margin="normal"
                >
                {types.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                </TextField>
                <br />
                <TextField
                  id="select-scale-note"
                  select
                  label="Select"
                  value={this.state.note}
                  onChange={this.handleChange('note')}
                  helperText="Please select your starting note"
                  margin="normal"
                >{notes.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                </TextField>
                <br />
              <Button size='large' color='primary' className="waves-effect waves-light btn" onClick={this.handleOnClick}>G E N E R A T E</Button>
                <br /><br />
                {this.props.scale !== undefined ? <Scale scale={this.props.scale} /> : null}
                <br /><br />
                <br /><br />
              </div>
              <br /><br />
              <br /><br />

        </div>
      </div>
    )
  }
}
// <img src={logo} alt="lamp-logo" height="300" className="blink_me"/><br /><br />

const mapStateToProps = (state) => {
  return {
    site: state.site
  }
}



export default connect(mapStateToProps)(Generator)