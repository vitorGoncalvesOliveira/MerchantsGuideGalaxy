function convertIntergalatic( intergalatic )  {
     switch(intergalatic.toLowerCase()){
        case "glob":
            return "I";
        case "prok":
            return "V";
        case "pish":
            return "X";
        case "tegj":
            return "L";
        default:
            return"";
     }
}

function getIntergalatics( intergalatic )  {
    switch(intergalatic.toLowerCase()){
       case "glob":
           return "glob ";
       case "prok":
           return "prok ";
       case "pish":
           return "pish ";
       case "tegj":
           return "tegj ";
        default:
            return"";       
    }
} 

module.exports = {
    getIntergalatics: getIntergalatics,
    convertIntergalatic: convertIntergalatic
}