const defaultState = {
    homeState: {},
    number:''
};

export default (state = defaultState, action) => {
    console.log(action)
    switch(action.type) {
        case 'getList':
            // console.log(state)
            //不能改变state值 只能用深拷贝
            let newState = JSON.parse(JSON.stringify(state))
            newState.homeState=action.data
            return newState;
        case 'list':
            let newState2 = JSON.parse(JSON.stringify(state))
            newState2.number = action.number
            return newState2
        default:
            return state;
        // return state;
    }
    return state;
}

