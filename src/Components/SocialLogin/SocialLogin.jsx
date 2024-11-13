import UseAuth from "../../Hooks/UseAuth";


const SocialLogin = () => {
    const {googleLogin , gitHubLogin, twitterLogin} =UseAuth()
    return (
        <div className="mb-7 mt-4 mx-20 flex gap-3"> 
            <button onClick={() => googleLogin()} className="px-3 py-2 bg-red-500 text-white rounded-lg">Google</button>
            <button onClick={() => gitHubLogin()} className="px-3 py-2 bg-red-500 text-white rounded-lg">GitHub</button>
            <button onClick={() => twitterLogin()} className="px-3 py-2 bg-red-500 text-white rounded-lg">Twitter</button>
        </div>
    );
};

export default SocialLogin;