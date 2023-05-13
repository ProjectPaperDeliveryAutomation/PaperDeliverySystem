import {useRoutes, Link} from 'react-router-dom'
import router from './Router'

function App(){

    const outlet = useRoutes(router);
    return (
        <div className="App">
            {/* <Link to="/login">Login</Link>
            <Link to="/dashboard">dashboard</Link> */}
            {outlet}
        </div>
    )
}

export default App;