import React from 'react'
import { connect } from 'react-redux';
import { Container, Col, Row, Spinner, Card, CardHeader, CardBody, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import { carsActions } from '../../Actions/carActions';
import CarsTable from './carsTable'
import './cars.css'
import ModalCrudCars from './ModalCrudCars';

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
            let parentId = event.target.parentNode.id
            console.log(cars.table.cars.find(x => x.id == parentId))
            switch(idBtn){
                case 'Create':
                    this.props.dispatch(carsActions.toggleModal(idBtn))
                    break

                case 'Edit':            
                    this.props.dispatch(carsActions.toggleModal(idBtn, parentId))
                    break
            }            
        }else{
            this.props.dispatch(carsActions.toggleModal())
        }
    }
    
    // handleInputChange = (event) => {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.id;
    //     if(target.type === 'checkbox'){
    //         let daysO = Object.assign({}, this.state.newSchedule.DiasSemana);    //creating copy of object
    //         daysO[name] = value
    //         this.setState({
    //             newSchedule:{
    //                 ...this.state.newSchedule,
    //                 DiasSemana: daysO
    //             }
    //         })
    //     }else{
    //         this.setState({
    //             newSchedule: {
    //                 ...this.state.newSchedule,
    //                 [name]: value
    //             }
    //         })
    //     }
    // }

    handleSubmit = (event) => {
        event.preventDefault()
        if(event.target && event.target.id && event.target.id.substring(0,3) == "btn")
        {
            let typeRequest = event.target.id.substring(3)
            switch(typeRequest)
            {
                case "Create":
                    this.props.dispatch(carsActions.createSchedule(this.state.newSchedule))
                    break;

                case "Update":

                    break;

                case "Delete":

                    break;

                default:
                    break;
            }
        }
    }
    render(){
        const {cars} = this.props;
        const showTable = (cars.table && cars.table.status);
      
        const content = showTable ? (
            <Row>
                <Col xs={{ size: 10, offset: 1 }} className="spinner">
                    <Card>
                        <CardHeader><strong>Carros Disponibles</strong></CardHeader>
                        <ModalCrudCars toggleModalCrud = {this.toggleModalCrud}
                        //handleInputChange = {this.handleInputChange}
                        handleSubmit = {this.handleSubmit}
                        modalCrud = {cars.modalCrud}
                        typeOp = {cars.typeOp}
                        {...this.props}></ModalCrudCars>
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
                                    />
                                </TabPane>
                                <TabPane tabId="2">
                                   
                                </TabPane>                    
                            </TabContent>
                            {/* <div>
                                <Switch>
                                <Route exact path="/panel/configuracion/horarios" component={ScheduleCrud}/>
                                <Route path="/panel/configuracion/horarios/bajas" render={()=>(<h1>Bajas</h1>)}/>
                                </Switch>
                            </div> */}
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

function mapStateToProps(state) {
    const { cars } = state;
    return {
        cars
    };
}

export default connect(mapStateToProps)(Cars)