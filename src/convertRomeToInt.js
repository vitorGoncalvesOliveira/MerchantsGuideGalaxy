module.exports = ( rome ) => {

    let sum =  partRomeNumber( rome );
    let total = 0; 
    
    sum.forEach(element => total += element );
    return total;

}

function romanValues(carcter){
    switch(carcter){
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
        default:
            return 0;
    }
}

function partRomeNumber( rome ){
    
    let numbersToSum = [];
    let number = rome.split('');
    let i = 0;
    while( number.length != 0 ){

        if( allowSubtracted(number[i] , number[i+1]) ){
            let values = 0;
            while(number[i] == number[i+1]){
                values += romanValues( number[i] );
                i++; 
            }
            values += romanValues(number[i])
            
            if(  romanValues( number[i] ) < romanValues( number[i+1] ) ){
                values = values * -1;
                numbersToSum.push(values);
                i++;
            }
            else{
                i++;                
                numbersToSum.push(values)
            }
            if(i == 0 )
                i++;

            number.splice(0, i);
            i = 0;
        }else{
            let conteudo = romanValues( number[i]);
            numbersToSum.push( conteudo  )
            i++;
            number.shift()
            i = 0;
        }        

    }

    return numbersToSum;
    
}

function allowSubtracted( simbol , next ){
    if(simbol == "I" || simbol == "X" || simbol == "C"){
        if(romanValues(simbol) < romanValues(next)){
            switch (simbol) {
                case "I": 
                    if(next === "V" || next === "X" || next == "I")
                        return true 
                    throw "'I' can subtracted only 'V' and 'X' ";              
                    
                case "X":
                    if(next === "L" || next === "C" || next == "X")
                        return true; 
                    throw "'X' can subtracted only 'L' and 'C' ";              
                    
                case "C":
                    if(next === "D" || next === "M" || next == "C")
                        return true; 
                    throw "'C' can subtracted only 'D' and 'M' ";              
            }
    }
        return true;
    }else{
        if(romanValues(simbol) < romanValues(next))
            throw `${simbol} can never be subtracted`
        return false;
    }
}

