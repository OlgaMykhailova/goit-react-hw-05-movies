import { NavLink } from "react-router-dom";

export const TrendingListItem = ({id, title}) => {
    return <NavLink to={`${id}`}>{title}</NavLink>
};