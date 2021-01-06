import React from 'react'

const User = ({user, dbclickhandler}) => {
    const handledbclick = () => {
        dbclickhandler(user.id);
    }
    return (
        <div className='mt-3 p-2 border' onDoubleClick={handledbclick}>
            <div>{user.title}</div>
            <div>{user.categories}</div>
            <div>{user.content}</div>
        </div>
    )
}

export default User;