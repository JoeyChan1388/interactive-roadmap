import React from 'react'
import './Roadmap.css'
import InfoModal from './InfoModal';
import RoadmapContent from './RoadmapContent';
import { useAuth } from '../Firebase/AuthContext';
import axios from 'axios';

const Roadmap = (props) => {
    let currentNode = '';
    let currentNodeCompleted = false;
    const { currentUser } = useAuth();

    // Runs whenever the modal is called up.
    async function DisplayModal(newTitle, newBody, completeable, link1Display, link1Path, link2Display, link2Path, link3Display, link3Path) {
        const modal = document.getElementById('infoModal');
        modal.style.display = 'block';
        // Change the title and body of the modal
        document.getElementById('title').innerHTML = newTitle;
        document.getElementById('body').innerHTML = newBody;

        // Change the links of the modal, if they exist.
        if (link1Display !== undefined) {
            document.getElementById('link1').innerHTML = link1Display;
            document.getElementById('link1').href = link1Path;
        } else {
            document.getElementById('link1').style.display = 'none';
        }

        if (link2Display !== undefined) {
            document.getElementById('link2').innerHTML = link2Display;
            document.getElementById('link2').href = link2Path;
        } else {
            document.getElementById('link2').style.display = 'none';
        }

        if (link3Display !== undefined) {
            document.getElementById('link3').innerHTML = link3Display;
            document.getElementById('link3').href = link3Path;
        } else {
            document.getElementById('link3').style.display = 'none';
        }

        // If its a completable node, show the complete button.
        if (completeable) {
            await CheckIfComplete();

            if (currentNodeCompleted === true) {
                document.getElementById('completebutton').disabled = true;
                document.getElementById('completebutton').innerHTML = 'Completed';
                document.getElementById('completebutton').style.backgroundColor = '#90c9da';
                document.getElementById('completebutton').style.cursor = 'default';
            } else {
                document.getElementById('completebutton').disabled = false;
                document.getElementById('completebutton').style.display = 'inline';
                document.getElementById('completebutton').innerHTML = 'Complete';
                document.getElementById('completebutton').style.backgroundColor = 'rgb(10, 138, 3)';
                document.getElementById('completebutton').style.cursor = 'pointer';
            }
        } else {
            document.getElementById('completebutton').style.display = 'none';
        }
    }

    const onComplete = () => {
        if (currentNode) {
            var tableName = props.type + '_progress';
            var colName = currentNode + '_completed';

            console.log(tableName);
            console.log(colName);

            document.getElementById('infoModal').style.display = 'none';

            // send axios request to update the database using the tableName and colName
            axios.post('http://localhost:3001/progress/update', {
                tableName: tableName,
                colName: colName,
                userId: currentUser.uid
            });

        }
    }

    async function CheckIfComplete() {
        var tableName = props.type + '_progress';
        var colName = currentNode + '_completed';

        await axios.get('http://localhost:3001/progress/check', {
            params: {
                tableName: tableName,
                colName: colName,
                userId: currentUser.uid
            }
        }).then(response => {
            console.log(response.data);
            currentNodeCompleted = response.data;
        });
    }

    if (props.type === 'HTML') {
        return (
            <div className="roadmap">
                <InfoModal title={'infomodal'} body={'body'}> </InfoModal>

                <RoadmapContent
                    title={'HTML'}
                    onClick={() => {
                        DisplayModal('HTML',
                            'This is HTML, it is used to create websites!',
                            false,
                            'W3Schools',
                            'https://www.w3schools.com/html/default.asp',

                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={1}
                    leftmargin={38}
                > </RoadmapContent>

                <RoadmapContent
                    title={'Creating HTML Documents'}
                    onClick={() => {
                        DisplayModal('Creating HTML Documents',
                            'HTML Documents are computer files',
                            false,
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={8}
                    leftmargin={36}

                ></RoadmapContent>

                <RoadmapContent
                    title={'HTML Document Structure'}
                    onClick={() => {
                        currentNode = 'html_doc_structure';
                        DisplayModal('HTML document structure',
                            'HTML documents are made up of different tags. These tags are used to create the structure of the document in the web browser. View the sub-nodes and click \'Complete\' to continue.',
                            true,
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={8}
                    leftmargin={18}
                ></RoadmapContent>

                <RoadmapContent title={'HTML Tag'} path={'/roadmapcontent/HTMLTag'} topmargin={5} leftmargin={5} ></RoadmapContent>
                <RoadmapContent title={'Doctype'} path={'/roadmapcontent/Doctype'} topmargin={9} leftmargin={5} ></RoadmapContent>
                <RoadmapContent title={'Title'} path={'/roadmapcontent/Title'} topmargin={13} leftmargin={5} ></RoadmapContent>

                <RoadmapContent
                    title={'Elements'}
                    onClick={() => {
                        currentNode = 'html_elements';
                        DisplayModal('Elements',
                            'Elements are the building blocks of HTML. They are used to create the structure of the document in the web browser. View the sub-nodes and click \'Complete\' to continue.',
                            true,

                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={8.5}
                    leftmargin={55}
                ></RoadmapContent>

                <RoadmapContent title={'Head + Body + Div'} path={'/roadmapcontent/HTMLHeadBodyDiv'} topmargin={3} leftmargin={66} ></RoadmapContent>
                <RoadmapContent title={'Headings + Paragraphs'} path={'/roadmapcontent/HTMLHeadingsParagraphs'} topmargin={8} leftmargin={66} ></RoadmapContent>
                <RoadmapContent title={'Tables + Lists'} path={'/roadmapcontent/HTMLTablesLists'} topmargin={13} leftmargin={66} ></RoadmapContent>

                <RoadmapContent
                    title={'Attributes'}
                    onClick={() => {
                        currentNode = 'html_attributes';
                        DisplayModal('Attributes',
                            'Attributes are used to add additional information to elements. View the sub-nodes and click \'Complete\' to continue.',
                            true,

                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={23}
                    leftmargin={55}
                ></RoadmapContent>

                <RoadmapContent title={'Hyperlinks'} path={'/roadmapcontent/HTMLHyperlinks'} topmargin={19} leftmargin={66} ></RoadmapContent>
                <RoadmapContent title={'Images'} path={'/roadmapcontent/HTMLImages'} topmargin={23} leftmargin={66} ></RoadmapContent>
                <RoadmapContent title={'Title + Lang'} path={'/roadmapcontent/HTMLTitlesLang'} topmargin={27} leftmargin={66} ></RoadmapContent>

                <RoadmapContent title={'Accepting User Input'} path={'/roadmapcontent/HTMLUserInput'} topmargin={44.5} leftmargin={36} ></RoadmapContent>

                <RoadmapContent
                    title={'Events'}
                    onClick={() => {
                        currentNode = 'html_events';
                        DisplayModal('Events',
                            'Events are used to add functionality to elements. View the sub-nodes and click \'Complete\' to continue.',
                            true,
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={45}
                    leftmargin={22}
                ></RoadmapContent>
                <RoadmapContent title={'Media Events'} path={'/roadmapcontent/HTMLTag'} topmargin={41} leftmargin={5} ></RoadmapContent>
                <RoadmapContent title={'Keyboard Events'} path={'/roadmapcontent/Doctype'} topmargin={45} leftmargin={5} ></RoadmapContent>
                <RoadmapContent title={'Mouse Events'} path={'/roadmapcontent/Title'} topmargin={50} leftmargin={5} ></RoadmapContent>

                <RoadmapContent
                    title={'Forms'}
                    onClick={() => {
                        currentNode = 'html_forms';
                        DisplayModal('Forms',
                            'Forms are used to collect information from the user. View the sub-nodes and click \'Complete\' to continue.',
                            true,
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={45}
                    leftmargin={55}
                ></RoadmapContent>

                <RoadmapContent title={'Label'} path={'/roadmapcontent/HTMLHeadBodyDiv'} topmargin={41} leftmargin={66} ></RoadmapContent>
                <RoadmapContent title={'Input Elements'} path={'/roadmapcontent/HTMLHeadingsParagraphs'} topmargin={44.5} leftmargin={66} ></RoadmapContent>
                <RoadmapContent title={'Input Validation'} path={'/roadmapcontent/HTMLTablesLists'} topmargin={49} leftmargin={66} ></RoadmapContent>

                <RoadmapContent title={'Finish'} path={'#'} topmargin={53} leftmargin={38} ></RoadmapContent>

                {/* Line Section */}
                <hr className='HTML-Line1'></hr>
                <hr className='HTML-Line2'></hr>
                <hr className='HTML-Line3'></hr>
                <hr className='HTML-Line4'></hr>
                <hr className='HTML-Line5'></hr>
                <hr className='HTML-Line6'></hr>
                <hr className='HTML-Line7'></hr>
                <hr className='HTML-Line8'></hr>
                <hr className='HTML-Line9'></hr>
                <hr className='HTML-Line10'></hr>
                <hr className='HTML-Line11'></hr>
                <hr className='HTML-Line12'></hr>
                <hr className='HTML-Line13'></hr>
                <hr className='HTML-Line14'></hr>
                <hr className='HTML-Line15'></hr>
                <hr className='HTML-Line16'></hr>
                <hr className='HTML-Line17'></hr>
                <hr className='HTML-Line18'></hr>
                <hr className='HTML-Line19'></hr>
                <hr className='HTML-Line20'></hr>
                <hr className='HTML-Line21'></hr>
                <hr className='HTML-Line22'></hr>
                <hr className='HTML-Line23'></hr>
                <hr className='HTML-Line24'></hr>
                <hr className='HTML-Line25'></hr>
                <hr className='HTML-Line26'></hr>
                <hr className='HTML-Line27'></hr>
                <hr className='HTML-Line28'></hr>

            </div>
        )
    } else if (props.type === 'CSS') {
        const columnwidth = 14;
        return (
            <div className="roadmap">
                <InfoModal title={'infomodal'} body={'body'}> </InfoModal>

                <RoadmapContent title={'CSS'} path={'/roadmapcontent/CSS'} topmargin={1} leftmargin={columnwidth * 2 + 3} ></RoadmapContent>
                <RoadmapContent 
                title={'Implementing CSS'} 
                onClick={() => {
                    currentNode = 'css_implementation';
                    DisplayModal('Implementing CSS',
                        'CSS is used to style the HTML elements, it can be implemented in a few ways. View the sub-nodes and click \'Complete\' to continue.',
                        true,
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={8} 
                leftmargin={columnwidth * 2} 
                ></RoadmapContent>

                <RoadmapContent title={'Inline CSS'} path={'/roadmapcontent/InlineCSS'} topmargin={8} leftmargin={columnwidth * 3} ></RoadmapContent>
                <RoadmapContent title={'Internal CSS'} path={'/roadmapcontent/InternalCSS'} topmargin={12} leftmargin={columnwidth * 3} ></RoadmapContent>
                <RoadmapContent title={'External CSS'} path={'/roadmapcontent/ExternalCSS'} topmargin={16} leftmargin={columnwidth * 3} ></RoadmapContent>
                <RoadmapContent title={'Linking CSS Files'} path={'/roadmapcontent/LinkingCSS'} topmargin={16} leftmargin={columnwidth * 4} ></RoadmapContent>

                <RoadmapContent title={'CSS Styling'} path={'/roadmapcontent/StylingCSS'} topmargin={26} leftmargin={columnwidth * 2} ></RoadmapContent>

                <RoadmapContent 
                title={'Layouts'} 
                onClick={() => {
                    currentNode = 'css_layouts';
                    DisplayModal('CSS Layouts',
                        'CSS Layouts are used to style the HTML elements and determine how they appear on screen. View the sub-nodes and click \'Complete\' to continue.',
                        true,
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={26} 
                leftmargin={columnwidth * 3} 
                ></RoadmapContent>

                <RoadmapContent title={'Flexbox + Grid'} path={'/roadmapcontent/InlineCSS'} topmargin={22} leftmargin={columnwidth * 4} ></RoadmapContent>
                <RoadmapContent title={'Font Sizes + Families'} path={'/roadmapcontent/InlineCSS'} topmargin={26} leftmargin={columnwidth * 4} ></RoadmapContent>
                <RoadmapContent title={'Padding + Margins'} path={'/roadmapcontent/InlineCSS'} topmargin={31} leftmargin={columnwidth * 4} ></RoadmapContent>

                <RoadmapContent 
                title={'Colors and Backgrounds'} 
                onClick={() => {
                    currentNode = 'css_colors_background';
                    DisplayModal('Css Colors and Backgrounds',
                        'CSS Colors and Backgrounds allow for some creative and eye-catching websites. View the sub-nodes and click \'Complete\' to continue.',
                        true,
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={44} 
                leftmargin={columnwidth * 3} 
                ></RoadmapContent>
                <RoadmapContent title={'Fonts'} path={'/roadmapcontent/InlineCSS'} topmargin={40} leftmargin={columnwidth * 4} ></RoadmapContent>
                <RoadmapContent title={'Hexadecimal and RGB'} path={'/roadmapcontent/InlineCSS'} topmargin={44} leftmargin={columnwidth * 4} ></RoadmapContent>
                <RoadmapContent title={'Image as BG'} path={'/roadmapcontent/InlineCSS'} topmargin={49} leftmargin={columnwidth * 4} ></RoadmapContent>

                <RoadmapContent 
                title={'Transitions and Animations'} 
                onClick={() => {
                    currentNode = 'css_movement';
                    DisplayModal('CSS Transitions and Animations',
                        'In CSS, you can use transitions and animations to make elements move, change size, or fade in and out. View the sub-nodes and click \'Complete\' to continue.',
                        true,
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={26} 
                leftmargin={columnwidth * 1 - 3} 
                ></RoadmapContent>

                <RoadmapContent title={'Finish'} path={'#'} topmargin={53} leftmargin={columnwidth * 2 + 3} ></RoadmapContent>

                {/* LINE SECTION FOR CSS */}
                <hr className='CSS-Line1'></hr>
                <hr className='CSS-Line2'></hr>
                <hr className='CSS-Line3'></hr>
                <hr className='CSS-Line4'></hr>
                <hr className='CSS-Line5'></hr>
                <hr className='CSS-Line6'></hr>
                <hr className='CSS-Line7'></hr>
                <hr className='CSS-Line8'></hr>
                <hr className='CSS-Line9'></hr>
                <hr className='CSS-Line10'></hr>
                <hr className='CSS-Line11'></hr>
                <hr className='CSS-Line12'></hr>
                <hr className='CSS-Line13'></hr>
                <hr className='CSS-Line14'></hr>
                <hr className='CSS-Line15'></hr>
                <hr className='CSS-Line16'></hr>
                <hr className='CSS-Line17'></hr>
                <hr className='CSS-Line18'></hr>
                <hr className='CSS-Line19'></hr>
                <hr className='CSS-Line20'></hr>
                <hr className='CSS-Line21'></hr>
            </div>
        )
    } else if (props.type === 'Csharp') {
        const columnwidth = 14;
        return (
            <div className="roadmap-long">
                <InfoModal title={'infomodal'} body={'body'}> </InfoModal>

                <RoadmapContent title={'C#'} path={'/roadmapcontent/C#'} topmargin={1} leftmargin={columnwidth * 2 + 3} ></RoadmapContent>

                <RoadmapContent 
                title={'Syntax'} 
                onClick={() => {
                    currentNode = 'csharp_syntax';
                    DisplayModal('C# Syntax',
                        'C# is a programming language that is used to create programs. View the sub-nodes and click \'Complete\' to continue.',
                        true,
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }} 
                topmargin={10} 
                leftmargin={columnwidth * 2 + 2} 
                ></RoadmapContent>

                <RoadmapContent title={'Using'} path={'/roadmapcontent/C#Syntax'} topmargin={8} leftmargin={columnwidth * 1} ></RoadmapContent>
                <RoadmapContent title={'Namespace'} path={'/roadmapcontent/C#Syntax'} topmargin={12} leftmargin={columnwidth * 1} ></RoadmapContent>

                <RoadmapContent title={'Main( )'} path={'/roadmapcontent/C#Main'} topmargin={10} leftmargin={columnwidth * 3} ></RoadmapContent>

                <RoadmapContent 
                title={'Data Types'} 
                onClick={() => {
                    currentNode = 'csharp_data_types';
                    DisplayModal('C# Data Types',
                        'C# has a variety of data types, including integers, strings, and booleans. View the sub-nodes and click \'Complete\' to continue.',
                        true,
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }} 
                topmargin={24} leftmargin={columnwidth * 2 + 1} 
                ></RoadmapContent>

                <RoadmapContent title={'String'} path={'/roadmapcontent/C#Strings'} topmargin={22} leftmargin={columnwidth * 1} ></RoadmapContent>
                <RoadmapContent title={'Char'} path={'/roadmapcontent/C#Char'} topmargin={26} leftmargin={columnwidth * 1} ></RoadmapContent>

                <RoadmapContent title={'Numbers'} path={'/roadmapcontent/C#Numbers'} topmargin={22} leftmargin={columnwidth * 3 + 3} ></RoadmapContent>
                <RoadmapContent title={'Booleans'} path={'/roadmapcontent/C#Booleans'} topmargin={26} leftmargin={columnwidth * 3 + 3} ></RoadmapContent>

                <RoadmapContent title={'Integer'} path={'/roadmapcontent/C#Integers'} topmargin={20} leftmargin={columnwidth * 4 + 3} ></RoadmapContent>
                <RoadmapContent title={'Float'} path={'/roadmapcontent/C#Floats'} topmargin={24} leftmargin={columnwidth * 4 + 3} ></RoadmapContent>

                <RoadmapContent title={'Manipulating Data'} 
                onClick={() => {
                    currentNode = 'csharp_data_manipulation';
                    DisplayModal('C# Data Manipulation',
                        'C# has many ways to manipulate data. View the sub-nodes and click \'Complete\' to continue.',
                        true,
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }} 
                topmargin={40} 
                leftmargin={columnwidth * 2 - 1} 
                ></RoadmapContent>

                <RoadmapContent title={'Math Functions'} path={'/roadmapcontent/C#MathFunctions'} topmargin={40} leftmargin={columnwidth * 3 + 3} ></RoadmapContent>

                <RoadmapContent title={'Assignment Operators'} path={'/roadmapcontent/C#Assignment'} topmargin={35} leftmargin={columnwidth * 1 - 5} ></RoadmapContent>
                <RoadmapContent title={'Comparison Operators'} path={'/roadmapcontent/C#Comparisons'} topmargin={40} leftmargin={columnwidth * 1 - 5} ></RoadmapContent>
                <RoadmapContent title={'Logical Operators'} path={'/roadmapcontent/C#Logical'} topmargin={45} leftmargin={columnwidth * 1 - 5} ></RoadmapContent>

                <RoadmapContent 
                title={'Input + Output'} 
                onClick={() => {
                    currentNode = 'csharp_input_output';
                    DisplayModal('C# Input and Output',
                        'In C# programs, users can enter data and data can be outputted to the screen. View the sub-nodes and click \'Complete\' to continue.',
                        true,
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }} 
                topmargin={50} 
                leftmargin={columnwidth * 2 - 1} 
                ></RoadmapContent>

                <RoadmapContent title={'Console Methods'} path={'/roadmapcontent/C#Console Methods'} topmargin={50} leftmargin={columnwidth * 3 + 3} ></RoadmapContent>

                <RoadmapContent title={'Console.Writeline'} path={'/roadmapcontent/C#Console Methods'} topmargin={48} leftmargin={columnwidth * 4 + 8} ></RoadmapContent>
                <RoadmapContent title={'Console.Readline'} path={'/roadmapcontent/C#Console Methods'} topmargin={52} leftmargin={columnwidth * 4 + 8} ></RoadmapContent>

                <RoadmapContent 
                title={'Conditionals'} 
                onClick={() => {
                    currentNode = 'csharp_conditionals';
                    DisplayModal('C# Conditionals',
                        'C# has many ways to use conditionals in order to cause loops, or execute certain code depending on context. View the sub-nodes and click \'Complete\' to continue.',
                        true,
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }} 
                topmargin={65} 
                leftmargin={columnwidth * 2 - 1} 
                ></RoadmapContent>

                <RoadmapContent title={'For Loop'} path={'/roadmapcontent/C#ForLoop'} topmargin={63} leftmargin={columnwidth * 1} ></RoadmapContent>
                <RoadmapContent title={'While Loop'} path={'/roadmapcontent/C#WhileLoop'} topmargin={67} leftmargin={columnwidth * 1} ></RoadmapContent>
                <RoadmapContent title={'Do While Loop'} path={'/roadmapcontent/C#DoWhileLoop'} topmargin={67} leftmargin={columnwidth * 0 + 0.2} ></RoadmapContent>

                <RoadmapContent title={'If Else'} path={'/roadmapcontent/C#IfElse'} topmargin={63} leftmargin={columnwidth * 3} ></RoadmapContent>
                <RoadmapContent title={'Switch Cases'} path={'/roadmapcontent/C#SwitchCases'} topmargin={67} leftmargin={columnwidth * 3} ></RoadmapContent>
                <RoadmapContent title={'Default + Break'} path={'/roadmapcontent/C#DefaultBreak'} topmargin={67} leftmargin={columnwidth * 4} ></RoadmapContent>

                <RoadmapContent title={'Finish'} path={'#'} topmargin={80} leftmargin={columnwidth * 2 + 1} ></RoadmapContent>

                {/* LINE SECTION FOR C# */}

                <hr className='Csharp-Line1'></hr>
                <hr className='Csharp-Line2'></hr>
                <hr className='Csharp-Line3'></hr>
                <hr className='Csharp-Line4'></hr>
                <hr className='Csharp-Line5'></hr>
                <hr className='Csharp-Line6'></hr>
                <hr className='Csharp-Line7'></hr>
                <hr className='Csharp-Line8'></hr>
                <hr className='Csharp-Line9'></hr>
                <hr className='Csharp-Line10'></hr>
                <hr className='Csharp-Line11'></hr>
                <hr className='Csharp-Line12'></hr>
                <hr className='Csharp-Line13'></hr>
                <hr className='Csharp-Line14'></hr>
                <hr className='Csharp-Line15'></hr>
                <hr className='Csharp-Line16'></hr>
                <hr className='Csharp-Line17'></hr>
                <hr className='Csharp-Line18'></hr>
                <hr className='Csharp-Line19'></hr>
                <hr className='Csharp-Line20'></hr>
                <hr className='Csharp-Line21'></hr>
                <hr className='Csharp-Line22'></hr>
                <hr className='Csharp-Line23'></hr>
                <hr className='Csharp-Line24'></hr>
                <hr className='Csharp-Line25'></hr>
                <hr className='Csharp-Line26'></hr>
                <hr className='Csharp-Line27'></hr>
                <hr className='Csharp-Line28'></hr>
                <hr className='Csharp-Line29'></hr>
                <hr className='Csharp-Line30'></hr>
                <hr className='Csharp-Line31'></hr>
                <hr className='Csharp-Line32'></hr>
                <hr className='Csharp-Line33'></hr>
                <hr className='Csharp-Line34'></hr>
                <hr className='Csharp-Line35'></hr>
                <hr className='Csharp-Line36'></hr>
                <hr className='Csharp-Line37'></hr>
                <hr className='Csharp-Line38'></hr>
                <hr className='Csharp-Line39'></hr>
                <hr className='Csharp-Line40'></hr>
                <hr className='Csharp-Line41'></hr>
                <hr className='Csharp-Line42'></hr>
                <hr className='Csharp-Line43'></hr>
                <hr className='Csharp-Line44'></hr>
            </div>
        )
    } else if (props.type === 'JS') {
        const columnwidth = 14;
        return (
            <div className="roadmap-long">
                <InfoModal title={'infomodal'} body={'body'}> </InfoModal>

                <RoadmapContent title={'JS'} path={'/roadmapcontent/JS'} topmargin={1} leftmargin={columnwidth * 2 + 3} ></RoadmapContent>

                <RoadmapContent
                    title={'Implementation'}
                    onClick={() => {
                        currentNode = 'js_implementation';
                        DisplayModal('Implementation',
                            'You have to implement javascript into you html in order for it to operate, this can be done a few ways.',
                            true,
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={15}
                    leftmargin={columnwidth * 2 - 1}
                ></RoadmapContent>

                <RoadmapContent title={'Inline JS'} path={'/roadmapcontent/JSInline'} topmargin={13} leftmargin={columnwidth * 3 + 2} ></RoadmapContent>
                <RoadmapContent title={'SRC Tag'} path={'/roadmapcontent/JSExternal'} topmargin={17} leftmargin={columnwidth * 3 + 2} ></RoadmapContent>

                <RoadmapContent title={'Data'} path={'/roadmapcontent/JSData'} topmargin={37} leftmargin={columnwidth * 2 + 2} ></RoadmapContent>

                <RoadmapContent title={'Data Types'} path={'/roadmapcontent/JSDataTypes'} topmargin={37} leftmargin={columnwidth * 1 + 2} ></RoadmapContent>
                <RoadmapContent
                    title={'Variables'}
                    onClick={() => {
                        currentNode = 'js_variables';
                        DisplayModal('Variables in Javascript',
                            'Variables are used to store data, they are declared with the var, let, or const keywords, and can be assigned a value with the = operator.',
                            true,
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={25}
                    leftmargin={columnwidth * 1 + 2}
                ></RoadmapContent>

                <RoadmapContent title={'Let'} path={'/roadmapcontent/JSVariablesLet'} topmargin={21} leftmargin={columnwidth * 0 + 1} ></RoadmapContent>
                <RoadmapContent title={'Var'} path={'/roadmapcontent/JSVariablesVar'} topmargin={25} leftmargin={columnwidth * 0 + 1} ></RoadmapContent>
                <RoadmapContent title={'Const'} path={'/roadmapcontent/JSVariablesConst'} topmargin={29} leftmargin={columnwidth * 0 + 1} ></RoadmapContent>

                <RoadmapContent
                    title={'Primatives'}
                    onClick={() => {
                        currentNode = 'js_primatives';
                        DisplayModal('Primatives in Javascript',
                            'Primatives are the basic data types in javascript, they are: strings, numbers, booleans, and undefined.',
                            true,
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={47}
                    leftmargin={columnwidth * 1 + 2}
                ></RoadmapContent>

                <RoadmapContent title={'String'} path={'/roadmapcontent/JSNull'} topmargin={43} leftmargin={columnwidth * 0 + 1} ></RoadmapContent>
                <RoadmapContent title={'Boolean'} path={'/roadmapcontent/JSBoolean'} topmargin={47} leftmargin={columnwidth * 0 + 1} ></RoadmapContent>
                <RoadmapContent title={'Number'} path={'/roadmapcontent/JSNumber'} topmargin={51} leftmargin={columnwidth * 0 + 1} ></RoadmapContent>

                <RoadmapContent
                    title={'Data Structures'}
                    onClick={() => {
                        currentNode = 'js_data_structures';
                        DisplayModal('Data Structures in Javascript',
                            'Data Structures are used to store collections of data, they are arrays and objects.',
                            true,
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={37}
                    leftmargin={columnwidth * 3}
                ></RoadmapContent>

                <RoadmapContent title={'JSON'} path={'/roadmapcontent/JSDataStructuresJSON'} topmargin={35} leftmargin={columnwidth * 4 + 2} ></RoadmapContent>
                <RoadmapContent title={'Arrays'} path={'/roadmapcontent/JSDataStructuresArrays'} topmargin={39} leftmargin={columnwidth * 4 + 2} ></RoadmapContent>

                <RoadmapContent title={'Functionality'} path={'/roadmapcontent/JSFunctionality'} topmargin={68} leftmargin={columnwidth * 2 - 1} ></RoadmapContent>

                <RoadmapContent
                    title={'Events'}
                    onClick={() => {
                        currentNode = 'js_events';
                        DisplayModal('Events in Javascript',
                            'Events are used to trigger actions in javascript, they are: onclick, onchange, onmouseover, etc.',
                            true,
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={68}
                    leftmargin={columnwidth * 1 + 1}
                ></RoadmapContent>

                <RoadmapContent title={'Execute JS on Event'} path={'/roadmapcontent/JSExecuteEvents'} topmargin={62} leftmargin={columnwidth * 0 + 1} ></RoadmapContent>
                <RoadmapContent title={'Event Listeners'} path={'/roadmapcontent/JSEventListeners'} topmargin={68} leftmargin={columnwidth * 0 + 1} ></RoadmapContent>

                <RoadmapContent
                    title={'Asynchronous JS'}
                    onClick={() => {
                        currentNode = 'js_async';
                        DisplayModal('Asynchronous Javascript',
                            'Asynchronous Javascript is used to make code run in the background, it is used to make a website load faster and feel more \'snappy\'.',
                            true,
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={57}
                    leftmargin={columnwidth * 3}
                ></RoadmapContent>

                <RoadmapContent title={'Callbacks'} path={'/roadmapcontent/JSCallbacks'} topmargin={55} leftmargin={columnwidth * 4 + 2} ></RoadmapContent>
                <RoadmapContent title={'Promises'} path={'/roadmapcontent/JSPromises'} topmargin={59} leftmargin={columnwidth * 4 + 2} ></RoadmapContent>

                <RoadmapContent title={'Fetch API'} path={'/roadmapcontent/JSFetchAPI'} topmargin={68} leftmargin={columnwidth * 3 + 2} ></RoadmapContent>

                <RoadmapContent title={'Requests'} path={'/roadmapcontent/JSRequests'} topmargin={66} leftmargin={columnwidth * 4 + 2} ></RoadmapContent>
                <RoadmapContent title={'Responses'} path={'/roadmapcontent/JSResponses'} topmargin={70} leftmargin={columnwidth * 4 + 2} ></RoadmapContent>

                <RoadmapContent title={'Finish'} path={'#'} topmargin={79} leftmargin={columnwidth * 2 + 1} ></RoadmapContent>

                {/* LINE SECTION FOR JS */}
                <hr className='JS-Line1'></hr>
                <hr className='JS-Line2'></hr>
                <hr className='JS-Line3'></hr>
                <hr className='JS-Line4'></hr>
                <hr className='JS-Line5'></hr>
                <hr className='JS-Line6'></hr>
                <hr className='JS-Line7'></hr>
                <hr className='JS-Line8'></hr>
                <hr className='JS-Line9'></hr>
                <hr className='JS-Line10'></hr>
                <hr className='JS-Line11'></hr>
                <hr className='JS-Line12'></hr>
                <hr className='JS-Line13'></hr>
                <hr className='JS-Line14'></hr>
                <hr className='JS-Line15'></hr>
                <hr className='JS-Line16'></hr>
                <hr className='JS-Line17'></hr>
                <hr className='JS-Line18'></hr>
                <hr className='JS-Line19'></hr>
                <hr className='JS-Line20'></hr>
                <hr className='JS-Line21'></hr>
                <hr className='JS-Line22'></hr>
                <hr className='JS-Line23'></hr>
                <hr className='JS-Line24'></hr>
                <hr className='JS-Line25'></hr>
                <hr className='JS-Line26'></hr>
                <hr className='JS-Line27'></hr>
                <hr className='JS-Line28'></hr>
                <hr className='JS-Line29'></hr>
                <hr className='JS-Line30'></hr>
                <hr className='JS-Line31'></hr>
                <hr className='JS-Line32'></hr>
                <hr className='JS-Line33'></hr>
                <hr className='JS-Line34'></hr>
                <hr className='JS-Line35'></hr>
                <hr className='JS-Line36'></hr>
                <hr className='JS-Line37'></hr>
                <hr className='JS-Line38'></hr>
                <hr className='JS-Line39'></hr>
                <hr className='JS-Line40'></hr>
                <hr className='JS-Line41'></hr>
                <hr className='JS-Line42'></hr>
                <hr className='JS-Line43'></hr>
                <hr className='JS-Line44'></hr>
            </div>
        )
    }
}

export default Roadmap