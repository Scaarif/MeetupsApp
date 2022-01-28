import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import './MainNavigation.css';
import FavoritesContext from '../../store/favorites-context';

function MainNavigation() {

    const favoritesContext = useContext(FavoritesContext);

     return(
         <header className="header">
             <div className="logo">React Meetups</div>
             <nav>
                 <ul>
                    <li> 
                        <Link to=''>All Meetups</Link>
                    </li>
                    <li>
                         <Link to='/favorites'>Favourites 
                         <span className="badge">
                             {favoritesContext.totalFavorites}</span></Link>
                    </li>
                    <li> 
                        <Link to='/new-meetup'>New Meetups </Link>
                    </li>
                 </ul>
             </nav>
         </header>
     );
}
export default MainNavigation;