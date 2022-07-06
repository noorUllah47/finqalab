
import { Navigate, useLocation, useParams } from "react-router-dom"
import IPSForm from "./IPSForm";
const DirectLanding = () => {

    const { id } = useParams()


    const location = useLocation()

    console.log({ id, location })
    return (
        <>
            {location?.state?.step ? <IPSForm step={location?.state?.step} /> : <IPSForm step={0} />}
        </>
    );
}

export default DirectLanding;