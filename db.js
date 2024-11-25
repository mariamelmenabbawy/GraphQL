let games = [
    {id:'1' ,title:'WELCOME ' ,platform:['PSS']},
    {id:'2' , title:'HELLO ',platform:['cccc','jjj']},
    {id:'3', title:'HI',platform:['PUBG','hcdjb']}
]
let reviews = [
 {id:'1',rating:"100" , verified:true ,autor_id:'2',games_id:'1'},
 {id:'2' ,rating:'50' ,verified:false ,author_id:'1' , games_id:'3'}
]
let authors = [
{id:'1',name:'mariam',verified:true},
{id:'2',name:'magdy',verified:true},
{id:'3',name:'abdo' ,verified:false}
]


export default {games,authors,reviews}