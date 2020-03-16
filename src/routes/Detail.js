import React from "react";

class Detail extends React.Component{
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined){ // �����̷�Ʈ
            history.push("/");
        } 
    }
    render() { // render -> componentDidMount
        const { location } = this.props; // = props.location
        if(location.state) {
            return <span>{ location.state.title }</span>
        } else {
            return null;
        }
        
    }
}

export default Detail;