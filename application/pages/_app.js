import React from 'react'
import App from 'next/app'
import SiteLayout from '../components/layout/SiteLayout'
import DashBoardLayout from '../components/layout/Dashboard'

class MyApp extends App {

    state = {
        load: false
    }

    componentDidMount = async () => {
        let token = localStorage.getItem('token')
        const { router } = this.props
        console.log({ token })
        if (!token && router.pathname.startsWith('/dashboard')) {
            router.replace('/login')
        }
        if(!router.pathname.startsWith('/card')) {
            await import('../static/assets/scss/app.scss')
        }
        this.setState({load:true})
    }
    render() {
        const { Component, pageProps, router } = this.props
        const {load} = this.state;

        if(!load) {
            return "Please Wait"
        }

        if(router.pathname.startsWith('/card')) {
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

export default MyApp