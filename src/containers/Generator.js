import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import logo from '../lamp-logo.png'

class Generator extends React.Component {

  render(){
    return (
      <div>
        <div className="center-align">
        <br /><br />
        <br /><br />
        <br />

          <Link to="/about">
            <span>

            <h1 className="brown-text text-lighten-3">S C A L E &spades; G E N E R A T O R</h1>

              <br />
              <br /><br />
              <br /><br />
              <br /><br />
            </span>
          </Link>
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