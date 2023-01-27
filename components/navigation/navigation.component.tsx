import Image from "next/image"

const LOGO = '/../public/images/C3_logo.jpg'

const Navigation = () => {
    return (
        <div className="flex justify-between p-4">
           <Image src={LOGO} alt='C3 Logo' width={100} height={100} />
            <div>
                <h1 className="mt-10 text-3xl font-bold" >C3 - Community Carbon Capture</h1>
            </div>
            <ul className="flex justify-around">
                <li className="mt-auto p-2">Our Mission</li>
                <li className="mt-auto p-2">C3 Calculator</li>
                <li className="mt-auto p-2">Newsletter</li>
                <li className="mt-auto p-2">Contact Us</li>
            </ul>
            <div>
                Log in
            </div>
        </div>
    )
}

export default Navigation