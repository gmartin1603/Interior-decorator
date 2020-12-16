import React from 'react';
import './SideDrawer.css'

function SideDrawer(props) {
    let drawerClass = 'side__drawer'

    if(props.show) {
        drawerClass = 'side__drawer open'
    }

    return (
        <nav className={drawerClass}>
            <ul>
                <li><a href="/">Users</a></li>
                <li><a href="/">Products</a></li>
                <li><a href="/">Reviews</a></li>
            </ul>
        </nav>
    );
}

export default SideDrawer;