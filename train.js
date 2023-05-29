// Challenge -- 5 
const detail_list = [12, 23, null, 34, null, 32, null, null];
const result = moveNullsKeepOrder(detail_list);
console.log("result:", result);

function moveNullsKeepOrder(list) {
    let arr= [];
    arr = list.filter(el => {
        return el !== null
    })
    for(let i=0; i < list.length; i++) {  
        if(list[i] === null){
            arr.push(list[i])
        }
    }
    return arr;
}
