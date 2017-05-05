import React from 'react';
import { Link } from 'react-router';

// Internal dependencies
import Sidebar from './sidebar.component'; 
import Navbar from './navbar.component';
import { DashboardComponent } from '../pages';
import { requireAuth } from 'appComponents';

export default class Main extends React.Component {

    render() {

        return (
            // <!-- WRAPPER -->
            <div id="wrapper">
                
                {/*SIDEBAR*/}
                <Sidebar />

                {/*<!-- MAIN -->*/}
                <div className="main">
                    
                    {/*NAVBAR*/}
                    <Navbar />

                    {/*<!-- MAIN CONTENT -->*/}
                    <div className="main-content">
                        <div className="container-fluid">
                           { this.props.children }                           
                        </div>
                    </div>
                    {/*<!-- END MAIN CONTENT -->*/}
                    <footer>
                        <div className="container-fluid">
                            <p className="copyright">&copy; 2016. Designed &amp; Crafted by <Link to="https://themeineed.com">The Develovers</Link></p>
                        </div>
                    </footer>
                </div>
                {/*<!-- END MAIN -->*/}
            </div>
            /*<!-- END WRAPPER -->*/
        );
    }

}