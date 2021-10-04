import { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([]);
    // fetching data
    useEffect(() => {
        fetch("./mainData.JSON")
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(err => console.error(err));
    }, []);
    return [data, setData];
};

export default useData;