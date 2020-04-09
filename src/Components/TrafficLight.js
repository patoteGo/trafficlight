import React from 'react'
import Light from './Light'
class TrafficLight extends React.Component {

    render() {
        return (
                
                <div>
                    <div className="container">
                        <div className="traffic">
                                <div className="soporte"></div>
                                <div className="base">
                                    <Light color="red"/>
                                    <Light color="yellow"/>
                                    <Light color="green"/>
                                </div>
                        </div>
                        <button>VERDE A ROJO</button>
                    </div>
                </div>
            )
    }
}

export default TrafficLight;