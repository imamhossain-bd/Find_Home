import { useEffect, useState } from "react";


const useDataDonation = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            const res = await fetch('/FakeData.json');
            const data = await res.json();
            setData(data)
        };
        fetchData()
    }, [])

    return {data};
};

export default useDataDonation;