import Head from 'next/head'
import NavigatioBar from './NavigatioBar';
import Sidebar from './Sidebar';

const DashBoardLayout = ({children}) => {
    return (
        <React.Fragment>
        <Head>
            <link rel="stylesheet" href="/static/assets/css/bootstrap-icons.css" type="text/css" />
        </Head>
            <NavigatioBar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                        {children}
                    </main>
                </div>
            </div>
        </React.Fragment>
    )
}


export default DashBoardLayout