const initState={
    projects:[
        {id:'1',title:'hello',content:'blah blah blah'},
        {id:'2',title:'hello',content:'blah blah blah'},
        {id:'3',title:'hello',content:'blah blah blah'},
    ]
}

const projectReducer=(state=initState,action)=>{
    return state;
}

export default projectReducer;