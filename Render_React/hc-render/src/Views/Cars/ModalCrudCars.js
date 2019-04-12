import React from 'react'
import { Button, Col,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Form, FormGroup, Input,
    Row, Label } from 'reactstrap'


class ModalCrudCars extends React.Component {
    
    render(){
        const {modalCrud, toggleModalCrud, typeOp, handleSubmit} = this.props;
        return(
            <Modal isOpen={modalCrud} toggle={toggleModalCrud}>
            <ModalHeader toggle={toggleModalCrud}>{typeOp} </ModalHeader>
            <ModalBody>
                <Form method = "POST" >
                    <FormGroup>
                        <Label for="NombreHorario"> Nombre de Horario: </Label>
                        <Input id="NombreHorario" placeholder="Brand"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Descripcion">Descripcion: </Label>
                        <Input id="Descripcion" placeholder="Description"/>
                    </FormGroup>
                    
                    <Row>
                        <Col md="6">
                            <FormGroup>
                                <Label for="horaInicio">Hora Inicial: </Label>
                                <Input id="horaInicio" />
                            </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="horaFinal"> Hora Final: </Label>
                                <Input id="horaFinal" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="6">
                        <FormGroup>
                            <Label for="exampleSelect">Select</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Input>
                        </FormGroup>
                        </Col>
                        <Col md="6">
                            <FormGroup>
                                <Label for="horaFinal"> Hora Final: </Label>
                                <Input id="horaFinal" />
                            </FormGroup>
                        </Col>
                    </Row>
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