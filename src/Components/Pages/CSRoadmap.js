import React from 'react'
import Roadmap from '../Roadmap'
import './RoadmapPage.css'

const CSRoadmap = () => {
  return (
    <div className="roadmap-container">
      <h1 className="roadmap-page-header"> Beginner Roadmap for C-Sharp </h1>
      <h2 className="roadmap-page-description"> A quick delve into C-Sharp and its many functionalities for console applications. </h2>
      <Roadmap type="Csharp"></Roadmap>
    </div>
  )
}

export default CSRoadmap