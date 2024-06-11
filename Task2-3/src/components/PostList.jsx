import React from 'react';

const PostList = (props) => {
    return (
        <div className='container'>			
			<div className='contentContainer'>
                <img src={props.post.url}/>
                <div>{props.post.text}</div>
                <div>{props.post.progress}</div>
            </div> 
        </div>
    );
};

export default PostList;

