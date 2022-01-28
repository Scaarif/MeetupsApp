import React, {useContext} from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';
import {Link} from 'react-router-dom';

function FavoritesPage() {

  const favoritesContext = useContext(FavoritesContext);

  let content;
  if (favoritesContext.totalFavorites === 0) {
    content = <p>You have no favorites yet. Wanna add some?
      <span><Link to='/'>Click here...</Link></span> </p>;
  }
  else {
    content = <MeetupList meetups={favoritesContext.favorites} />;
  }

  return(
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
