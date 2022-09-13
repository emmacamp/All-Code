import { Link } from 'react-router-dom';

const Nav = ({ section }) => {

    return (
        <div className="nav">
            <h1>{section}</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
                <li>
                    <Link to="/tasks/create">Create</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;