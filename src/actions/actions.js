import { CHANGE_SEARCH_FIELD,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS ,REQUEST_ROBOTS_ERROR} from './types'
export const setSearchField=(text)=>({
    type:CHANGE_SEARCH_FIELD,
    payload:text
});

export const requestRobots=()=>{
    return (dispatch)=>{
        dispatch({type:REQUEST_ROBOTS_PENDING});
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(result=>{return result.json()})
            .then(users=>dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:users}))
            .catch(err=>dispatch({type:REQUEST_ROBOTS_ERROR,payload:err}))
        }
}