import React from 'react'
import './Roadmap.css'
import RoadmapContent from './RoadmapContent';

const Roadmap = (props) => {
    return (
        <div className="roadmap">
            <RoadmapContent title={'HTML'} path={'/roadmapcontent/HTML'} topmargin={1} leftmargin={38} ></RoadmapContent>
            <RoadmapContent title={'Creating HTML Documents'} path={'/roadmapcontent/HTMLDocuments'} topmargin={8} leftmargin={36} ></RoadmapContent>
            <RoadmapContent title={'HTML Document Structure'} path={'/roadmapcontent/HTMLDocumentStructure'} topmargin={8} leftmargin={18} ></RoadmapContent>
            <RoadmapContent title={'HTML Tag'} path={'/roadmapcontent/HTMLTag'} topmargin={3} leftmargin={5} ></RoadmapContent>
            <RoadmapContent title={'Doctype'} path={'/roadmapcontent/Doctype'} topmargin={7} leftmargin={5} ></RoadmapContent>
            <RoadmapContent title={'Title'} path={'/roadmapcontent/Title'} topmargin={11} leftmargin={5} ></RoadmapContent>
        </div>
    )
}

export default Roadmap