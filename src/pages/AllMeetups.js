import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import {useEffect, useState} from 'react';

/*
const DummmyData = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image: './logo512.png',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
]; */

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {

    setIsLoading(true);

    fetch('http://localhost:8000/api/meetups/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoadedMeetups(data);
        setIsLoading(false);
      });

  }, []);
  
  return (
    <section>
      <h1>All Meetups</h1>
      <ul>
        {/*DummmyData.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })*/
        <MeetupList meetups={loadedMeetups}/>}
      </ul>
    </section>
  );
}

export default AllMeetupsPage;
