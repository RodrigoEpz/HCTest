import React from 'react'
import {Card, CardBody, Row, Col, Button, Table} from 'reactstrap'
import { carsActions } from '../../Actions/carActions';

export default class QuickSearchCars extends React.PureComponent{

    handleSubmit = (event) => {
        event.preventDefault()
        if(event.target && event.target.dataset && event.target.dataset.typeop)
        {
            const typeRequest = event.target.dataset.typeop

            switch(typeRequest)
            {
                case "Cheaper":
                    this.props.dispatch(carsActions.getCheaper())
                    break;
                case "CheaperByBrand":
                break;
            }
        }
    }

    render(){
        const {cars} = this.props;
        const car = cars.quicksearch.car.id ? cars.quicksearch.car : {}
        const quickSearch = cars.quicksearch.car.id ? (
            
            <Row>
                <Table>
                    <thead>
                        <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>Kilometers</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={car.id}>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{car.kilometers}</td>
                            <td>{car.price}</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        ):(
            <Row>
                <Col>
                    <h2>Select an option</h2>
                </Col>
            </Row>
        )
        return(
            <Card>      
                <CardBody>
                    <Row>
                        <Col md={{size : 2}}>
                        <Button color="primary" data-typeop='Cheaper' onClick={this.handleSubmit}>
                            Cheaper
                        </Button>
                        </Col>
                    </Row>      
                    {quickSearch}
                </CardBody>
            </Card>

        )
    }
}