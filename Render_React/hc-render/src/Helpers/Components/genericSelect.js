import React from 'react'
import {Input} from 'reactstrap'

export default class GenericSelect extends React.PureComponent {

    componentDidMount(){
        this.props.setDefaultValuesToState(this.props.id, this.props.selected ? this.props.selected : this.props.options[0])
    }

    render(){
        const {options, id, selected} = this.props

        return(
        
            <Input type="select" id={id} defaultValue={selected} onChange={this.props.handleInputChange}>
                {options.map((option) => {
                    return <option key={option}>{option}</option>
                })}
            </Input>
        )
    }
}