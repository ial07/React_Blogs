const CreateBlogState = {
    form: {
        title: '',
        body: '',
        image: ''
    },
    imgPreview: null
}

const CreateBlogReducer = (state = CreateBlogState, action) => {

    if (action.type === 'SET_FORM_DATA') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.formType]: action.formValue
            }
        }
    }

    if (action.type === 'SET_IMAGE_PREVIEW') {
        return {
            ...state,
            imgPreview: action.payload
        }
    }

    return state;
}

export default CreateBlogReducer