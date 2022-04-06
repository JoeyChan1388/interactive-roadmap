// create a new component called InfoModal with a title and body
// pass in the title and body as props
// render the title and body into the modal
// render the modal into the app

import React from 'react';
import './modal.css'

function InfoModal(props) {
    return (
        <div className="modal" id="infoModal">
            <div className="modal-info">
                <h1 className='modal-title' id="title">{props.title}</h1>
                <p className='modal-body' id="body">{props.body}</p>
                <div className='link-stack'>
                    <a href='/' id='link1' >Link 1</a>
                    <a href='/' id='link2' >Link 2</a>
                    <a href='/' id='link3' >Link 3</a>
                </div>

                <button className='complete-button' id='completebutton' onClick={() => {
                    document.getElementById('infoModal').style.display = 'none';
                }}>Complete</button>

                <button className='goback-button' onClick={() => {
                    document.getElementById('infoModal').style.display = 'none';
                }}>Go Back</button>
            </div>
        </div>
    );
}


export default InfoModal;