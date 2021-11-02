import { RegisterBg, LoginBg } from '../../../assets';

const GlobalState = {
    imageHome: LoginBg
}

const GlobalReducer = (state = GlobalState, action) => {

    if (action.type === 'UPDATE_IMAGE') {
        return {
            ...state,
            imageHome: RegisterBg
        }
    }

    return state;
}

export default GlobalReducer