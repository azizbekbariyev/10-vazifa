import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"



const Router = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App/>}>
                <Route index element={<SignIn />} />
                <Route path="products" element={<SignUp />} />
                <Route path="users" element={<Logs />} />
                <Route path="logs" element={<Logs />} />
                    <Route path="driver" element={<Driver />}>
                    <Route path="statistics" element={<Statistics />} />
                    <Route path="students" element={<Students />} />
                </Route>
            </Route>
        )
    )
    return <RouterProvider router={router} />;
}