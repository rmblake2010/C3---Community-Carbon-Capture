import Image from "next/image"

const LOGO = '/../public/images/C3_logo.jpg'

const Navigation = () => {
    return (
        <div>
           <Image src={LOGO} alt='C3 Logo' width={100} height={100} />
            <div>
                <h1>C3 - Community Carbon Capture</h1>
            </div>
            <ul>
                <li>Our Mission</li>
                <li>C3 Calculator</li>
                <li>Newsletter</li>
                <li>Contact Us</li>
            </ul>

        </div>
    )
}

export default Navigation