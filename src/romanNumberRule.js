module.exports = ( rome ) =>{
    
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
    /*    
    else if( rome.includes("IL"))  
        throw " 'I' can't subtracted 'L' ."
    else if( rome.includes("IC"))  
        throw " 'I' can't subtracted 'C' ."
    else if( rome.includes("ID"))  
        throw " 'I' can't subtracted 'D' ."
    else if( rome.includes("IM"))  
        throw " 'I' can't subtracted 'M' ."
    else if( rome.includes("VX"))  
        throw " 'V' can't subtracted 'X' ."
    else if( rome.includes("VL"))  
        throw " 'V' can't subtracted 'L' ."
    else if( rome.includes("VC"))  
        throw " 'V' can't subtracted 'C' ." 
    else if( rome.includes("VD"))  
        throw " 'V' can't subtracted 'D' ."
    else if( rome.includes("VM"))  
        throw " 'V' can't subtracted 'M' ."
    else if( rome.includes("XD"))  
        throw " 'X' can't subtracted 'D' ."
    else if( rome.includes("XM"))  
        throw " 'X' can't subtracted 'M' ."
    else if( rome.includes("LC") || rome.includes("LM") || rome.includes("LD") )  
        throw " 'L' can't subtracted ."
    else if( rome.includes("DM") )  
        throw " 'D' can't subtracted ."*/        
}