import React from 'react';
import { connect } from 'react-redux'
import store from '../../store'
class Home extends React.Component {
    constructor(props){
       super(props)
       store.subscribe(()=>{
           console.log(store.getState())
           this.setState({
               ...store.getState()
           })
       })
    }

    getList = this.props.getList
    render() {
        return (
            <div onClick={this.getList}>
                Home
                {this.props.number}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state.HomeReducer.number)
    return {
        number:state.HomeReducer.number
    }
}
const mapDispatchToProps = (dispatch)=>{
    let number =1
    return {
        getList:function(){
            console.log(1)
            dispatch({        //这样子 不仅会执行saga 也会执行 reduce  所以 需要执行saga的时候最好 action 命名不同 这样子 会少执行一次 return state , reducer  switch case
                type:'list',
                number:number++
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);;
