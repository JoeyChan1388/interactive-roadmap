import React from 'react'

const RoadmapContent = (props) => {
  return (
    <a href={props.path}>
    <button className="roadmap-content" style={{'margin-top': props.topmargin+'%', 'margin-left': props.leftmargin+'%'}} >
        <h1> {props.title} </h1>    
    </button>
    </a>
    
  )
}

export default RoadmapContent