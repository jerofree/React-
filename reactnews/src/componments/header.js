import React, { Component } from 'react';
require('../css/style.css');

class Header extends  React.Component{

    constructor(){
        super();
        this.state={
        miniHeader:false
     }
}
    switchHeader(){
        this.setState({
       miniHeader: !this.state.miniHeader
    })
    }

    render(){

        const styleComponmentHeader = {
            header:{
                backgroundColor:(this.state.miniHeader)? "pink":"#333333",
                color:'#fff',
                paddingTop:"15px",
                paddingBottom:"15px"
            }

        };
        return (
            <header style={styleComponmentHeader.header} className="smallFontSize"
            onClick={this.switchHeader.bind(this)}
            >
                <h1>这里是头部</h1>
            </header>
        )

    }
}
export default Header;