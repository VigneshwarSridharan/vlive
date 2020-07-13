import { useRouter } from "next/router"

const AboutUs = (props) => {
    const router = useRouter()
    console.log(router)
    return (
        <div>
            <h1>Hello About us </h1>
        </div>
    )
}

export default AboutUs