import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();
    const lineBreak = {
        display: 'flex',
        flexDirection: 'column',   
    }
    const postStyle ={
        border: '2px solid gray',
        padding: '5px',
        borderRadius: '16px',
    }
    const handleShowDetails = () => {
            navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
            <h4>Post of id: {id}</h4>
            <p>{title}</p>
            <div style={lineBreak}>
            <Link to={`/post/${id}`}>Post Details</Link>
            {/* <Link to={`/post/${id}`}><button>Show Details</button></Link> */}
            <button onClick={handleShowDetails}>Show Details</button>
            </div>
        </div>
    );
};

Post.propTypes = {
    post:PropTypes.object
};

export default Post;