import React from 'react';
import NewmeetupForm from '../components/meetups/NewmeetupForm';
import {useNavigate} from 'react-router-dom';

function NewMeetupPage() {
  const history = useNavigate();

  function meetupSubmissionHandler(meetupData){
    
    fetch('http://localhost:8000/api/meetups/',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
        history('/');
    });
  }

  return (
    <section>
      <h1>Add new MeetUp</h1>
      <NewmeetupForm  onSubmission={meetupSubmissionHandler}/>
    </section>
  );
}

export default NewMeetupPage;
