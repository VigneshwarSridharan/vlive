import { useEffect } from 'react'
import { VirtualCardsService } from '../../utils/APIService'
const Dashboard = () => {
    useEffect(() => {
        VirtualCardsService.list().then(res => {
            console.log(res)
        })
    }, [])
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard