import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {

    constructor(){
        super();
        this.state={
            currentEvent:'---',
            txt:'this is the state txt',
            cha:98
        }
        this.update=this.update.bind( this);
    }
    /*组件状态*/
    update(e){
        this.setState(
            {
                txt:e.target.value,
                currentEvent:e.type
            })
    }

    render() {
        let txt = this.props.txt
        return (
            <div>
                <div>
                    <textarea
                        onTouchStart={this.update}
                        onTouchEnd={this.update}
                        onTouchMoveCapture={this.update}
                        onTouchMove={this.update}
                        onKeyUp={this.update}
                        onDoubleClick={this.update}
                        onBlur={this.update}
                        onFocus={this.update}
                        onPaste={this.update}
                        onCut={this.update}
                        onCopy={this.update}
                        onKeyPress={this.update}
                        name="" id=""
                        cols="30" rows="10">

                    </textarea>
               <h1>{this.state.currentEvent}</h1>
                </div>


            <Title text="5555"/>
                <Button>
                    <h1>我是A
                      <h3>我是A的孩子
                       <h1>我是A孩子的孩子</h1>
                      </h3>
                    </h1>
                    <Heart/>React
                </Button>
                {/*当前组件引用Widget作为子组件*/}
               <Widget update={this.update.bind(this)}/>
               <Widget update={this.update.bind(this)}/>
               <Widget update={this.update.bind(this)}/>
               <Widget update={this.update.bind(this)}/>
                <h1>{this.props.sss}efwe{txt}</h1>
                <h2>efewf{this.props.cat}</h2>
                <h3>{this.state.txt}-{this.state.cha}</h3>
            </div>
        )
    }
}

    App.propTypes ={
        txt:PropTypes.string,
        cat:PropTypes.number.isRequired
    }
    App.defaultProps={
        sss:"你猜我是谁",
    }
    const Title=(props)=><h1>Title:{props.text}</h1>

  /*Add Custom propType Validation to React Components*/
    Title.propTypes={
        text(props,propName,componment){
            if(!(propName in props)){
                return new Error(`missing ${propName}`)
            }
            if(props[propName].length<6)
            {
                return new Error(`${propName} was too short`)
            }

        }
    }



    /*Access Nested Data with Reacts props.children,这里是所有的children */
    const Button=(props)=><button>{props.children}</button>
    class Heart extends React.Component{
        render(){
            return <span>&hearts;</span>
        }
    }
    /*using react components as children for Other componments*/
    /*Widget组件的定义*/
    const Widget=(props)=>
        <input type="text" onChange={props.update}/>

export default  App;
