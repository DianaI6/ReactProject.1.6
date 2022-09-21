import { Outlet } from "react-router-dom";


function AuthLayout() {
    
    return (
        <div className="w-full h-full gap-10 justify-center flex flex-col  items-center bg-pink-200">
            <h2>Auth page</h2>
            <div className="bg-white rounded-xl px-4"> 
                <Outlet />
            </div>
            
        </div>
    );
}

export default AuthLayout;