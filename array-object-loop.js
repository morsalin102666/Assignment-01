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