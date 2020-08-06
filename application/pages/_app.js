import React from 'react'
import App from 'next/app'
import { createWrapper } from "next-redux-wrapper";
import SiteLayout from '../components/layout/SiteLayout'
import DashBoardLayout from '../components/layout/Dashboard'
import store from '../redux/store';
import { setDashboardDetails } from '../redux/actions/DashboardActions';

class MyApp extends App {

    state = {
        load: false
    }

    // static async getInitialProps({ Component, ctx }) {
    //     const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //     //Anything returned here can be accessed by the client
    //     return { pageProps: pageProps };
    // }

    componentDidMount = async () => {
        let token = localStorage.getItem('token')
        let userDetails = window.localStorage.getItem('user');
        const { router } = this.props
        store.dispatch(setDashboardDetails(JSON.parse(userDetails || '{}')))
        if (!token && router.pathname.startsWith('/dashboard')) {
            router.replace('/login')
        }
        if (!router.pathname.startsWith('/card')) {
            await import('../static/assets/scss/app.scss')
        }
        this.setState({ load: true })
    }
    render() {
        const { Component, pageProps, router } = this.props
        const { load } = this.state;

        if (!load) {
            return "Please Wait"
        }

        if (router.pathname.startsWith('/card')) {
            return (
                <Component {...pageProps}></Component>
            )
        }

        if (router.pathname.startsWith('/dashboard')) {
            return (

                <DashBoardLayout>
                    <Component {...pageProps}></Component>
                </DashBoardLayout>

            )
        }

        return (
            <SiteLayout>
                <Component {...pageProps}></Component>
            </SiteLayout>
        )
    }
}

const makeStore = () => store;

const wrapper = createWrapper(makeStore, { debug: true })

export default wrapper.withRedux(MyApp)