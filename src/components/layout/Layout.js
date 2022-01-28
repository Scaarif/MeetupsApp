import React from 'react';
import './Layout.css';
import MainNavigation from './MainNavigation';

function Layout(props) {
    return(
        //Renders the general SP app layout
        <div> <MainNavigation />
        <main className="main">{props.children}</main>
        </div>
    );
}
export default Layout;