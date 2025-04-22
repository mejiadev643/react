// import { getUser } from "../utils/token";
import { useTokenStore } from "../store/auth.store";

export default function Dashboard() {
    // const user = getUser();
    const { user, clearStorage } = useTokenStore();
    const handleLogout = () => {
        // localStorage.removeItem('token');
        // localStorage.removeItem('user');
        clearStorage();
        window.location.href = '/login'; // Redirect to the login page
    };
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        <h1>Dashboard</h1>
        {/* <p>Welcome <strong> {user?.username} </strong> to the dashboard!</p> */}
        <p>Welcome <strong> {user?.username} </strong> to the dashboard!</p>
        
        <button type="button" onClick={handleLogout} className="bg-blue-400 rounded-3xl">logout</button>
        </div>
    );
    }