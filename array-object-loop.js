// ====================================== Array Mehtofd ==========================================

// ====concat method

let firstName ='morsalin';
let lastName = 'islam';
let fullName = firstName.concat(' ',lastName);
document.write('<br>', fullName);



// ====fill method====

let fill = ['orange', 'apple', 'mango', 'bananb'];
let fillOutput = fill.fill('coconut', 1, 2);
document.write('<br>', fillOutput);



// ====array method====

let array = ['lichu', 'kathal', 'lebu', 'jambulra'];
document.write('<br>', Array.isArray(array));


// ====push method====

let pushMethod = ['peyara', 'lichu', 'notko', 'badam'];
pushMethod.push('amio');
document.write('<br>', pushMethod);


// ====pop method====

let popMethod = ['peyara', 'lichu', 'notko', 'badam'];
popMethod.pop();
document.write('<br>', popMethod);


// ====revers method====

let nam = ['Sumon', 'Rummon', 'Al-amin', 'Selim', 'Raju', 'Ontor', 'Hanif', 'Morsalin']
document.write('<br>', nam.reverse());


// ====shift method====

let everageName = ['Sumon', 'Rummon', 'Al-amin', 'Selim', 'Raju', 'Ontor', 'Hanif', 'Morsalin']
everageName.shift();
document.write('<br>', everageName);


// ====unshift method====

let everageNam = ['Sumon', 'Rummon', 'Al-amin', 'Selim', 'Raju', 'Ontor', 'Hanif', 'Morsalin']
everageNam.unshift('amr name');
document.write('<br>', everageNam);


// ====slice method====

let EightName = ['Sumon', 'Rummon', 'Al-amin', 'Selim', 'Raju', 'Ontor', 'Hanif', 'Morsalin']
let EightNameSlice = EightName.slice(2, 6);
document.write('<br>', EightNameSlice);


// ====sort method====

let sortName = ['Sumon', 'Rummon', 'Al-amin', 'Selim', 'Raju', 'Ontor', 'Hanif', 'Morsalin']
let EightSortName = sortName.sort();
document.write('<br>', EightSortName);


// ====splice method====

let spliceName = ['Sumon', 'Rummon', 'Al-amin', 'Selim', 'Raju', 'Ontor', 'Hanif', 'Morsalin']
spliceName.splice(2,3,'kakku');
document.write('<br>', spliceName);


// ================================== Object ======================================
// ========== object method ==========

// ==== entries method ====

let morsalin = {
    work: 'student',
    class: 12,
    subject: 'computer',
    age: 21
}
document.write('<br>', Object.entries(morsalin));


// ====  hasOwn method ====

let morsalin1 = {
    work: 'student',
    class: 12,
    subject: 'computer',
    age: 21
}
document.write('<br>', Object.hasOwn(morsalin1, 'lastName'));


// ====  keys method ====

let morsalin2 = {
    work: 'student',
    class: 12,
    subject: 'computer',
    age: 21
}
document.write('<br>', Object.keys(morsalin2));


// ====  values method ====

let morsalin3 = {
    work: 'student',
    class: 12,
    subject: 'computer',
    age: 21
}
document.write('<br>', Object.values(morsalin3));



// ================= spread operator =================

let details = {
    name: 'morsalin',
    address: 'Nilphamari',
    work: 'studern'
}
let study = {
    collage: 'Dinajup polytechnic institute Dinajpur',
    subject: 'Computer',
    session: "1018-19",
}

let about ={...details, ...study};
document.write('<br>', about);


// ============================= Loop ===========================

// ==== for loop ====

for(let i = 0; i<=5; i++){
    document.write('<br>', i);
}


// ==== for of loop ====

let forOf = 'morsalin';
for(let x of forOf){
    document.write('<br>', x);
}


// ==== for in loop ====

let forIn = 'islam';
for(let x in forIn){
    document.write('<br>', x);
}