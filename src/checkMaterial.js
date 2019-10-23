const SILVER = 17;
const IRON = 195.5;
const GOLD = 14450;

module.exports = ( text ) =>{
    let msg = text.toLowerCase();
    if(  msg.includes("iron")) 
        return IRON;
    else if(msg.includes("silver"))    
        return SILVER;
    else if( msg.includes("gold"))
         return GOLD;   
    else 
        return null

}