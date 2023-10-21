import LoginContent from '../features/auth/LoginContent'
import EditProfileForm from '../features/auth/EditProfileForm'

export default function EditProfile() {
    return (
        <div className="flex justify-center items-center gap-4 mt-8 min-h-screen">
            <div className="flex min-w-[1400px] h-[800px] items-center justify-between">
                <LoginContent />
                <div className="flex-col h-[600px] min-w-[600px] px-6 pt-8 bg-white rounded-lg shadow-[0_0_15px_rgb(0_0_0_/0.2)] mb-6 border">
                    <h1 className="text-center font-bold text-4xl mb-9">Edit Profile</h1>
                    <EditProfileForm />
                </div>
            </div>
        </div>
    )
}
