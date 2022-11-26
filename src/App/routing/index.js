import {
    HomeScreen,
    ProfileScreen,
    RegistrationScreen
} from "../screens";


import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/registration' element={<RegistrationScreen />} />
            <Route path='/profile' element={<ProfileScreen />} />
        </Route>
    )
);