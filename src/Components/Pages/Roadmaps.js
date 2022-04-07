//Create react component for a page named "Roadmaps"
import React from 'react'
import './RoadmapsPage.css'

function Roadmaps() {
    return (
        <div className='roadmaps-page'>
            <h1 className='roadmaps-page-header-1'>Roadmaps</h1>
            <h2 className='roadmaps-page-header-2'>Here is the list of our current roadmaps!</h2>

            <div className='buttons-container'>
                <a href='/roadmaps/html' >
                    <div className='roadmap-button'>
                        <h3 className='roadmap-button-header' style={{ 'color': 'rgb(255, 74, 74)' }}> HTML</h3>
                        <h4 className='roadmap-button-content'> Get started with HTML and create websites today! </h4>
                    </div>
                </a>

                <a href='/roadmaps/css' >
                    <div className='roadmap-button'>
                        <h3 className='roadmap-button-header' style={{ 'color': 'rgb(112, 179, 255)' }}> CSS</h3>
                        <h4 className='roadmap-button-content'> Take your websites to the next level with CSS and its styling features! </h4>
                    </div>
                </a>

                <a href='/roadmaps/csharp' >
                    <div className='roadmap-button'>
                        <h3 className='roadmap-button-header' style={{ 'color': 'rgb(255, 233, 134)' }}>CSharp</h3>
                        <h4 className='roadmap-button-content'> Csharp is one of the best progams to learn for a beginner programmer! </h4>
                    </div>
                </a>

                <a href='/roadmaps/js' >
                    <div className='roadmap-button'>
                        <h3 className='roadmap-button-header' style={{ 'color': 'rgb(160, 255, 147)' }}> Javascript</h3>
                        <h4 className='roadmap-button-content'> Add a whole new level of functionality to your website with Javascript! </h4>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Roadmaps