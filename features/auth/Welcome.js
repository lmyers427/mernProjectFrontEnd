import {Link} from 'react-router-dom'

const Welcome = () => {

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', {dateStyle: 'full', 
    timeStyle: 'long'}.format(date))

const content = (
    <section>
        <p>{today}</p>
        <h1>Welcome!</h1>
        <p><Link to="/home/notes">View Tickets</Link></p>
        <p><Link to="/home/users">View User Settings</Link></p>

    </section>
)

return content

}


export default Welcome
