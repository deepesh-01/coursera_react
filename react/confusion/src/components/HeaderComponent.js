import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import { render } from 'react-dom';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark >
                    <div className="container" >
                        <NavbarBrand href="/">Ristornate Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className = "container">
                        <div className = "row row-header">
                            <div className = "col-12 col-sm-6">
                                <h1>Ristornate Con Fusion</h1>
                                    <p> We can take inspiration from the world's best cusines, 
                                        and create a unique fusion experience for.
                                        Our lipsmaking creations will tackle your culinary sense.
                                    </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

            </React.Fragment>
        );
    }
}

export default Header;