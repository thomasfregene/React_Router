import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props)

        this.state = {name: 'francis'}
        console.log('1- constructor')
    }
    static getDerivedStateFromProps(){
        console.log('2-getDerivedStateFromProps')
        return null
    }

    render(){
        console.log('3-render')
        return(
            <div>Home</div>
        ) 
    }

    componentDidMount(){
        console.log('4-componentDidMount')
    }

    componentWillUnmount(){
        console.log('x-componentDidMount')
    }
   
}

export default Home;