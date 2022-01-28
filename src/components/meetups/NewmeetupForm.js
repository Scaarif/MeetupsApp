
import React from 'react';
import Card from '../UI/Card';
import './NewmeetupForm.css';

function NewmeetupForm(props) {

    //prepare to read the input data from the form;
    const titleInputRef = React.useRef();
    const descriptionInputRef = React.useRef();
    const imageInputRef = React.useRef();
    const addressInputRef = React.useRef();

    function submitHandler(event){
        //prevent form submission and reloading...?
        event.preventDefault();
        //read the input data from the form
        const titleEntered = titleInputRef.current.value;
        const addressEntered = addressInputRef.current.value;
        const imageEntered = imageInputRef.current.value;
        const descriptionEntered = descriptionInputRef.current.value;

        const meetupData = {
            title: titleEntered,
            image: imageEntered,
            address: addressEntered,
            description: descriptionEntered
        };

        //console.log(meetupData);
        //pass on this data to the fuction handling this form submission
        props.onSubmission(meetupData);
    }
    return(
        <Card>
            <form className="form" onSubmit={submitHandler}>
                <div className="control">
                    <label htmlFor="title">Meetup title</label>
                    <input type="text" required id="title" 
                        ref={titleInputRef}/>
                </div>
                <div className="control">
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" required id="image" ref={imageInputRef} />
                </div>
                <div className="control">
                    <label htmlFor="title">Address</label>
                    <input type="text" required id="address" 
                        ref={addressInputRef} />
                </div>
                <div className="control">
                    <label htmlFor="title">Description</label>
                    <textarea required id="description" 
                        rows="5" ref={descriptionInputRef}></textarea>
                </div>
                <div className="actions">
                   <button>Add Meetup</button> 
                </div>
            </form>
        </Card>
    );
}
export default NewmeetupForm;