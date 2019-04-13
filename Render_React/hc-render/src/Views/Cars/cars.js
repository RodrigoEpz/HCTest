import React from 'react'
import { connect } from 'react-redux';
import { Container, Col, Row, Spinner, Card, CardHeader, CardBody, Nav, NavItem, NavLink, TabContent, TabPane,
Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';
import { carsActions } from '../../Actions/carActions';
import CarsTable from './carsTable'
import './cars.css'
import ModalCrudCars from './ModalCrudCars';
import { commonActions } from '../../Actions/commonActions';
import QuickSearchCars from './quickSearchCars'


class Cars extends React.Component{

    state = {
        activeTab: '1'
    }

    componentDidMount(){
        this.props.dispatch(carsActions.getAll())
    }

    toggleTab(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab,
          });
        }
    }

    toggleModalCrud = (event) => {
        if(event.target && event.target.dataset && event.target.dataset.typeop){
            const {cars}= this.props;

            const idBtn = event.target.dataset.typeop
            let parentId
            switch(idBtn){
                case 'Create':
                    this.props.dispatch(carsActions.toggleModal(idBtn))
                    break

                case 'Edit':                
                    parentId = event.target.parentNode.id
                    const carToUpdate = cars.table.cars.find(x => x.id == parentId)
                    this.props.dispatch(carsActions.toggleModal(idBtn, carToUpdate))
                    break
                
                case 'Delete':
                    parentId = event.target.parentNode.id
                    this.props.dispatch(commonActions.showMessage("cars", "Are you sure?", parentId))
                    console.log(parentId)
                    break;
            }            
        }else{
            this.props.dispatch(carsActions.toggleModal())
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value =  target.value;
        const name = target.id;
        this.props.dispatch(carsActions.modifyCarToEdit(name, value))
        }

    handleSubmit = (event) => {
        event.preventDefault()
        const {cars} = this.props
        if(event.target && event.target.id && event.target.id.substring(0,3) == "btn" && cars.edit.car)
        {
            let typeRequest = event.target.id.substring(3)
            switch(typeRequest)
            {
                case "Create":
                    this.props.dispatch(carsActions.createCar(cars.edit.car))
                    break;

                case "Edit":
                    this.props.dispatch(carsActions.updateCar(cars.edit.car))
                    break;

                case "Delete":
                const idCar = event.target.dataset.idtodelete
                
                console.log("borrar: " + idCar)
                    this.props.dispatch(carsActions.deleteCar(idCar))
                    break;
            }
        }
    }

    setDefaultValuesToState = (id,value) => {
        this.props.dispatch(carsActions.modifyCarToEdit(id, value))
    }

    toggleModalMessage = () =>{
        this.props.dispatch(commonActions.eraseMessage("cars"))
    }

    render(){
        const {cars, common} = this.props;
        const showTable = (cars.table && cars.table.status);
      
        const footerForModalMessage = common.modalMessage.isActive && common.modalMessage.isForDelete ? (
            <ModalFooter>
                <Button color="danger" id="btnDelete" data-idtodelete={common.modalMessage.isForDelete} onClick={this.handleSubmit}>Ok</Button>
                <Button color="primary" onClick={this.toggleModalMessage}>Cancel</Button>
            </ModalFooter>
        ):(
            <ModalFooter>
                <Button color="primary" onClick={this.toggleModalMessage}>Ok</Button>
            </ModalFooter>
        );
        const content = showTable ? (
            <Row>
                <Col xs={{ size: 10, offset: 1 }} className="spinner">
                    <Card>
                        <CardHeader><strong>Carros Disponibles</strong></CardHeader>
                        <Modal isOpen={common.modalMessage.isActive} toggle={this.toggleModalMessage}>
                            <ModalHeader toggle={this.toggleModalMessage}>Attention!</ModalHeader>
                            <ModalBody>
                                {(common && common.modalMessage && common.modalMessage.message)&& 
                                    common.modalMessage.message}
                            </ModalBody>
                            {
                                footerForModalMessage
                            }
                        </Modal>

                        <ModalCrudCars toggleModalCrud = {this.toggleModalCrud}
                            handleSubmit = {this.handleSubmit}
                            handleInputChange = {this.handleInputChange}
                            modalCrud = {cars.modalCrud}
                            typeOp = {cars.typeOp}
                            cars = {cars.edit && cars}
                            setDefaultValuesToState = {this.setDefaultValuesToState}
                        ></ModalCrudCars>
                        <CardBody>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink 
                                    className={ this.state.activeTab === '1' ? "active" : ""}
                                    onClick={() => { this.toggleTab('1'); }}>Catalogo de carros</NavLink>
                                </NavItem>
                                
                                <NavItem>
                                    <NavLink 
                                    className={ this.state.activeTab === '2' ? "active" : ""}
                                    onClick={() => { this.toggleTab('2'); }}>Busqueda rapida</NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <CarsTable cars={cars}
                                    toggleModalCrud = {this.toggleModalCrud}
                                    typeOp = {cars.typeOp}          
                                    />
                                </TabPane>
                                <TabPane tabId="2">
                                    <QuickSearchCars
                                    cars= {cars}
                                />       
                                </TabPane>                    
                            </TabContent>
                        </CardBody>
                    </Card>
                      
                </Col>
            </Row>
        ):(
            <Row>
                <Col xs={{ size: 2, offset: 5 }} className="spinner">
                    <Spinner style={{ width: '5rem', height: '5rem' }} />
                </Col>
            </Row>
        );
        return(
            <div className="d-flex align-items-center">
                <Container >
                    {content}
                </Container>
            </div>
            
        )
    }
}

function mapStateToProps(props) {
    const { cars, common } = props;
    return {
        cars,
        common
    };
}

export default connect(mapStateToProps)(Cars)