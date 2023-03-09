import AboutUs from "./AboutUs"
import Homepage from "./Homepage"

const routes =[
    {
        path: '/',
        element: <Homepage />

    },
    {
        path: '/about-us',
        element: <AboutUs />

    }
]
export default routes;