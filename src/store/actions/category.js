import axios from 'axios';
import { 
    // SET_CURRENT_USER,
    SHOW_CATEGORY,
    CREATE_CATEGORY,
    UPDATE_CATEGORY,
    SET_LOADING,
    FILTER_CATEGORYS,
    ADD_ERROR
} from '../type';
import { baseUrl } from '../../constant/url'

export const showCategory = (category) => ({
    type: SHOW_CATEGORY,
    category
})

export const createCategory = (category) => ({
    type: CREATE_CATEGORY,
    category
})

export const updateCategory = (category) => ({
    type: UPDATE_CATEGORY,
    category
})

export const setLoading = () => ({
    type: SET_LOADING
})

export const filterCategorys = (id) => ({
    type: FILTER_CATEGORYS,
    id
})

export const getCategorys = () => {
    return async (dispatch) => {
        try {
            dispatch({type: SET_LOADING, payload: true})
            dispatch({ type: ADD_ERROR, payload: false })

            // await axios.get(`${baseUrl}`)
        } catch(error) {
            if(error) {
                dispatch({
                    type: ADD_ERROR,
                    payload: true
                })
            }
        }
    }
}