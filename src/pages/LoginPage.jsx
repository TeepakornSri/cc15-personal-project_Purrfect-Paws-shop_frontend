
import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";
import RegisterContainer from "../features/auth/ResgisterContainer";


export default function LoginPage() {
    return (
        <div className="flex justify-center items-center gap-4 mt-8 min-h-screen">
            <div className="flex min-w-[1400px] h-[800px] items-center justify-between">
                <LoginContent />
                <div className="flex-col h-[600px] min-w-[600px] px-6 pt-8 bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 border">
                    <h1 className="text-center font-bold text-4xl mb-9">Login</h1>
                    <LoginForm />
                    <hr className="border-gray-500 my-4 mt-10" />
                    <RegisterContainer />
                </div>
            </div>
        </div>
    )
}





