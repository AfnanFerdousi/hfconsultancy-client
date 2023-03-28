import React from 'react';
import { useParams } from 'react-router-dom';

const SingleService = () => {
    // const { id } = useParams();
    // const [service, setService] = useState({});

    // const loadServices = async () => {
    //     const res = await(
    //         axios.get('../../staticData/services.js/${id}')
    //     )
    //     console.log(res)
    //     if (res?.data?.service) {
    //         setService(res?.data?.service)
    //     }
    // }


    // useEffect(() => {
    //     loadService()
    // }, [])
    return (
        <div>
            <h2 className="text-center text-3xl my-8 text-[#001529] font-semibold">Our Happy Clients</h2>
            <div className="grid grid-cols-3 gap-4 px-12">

            </div>
        </div>
    );
};

export default SingleService;