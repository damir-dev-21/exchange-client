import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    LineChart, Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts'

function MainContent({ banks }) {
    const [indexItem, setIndexItem] = useState(0)
    const filteredBanks = useSelector((state)=>state.banks.filteredBanks)
    return (
        <>
            {
                filteredBanks.length > 0 ? filteredBanks.map((e, i) => {
                    let arrGraph = []
                    return (
                        <div className='main__body__content__item'>

                            <div className='main__body__content__table'>
                                <h3>{filteredBanks[i].exchange}</h3>

                                <table border={"true"} cellPadding={"30px"} cellSpacing={"0px"}>
                                    <tr>
                                        <th>№</th>
                                        <th>Банк</th>
                                        <th>Покупка</th>
                                        <th>Продажа</th>
                                    </tr>
                                    {
                                        e.banks.map((j, index) => {
                                            arrGraph.push({
                                                bank: j.bank,
                                                buy: j.buy,
                                                sale: j.sale,
                                            })
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td> {j.bank}</td>
                                                    <td> {j.buy}</td>
                                                    <td> {j.sale}</td>
                                                </tr>


                                            )
                                        })

                                    }
                                </table>


                            </div>
                            <div className='main__body__content__graph'>
                                <h3>График</h3>
                                <LineChart
                                    width={window.screen.width/2}
                                    height={500}
                                    data={arrGraph}
                                    
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="bank" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="buy"
                                        stroke="#8884d8"
                                        activeDot={{ r: 8 }}
                                    />
                                    <Line type="monotone" dataKey="sale" stroke="#82ca9d" />
                                </LineChart>
                            </div>
                           
                        </div>
                    )
                }) :
                banks.map((e, i) => {
                    let arrGraph = []
                    return (
                        <div className='main__body__content__item'>

                            <div className='main__body__content__table'>
                                <h3>{banks[i].exchange}</h3>

                                <table border={"true"} cellPadding={"30px"} cellSpacing={"0px"}>
                                    <tr>
                                        <th>№</th>
                                        <th>Банк</th>
                                        <th>Покупка</th>
                                        <th>Продажа</th>
                                    </tr>
                                    {
                                        e.banks.map((j, index) => {
                                            arrGraph.push({
                                                bank: j.bank,
                                                buy: j.buy,
                                                sale: j.sale,
                                            })
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td> {j.bank}</td>
                                                    <td> {j.buy}</td>
                                                    <td> {j.sale}</td>
                                                </tr>


                                            )
                                        })

                                    }
                                </table>


                            </div>
                            <div className='main__body__content__graph'>
                                <h3>График</h3>
                                <LineChart
                                    width={window.screen.width/2}
                                    height={500}
                                    data={arrGraph}
                                    
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="bank" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="buy"
                                        stroke="#8884d8"
                                        activeDot={{ r: 8 }}
                                    />
                                    <Line type="monotone" dataKey="sale" stroke="#82ca9d" />
                                </LineChart>
                            </div>
                           
                        </div>
                    )
                })
            }
        </>


    )


}

export default MainContent;