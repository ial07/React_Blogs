import React, { useEffect, useState } from 'react'
import './detailblog.scss'
import { useHistory, withRouter } from 'react-router'
import { Gap, Link } from '../../components'
import axios from 'axios'

const DetailBlog = (props) => {
    const [data, setData] = useState({})

    useEffect(() => {
        console.log('params : ', props.match.params.id);
        const _id = props.match.params.id
        axios.get(`http://localhost:4000/v1/blog/post/${_id}`)
            .then(result => {
                const responseApi = result.data
                setData(responseApi.data)
                console.log('Data Api :', responseApi);
            })
            .catch(err => {
                console.log('Error :', err);
            })
    }, [props])

    const history = useHistory();
    if (data.author) {
        return (
            <div className='detail-blog-wrapper'>
                <img className='img-blog' src={`http://localhost:4000/${data.image}`} alt='bg' />
                <p className='title'>{data.title}</p>
                <p className='author'>{data.author.name} - {data.createdAt}</p>
                <p className='content-blog'>{data.body}</p>
                <Gap height={40} />
                <Link label='Back' onClick={() => history.push('/')} />
            </div>
        )
    }
    return <p>Loading Data....</p>
}

export default withRouter(DetailBlog)
