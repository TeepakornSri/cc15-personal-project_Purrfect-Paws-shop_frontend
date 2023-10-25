
import { BsFacebook, BsInstagram, BsLinkedin, BsLine } from "react-icons/bs";
export default function Footer() {
    return (
        <div className="w-full flex justify-evenly items-center mt-4 h-28 shadow-xl">
            <div className="text-xl">Copyright © 2025 PURRFECT PAWS SHOP| All Rights Reserved</div>
            <div className="flex gap-6 text-4xl">
                <div className="text-blue-600"><BsFacebook /></div>
                <div><BsInstagram /></div>
                <div className="text-green-600"><BsLine /></div>
                <div className="text-blue-600"><BsLinkedin /></div>

            </div>


        </div>
    )
}
