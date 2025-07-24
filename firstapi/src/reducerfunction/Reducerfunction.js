function reducerfunc(storedata={user1:"",user2:""},action){
    if(action.type==="USER1"){
        storedata={
            user1:action.payload
        }
    }
    else if(action.type==="USER2"){
        storedata={
            user2:action.payload
        }
    }
    return storedata
}
export default reducerfunc