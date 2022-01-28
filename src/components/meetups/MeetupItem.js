import React, { useContext } from 'react';
import './MeetupItem.css';
import Card from '../UI/Card';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {

  //make use of the imported context;
  const favoritesContext = useContext(FavoritesContext);
  //use the context's props(keys) to access handler fns defined & pass them values
  const itemIsFavorite = favoritesContext.itemIsFavorite(props.id);

  function toggleFavoriteHandler() {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(props.id);
    }
    else {
      favoritesContext.addFavorite({
        id: props.id,
        title: props.title,
        address: props.address,
        description: props.description,
        image: props.image,
      });
    }
  }

    return(
      <Card>
        <li className="item">
          <div className="image">
              <img src={props.src} alt={props.title}/>
            </div>
            <div className="content">
                <h2>{props.title}</h2>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className="actions">
              <button onClick={toggleFavoriteHandler}>
                {itemIsFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
        </li>
      </Card>
    );
}
export default MeetupItem;