import React from 'react'
import Roadmap from '../Roadmap'
import './RoadmapPage.css'

const HTMLRoadmap = () => {
  return (
    <div className="roadmap-container">
        <h1 className="roadmap-page-header"> HTML Roadmap </h1>
        <h1 className="roadmap-page-description"> Learn the fundamentals of HTML and start creating your own websites today! </h1>
        <Roadmap type="HTML"></Roadmap>
    </div>
  )
}

export default HTMLRoadmap