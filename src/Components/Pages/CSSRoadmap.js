import React from 'react'
import Roadmap from '../Roadmap'
import './RoadmapPage.css'

const CSSRoadmap = () => {
  return (
    <div className="roadmap-container">
        <h1 className="roadmap-page-header"> Beginner Roadmap for CSS </h1>
        <h2 className="roadmap-page-description"> A quick delve into CSS for styling and laying out your web applications. </h2>
        <Roadmap type="CSS"></Roadmap>
    </div>
  )
}

export default CSSRoadmap