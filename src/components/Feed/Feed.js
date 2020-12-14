import React, { useEffect, useState } from 'react'
import './Feed.css'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post'
import StoryReel from '../StoryReel/StoryReel'
// import axios from '../axios'
// import Pusher from 'pusher-js'

import db from '../../firebase'

const Feed = () => {
    const [profilePic, setProfilePic] = useState('')
    const [postsData, setPostsData] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot => (
            setPostsData(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        ))
    }, [])

    return (
        <div className='feed' >
            <StoryReel />
            <MessageSender />

            {
                postsData.map(entry => (
                    <Post
                        profilePic={entry.data.profilePic}
                        message={entry.data.message}
                        timestamp={entry.data.timestamp}
                        image={entry.data.image}
                        username={entry.data.username}
                    />
                ))
            }
        </div>
    )
}

export default Feed