import {getUserProfileByUsername} from "../services/userService.ts";
import { useParams } from 'react-router';
import { UserProfile} from "../models";
import {useState, useEffect} from "react";
import {useAuthStore} from "../store/userStore.ts";


type RouteParams = {
    username: string;
};

function ProfilePage() {
    const { username } = useParams<RouteParams>();
    const [profile, setProfile] = useState<UserProfile>();
    const {currentUser} = useAuthStore();
    const [coverImg, setCoverImg] = useState<string>('/src/assets/default_cover.jpeg');
    useEffect(() => {
        if (!username) return;
        getUserProfileByUsername(username).then(profile => {
            setProfile(profile);
        })
        if (profile?.cover_image != null){
            setCoverImg(profile.cover_image);
        }
    }, [username])
    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Cover image */}
            <div className="w-full h-64 bg-[url('/src/assets/sxm.jpeg')] bg-cover bg-center  relative"
                 style={{ backgroundImage: `url(${coverImg})` }}>
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
            <div className="pt-15 px-6  bg-desert-sand-100">
                <div className="flex justify-between items-center">
                    <div className="p-3 ">
                        <h1 className="text-2xl font-bold flex items-center gap-2">
                            {profile?.display_name}{" "}
                        </h1>
                        <p className="text-gray-600">@{profile?.username}</p>
                    </div>


                    <div>
                        <button className="border-desert-sand-600 bg-white border p-2 hover:bg-desert-sand-600">Edit Profile</button>
                        {currentUser?.id == profile?.id &&
                            <p>cur user</p>
                            }
                    </div>
                </div>
                <div className="p-3 font-thin">
                    <p>{profile?.bio}</p>
                </div>

            </div>
        </div>
    );
}

export default ProfilePage;