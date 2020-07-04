import * as actionTypes from './action';


const initialState = {
    i: 0,
    head: '',
    showHead: true
}

const txt = 'Im a react-developer';


const reducer = (state = initialState , action) =>{
    switch(action.type){
        case actionTypes.ADDINGHEAD:
            return {
                ...state,
                head: state.head + txt.charAt(state.i),
                i: state.i + 1
            }
        case actionTypes.CHANGETOFALSE:
            return {
                ...state,
                showHead: false
            }
        case actionTypes.CHANGETOTRUE:
            return {
                ...state,
                showHead: true
            }
    }
    return state;
}

export default reducer;