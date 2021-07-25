import { Link } from "react-router-dom";

export const MovieItems = ({title, id}) => (
    <li>
        <Link to={`/movie/${id}`}>{title}</Link>
    </li>
);