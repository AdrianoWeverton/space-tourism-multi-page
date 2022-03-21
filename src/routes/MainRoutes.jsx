import { useLocation, useRoutes } from "react-router-dom";
import { Destination } from "../pages/Destination/Destination";
import { Home } from '../pages/Home/Home';
import { Crew } from '../pages/Crew/Crew';
import { Technology } from '../pages/Technology/Technology';

const location = useLocation().pathname;
const newClass = location.split('/')[1];
console.log(location)

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path: '/destination', element: <Destination />},
        {path: '/crew', element: <Crew />},
        {path: '/technology', element: <Technology />}
    ])
}