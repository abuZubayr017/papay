const magazine = "Lorem kill ipsum doler sit you can make him cry me ver right";
const note = "you kill me ipsum";
const result = canMurderWrite(note)
console.log('killer yoza oladimi', result);


function canMurderWrite(note) {
    const mag_list = magazine.split(' ');
    const note_list = note.split(' ');
    return note_list.every(word => mag_list.includes(word));
}