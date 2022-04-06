import React from 'react'

const RoadmapContent = (props) => {
  return (
    <button className="roadmap-content" style={{'marginTop': props.topmargin+'%', 'marginLeft': props.leftmargin+'%'}} onClick={props.onClick} >
        <h1> {props.title} </h1>    
    </button>
    
  )
}

export default RoadmapContent