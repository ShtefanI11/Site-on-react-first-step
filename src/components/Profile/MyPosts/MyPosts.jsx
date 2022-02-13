import React from 'react';
import Post from './Posts/Post';

const MyPosts = () => {
    return (
        <div>
            <Post message='Hi, how are you?' like='15'/>
            <Post message='Where are you from?' like='33'/>
        </div>
    )
}
export default MyPosts;