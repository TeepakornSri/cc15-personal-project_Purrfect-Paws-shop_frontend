import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import ProductPage from '../pages/ProductPage'
import SummaryCartPage from '../pages/summaryCart'
import UpdateProfilePage from '../pages/UpdateProfilePage'
import Layout from '../layout/Layout'
import RedirectIfAuthenticated from '../features/auth/RedireactIfAuthenticated'
import Authenticated from '../features/auth/Authenticate'
import PaymentSubmission from '../pages/PaymentSubmissionPage'

const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
        { path: '', element: <HomePage /> },
        { path: 'register', element: <RegisterPage /> },
        {
            path: 'login', element: (
                <RedirectIfAuthenticated>
                    <LoginPage />
                </RedirectIfAuthenticated>)
        },
        { path: 'UpdateProfile', element: <UpdateProfilePage /> },
        { path: 'product/:productId', element: <ProductPage /> },
        {
            path: 'cart', element: (
                <Authenticated>
                    <SummaryCartPage />
                </Authenticated>)
        },
        {
            path: 'PaymentSubmission', element: (
                <Authenticated>
                    <PaymentSubmission />
                </Authenticated>)
        },


    ]
}])

export default function Route() {
    return <RouterProvider router={router} />
}