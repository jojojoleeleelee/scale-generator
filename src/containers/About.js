import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import logo from '../lamp-logo.png'


class About extends React.Component {

  render(){
    return (
      <div>
        <div className="center-align">
        <br />
        <br />
          <Link to="/">
            <span>
            <h3 className="brown-text text-lighten-3"><strong>S C A L E &spades; G E N</strong></h3>
            <br />
            _______________________________________
            <br />
            _______________________________________
            <br />
              <h5 className="brown-text text-lighten-2">
                  <br />Ever wondered how to play a F sharp Mixolydian scale? 
                  <strong>
                  <br />
                  <br />
                  <br />Well, now you can easily generate any scale of your choice! </strong>
                  <br />
                  <br />
                  <br /> Generate the scale you want, right now! </h5>
              <br />
              <br /><br />
              _______________________________________
            <br />
            _______________________________________
              <br /><br />
                <h5 className='brown-text text-lighten-4'>created by &copy; jojoleelee</h5>
              <br /><br />
              <br /><br />
            </span>
          </Link>
        </div>
      </div> 
    )
  }
}

// <img src={logo} alt="lamp-logo" height="300" />

const mapStateToProps = (state) => {
  return {
    site: state.site
  }
}



export default connect(mapStateToProps)(About)