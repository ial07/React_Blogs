import { combineReducers } from "redux"
import HomeReducer from "./HomeReducer"
import GlobalReducer from "./GlobalReducer"
import CreateBlogReducer from "./CreateBlogReducer"

const reducer = combineReducers({ HomeReducer, GlobalReducer, CreateBlogReducer })

export default reducer