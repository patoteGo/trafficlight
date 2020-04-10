import React from 'react'
import Light from './Light'
class TrafficLight extends React.Component {
    constructor(){
        super();
        this.state = {
            color: ''
        }
    }
    cambiosemaforo = () => {
        
        this.setState({
            color: 'green'
        })
        setTimeout(() => {
            this.setState({
                color: 'yellow'
            })
        }, 2000);
        setTimeout(() => {
            this.setState({
                color: 'red'
            })
        }, 4000);
        setTimeout(() => {
            this.setState({
                color: ''
            })
        }, 6000);
    }
    render() {
        
        return (
                
                <div>
                    <div className="container">
                        <div className="traffic">
                                <div className="soporte"></div>
                                <div className="base">
                                    <Light color={this.state.color === 'red' ? 'active red' : 'red'} />
                                    <Light color={this.state.color === 'yellow' ? 'active yellow' : 'yellow'} />
                                    <Light color={this.state.color === 'green' ? 'active green' : 'green'} />
                                </div>
                        </div>
                        <button onClick={this.cambiosemaforo}>VERDE A ROJO</button>
                    </div>
                </div>
            )
    }
}

export default TrafficLight;