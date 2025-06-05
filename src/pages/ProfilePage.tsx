import {getUserProfileByUsername} from "../services/userService.ts";
import { useParams } from 'react-router';
import { UserProfile} from "../models";
import {useState, useEffect} from "react";


type RouteParams = {
    username: string;
};

function ProfilePage() {
    const { username } = useParams<RouteParams>();
    const [profile, setProfile] = useState<UserProfile>();

    useEffect(() => {
        if (!username) return;
        getUserProfileByUsername(username).then(profile => {
            setProfile(profile);
        })
    }, [username])
    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Cover image */}
            <div className="w-full h-64 bg-[url('/src/assets/sxm.jpeg')] bg-cover bg-center rounded-b-lg relative">
                {/* Profile picture */}
                <div className="absolute -bottom-14 left-6 bg-white rounded-full">
                    <img
                        src={profile?.image}
                        alt={profile?.display_name}
                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                    />
                </div>
            </div>

            {/* Profile content */}
            <div className="pt-20 px-6">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    {profile?.display_name}{" "}
                </h1>
                <p className="text-gray-600">@{profile?.username}</p>


            </div>
        </div>
    );
}

export default ProfilePage;