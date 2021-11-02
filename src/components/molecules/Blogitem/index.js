import React from 'react'
import './blog.scss'
import { useHistory } from 'react-router'

const Blogitem = (props) => {
    const history = useHistory()
    const { title, author, body, date, image, _id, onDelete } = props;
    return (
        <div className='blog-item'>
            <img className='img-thumb' src={image} alt='post' onClick={() => history.push(`/detail-blog/${_id}`)} />
            <div className='content-detail'>
                <div className='title-wrapper'>
                    <p className='title' onClick={() => history.push(`/detail-blog/${_id}`)}>{title}</p>
                    <div className='edit-wrapper'>
                        <p className='edit' onClick={() => history.push(`/create-blog/${_id}`)}>EDIT</p> | <p className='delete' onClick={() => onDelete(_id)}>DELETE</p>
                    </div>
                </div>
                <p className='author'>{author} - {date}</p>
                <p className='body'>{body}</p>
            </div>
        </div>
    )
}

export default Blogitem
