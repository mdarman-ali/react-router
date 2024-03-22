import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle ={
        border: '2px solid gray',
        padding: '5px',
        borderRadius: '16px',
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            {/* <Link to={`/user/${id}`}>Show Details</Link> */}
            <Link to={`/user/${id}`}>
                <button>Show Details</button>
            </Link>
        </div>
    );
};

User.propTypes = {
    user:PropTypes.array,
};

export default User;