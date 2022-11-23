import { useParams } from "react-router-dom";

const Details = props => {
    const { name } = useParams();
    return (
        <h5>Profile - {name} </h5>
    )
}
export default Details;