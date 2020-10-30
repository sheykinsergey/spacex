import FetchData from '../../service/FetchData';
import {useState, useEffect} from 'react'

const fetchData = new FetchData();



const useLaunches = () => {
    
    const [data, setData] = useState([]);

    useEffect(() => {
		fetchData.getLaunches()
			.then((launches) => setData(state => [...launches]))
    }, []);

    const getLaunch = id => data.find(item => item.id === id)

    return {data, getLaunch}
}
	


export default useLaunches;