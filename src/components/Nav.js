import { useDispatch, useSelector } from "react-redux"
import { filterData, filterDate } from "../redux/actions/banks"

function NavBar() {
    const banks = useSelector((state) => state.banks.initialBanks)
    const exchanges = useSelector((state) => state.banks.exchanges)
    const initialState = useSelector((state)=>state.banks.initialState)
    const dispatch = useDispatch()

    return (
        <div className='main__body__nav'>
            <div className='main__body__nav__left'>
                <input type="date" min="2022-08-11" onChange={(e)=>dispatch(filterDate(e.target.value,initialState))}/>
            </div>
            <div className='main__body__nav__right'>
                <ul>
                    {
                        exchanges.map((e)=>{
                            return(
                                <li onClick={()=>dispatch(filterData(e,banks))}>{e}</li>
                            )
                        })
                    }
                   
                </ul>
            </div>
        </div>
    )
}

export default NavBar