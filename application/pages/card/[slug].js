import { VirtualCardsService } from "../../utils/APIService"
import Axios from "axios"
import ClassicTheme from "../../components/layout/themes/classic"
import JupiterTheme from "../../components/layout/themes/jupiter"
import { API_URL } from "../../utils/Constants"


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
    let result = await Axios.get(`${API_URL}/virtual-cards/slug/${slug}`)
    result = result.data
    // console.log({result})
    return {
        props: {
            ...result
        }
    }
}

export default Card;