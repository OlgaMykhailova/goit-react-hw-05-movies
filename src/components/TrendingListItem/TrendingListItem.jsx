import { Link } from "react-router-dom";

export const TrendingListItem = ({id, title, state}) => {
    
   
    return <Link to={`movies/${id}`} state={state}>{title}</Link>
};