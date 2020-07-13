import { VirtualCardsService } from "../../utils/APIService"
import Axios from "axios"
import ClassicTheme from "../../components/layout/themes/classic"
import JupiterTheme from "../../components/layout/themes/jupiter"


const Card = (props) => {
    console.log({ props })
    let { theme } = props
    switch (theme.name.toLowerCase()) {
        case 'classic':
            return (
                <ClassicTheme {...props} />
            )
        case 'jupiter':
            return (

                <JupiterTheme {...props} />
            )
        default:
            return (
                <ClassicTheme {...props} />

            )
    }
}

export async function getServerSideProps(context) {
    let { slug } = context.query
    let result = await Axios.get(`http://localhost:1337/virtual-cards/slug/${slug}`)
    result = result.data
    // console.log({result})
    return {
        props: {
            ...result
        }
    }
}

export default Card;