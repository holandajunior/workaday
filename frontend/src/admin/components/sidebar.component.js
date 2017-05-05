import React from 'react';
import { Link } from 'react-router';

import './admin.style.scss';

export default class Sidebar extends React.Component {

    render() {

        return (

            /*<!-- SIDEBAR -->*/
            <div className="sidebar">
                <div className="brand">
                    <h2 className="text-center"><span>Work</span>aday</h2>    
                </div>
                <div className="sidebar-scroll">
                    <nav>
                        <ul className="nav">
                            <li>
                                <Link to="#subPoints" data-toggle="collapse" className="collapsed"><i className="lnr lnr-pencil"></i> <span>My work</span> <i className="icon-submenu lnr lnr-chevron-left"></i></Link>
                                <div id="subPoints" className="collapse ">
                                    <ul className="nav">
                                        <li><Link to="/user/points" className="">List of work hours</Link></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
                
            </div>
            /*<!-- END SIDEBAR -->*/
        );
    }

}