import React from 'react';
class Bodychild extends React.Component{
    render(){
        return(
            <div>
                {/*子页面通过props向父页面传参数(e.target.value),一般
                情况都是父组件通过props向子组件传递消息*/}
             <p>子页面输入:<input type="text"
             onBlur={this.props.handleChildValueChange}
             /></p>
              <p>{this.props.username},{this.props.userid},{this.props.id}</p>
            </div>
        )

    }

}
export  default Bodychild;