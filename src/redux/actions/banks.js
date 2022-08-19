import axios from 'axios'
import {FILTER_DATE, FILTER_EXCHANGE, GET_BANKS,SET_BANKS} from '../actions/actionType'

export function getBanks(){
    return async (dispatch) => {
        const responce = await axios.get('http://127.0.0.1:8010/exchanges')
        const data = responce.data
        let arr = []
        let exchanges = []

        if(data != null || data != undefined){
            Object.keys(data).forEach((key,index)=>{
                arr.push(data[index])
                
            })
            for (let index = 0; index < arr[0].results.length; index++) {
                const element = arr[0].results[index];

                exchanges.push(element.exchange)
                
            }
            console.log(arr);
            dispatch(setInitialProducts(arr,arr[arr.length-1].results,exchanges))
        }

    }
}

export function filterData(exchange,banks){
    return async (dispatch) =>{
        let arr = banks.filter(e=>e.exchange == exchange)

        dispatch(setFilterExchange(arr))
    }
}

export function filterDate(date,banks){
    return async (dispatch)=>{
        let arr = banks.filter(e=>e.date==date)
       
        dispatch(setFilterDate(arr[0].results))
    }
}

export function setInitialProducts(initial,banks,exchanges) {
    return {
        type: SET_BANKS,
        initial,
        banks,
        exchanges
    }
}
export function setFilterExchange(banks) {
    return {
        type: FILTER_EXCHANGE,
        banks
    }
}

export function setFilterDate(banks){
    return{
        type:FILTER_DATE,
        banks
    }
}
