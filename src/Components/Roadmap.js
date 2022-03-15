import React from 'react'
import './Roadmap.css'
import RoadmapContent from './RoadmapContent';

const Roadmap = (props) => {
    if (props.type === 'HTML') {
        return (
            <div className="roadmap">
                <RoadmapContent title={'HTML'} path={'/roadmapcontent/HTML'} topmargin={1} leftmargin={38} ></RoadmapContent>
                <RoadmapContent title={'Creating HTML Documents'} path={'/roadmapcontent/HTMLDocuments'} topmargin={8} leftmargin={36} ></RoadmapContent>

                <RoadmapContent title={'HTML Document Structure'} path={'/roadmapcontent/HTMLDocumentStructure'} topmargin={8} leftmargin={18} ></RoadmapContent>
                <RoadmapContent title={'HTML Tag'} path={'/roadmapcontent/HTMLTag'} topmargin={3} leftmargin={5} ></RoadmapContent>
                <RoadmapContent title={'Doctype'} path={'/roadmapcontent/Doctype'} topmargin={7} leftmargin={5} ></RoadmapContent>
                <RoadmapContent title={'Title'} path={'/roadmapcontent/Title'} topmargin={11} leftmargin={5} ></RoadmapContent>

                <RoadmapContent title={'Elements'} path={'/roadmapcontent/HTMLElements'} topmargin={8} leftmargin={55} ></RoadmapContent>
                <RoadmapContent title={'Head + Body + Div'} path={'/roadmapcontent/HTMLHeadBodyDiv'} topmargin={3} leftmargin={66} ></RoadmapContent>
                <RoadmapContent title={'Headings + Paragraphs'} path={'/roadmapcontent/HTMLHeadingsParagraphs'} topmargin={8} leftmargin={66} ></RoadmapContent>
                <RoadmapContent title={'Tables + Lists'} path={'/roadmapcontent/HTMLTablesLists'} topmargin={13} leftmargin={66} ></RoadmapContent>

                <RoadmapContent title={'Attributes'} path={'/roadmapcontent/HTMLAttributes'} topmargin={23} leftmargin={55} ></RoadmapContent>
                <RoadmapContent title={'Hyperlinks'} path={'/roadmapcontent/HTMLHyperlinks'} topmargin={19} leftmargin={66} ></RoadmapContent>
                <RoadmapContent title={'Images'} path={'/roadmapcontent/HTMLImages'} topmargin={23} leftmargin={66} ></RoadmapContent>
                <RoadmapContent title={'Title + Lang'} path={'/roadmapcontent/HTMLTitlesLang'} topmargin={27} leftmargin={66} ></RoadmapContent>

                <RoadmapContent title={'Accepting User Input'} path={'/roadmapcontent/HTMLUserInput'} topmargin={45} leftmargin={36} ></RoadmapContent>

                <RoadmapContent title={'Events'} path={'/roadmapcontent/HTMLDocumentStructure'} topmargin={45} leftmargin={22} ></RoadmapContent>
                <RoadmapContent title={'Media Events'} path={'/roadmapcontent/HTMLTag'} topmargin={41} leftmargin={5} ></RoadmapContent>
                <RoadmapContent title={'Keyboard Events'} path={'/roadmapcontent/Doctype'} topmargin={45} leftmargin={5} ></RoadmapContent>
                <RoadmapContent title={'Mouse Events'} path={'/roadmapcontent/Title'} topmargin={49} leftmargin={5} ></RoadmapContent>

                <RoadmapContent title={'Forms'} path={'/roadmapcontent/HTMLElements'} topmargin={45} leftmargin={55} ></RoadmapContent>
                <RoadmapContent title={'Label'} path={'/roadmapcontent/HTMLHeadBodyDiv'} topmargin={41} leftmargin={66} ></RoadmapContent>
                <RoadmapContent title={'Input Elements'} path={'/roadmapcontent/HTMLHeadingsParagraphs'} topmargin={45} leftmargin={66} ></RoadmapContent>
                <RoadmapContent title={'Input Validation'} path={'/roadmapcontent/HTMLTablesLists'} topmargin={49} leftmargin={66} ></RoadmapContent>

                <RoadmapContent title={'Finish'} path={'#'} topmargin={65} leftmargin={38} ></RoadmapContent>
            </div>
        )
    } else if (props.type === 'CSS') {
        const columnwidth = 14;
        return (
            <div className="roadmap">
                <RoadmapContent title={'CSS'} path={'/roadmapcontent/CSS'} topmargin={1} leftmargin={columnwidth * 2 + 3} ></RoadmapContent>
                <RoadmapContent title={'Implementing CSS'} path={'/roadmapcontent/ImplementingCSS'} topmargin={8} leftmargin={columnwidth * 2} ></RoadmapContent>

                <RoadmapContent title={'Inline CSS'} path={'/roadmapcontent/InlineCSS'} topmargin={8} leftmargin={columnwidth * 3} ></RoadmapContent>
                <RoadmapContent title={'Internal CSS'} path={'/roadmapcontent/InternalCSS'} topmargin={12} leftmargin={columnwidth * 3} ></RoadmapContent>
                <RoadmapContent title={'External CSS'} path={'/roadmapcontent/ExternalCSS'} topmargin={16} leftmargin={columnwidth * 3} ></RoadmapContent>
                <RoadmapContent title={'Linking CSS Files'} path={'/roadmapcontent/LinkingCSS'} topmargin={16} leftmargin={columnwidth * 4} ></RoadmapContent>

                <RoadmapContent title={'CSS Styling'} path={'/roadmapcontent/StylingCSS'} topmargin={26} leftmargin={columnwidth * 2} ></RoadmapContent>

                <RoadmapContent title={'Layouts'} path={'/roadmapcontent/InlineCSS'} topmargin={26} leftmargin={columnwidth * 3} ></RoadmapContent>
                <RoadmapContent title={'Flexbox + Grid'} path={'/roadmapcontent/InlineCSS'} topmargin={22} leftmargin={columnwidth * 4} ></RoadmapContent>
                <RoadmapContent title={'Font Sizes + Families'} path={'/roadmapcontent/InlineCSS'} topmargin={26} leftmargin={columnwidth * 4} ></RoadmapContent>
                <RoadmapContent title={'Padding + Margins'} path={'/roadmapcontent/InlineCSS'} topmargin={31} leftmargin={columnwidth * 4} ></RoadmapContent>

                <RoadmapContent title={'Colors and Backgrounds'} path={'/roadmapcontent/InternalCSS'} topmargin={44} leftmargin={columnwidth * 3} ></RoadmapContent>
                <RoadmapContent title={'Fonts'} path={'/roadmapcontent/InlineCSS'} topmargin={40} leftmargin={columnwidth * 4} ></RoadmapContent>
                <RoadmapContent title={'Hexadecimal and RGB'} path={'/roadmapcontent/InlineCSS'} topmargin={44} leftmargin={columnwidth * 4} ></RoadmapContent>
                <RoadmapContent title={'Image as BG'} path={'/roadmapcontent/InlineCSS'} topmargin={49} leftmargin={columnwidth * 4} ></RoadmapContent>

                <RoadmapContent title={'Transitions and Animations'} path={'/roadmapcontent/InternalCSS'} topmargin={26} leftmargin={columnwidth * 1 - 3} ></RoadmapContent>

                <RoadmapContent title={'Finish'} path={'#'} topmargin={60} leftmargin={columnwidth * 2 + 3} ></RoadmapContent>
            </div>
        )
    } else if (props.type === 'C#') {
        const columnwidth = 14;
        return (
            <div className="roadmap-long">
                <RoadmapContent title={'C#'} path={'/roadmapcontent/C#'} topmargin={1} leftmargin={columnwidth * 2 + 3} ></RoadmapContent>

                <RoadmapContent title={'Syntax'} path={'/roadmapcontent/C#Syntax'} topmargin={10} leftmargin={columnwidth * 2 + 2} ></RoadmapContent>

                <RoadmapContent title={'Using'} path={'/roadmapcontent/C#Syntax'} topmargin={8} leftmargin={columnwidth * 1} ></RoadmapContent>
                <RoadmapContent title={'Namespace'} path={'/roadmapcontent/C#Syntax'} topmargin={12} leftmargin={columnwidth * 1} ></RoadmapContent>

                <RoadmapContent title={'Main( )'} path={'/roadmapcontent/C#Main'} topmargin={10} leftmargin={columnwidth * 3} ></RoadmapContent>

                <RoadmapContent title={'Data Types'} path={'/roadmapcontent/C#Datatypes'} topmargin={24} leftmargin={columnwidth * 2 + 1} ></RoadmapContent>

                <RoadmapContent title={'String'} path={'/roadmapcontent/C#Strings'} topmargin={22} leftmargin={columnwidth * 1} ></RoadmapContent>
                <RoadmapContent title={'Char'} path={'/roadmapcontent/C#Char'} topmargin={26} leftmargin={columnwidth * 1} ></RoadmapContent>

                <RoadmapContent title={'Numbers'} path={'/roadmapcontent/C#Numbers'} topmargin={22} leftmargin={columnwidth * 3 + 3} ></RoadmapContent>
                <RoadmapContent title={'Booleans'} path={'/roadmapcontent/C#Booleans'} topmargin={26} leftmargin={columnwidth * 3 + 3} ></RoadmapContent>

                <RoadmapContent title={'Integer'} path={'/roadmapcontent/C#Integers'} topmargin={20} leftmargin={columnwidth * 4 + 3} ></RoadmapContent>
                <RoadmapContent title={'Float'} path={'/roadmapcontent/C#Floats'} topmargin={24} leftmargin={columnwidth * 4 + 3} ></RoadmapContent>
            
                <RoadmapContent title={'Interacting With Data'} path={'/roadmapcontent/C#InteractingData'} topmargin={40} leftmargin={columnwidth * 2 - 1} ></RoadmapContent>

                <RoadmapContent title={'Math Functions'} path={'/roadmapcontent/C#MathFunctions'} topmargin={40} leftmargin={columnwidth * 3 + 3} ></RoadmapContent>

                <RoadmapContent title={'Assignment Operators'} path={'/roadmapcontent/C#Assignment'} topmargin={35} leftmargin={columnwidth * 1 - 5} ></RoadmapContent>
                <RoadmapContent title={'Comparison Operators'} path={'/roadmapcontent/C#Comparisons'} topmargin={40} leftmargin={columnwidth * 1 - 5} ></RoadmapContent>
                <RoadmapContent title={'Logical Operators'} path={'/roadmapcontent/C#Logical'} topmargin={45} leftmargin={columnwidth * 1 - 5} ></RoadmapContent>

                <RoadmapContent title={'Input + Output'} path={'/roadmapcontent/C#InputOutput'} topmargin={50} leftmargin={columnwidth * 2 - 1} ></RoadmapContent>

                <RoadmapContent title={'Console Methods'} path={'/roadmapcontent/C#Console Methods'} topmargin={50} leftmargin={columnwidth * 3 + 3} ></RoadmapContent>

                <RoadmapContent title={'Console.Writeline'} path={'/roadmapcontent/C#Console Methods'} topmargin={48} leftmargin={columnwidth * 4 + 8} ></RoadmapContent>
                <RoadmapContent title={'Console.Readline'} path={'/roadmapcontent/C#Console Methods'} topmargin={52} leftmargin={columnwidth * 4 + 8} ></RoadmapContent>
            
                <RoadmapContent title={'Conditionals'} path={'/roadmapcontent/C#Conditionals'} topmargin={65} leftmargin={columnwidth * 2 - 1} ></RoadmapContent>

                <RoadmapContent title={'For Loop'} path={'/roadmapcontent/C#ForLoop'} topmargin={63} leftmargin={columnwidth * 1} ></RoadmapContent>
                <RoadmapContent title={'While Loop'} path={'/roadmapcontent/C#WhileLoop'} topmargin={67} leftmargin={columnwidth * 1} ></RoadmapContent>
                <RoadmapContent title={'Do While Loop'} path={'/roadmapcontent/C#DoWhileLoop'} topmargin={67} leftmargin={columnwidth * 0 + 0.2} ></RoadmapContent>

                <RoadmapContent title={'If Else'} path={'/roadmapcontent/C#IfElse'} topmargin={63} leftmargin={columnwidth * 3} ></RoadmapContent>
                <RoadmapContent title={'Switch Cases'} path={'/roadmapcontent/C#SwitchCases'} topmargin={67} leftmargin={columnwidth * 3} ></RoadmapContent>
                <RoadmapContent title={'Default + Break'} path={'/roadmapcontent/C#DefaultBreak'} topmargin={67} leftmargin={columnwidth * 4} ></RoadmapContent>

                <RoadmapContent title={'Finish'} path={'#'} topmargin={80} leftmargin={columnwidth * 2 + 1} ></RoadmapContent>
            </div>
        )
    } else if (props.type === 'JS') {
        const columnwidth = 14;
        return (
            <div className="roadmap-long">
                <RoadmapContent title={'JS'} path={'/roadmapcontent/JS'} topmargin={1} leftmargin={columnwidth * 2 + 3} ></RoadmapContent>

                <RoadmapContent title={'Implementation'} path={'/roadmapcontent/JSImplementation'} topmargin={15} leftmargin={columnwidth * 2 - 1} ></RoadmapContent>
                
                <RoadmapContent title={'Data'} path={'/roadmapcontent/Data'} topmargin={45} leftmargin={columnwidth * 2 + 2} ></RoadmapContent>

                <RoadmapContent title={'Functionality'} path={'/roadmapcontent/Functionality'} topmargin={80} leftmargin={columnwidth * 2 - 1} ></RoadmapContent>

                <RoadmapContent title={'Finish'} path={'#'} topmargin={95} leftmargin={columnwidth * 2 + 1} ></RoadmapContent>
            </div>
        )
    }
}

export default Roadmap