import React from 'react'
import { Button, CardBody, Card, Col, Row, Table } from 'reactstrap'

class CarsTable extends React.PureComponent{

    render(){
        const {cars} = this.props;
        console.log(cars)
        return(
            <Card>
                <CardBody>
                    <Row>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Brand</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                    <th>Kilometers</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cars.table.cars.map((car, index) => {
                                    return (
                                    <tr key={index}>
                                        <td>{car.brand}</td>
                                        <td>{car.model}</td>
                                        <td>{car.year}</td>
                                        <td>{car.kilometers}</td>
                                        <td>{car.price}</td>
                                        <td id={car.id}>
                                            <Button className="update-btn-crud-table" color="primary" data-typeop='Edit' onClick={this.props.toggleModalCrud}>Update</Button>
                                            <Button className="delete-btn-crud-table" color="danger" data-typeop='Delete' onClick={this.props.toggleModalCrud}>Delete</Button>
                                        </td>
                                    </tr>)
                                })}
                            </tbody>
                        </Table>
                    </Row>
                    {/* <CrudTable
                        dataTable = {this.props.schedules}
                        {...this.props}
                    /> */}
                    <br/>
                    <Row>
                        <Col md={{size : 2, offset : 10}}>
                        <Button color="success" data-typeop='Create' onClick={this.props.toggleModalCrud}>
                            Crear
                        </Button>
                        </Col>
                    </Row>                
                </CardBody>
            </Card>
        )
    }
}

export default CarsTable