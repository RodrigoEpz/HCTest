import React from 'react';
import {connect} from 'react-redux'
import { Alert } from 'reactstrap';
import './app.css'
import { alertActions } from '../Actions/alertActions';
import Cars from '../Views/Cars/cars';

class App extends React.Component {

    onDismiss = () => {
        this.props.dispatch(alertActions.clear())
    }
  
    render() {
        const { alert } = this.props;
        return (
            <div>
                {alert.message&&
                    <Alert fade={true} toggle={this.onDismiss} className={`${alert.type} right-alert`}>{alert.message}</Alert >
                }
                <Cars/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

export default connect(mapStateToProps)(App)