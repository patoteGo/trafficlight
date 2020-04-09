import React from 'react'
class Light extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active : false
        }
    }
    onClickhandle = () => {
        this.setState({
            active: !this.state.active
        });
    }

    
    render(){
        return ( <div 
                    onClick={this.onClickhandle} 
                    className={(this.state.active ? (this.props.color + ' light active') : (this.props.color + ' light'))}>
                </div> 
                )
    }
}
export default Light;