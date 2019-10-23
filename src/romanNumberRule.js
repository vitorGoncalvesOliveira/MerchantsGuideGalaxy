module.exports = ( rome ) =>{
    try{
        if( rome.includes("IIII") )
            throw " 'I' can't repeat 4 times."
        else if( rome.includes("XXXX") )
            throw " 'X' can't repeat 4 times."
        else if( rome.includes("CCCC") )
            throw " 'C' can't repeat 4 times."
        else if( rome.includes("MMMM") )
            throw " 'M' can't repeat 4 times."        
        else if( rome.includes("DD") )
            throw " 'D' can't repeat 2 times."
        else if( rome.includes("LL") )
            throw " 'L' can't repeat 2 times." 
        else if( rome.includes("VV") )         
            throw " 'V' can't repeat 2 times."
    }catch(e){
        console.log(e)
    }            
}