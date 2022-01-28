import React, { createContext, useState } from 'react';

const FavoritesContext = createContext(
    //set initial values to the context
    {
        favorites: [],
        totalFavorites: 0,
        //add the other variables in context - but just to help witha utocompletion outside this component
        //i.e they point to empty fns - doing nothing
        addFavorite: (favoriteMeetup) => {},
        removeFavorite: (meetupId) => {},
        itemIsFavorite: (meetupId) => {}
    }
);

export function FavoritesContextProvider(props){
    //keep track of a user's favorites/context and update as necessary 
    const [userFavorites, setUserfavorites] = useState([]);

    //the updaters/handlers
    function addFavoriteHandler(favoriteMeetup) {
        setUserfavorites((previousFavorites) => {
            return previousFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserfavorites((previousFavorites) => {
            //i.e filter out the given meetupId from the return value
            return previousFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        //i.e the meetupId provided is in userFavs meetups
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    //keep track of a user's favs/context and update as necessary 
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };
    return(
        //return a wrapper component - to be wrapped around any components 
        //requiring to know about this context
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}
//export the context;
export default FavoritesContext;

//once this' done it can now be imported into any component/file that needs access


