import React from 'react'
import Roadmap from '../Roadmap'
import './RoadmapPage.css'

const JSRoadmap = () => {
  return (
    <div className="roadmap-container">
        <h1 className="roadmap-page-header"> Roadmap for Javascript </h1>
        <h2 className="roadmap-page-description"> Javascript can make your HTML websites infinitely more functional and awesome! </h2>
        <Roadmap type="JS"></Roadmap>
    </div>
  )
}

export default JSRoadmap