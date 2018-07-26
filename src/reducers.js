import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_ERROR,REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_PENDING} 
    from './actions/types'

const initialStateSearch={
    searchValue:''
};


export const searchRobots=(state=initialStateSearch,action)=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
        // return {...state,searchValue:action.payload}.
        return Object.assign({},state,{searchValue:action.payload})
        break;
        default :
        return state;
    }

}
const initialStateRobots={
    isPending:false,
    robots:[],
    error:false
}
export const requestRobot=(state=initialStateRobots,action)=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
         return Object.assign({},state,{isPending:true})
         break;
        
        case REQUEST_ROBOTS_SUCCESS:
        console.log(action.payload,"success")
        //   return Object.assign({},state,{robots:action.payload,isPending:false})
        return {...state,robots:action.payload,isPending:false}
          break;
        
        case REQUEST_ROBOTS_ERROR:
            return Object.assign({},state,{error:true})
            break;
        default:
        return state;
    }
}