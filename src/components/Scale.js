import React from 'react';

export const Scale = (props) => {
  const notes = props.scale.notes.map((note, i) => {
    return <li key={i}>{note.quantity} {note.item.name}</li>
  })

  return (
    <div className="row">
      <div className="col s12">
        <h2 className="center-align">{props.scale}</h2><br/>
        <div className="col s6 center-align" >
          
        </div>
          <br />
          
        </div>
      </div>
  )
}