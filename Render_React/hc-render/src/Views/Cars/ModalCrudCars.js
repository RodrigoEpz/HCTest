import React from 'react'
import { Button, Col,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Input,
    Row, Label } from 'reactstrap'
import GenericSelect from '../../Helpers/Components/genericSelect'
import {getLastFifteenYears} from '../../Helpers/Utils/formats'


class ModalCrudCars extends React.Component {
    
    handleSelect = (event) =>{
        console.log(event.target)
    }

    render(){
        const {modalCrud, toggleModalCrud, typeOp, handleSubmit, cars, handleInputChange, setDefaultValuesToState} = this.props;
        const carToUpdate = cars.edit.status && cars.edit.car
        const yearsOption = getLastFifteenYears()
        const brandsOption = ["Ford","VW","Mazda","Fiat","Renault", "Chevrolet"]   

        return(
            <Modal isOpen={modalCrud} toggle={toggleModalCrud}>
            <ModalHeader toggle={toggleModalCrud}>{typeOp} </ModalHeader>
            <ModalBody>
                <Form >
                    <FormGroup>
                        <Label for="model">Model: </Label>
                        <Input id="model" placeholder="Model"
                        defaultValue={carToUpdate ? carToUpdate.model : ""}
                        onChange={handleInputChange}/>
                    </FormGroup>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label for="kilometers"> Kilometers: </Label>
                                <Input id="kilometers" placeholder="Kilometers" type="number"
                                defaultValue={carToUpdate ? carToUpdate.kilometers : ""} 
                                onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="price">Price: </Label>
                                <Input id="price" placeholder="Price" type="number"
                                defaultValue={carToUpdate ? carToUpdate.price : ""}
                                onChange={handleInputChange}/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label for="year">Year: </Label>
                                <GenericSelect id="year" 
                                options={yearsOption} 
                                selected={carToUpdate ? carToUpdate.year : 0}
                                setDefaultValuesToState={setDefaultValuesToState}
                                handleInputChange={handleInputChange}></GenericSelect>
                            </FormGroup>
                        </Col>
                        <Col md="6">
                        <FormGroup>
                                <Label for="brand">Brand: </Label>
                                <GenericSelect id="brand" options={brandsOption}
                                selected={carToUpdate ? carToUpdate.brand : ""}
                                setDefaultValuesToState={setDefaultValuesToState}
                                handleInputChange={handleInputChange}></GenericSelect>
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="description"> Description: </Label>
                        <Input id="description" 
                        defaultValue={carToUpdate ? carToUpdate.description : ""}
                        onChange={handleInputChange}/>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button id={"btn" + typeOp} color="primary" onClick={handleSubmit}>{typeOp}</Button>
                <Button color="secondary" onClick={toggleModalCrud}>Cancel</Button>
            </ModalFooter>
        </Modal>
        )
    }
}

export default ModalCrudCars