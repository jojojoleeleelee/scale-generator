import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography'
import { Scale } from '../components/Scale'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

var scale = require('music-scale');
// import logo from '../lamp-logo.png'
const types = [
  {
    value: 'major',
    label: 'Major',
  },
  {
    value: 'minor',
    label: 'Minor',
  },
  {
    value: 'mixolydian',
    label: 'Mixolydian',
  },
  {
    value: 'phrygian',
    label: 'Phrygian',
  },
  {
    value: 'dorian',
    label: 'Dorian',
  },
  {
    value: 'pentatonic',
    label: 'Pentatonic',
  },
  {
    value: 'lydian',
    label: 'Lydian',
  },
  {
    value: 'locrian',
    label: 'Locrian',
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
    value: 'Db',
    label: 'Db',
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
    value: 'Eb',
    label: 'Eb',
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
    value: 'F#',
    label: 'F#',
  },
  {
    value: 'Gb',
    label: 'Gb',
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
    value: 'Ab',
    label: 'Ab',
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
    value: 'Bb',
    label: 'Bb',
  },
  {
    value: 'B',
    label: 'B',
  },
];

class Generator extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      scale: [],
      type: 'major',
      note: 'C'
    }
  }
  handleOnSubmit = (event) => {
    alert("You chose the " + this.state.note + " " + this.state.type + " scale!");
    let generatedScale = scale.get(`${this.state.note} ${this.state.type}`)
    this.setState(state => ({
      scale: generatedScale
    }))
  }

  handleNoteChange = (event) => {
    this.setState(state => ({
      note: event.target.value
    }))
  }

  handleTypeChange = (event) => {
    this.setState(state => ({
      type: event.target.value
    }))
  }

  render(){
    return (
      <div>
        <div className="center-align">
        <br /><br />
        <br /><br />
        <br />
    
              <div className="center-align ">
             
                <Typography variant='display2' className='brown-text text-lighten-3 '>S C A L E</Typography ><br/>
                < br />
                < br />
                
                <TextField
                  id="select-scale-note"
                  select
                  label="Select"
                  value={this.state.note}
                  helperText="Please select your starting note"
                  margin="normal"
                  onChange={this.handleNoteChange} 
                >{notes.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                </TextField>
                &nbsp;&nbsp;&nbsp;
                <TextField
                  id="select-scale-type"
                  select
                  label="Select"
                  value={this.state.type}
                  helperText="Please select your scale type"
                  margin="normal"
                  onChange={this.handleTypeChange} 
                >
                {types.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
                </TextField>
                <br />
                <br />
                <br />
              <Button size='large' color='primary' className="waves-effect waves-light btn" onClick={this.handleOnSubmit}>G E N E R A T E</Button>
                <br /><br />
                {this.state.scale !== undefined || [] ? <Scale scale={this.state.scale} /> : null}
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