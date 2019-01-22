import React from 'react';

export const Scale = (props) => {
  const notes = props.scale.map((note, i) => {
    return <span key={i}> {note}</span>
  })

  return (
    <div className="row">
      <div className="col s12">
        <h2 className="brown-text center-align">{notes}</h2><br/>
        <div className="col s6 center-align" >
          
        </div>
          <br />
          
        </div>
      </div>
  )
}