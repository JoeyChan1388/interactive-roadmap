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

        //Change the links of the modal, if they exist.
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
        // If the node is completeable, then update the database.
        if (currentNode) {
            var tableName = props.type + '_progress';
            var colName = currentNode + '_completed';

            console.log(tableName);
            console.log(colName);

            // Make the modal dissapear
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
                            'This is HTML, it is used to create basic websites! There are 4 completable nodes with subnodes that you can complete to progress through the roadmap.',
                            false,
                            'W3Schools - HTML',
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
                            'HTML Documents are actually computer files, and can be created by creating a standard text document and saving it as a .html file.',
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

                <RoadmapContent
                    title={'HTML Tag'}
                    onClick={() => {
                        DisplayModal('HTML Tag',
                            'HTML tag represents the root of an HTML Document. It is the container for all other HTML elements.',
                            false,
                            'W3Schools HTML Tags',
                            'https://www.w3schools.com/tags/tag_html.asp'
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={5}
                    leftmargin={5}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Doctype'}
                    onClick={() => {
                        DisplayModal('Doctype',
                            'The DOCTYPE is required as the first line of code in every HTML document. It specifies the version of HTML that the page is written in to the browser.',
                            false,
                            'Doctype',
                            'https://www.freecodecamp.org/news/what-is-the-doctype-declaration-in-html/#:~:text=The%20HTML%20document%20type%20declaration,way%20by%20different%20web%20browsers.'
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={9}
                    leftmargin={5}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Title'}
                    onClick={() => {
                        DisplayModal('Title',
                            'The Title tag will create a large font title for a web page.',
                            false,
                            'Titles',
                            'https://www.w3schools.com/tags/tag_title.asp'
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={13}
                    leftmargin={5}
                ></RoadmapContent>


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

                <RoadmapContent
                    title={'Head + Body + Div'}
                    onClick={() => {
                        DisplayModal('Head + Body + Div',
                            'The head element is the container for metadata (data about data).  It is placed between the head tag and the body tag.  The body tag defines the documents body. Typically, the body element contains all the contents of an HTML document, from paragraps to images or hyperlinks to tables, etc. The div tag represents division or section in an HTML document. The div tag acts as a container for HTML elements and it allows them to be styled using CSS.',
                            false,
                            'W3Schools Head',
                            'https://www.w3schools.com/html/html_head.asp',
                            'W3Schools Body',
                            'https://www.w3schools.com/tags/tag_body.asp',
                            'W3Schools Div',
                            'https://www.w3schools.com/tags/tag_div.asp#:~:text=The%20tag%20defines%20a,inside%20the%20tag!'

                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={3}
                    leftmargin={66}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Headings + Paragraphs'}
                    onClick={() => {
                        DisplayModal('Headings + Paragrahps',
                            'The Headings tag range from h1 to h6, h1 being the biggest and h6 the smallest. The paragraph tag is used for typing long paragraphs in an HTML document.',
                            false,
                            'Headings',
                            'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements',
                            'Paragraphs',
                            'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p'


                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={8}
                    leftmargin={66}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Tables + Lists'}
                    onClick={() => {
                        DisplayModal('Tables + Lists',
                            'The table tag will create table cells inside rows and columns. Anything between the table tags will be the content of the table. Lists are used to group sets of related items. There are unordered lists, ordered lists and description lists.',
                            false,
                            'W3Schools Tables',
                            'https://www.w3schools.com/html/html_tables.asp',
                            'W3Schools Lists',
                            'https://www.w3schools.com/html/html_lists.asp'


                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={13}
                    leftmargin={66}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Attributes'}
                    onClick={() => {
                        currentNode = 'html_attributes';
                        DisplayModal('Attributes',
                            'Attributes are used to add additional information to elements. You can specify certain properties and actions of an element. View the sub-nodes and click \'Complete\' to continue.',
                            true,
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={23}
                    leftmargin={55}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Hyperlinks'}
                    onClick={() => {

                        DisplayModal('Hyperlinks',
                            'Hyperlinks are used to add a url source that will be clickable and take you to that specific url.',
                            false,
                            'W3Schools Hyperlinks',
                            'https://www.w3schools.com/html/html_links.asp'

                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={19}
                    leftmargin={66}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Images'}
                    onClick={() => {

                        DisplayModal('Images',
                            'The image tag is used to add an image onto a web page. The image tag is empty, it will only contain attributes. The image tag requires a src and alt (Specific image path and alternate text for image). ',
                            false,
                            'W3Schools Images',
                            'https://www.w3schools.com/html/html_images.asp'

                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={23}
                    leftmargin={66}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Title + Lang'}
                    onClick={() => {

                        DisplayModal('Title + Lang',
                            'The title tag is used to define a title in an HTML document. The Lang element will determine the language for text content on the web page. This will help search engines return language specific results.',
                            false,
                            'W3Schools Title',
                            'https://www.w3schools.com/tags/tag_title.asp',
                            'Languages',
                            'https://www.tpgi.com/using-the-html-lang-attribute/#:~:text=The%20HTML%20lang%20attribute%20is,the%20correct%20accent%20and%20pronunciation.'

                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={27}
                    leftmargin={66}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Acceping User Input'}
                    onClick={() => {

                        DisplayModal('Accepting User Input',
                            'There are different ways for an HTML website to accept user input. There are events which can be used to detect user input, as well as forms and input elements, which collect user input to be used as data.',
                            false,
                            'W3Schools Accepting User Input',
                            'https://www.w3schools.com/tags/att_input_accept.asp#:~:text=The%20accept%20attribute%20specifies%20a,be%20validated%20on%20the%20server.'

                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={44.5}
                    leftmargin={36}
                ></RoadmapContent>



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

                <RoadmapContent
                    title={'Media Events'}
                    onClick={() => {
                        DisplayModal('Media Events',
                            'Media Events mainly are used for video and audio. The media events are used to add functionality to media elements such as videos, audio, and images.',
                            false,
                            'Media Events',
                            'URL'
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={41}
                    leftmargin={5}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Keyboard Events'}
                    onClick={() => {
                        DisplayModal('Keyboard Events',
                            'Keyboard Events are used for keyboard input. The keyboard events are used to add functionality to the users keyboard.',
                            false,
                            'Keyboard Events',
                            'URL'
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={45}
                    leftmargin={5}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Mouse Events'}
                    onClick={() => {
                        DisplayModal('Mouse Events',
                            'Mouse Events are used for mouse input. The mouse events are used to add more functionality for the users mouse.',
                            false,
                            'Mouse Events',
                            'URL'
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={50}
                    leftmargin={5}
                ></RoadmapContent>


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

                <RoadmapContent
                    title={'Label'}
                    onClick={() => {
                        DisplayModal('Label',
                            'The label tag is used to label multiple elements and is frequently seen in forms to distinguish between input elements.',
                            false,
                            'W3Schools Labels',
                            'https://www.w3schools.com/tags/tag_label.asp'
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={41}
                    leftmargin={66}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Input Elements'}
                    onClick={() => {
                        DisplayModal('Input Elements',
                            'Input Elements are used to collect the users information within a form. They can come in many different types such as text, email, password, radio buttons, checkboxes, and more.',
                            false,
                            'Input Elements',
                            'URL'
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={44.5}
                    leftmargin={66}
                ></RoadmapContent>


                <RoadmapContent
                    title={'Input Validation'}
                    onClick={() => {
                        DisplayModal('Input Validation',
                            'Input Validation are used to ensure the data which a use enters is valid. This is done by using the required attribute and setting the input \'type\' attribute.',
                            false,
                            'Input Validation',
                            'URL'
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={49}
                    leftmargin={66}
                ></RoadmapContent>

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


                <RoadmapContent 
                title={'CSS'} 
                onClick={() => {
                    DisplayModal(' CSS',
                        'CSS is used to style webpages. It can be used to control the layouts of several web pages at the same time.',
                        false,
                        'W3Schools CSS',
                        'https://www.w3schools.com/html/html_css.asp'

                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={1} 
                leftmargin={columnwidth * 2 + 3} 
                ></RoadmapContent>

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

                <RoadmapContent 
                title={'Inline CSS'} 
                onClick={() => {
                    DisplayModal('Inline CSS',
                        'Typically, CSS is written in a seperate file. However, when CSS is written using the style attribute, it’s called an “inline style".',
                        false,
                        'Inline CSS',
                        'https://www.codecademy.com/article/html-inline-styles'
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={8} 
                leftmargin={columnwidth * 3} 
                >
                </RoadmapContent>

                <RoadmapContent 
                title={'Internal CSS'} 
                onClick={() => {
                    DisplayModal('Internal CSS',
                        'Internal CSS is used to add a unique style to a single document. It is defined in <head> section of the HTML page inside the <style> tag.',
                        false,
                        'Internal CSS',
                        'https://www.javatpoint.com/internal-css'
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={12} 
                leftmargin={columnwidth * 3} 
                ></RoadmapContent>

                <RoadmapContent 
                title={'External CSS'} 
                onClick={() => {
                    DisplayModal('External CSS',
                        'External CSS is a seperate file sheet that can be accessed by creating a link within the heading of a website and adding it',
                        false,
                        'External CSS',
                        'https://www.quackit.com/css/external_style_sheets.cfm'
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={16} 
                leftmargin={columnwidth * 3} 
                ></RoadmapContent>

                <RoadmapContent 
                title={'Linking CSS Files'} 
                onClick={() => {
                    DisplayModal('Linking CSS Files',
                        'Linking CSS Files can be done by adding the path of the CSS file in the heading of a HTML document.',
                        false,
                        'Linking CSS Files',
                        'https://www.hostinger.com/tutorials/website/how-to-link-a-stylesheet-css-file-to-your-html-file'
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={16} 
                leftmargin={columnwidth * 4} 
                ></RoadmapContent>

                <RoadmapContent 
                title={'CSS Styling'} 
                onClick={() => {
                    DisplayModal('CSS Styling',
                        'CSS Styling offers a huge range of customizability the HTML elements in a document.',
                        false,
                        'CSS Styling',
                        'https://developer.mozilla.org/en-US/docs/Web/CSS'
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={26} 
                leftmargin={columnwidth * 2} 
                ></RoadmapContent>


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

                <RoadmapContent 
                title={'Flexbox + Grid'} 
                onClick={() => {
                    DisplayModal('Flexbox + Grid',
                        'Flexbox is for layout in 1 dimension. Grid is designed for layout for 2 dimension.',
                        false,
                        'Flexbox + Grid',
                        'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout'
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={22} 
                leftmargin={columnwidth * 4} 
                ></RoadmapContent>

                <RoadmapContent 
                title={'Font Sizes + Famalies'} 
                onClick={() => {
                    DisplayModal('Font Sizes + Famalies',
                        'Font Sizes and Famalies (AKA Font Styles) can be changed in CSS to give a webpage an appealing look.',
                        false,
                        'Font Sizes + Famalies',
                        'https://www.w3schools.com/css/css_font.asp'
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={26} 
                leftmargin={columnwidth * 4} 
                ></RoadmapContent>

                <RoadmapContent 
                title={'Padding + Margins'} 
                onClick={() => {
                    DisplayModal('Padding + Margins',
                        'Padding is used to clear the area around the content. Padding is transparent. Margin is used to clear area outside the content. Margin is also transparent',
                        false,
                        'Padding + Margins',
                        'https://www.w3schools.com/css/css_boxmodel.asp'
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={31} 
                leftmargin={columnwidth * 4} 
                ></RoadmapContent>


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

                <RoadmapContent 
                title={'Fonts'} 
                onClick={() => {
                    DisplayModal('Fonts',
                        'Fonts are used in CSS to change the size of the letters or paragraphs on a webpage. The font style can be changed as well',
                        false,
                        'Fonts',
                        'https://www.w3.org/Style/Examples/007/fonts.en.html'
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={40} 
                leftmargin={columnwidth * 4} 
                ></RoadmapContent>

                <RoadmapContent 
                title={'Hexadecimal and RGB'} 
                onClick={() => {
                    DisplayModal('Hexadecimal and RGB',
                        'Hexadecimal is used to change the colors in a webpage. It offers a wide variety of colors by using the hexadecimal system. RGB achieves a similar goal by adjusting the Red, Green and Blue color numbers (255,255,255) to change the color.',
                        false,
                        'Hexadecimal and RGB',
                        'https://www.w3schools.com/css/css_colors_rgb.asp'
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={44} 
                leftmargin={columnwidth * 4} 
                ></RoadmapContent>

                <RoadmapContent 
                title={'Image as BG'} 
                onClick={() => {
                    DisplayModal('Image as BG',
                        'You can set the background image of a webpage by using the background-image: tag in CSS.',
                        false,
                        'Image as BG',
                        'https://www.w3schools.com/cssref/pr_background-image.asp'
                    )
                    document.getElementById('completebutton').addEventListener('click', onComplete)
                }}
                topmargin={49} 
                leftmargin={columnwidth * 4} 
                ></RoadmapContent>

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

                <RoadmapContent
                    title={'C#'}
                    onClick={() => {
                        DisplayModal('C#',
                            'C# is a programming language that is used to create programs of many different kinds, such as games, desktop programs and websites. This roadmap will show you how to use C# to create a console application.',
                            false,
                            'C# Intro',
                            'https://www.w3schools.com/cs/cs_intro.php',
                        )
                    }}
                    topmargin={1}
                    leftmargin={columnwidth * 2 + 3}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Syntax'}
                    onClick={() => {
                        currentNode = 'csharp_syntax';
                        DisplayModal('C# Syntax',
                            'Getting familiar the syntax of C# is very important. Good knowledge of how C# apps are made will save a lot of time in the future! View the sub-nodes and click \'Complete\' to continue.',
                            true,
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={10}
                    leftmargin={columnwidth * 2 + 2}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Using'}
                    onClick={() => {
                        DisplayModal('C# Using Keyword',
                            'The using keyword is used to import a namespace into your program. This is used to import the System namespace by default, which contains many useful classes and methods.',
                            false,
                            'C# Using',
                            'https://www.c-sharpcorner.com/UploadFile/manas1/usage-and-importance-of-using-in-C-Sharp472/',
                        )
                    }}
                    topmargin={8}
                    leftmargin={columnwidth * 1}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Namespace'}
                    onClick={() => {
                        DisplayModal('C# Namespaces',
                            'Namespaces are used to group classes and methods together to be used in other files.',
                            false,
                            'C# Namespaces',
                            'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/namespace',
                        )
                    }}
                    topmargin={12}
                    leftmargin={columnwidth * 1}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Main( )'}
                    onClick={() => {
                        DisplayModal('C# Main Function',
                            'The main function is the first function that is called when the program is run. Any code written within the main function will be run when the program begins.',
                            false,
                            'The Main Function',
                            'https://www.completecsharptutorial.com/basic/main-method.php',
                        )
                    }}
                    topmargin={10}
                    leftmargin={columnwidth * 3}
                ></RoadmapContent>

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

                <RoadmapContent
                    title={'String'}
                    onClick={() => {
                        DisplayModal('C# Strings',
                            'Strings are used to store text. Strings are created by using the " character.',
                            false,
                            'Strings in C#',
                            'https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/strings/',
                        )
                    }}
                    topmargin={22}
                    leftmargin={columnwidth * 1}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Char'}
                    onClick={() => {
                        DisplayModal('C# Char',
                            'Chars are used to store a single character. Chars are created by using the \' character.',
                            false,
                            'Char Datatype in C#',
                            'https://docs.microsoft.com/en-us/dotnet/api/system.char?view=net-6.0',
                        )
                    }}
                    topmargin={26}
                    leftmargin={columnwidth * 1}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Numbers'}
                    onClick={() => {
                        DisplayModal('C# Numbers',
                            'Number datatypes are used to store numbers. There are many different types of numbers depending on your needs, including integers, floats, and decimals.',
                            false,
                        )
                    }}
                    topmargin={22}
                    leftmargin={columnwidth * 3 + 3}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Booleans'}
                    onClick={() => {
                        DisplayModal('C# Booleans',
                            'Booleans are used to store true or false values. Therefore they can only be assigned true or false and are very useful for determining the state of different things.',
                            false,
                            'Boolean Datatype in C#',
                            'https://www.w3schools.com/cs/cs_booleans.php',
                        )
                    }}
                    topmargin={26}
                    leftmargin={columnwidth * 3 + 3}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Integer'}
                    onClick={() => {
                        DisplayModal('C# Integer',
                            'Integers are used only to store whole numbers. Integers are created by using the int keyword.',
                            false,
                            'The int keyword in C#',
                            'https://www.geeksforgeeks.org/int-keyword-in-c-sharp/',
                        )
                    }}
                    topmargin={20}
                    leftmargin={columnwidth * 4 + 3}
                ></RoadmapContent>


                <RoadmapContent
                    title={'Float'}
                    onClick={() => {
                        DisplayModal('C# Float',
                            'Floats are used to store decimal numbers. Floats are created by using the float keyword.',
                            false,
                            'The float keyword in C#',
                            'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/floating-point-numeric-types',
                        )
                    }}
                    topmargin={24}
                    leftmargin={columnwidth * 4 + 3}
                ></RoadmapContent>

                <RoadmapContent title={'Manipulating Data'}
                    onClick={() => {
                        currentNode = 'csharp_data_manipulation';
                        DisplayModal('C# Data Manipulation',
                            'C# has many ways to manipulate and change data. View the sub-nodes and click \'Complete\' to continue.',
                            true,
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={40}
                    leftmargin={columnwidth * 2 - 1}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Math Functions'}
                    onClick={() => {
                        DisplayModal('C# Math Functions',
                            'Math functions are used to perform mathematical operations on numbers. There are many different math functions that can be used to perform different operations. All these functions are apart of the math class.',
                            false,
                            'Math Functions in C#',
                            'https://docs.microsoft.com/en-us/dotnet/api/system.math?view=net-6.0',
                        )
                    }}
                    topmargin={40}
                    leftmargin={columnwidth * 3 + 3}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Assignment Operators'}
                    onClick={() => {
                        DisplayModal('C# Assignment Operators',
                            'Assignment operators are used to assign values to variables. There are many different assignment operators that can be used to assign values to variables.',
                            false,
                            'Assignment Operators in C#',
                            'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/assignment-operator',
                        )
                    }}
                    topmargin={35}
                    leftmargin={columnwidth * 1 - 5}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Comparison Operators'}
                    onClick={() => {
                        DisplayModal('C# Comparison Operators',
                            'Comparison operators are used to compare values. There are many different comparison operators that can be used to compare values. They return values to be evaluated which can make the code behave differently depending on the result of the comparison.',
                            false,
                            'Comparison Operators in C#',
                            'https://www.completecsharptutorial.com/basic/comparison-operators.php',
                        )
                    }}
                    topmargin={40}
                    leftmargin={columnwidth * 1 - 5}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Logical Operators'}
                    onClick={() => {
                        DisplayModal('C# Logical Operators',
                            'Logical operators are used to evaluate conditions. Essentially, they are symbols for words such as AND. They can be combined with comparison operators to evaluate conditions further.',
                            false,
                            'Logical Operators in C#',
                            'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/boolean-logical-operators',
                        )
                    }}
                    topmargin={45}
                    leftmargin={columnwidth * 1 - 5}
                ></RoadmapContent>

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

                <RoadmapContent
                    title={'Console Methods'}
                    onClick={() => {
                        DisplayModal('C# Console Methods',
                            'In C# console applications, the console methods are what is used for the application to read and display stuff to the user.',
                            false,
                            'Console Methods in C#',
                            'https://www.w3schools.com/cs/cs_user_input.php',
                        )
                    }}
                    topmargin={50}
                    leftmargin={columnwidth * 3 + 3}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Console.Writeline'}
                    onClick={() => {
                        DisplayModal('C# Console.Writeline',
                            'The Console.Writeline method is used to output text to the screen. You can make it output text, numbers, or other data types.',
                            false,
                            'Console.Writeline in C#',
                            'https://www.w3schools.com/cs/cs_output.php',
                        )
                    }}
                    topmargin={48}
                    leftmargin={columnwidth * 4 + 8}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Console.Readline'}
                    onClick={() => {
                        DisplayModal('C# Console.Readline',
                            'The Console.Readline method is used to read text from the user. In the code, it returns whatever the user entered as the \'string\' data type.',
                            false,
                            'Console.Readline in C#',
                            'https://docs.microsoft.com/en-us/dotnet/api/system.console.readline?view=net-6.0',
                        )
                    }}
                    topmargin={52}
                    leftmargin={columnwidth * 4 + 8}
                ></RoadmapContent>

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

                <RoadmapContent
                    title={'For Loop'}
                    onClick={() => {
                        DisplayModal('C# For Loop',
                            'The For Loop is used to iterate through a set of code a certain number of times. It can fit 3 statements, and the first statement is the initialization, the second statement is the condition, and the third statement is the increment. WARNING they can potentially run forever if the condition is not met.',
                            false,
                            'For Loop in C#',
                            'https://www.tutorialsteacher.com/csharp/csharp-for-loop',
                        )
                    }}
                    topmargin={63}
                    leftmargin={columnwidth * 1}
                ></RoadmapContent>

                <RoadmapContent
                    title={'While Loop'}
                    onClick={() => {
                        DisplayModal('C# While Loop',
                            'The While Loop is used to iterate through a set of code while a certain condition is met. WARNING they can potentially run forever if the condition is not met.',
                            false,
                            'While Loop in C#',
                            'https://www.tutorialsteacher.com/csharp/csharp-while-loop',
                        )
                    }}
                    topmargin={67}
                    leftmargin={columnwidth * 1}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Do While Loop'}
                    onClick={() => {
                        DisplayModal('C# Do While Loop',
                            'The Do While Loop is used to iterate through a set of code while a certain condition is met. This will always execute at least 1 iteration, even if the condition is not met at the start of the loop. WARNING they can potentially run forever if the condition is not met.',
                            false,
                            'Do While Loop in C#',
                            'https://www.tutorialsteacher.com/csharp/csharp-do-while-loop',
                        )
                    }}
                    topmargin={67}
                    leftmargin={columnwidth * 0 + 0.2}
                ></RoadmapContent>

                <RoadmapContent
                    title={'If Else'}
                    onClick={() => {
                        DisplayModal('C# If Else',
                            'The If Else statement is used to evaluate a condition and execute code depending on the result. It can be used to execute code if a condition is met, or to execute code if the condition is not met.',
                            false,
                            'If Else in C#',
                            'https://www.w3schools.com/cs/cs_conditions.php',
                        )
                    }}
                    topmargin={63}
                    leftmargin={columnwidth * 3}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Switch Cases'}
                    onClick={() => {
                        DisplayModal('C# Switch Cases',
                            'A switch statement takes a value and compares it to a set of values. If the value matches a value in the set, the code in the case will be executed. If the value does not match any of the values in the set, the code in the default case will be executed.',
                            false,
                            'Switch Cases in C#',
                            'https://www.w3schools.com/cs/cs_switch.asp',
                        )
                    }}
                    topmargin={67}
                    leftmargin={columnwidth * 3} >
                </RoadmapContent>

                <RoadmapContent
                    title={'Default + Break'}
                    onClick={() => {
                        DisplayModal('C# Default + Break',
                            'In switch statements, the default case is used to execute code if the value does not match any of the values in the set. The break statement is used to stop the execution of the code in the case.',
                            false,
                            'Default + Break in C#',
                            'https://www.w3schools.com/cs/cs_break.asp',
                        )
                    }}
                    topmargin={67}
                    leftmargin={columnwidth * 4}
                ></RoadmapContent>

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

                <RoadmapContent title={'Javascript'}
                    onClick={() => {
                        DisplayModal('Javascript',
                            'Javascript is a programming language that is used to create interactive web pages. It is a dynamic, weakly typed language that allows you to create dynamic web pages. Javascript is a multi-paradigm language which means it can be used to create both server-side and client-side applications.',
                            false,
                            'Javascript',
                            'https://www.w3schools.com/js/',
                        )
                    }}

                    topmargin={1}
                    leftmargin={columnwidth * 2 + 1.2} ></RoadmapContent>

                <RoadmapContent
                    title={'Implementation'}
                    onClick={() => {
                        currentNode = 'js_implementation';
                        DisplayModal('Implementation',
                            'You have to implement javascript into your html webpages in order for it to operate, this can be done a few ways. ',
                            true,
                        )
                        document.getElementById('completebutton').addEventListener('click', onComplete)
                    }}
                    topmargin={15}
                    leftmargin={columnwidth * 2 - 1}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Inline JS'}
                    onClick={() => {
                        DisplayModal('Inline Javascript',
                            'You can write javascript code that will be executed when the page loads. This is a common way to write javascript code.',
                            false,
                            'Inline Javascript code',
                            'https://www.geeksforgeeks.org/how-does-inline-javascript-work-with-html/'
                        )
                    }}
                    topmargin={13}
                    leftmargin={columnwidth * 3 + 2}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Script Tag'}
                    onClick={() => {
                        DisplayModal('Script Tag',
                            'In order to use inline javascript, you have to specify a script tag in your html, inside the tag is where the javascript code is written. Alternatively you can use the src attribute to specify the location of the javascript file.',
                            false,
                            'Script Tag in Javascript',
                            'https://www.geeksforgeeks.org/how-does-inline-javascript-work-with-html/'
                        )
                    }}
                    topmargin={17}
                    leftmargin={columnwidth * 3 + 2}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Data'}
                    onClick={() => {
                        DisplayModal('Data',
                            'In Javascript, data is stored within variables and collections. There are many types of variables, all suited towards different needs.',
                            false,
                            'Data in Javascript',
                            'https://www.geeksforgeeks.org/how-does-inline-javascript-work-with-html/'
                        )
                    }}
                    topmargin={37}
                    leftmargin={columnwidth * 2 + 2}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Data Types'}
                    onClick={() => {
                        DisplayModal('Data Types',
                            'There are many different data types in Javascript, there are variables, then there are primatives. ',
                            false,
                        )
                    }}
                    topmargin={37}
                    leftmargin={columnwidth * 1 + 2}
                ></RoadmapContent>

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

                <RoadmapContent
                    title={'Let'}
                    onClick={() => {
                        DisplayModal('Let',
                            'The let keyword is used to declare a variable, it is a block scoped variable, it is only available within the block of code it is declared in.',
                            false,
                            'Let in Javascript',
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let'
                        )
                    }}
                    topmargin={21}
                    leftmargin={columnwidth * 0 + 1}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Var'}
                    onClick={() => {
                        DisplayModal('Var',
                            'The var keyword is used to declare a variable, it is a function scoped variable, it is available throughout the function it is declared in.',
                            false,
                            'Var in Javascript',
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var'
                        )
                    }}

                    topmargin={25}
                    leftmargin={columnwidth * 0 + 1}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Const'}
                    onClick={() => {
                        DisplayModal('Const',
                            'The const keyword is used to declare a variable which its value can never be reassigned to, it is a block scoped variable, it is only available within the block of code it is declared in.',
                            false,
                            'Const in Javascript',
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const'
                        )
                    }}
                    topmargin={29}
                    leftmargin={columnwidth * 0 + 1}
                ></RoadmapContent>

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

                <RoadmapContent title={'String'}
                    onClick={() => {
                        DisplayModal('String',
                            'Strings are used to store text in javascript and can be assigned to a variable using the new String() constructor.',
                            false,
                            'Strings in Javascript',
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
                        )
                    }}
                    topmargin={43}
                    leftmargin={columnwidth * 0 + 1}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Boolean'}
                    onClick={() => {
                        DisplayModal('Boolean',
                            'Booleans are used to store true or false values in javascript and can be assigned to a variable using the new Boolean() constructor.',
                            false,
                            'Booleans in Javascript',
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean'
                        )
                    }}
                    topmargin={47}
                    leftmargin={columnwidth * 0 + 1}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Number'}
                    onClick={() => {
                        DisplayModal('Number',
                            'Numbers are used to store numbers in javascript and can be assigned to a variable using the new Number() constructor.',
                            false,
                            'Numbers in Javascript',
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number'
                        )
                    }}
                    topmargin={51}
                    leftmargin={columnwidth * 0 + 1}
                ></RoadmapContent>

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

                <RoadmapContent
                    title={'JSON Objects'}
                    onClick={() => {
                        DisplayModal('JSON Objects',
                            'JSON Stands for Javascript Object Notation, it is a way to store data in a way that is easily readable and editable by humans and other programming languages.',
                            false,
                            'JSON Objects in Javascript',
                            'https://www.w3schools.com/js/js_json.asp'
                        )
                    }}
                    topmargin={35}
                    leftmargin={columnwidth * 4 + 2}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Arrays'}
                    onClick={() => {
                        DisplayModal('Javascript Arrays',
                            'Arrays are used to store collections of data, they are used to store multiple values and there are many functions which can help go through the data within arrays.',
                            false,
                            'Arrays in Javascript',
                            'https://www.w3schools.com/js/js_arrays.asp'
                        )
                    }}
                    topmargin={39}
                    leftmargin={columnwidth * 4 + 2}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Functionality'}
                    onClick={() => {
                        DisplayModal('Functionality in Javascript',
                            'Javascript has many different ways of making a website respond and change with different events. Some of these include the use of event handling and asyncronous code execution.',
                        )
                    }}
                    topmargin={68}
                    leftmargin={columnwidth * 2 - 1}
                ></RoadmapContent>

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

                <RoadmapContent
                    title={'Execute JS on Event'}
                    onClick={() => {
                        DisplayModal('Executing JavaScript code on Event',
                            'Event such as onclick are used to execute code when a condition is met, this is done by binding a function to the event.',
                            false,
                            'Execute JS on Event in Javascript',
                            'https://www.w3schools.com/js/js_events.asp'
                        )
                    }}
                    topmargin={62}
                    leftmargin={columnwidth * 0 + 1}
                ></RoadmapContent>

                <RoadmapContent title={'Event Listeners'}
                    onClick={() => {
                        DisplayModal('Event Listeners in Javascript',
                            'Event Listeners are used to bind functions to events, using javascript you can specify the HTML element that will trigger the event, and the event that will trigger the function.',
                            false,
                            'Event Listeners in Javascript',
                            'https://www.w3schools.com/js/js_htmldom_eventlistener.asp'
                        )
                    }}
                    topmargin={68}
                    leftmargin={columnwidth * 0 + 1}
                ></RoadmapContent>

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

                <RoadmapContent
                    title={'Callbacks'}
                    onClick={() => {
                        DisplayModal('Callbacks in Javascript',
                            'When asynchronous functions are occurring, we use callbacks to make sure that a piece of code will run after the asynchronous function is completed and not simultaneously.',
                            false,
                            'Callbacks in Javascript',
                            'https://developer.mozilla.org/en-US/docs/Glossary/Callback_function'
                        )
                    }}
                    topmargin={55}
                    leftmargin={columnwidth * 4 + 2}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Promises'}
                    onClick={() => {
                        DisplayModal('Promises in Javascript',
                            'When an asyncronous function is run, promises are used to determine the state of the function, whether it is successful or not and when it finishes.',
                            false,
                            'Promises in Javascript',
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise'
                        )
                    }}
                    topmargin={59}
                    leftmargin={columnwidth * 4 + 2}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Fetch API'}
                    onClick={() => {
                        DisplayModal('Fetch API in Javascript',
                            'The fetch API is used to make requests to a server, it can send information through a request and get responses from the server to use.',
                            false,
                            'Fetch API in Javascript',
                            'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch'
                        )
                    }}
                    topmargin={68}
                    leftmargin={columnwidth * 3 + 2}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Requests'}
                    onClick={() => {
                        DisplayModal('FetchAPI Requests in Javascript',
                            'The Fetch API can send requests to a server, you can pass any information you want through the request',
                            false,
                            'FetchAPI Requests in Javascript',
                            'https://developer.mozilla.org/en-US/docs/Web/API/Request'
                        )
                    }}
                    topmargin={66}
                    leftmargin={columnwidth * 4 + 2}
                ></RoadmapContent>

                <RoadmapContent
                    title={'Responses'}
                    onClick={() => {
                        DisplayModal('FetchAPI Responses in Javascript',
                            'The Fetch API when a request is received, it will return a response, the response from the server will have include any data the server decides to send.',
                            false,
                            'FetchAPI Responses in Javascript',
                            'https://developer.mozilla.org/en-US/docs/Web/API/Response'
                        )
                    }}
                    topmargin={70}
                    leftmargin={columnwidth * 4 + 2}
                ></RoadmapContent>

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