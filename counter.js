//Steps
const { createStore } = require("redux")
//Initial State
const InitialState = {
    count: 0
}
//Actions *action *action-creator

//Action Creatior
const incrementAction = () => {
    return {
        type: 'INCREMENT'
    }
}
const decrementAction = () => {
    return {
        type: 'DECREMENT'
    }
}
const resetAction = () => {
    return {
        type: 'RESET'
    }
}

const increaseByAmount = (anyAmount) => {
    return {
        type: 'INCREASE_BY_AMOUNT',
        payload: anyAmount
    }
}


//Reducer
const counterReducer = (state = InitialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            count: state.count + 1
        }
    }
    else if (action.type === 'DECREMENT') {
        return {
            count: state.count - 1
        }
    }
    else if (action.type === 'RESET') {
        return {
            count: 0
        }
    }
    else if (action.type === 'INCREASE_BY_AMOUNT') {
        return {
            count: state.count + action.payload
        }
    }
}

//Store
const store = createStore(counterReducer);



//subscribe to store
store.subscribe(() => {
    const data = store.getState()
    console.log(data)
})

//dispatch action--increment
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
store.dispatch(incrementAction())
// store.dispatch(decrementAction())
// store.dispatch(resetAction())
store.dispatch(increaseByAmount(10))
