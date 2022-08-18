import { SET_BANKS,FILTER_EXCHANGE, FILTER_DATE } from "../actions/actionType";

const initialState = {
    initialState:[],
    initialBanks:[],
    filteredBanks:[],
    exchanges:[]
}

export default function bankReducer(state=initialState, action){
    switch (action.type) {
        case SET_BANKS:
            return{
                ...state,
                initialState: action.initial,
                initialBanks: action.banks,
                exchanges: action.exchanges,
                filteredBanks:[]
            }
        case FILTER_EXCHANGE:
            return{
                ...state,
                filteredBanks: action.banks,
            }
        case FILTER_DATE:
            return{
                ...state,
                initialBanks: action.banks,
                filteredBanks:[]

            }
        default:
            return state
    }
}