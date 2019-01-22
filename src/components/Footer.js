import React from 'react';
import Typography from '@material-ui/core/Typography'

export const Footer = () => {

  return (
    <footer className="page-footer indigo lighten-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
          <Typography className="gold-text text-lighten-1" variant='display1' >S C A L E &spades; G E N </Typography>
            <p className="grey-text text-lighten-4">Your Virtual Key Generator</p>
            <p className="grey-text left-align text-lighten-4">Generate the scale that you want, whenever you want!</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="/">Generator</a></li>
              <li><a className="grey-text text-lighten-3" href='/about'>About</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2018 Copyright Joanne Lee
        <a className="grey-text text-lighten-4 right" href="/about">About</a>
        </div>
      </div>
    </footer>
  )
}