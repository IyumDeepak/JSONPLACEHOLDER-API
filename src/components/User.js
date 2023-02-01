import React from 'react'
import './user.css'

const User = ({id,email,name,onEdit,onDelete}) => {
    const handleEdit = () => {
        onEdit(id);
    }
    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className='list'>
            <span>{name}</span>
            <span>{email}</span>
            <span>
                <button onClick={handleEdit}>edit</button>
                <button onClick={handleDelete}>delete</button>
            </span>
        </div>
    )
}

export default User