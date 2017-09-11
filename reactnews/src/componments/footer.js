import React from 'react';
import ReactDOM from 'react-dom';
import Child from './child';
import ReactMixin from 'react-mixin';
import MixinLog from './mixins';
import { Input } from 'antd';
class  ComponmentFooter extends React.Component{
    constructor(){
        super();
        this.state={username:"parry",
        age:20
        }
    }

    changeUserInfo(){
        /*第一种方式*/
       /* var mySubmitButton=document.getElementById('submitButton');

        ReactDOM.findDOMNode(mySubmitButton).style.color='red';*/
        /*第二种方式 refs是访问组件内部DOM节点的唯一的可靠的方法*/
        console.log(this.refs.submitButton);
        this.refs.submitButton.style.color='red';

        this.setState({age:50});
        MixinLog.log();

    }
    handleChildValueChange(e){
        this.setState({age:e.target.value});
}

    // componentWillMount( ){
    //     alert("我要加载了");
    // }
    // componentDidMount(){
    //     alert("我加载完成了");
    // }
    render(){
        setTimeout(()=>{
            this.setState({username:"IMOOC",age:30});

        },10000);
        return(
        <footer  className="smallFontSize">
            <h1 >这里是页脚</h1>
            <Input type="text" placeholder="Basic Usage"/>
            <p>{this.state.username}{this.state.age}{this.props.username}{this.props.userid} </p>
            <input id="submitButton"  ref="submitButton" type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
              <Child {...this.props} id="sdf" handleChildValueChange={this.handleChildValueChange.bind(this)} />
        </footer>
    )}
}
ComponmentFooter.propsTypes={
  userid:React.PropTypes.number
};

ReactMixin(ComponmentFooter.prototype, MixinLog);
export default ComponmentFooter;