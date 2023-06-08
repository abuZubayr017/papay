function findDigits(text) {
    let splitted = text.split('');
    let res = [];
    for(let i=0; i < splitted.length; i++) {
        let a = Number(splitted[i])
        if(a){
            res.push(a);
        }
    }
    return res.join('');
}

let res = findDigits('ad5we34jkf89');
console.log(res);