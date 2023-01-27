import Image from "next/image"
import Link from "next/link"


const LOGO = '/../public/images/C3_nobg.png'

const Navigation = () => {
    return (
        <div className="flex justify-between p-4 bg-green-700 m-2 rounded-lg">
            <Link href='/'>
           <Image src={LOGO} alt='C3 Logo' width={100} height={100} />
           </Link>
            <div>
                <h1 className="mt-10 text-3xl font-bold" >C3 - Community Carbon Capture</h1>
            </div>
            <ul className="flex justify-around">
                <Link className="mt-auto p-2" href='/dashboard/information'>
                    <li>Our Mission</li>
                </Link>
                <Link className="mt-auto p-2" href='/dashboard/calculator'>
                <li>C3 Calculator</li>
                </Link>
                <Link className="mt-auto p-2" href='/dashboard/newsletter'>
                <li>Newsletter</li>
                </Link>
                <Link className="mt-auto p-2" href='/dashboard/contact'>
                <li >Contact Us</li>
                </Link>
            </ul>
            <Link href='/dashboard/login'>
                Log in
            </Link>
        </div>
    )
}

export default Navigation