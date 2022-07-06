import { useLocation } from "react-router-dom";

const LocationInClass = (props) => {
    const location = useLocation();
    console.log({ location });
    return (<></>);
}

export default LocationInClass;


