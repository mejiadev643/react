
import { useLogin } from '../hooks/useLogin';


export default function Login() {
    // const [loading, setLoading] = React.useState(false);
    const { error, handleLogin } = useLogin();

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <main className="bg-white p-6 rounded shadow-md w-96">
                <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="username" className="text-sm font-medium">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="border rounded px-3 py-2"
                            placeholder="Enter your username"
                            // defaultValue='emilys'
                            
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="text-sm font-medium">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="border rounded px-3 py-2"
                            placeholder="Enter your password"
                            defaultValue='emilyspass'
                            
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-4xl self-center"
                    >
                        Login
                    </button>
                    {error && (         
                        <span className='text-[10px] text-red-500 text-center'>El usuario o la contraseña es invalido</span>
                    )}

                </form>
            </main>
        </div>
    );
}