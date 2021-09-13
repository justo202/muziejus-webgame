import React, { Component } from 'react';
import NavBar from './HeaderComponent';
import Select from './ItemSelector';
import { Container } from 'reactstrap';


class Main extends Component {


    render()
    {

        return(
            
            <div>
                <NavBar />
                <Container fluid="lg">
                    <div className="row mt-2">
                        <div className="col-3">
                            <h2>temp</h2>
                        </div>
                        <div className="col-9">
                            <Select />
                        </div>

                    </div>
                </Container>
                <h1>testing works?</h1>
            </div>
        )
    }
}

export default Main;