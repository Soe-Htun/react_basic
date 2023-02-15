import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import moment from 'moment'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/flatpickr.css'

const GetData = props => {
    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())

    const clear = useRef(null)

    const options = {
    maxDate: new Date(),
    mode: 'range',
    dateFormat: 'Y m d',
}

    const getProject = async () => {
        await axios.get('https://63bb90b3cf99234bfa5e3b48.mockapi.io/Products').then(res => {
            console.log('Res', res.data);
            setProducts(res.data)
            setAllProducts(res.data)
        })
    }
    
    useEffect(() => {
        getProject()
    }, [])

    const handleSelect = (start, end) => {

        if(end != undefined) {
            let filtered = allProducts.filter(product => {
            let productDate = moment(product["createdAt"], ["hh:mm:ss"]).format('YYYY-MM-DD')
            return productDate >= moment(start, ["hh:mm:ss"]).format('YYYY-MM-DD') && 
                productDate <= moment(end, ["hh:mm:ss"]).format('YYYY-MM-DD')
            })
            setStartDate(moment(start, ["hh:mm:ss"]).format('YYYY-MM-DD'))
            setEndDate(moment(end, ["hh:mm:ss"]).format('YYYY-MM-DD'))
            setProducts(filtered)
        }
        
    }

    const clearDate = () => {
        clear.current.flatpickr.clear();
        getProject()
    }

    return (
        <div>
            <h1>Getting Data</h1>
            
            <header className='App-header'>
            <Flatpickr options={options} style={{backgroundColor: 'white'}}
                ref={clear}
                onChange={([start, end]) => handleSelect(start, end)} />
            <button style={{borderLeft: 0}} onClick={clearDate}>X</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>CreatedAt</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) => {
                        return (
                            <tr key={i}>
                                <td>{product["id"]}</td>
                                <td>{product["name"]}</td>
                                <td>{moment(product["createdAt"], ["hh:mm:ss"]).format('YYYY-MM-DD')}</td>
                            </tr>
                        )
                    })}
                
                </tbody>
            </table>
            </header>
        </div>
    )
}
export default GetData;