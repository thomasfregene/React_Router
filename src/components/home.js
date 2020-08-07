import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props)

        this.state = {name: 'francis'}
        console.log('1- constructor')
    }
    static getDerivedStateFromProps(props, state){
        if(state.name === 'Ron'){
            return{
                name: 'Milehouse'
            }
        }
        console.log('2-getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(nextProps, nextState){
        //console.log('x- shouldComponentUpdate')
       if(nextState.name === 'Steve'){
           return false;
       }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
       let age = 20;
        return age;
    }

    render(){
        console.log(this.state)
        return(
            <div onClick={()=> this.setState({name: 'Ron'})}>Change Name</div>
        ) 
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('x- componentDidUpdate')
        // console.log(prevState)
        // console.log(this.state)
        console.log(snapshot)
    }

    componentDidMount(){
        console.log('4-componentDidMount')
    }

    componentWillUnmount(){
        console.log('x-componentDidMount')
    }
   
}

export default Home;