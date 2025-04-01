import { Input } from "../ui/input";

export default function Newsletter () {
    return (
        <div className="mb-20 lg:pl-[15px]">
            <h3 className="mb-5 text-white text-lg font-roboto">Subscribe to our newsletter</h3>
            <p className="mb-5">Sign up for our newsletter and recive 10% off your first order!</p>
            <Input className="bg-transparent  mb-2.5" placeholder="Email" />
            <div className="flex items-center">
            <Input className="h-4 w-4 mr-2" type="checkbox" />
            <label htmlFor="email-input" className="text-sm">I agree to receiving marketing emails and special deals</label>
            </div>
        </div>
    )
}