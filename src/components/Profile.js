import PhoenixImage from "../assets/img/profile.jpg"
import { Image } from "react-bootstrap"

const Profile = () => {
    return (
        <div className="logo">
            <Image src={PhoenixImage} alt="logo phoenix" className="profile"/>
            <p>phoenix smuray</p>
        </div>
    )

}

export default Profile