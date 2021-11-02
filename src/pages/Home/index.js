import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Blogitem, Button, Gap } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import './home.scss'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const Home = () => {
    const { dataBlog, page } = useSelector(state => state.HomeReducer)
    const { imageHome } = useSelector(state => state.GlobalReducer)
    const dispatch = useDispatch();

    const history = useHistory();

    console.log('page :', page);

    const [counter, setCounter] = useState(1)

    const previous = () => {
        setCounter(counter <= 1 ? 1 : counter - 1)
    }

    const next = () => {
        setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
        console.log(counter);
    }

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'UPDATE_IMAGE' })
        }, 3000)


        Axios.get(`http://localhost:4000/v1/blog/posts?page=${counter}&perPage=2`)
            .then(result => {
                const responseApi = result.data
                console.log('Data Api :', responseApi);
                dispatch({ type: 'UPDATE_DATA_BLOG', payload: responseApi.data })
                dispatch({
                    type: 'UPDATE_PAGE',
                    payload: {
                        currentPage: responseApi.current_page,
                        totalPage: Math.ceil(responseApi.total_data / responseApi.per_page)
                    }
                })
            })
            .catch(err => {
                console.log('Error :', err);
            })
    }, [dispatch, counter])

    const ConfirmDelete = (id) => {
        confirmAlert({
            title: 'Delete This Blog',
            message: 'Are you sure to delete this blog?.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        Axios.delete(`http://localhost:4000/v1/blog/post/${id}`)
                            .then(res => {
                                Axios.get(`http://localhost:4000/v1/blog/posts?page=${counter}&perPage=2`)
                                    .then(result => {
                                        const responseApi = result.data
                                        console.log('Data Api :', responseApi);
                                        dispatch({ type: 'UPDATE_DATA_BLOG', payload: responseApi.data })
                                        dispatch({
                                            type: 'UPDATE_PAGE',
                                            payload: {
                                                currentPage: responseApi.current_page,
                                                totalPage: Math.ceil(responseApi.total_data / responseApi.per_page)
                                            }
                                        })
                                    })
                                    .catch(err => {
                                        console.log('Error :', err);
                                    })
                            })
                            .catch(err => {
                                console.log('Err :', err);
                            })
                    }
                },
                {
                    label: 'No',
                    onClick: () => alert('Blog Has Been Save')
                }
            ]
        });
    };


    return (
        <div className='home-wrapper'>
            <div className='create-wrapper'>
                <Button label='Create Blog' onClick={() => history.push('/create-blog')} />
            </div>

            <img src={imageHome} alt='ww' width='200px' />

            <Gap height={20} />
            <div className='content-wrapper'>
                {dataBlog.map(data => {
                    return <Blogitem
                        key={data._id}
                        image={`http://localhost:4000/${data.image}`}
                        title={data.title}
                        author={data.author.name}
                        date={data.createdAt}
                        body={data.body}
                        _id={data._id}
                        onDelete={ConfirmDelete}
                    />
                })}
            </div>
            <div className='pagination'>
                <Button label='Previous' onClick={previous} />
                <Gap width={20} />
                <p className='text-page'>{page.currentPage} / {page.totalPage}</p>
                <Button label='Next' onClick={next} />
            </div>
            <Gap width={20} />
        </div>
    )
}

export default Home
