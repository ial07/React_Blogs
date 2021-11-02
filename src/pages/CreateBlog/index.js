import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, withRouter } from 'react-router'
import { Button, Gap, Input, Link, Textarea, Upload } from '../../components'
import './createblog.scss'

const CreateBlog = (props) => {
    const { form, imgPreview } = useSelector(state => state.CreateBlogReducer);
    const { title, body, image } = form;
    const [isUpdate, setisUpdate] = useState(false)
    const dispatch = useDispatch()

    // const [title, setTitle] = useState('');
    // const [body, setBody] = useState('');
    // const [image, setImage] = useState('');
    // const [imagePreview, setImagePreview] = useState('')

    const history = useHistory();

    useEffect(() => {
        console.log('params : ', props);
        if (props.match.params.id) {
            setisUpdate(true)
            const _id = props.match.params.id
            axios.get(`http://localhost:4000/v1/blog/post/${_id}`)
                .then(result => {
                    const data = result.data.data
                    console.log('Data Api :', data);

                    dispatch({ type: 'SET_FORM_DATA', formType: 'title', formValue: data.title })
                    dispatch({ type: 'SET_FORM_DATA', formType: 'body', formValue: data.body })
                    dispatch({ type: 'SET_IMAGE_PREVIEW', payload: `http://localhost:4000/${data.image}` })
                })
                .catch(err => {
                    console.log('Error :', err);
                })
        } else {
            setisUpdate(false)
        }
    }, [props])

    const onSubmit = () => {
        const _id = props.match.params.id
        if (isUpdate) {
            const data = new FormData();
            data.append('title', title);
            data.append('body', body);
            data.append('image', image);

            axios.put(`http://localhost:4000/v1/blog/post/${_id}`, data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then(res => {
                    console.log('Update :', res);
                })
                .catch(err => {
                    console.log('Error :', err);
                })

        } else {

            const data = new FormData();
            data.append('title', title);
            data.append('body', body);
            data.append('image', image);

            axios.post('http://localhost:4000/v1/blog/post', data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then(res => {
                    console.log('Post :', res);
                })
                .catch(err => {
                    console.log('Error :', err);
                })
        }
    }

    const onImageUpload = (e) => {
        let file = e.target.files[0];
        dispatch({ type: 'SET_FORM_DATA', formType: 'image', formValue: file })
        dispatch({
            type: 'SET_IMAGE_PREVIEW', payload: URL.createObjectURL(file)
        })

    }
    return (
        <div className='blogpost'>
            <Link label='Back' onClick={() => history.push('/')} />
            <p className='title'>{isUpdate ? 'Update' : 'Create New'} Blog Post</p>
            <Input placeholder='Input Title' label='Post Title' value={title} onChange={(e) => dispatch({ type: 'SET_FORM_DATA', formType: 'title', formValue: e.target.value })} />
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
            <Textarea placeholder='Input Deskripsi' value={body} onChange={(e) => dispatch({ type: 'SET_FORM_DATA', formType: 'body', formValue: e.target.value })} />
            <Gap height={20} />
            <div className='btn-save'>
                <Button label={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default withRouter(CreateBlog)
