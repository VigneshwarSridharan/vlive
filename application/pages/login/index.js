import { Container, Form } from "reactstrap"
import "./login.scss";
import { useState } from "react";
import { AuthServie } from "../../utils/APIService";
import { useRouter } from "next/dist/client/router";


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const route = useRouter();

    const onSubmit = e => {
        e.preventDefault()
        console.log('ok')
        AuthServie.login(username, password).then(res => {
            localStorage.setItem('token', res.jwt)
            localStorage.setItem('user', JSON.stringify(res.user))
            route.push('/dashboard')
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <Container>
            <Form className="form-signin text-center" onSubmit={onSubmit}>
                <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autoFocus
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </Form>
        </Container>
    )
}

export default Login