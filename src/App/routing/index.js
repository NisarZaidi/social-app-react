import {
    HomeScreen,
    ProfileScreen,
    Login,
    SignUp
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
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/profile' element={<ProfileScreen />} />
        </Route>
    )
);