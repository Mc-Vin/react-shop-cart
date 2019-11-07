const defaultState=[];

export default (state=defaultState,action)=>{
    if(action.type==='add_to_cart'){
        const newState=JSON.parse(JSON.stringify(state));
        const findObj=newState.find((item)=>item.id===action.item.id)
        if(findObj){
            findObj.num++;
        }else{
            newState.push(action.item);
        }
        return newState;
    }
    if(action.type==='input_num_change'){
        const newState=JSON.parse(JSON.stringify(state));
        const findObj=newState.find((item)=>item.id===action.id)
        findObj.num=action.value;
        return newState;

    }
    if(action.type==='delete_cart_item'){
        const newState=JSON.parse(JSON.stringify(state));
        const findIndex=newState.findIndex((item)=>item.id===action.id);
        newState.splice(findIndex,1);
        return newState;
    }
    return state;
}