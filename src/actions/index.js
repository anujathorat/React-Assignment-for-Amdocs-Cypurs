export const inputChanged = (data)=>{
    return{
        type:'GET_INPUT',
        payload:data
    }
}
export const inputInitialData = (data)=>{
    return{
        type:'INITIAL_INPUT',
        payload:data
    }
}