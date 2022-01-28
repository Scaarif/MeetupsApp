import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

ReactDOM.render(
    //wrapping the App with the contextProvider makes it(context) available to it
    <FavoritesContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavoritesContextProvider>, document.getElementById('root')
    );
