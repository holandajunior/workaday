import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

// Internal dependencies
import { logoutRequest } from '../../login/actions';

class Navbar extends React.Component {

    render() {

        return (

            /*<!-- NAVBAR -->*/
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-btn">
                        <button type="button" className="btn-toggle-fullwidth"><i className="lnr lnr-arrow-left-circle"></i></button>
                    </div>
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-menu">
                            <span className="sr-only">Toggle Navigation</span>
                            <i className="fa fa-bars icon-nav"></i>
                        </button>
                    </div>
                    <div id="navbar-menu" className="navbar-collapse collapse">
                        
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <Link to="#" className="dropdown-toggle" data-toggle="dropdown"><img src={"/assets/images/profile.png"} className="img-circle" alt="Avatar" width="25px" height="25px"></img> <span>Workaday</span> <i className="icon-submenu lnr lnr-chevron-down"></i></Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="#" onClick={ () => this.props.logout() }><i className="lnr lnr-exit"></i> <span>Logout</span></Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            /*<!-- END NAVBAR -->*/
        );

    }
}

const mapDispatchToProps = ( dispatch ) => ({

    logout: () => {
        dispatch( logoutRequest() );
    }
})

export default connect(null, mapDispatchToProps)(Navbar);