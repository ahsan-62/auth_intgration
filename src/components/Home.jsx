import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {

    const authInfo=useContext(AuthContext);

    //console.log(authInfo);

    const {name}=authInfo;
    console.log(name);
    return (
        <div>

            <h1 className="mt-16 text-3xl text-center ">User Name <hr className="w-1/2 mx-auto " /><p className="text-5xl font-extrabold">{name}</p></h1>
            
        </div>
    );
};

export default Home;