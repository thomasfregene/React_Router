import React, {Component} from "react";

class Conditional extends Component {
    state ={
        loading:true
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading: false
            })
        }, 1500)
    }


    render(){
        if(this.state.loading){
            return(
                <div>
                    loading...
                </div>
            )
        }else{
            return(
                <div>
                    Hello this is the conditional component
                </div>
            )
        }
       
    }
    
};

export default Conditional;
