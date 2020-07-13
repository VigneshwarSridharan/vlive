import {useRouter} from 'next/router'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import Axios from 'axios';

const AboutUs = (props) => {
    const router  = useRouter();
    console.log({router,props})
    return (
        <div>
            <h1>Hello About us id</h1>
        </div>
    )
}

export async function getServerSideProps(context) {
    let res = await Axios.get('http://localhost:1337/pages')

    res = res.data

    return {
      props: {
          name:'les',
          res
      }, // will be passed to the page component as props
    }
  }

export default AboutUs