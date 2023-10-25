import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import RegisterPage from '../pages/RegisterPage'
import ProductPage from '../pages/ProductPage'
import SummaryCartPage from '../pages/summaryCart'
import Layout from '../layout/Layout'
import RedirectIfAuthenticated from '../features/auth/RedireactIfAuthenticated'
import Authenticated from '../features/auth/Authenticate'
import PaymentSubmission from '../pages/PaymentSubmissionPage'
import EditProfile from '../pages/EditProfile'
import AdminPage from '../pages/AdminPage'
import AuthenticatedAdmin from '../features/auth/AuthenticateAdmin'
import LayoutAdmin from '../LayoutAdmin/LayoutAdmin'
import AdminProduct from '../features/Admin/AdminProduct'
import AdminCategory from '../features/Admin/AdminCategory'
import AdminOrders from '../features/Admin/AdminOrders'
import AdminUser from '../features/Admin/AdminUser'
import MyOrders from '../pages/MyOrders'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'register', element: <RegisterPage /> },
            {
                path: 'login',
                element: (
                    <RedirectIfAuthenticated>
                        <LoginPage />
                    </RedirectIfAuthenticated>
                )
            },
            { path: 'product/:productId', element: <ProductPage /> },
            {
                path: 'cart',
                element: (
                    <Authenticated>
                        <SummaryCartPage />
                    </Authenticated>
                )
            },
            {
                path: 'PaymentSubmission',
                element: (
                    <Authenticated>
                        <PaymentSubmission />
                    </Authenticated>
                )
            },
            {
                path: 'EditProfile',
                element: <EditProfile />
            },
            {
                path: 'order',
                element: <MyOrders />
            },
        ],
    },
    {
        path: '/admin',
        element: <LayoutAdmin />,
        children: [
            {
                path: '', element: (
                    <AuthenticatedAdmin>
                        <AdminPage />
                    </AuthenticatedAdmin>
                )
            },
            {
                path: 'product', element: (
                    <AuthenticatedAdmin>
                        <AdminProduct />
                    </AuthenticatedAdmin>

                )
            },
            {
                path: 'category', element: (
                    <AuthenticatedAdmin>
                        <AdminCategory />
                    </AuthenticatedAdmin>

                )
            },
            {
                path: 'orders', element: (
                    <AuthenticatedAdmin>
                        <AdminOrders />
                    </AuthenticatedAdmin>

                )
            },
            {
                path: 'alluser', element: (
                    <AuthenticatedAdmin>
                        <AdminUser />
                    </AuthenticatedAdmin>

                )
            },


        ]
    }

]);

export default function Route() {
    return <RouterProvider router={router} />
}