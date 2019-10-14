/*
console.log('Hello World');
var MarkHeight=1.7, MarkWeight=68, JohnHeight=1.75, JohnWeight=73;
var BMIMark = MarkWeight / (MarkHeight*MarkHeight);
var BMIJohn=JohnWeight / (JohnHeight* JohnHeight);
var test= BMIMark > BMIJohn;
console.log(test);

*/

/*
var firstName = 'John';
var civilStatus = 'married'

if(civilStatus ==='married'){
    console.log(firstName + ' is married');
}else{
    console.log(firstName + ' is not married')
}*/

/*
var MarkHeight=1.7, MarkWeight=68, JohnHeight=1.8, JohnWeight=73;
var BMIMark = MarkWeight / (MarkHeight*MarkHeight);
var BMIJohn=JohnWeight / (JohnHeight* JohnHeight);
//var test= BMIMark > BMIJohn;
//console.log(test);
if(BMIJohn>BMIMark){
    console.log('John \'s BMI is higher than mark');
}else{
    console.log('Mark \'s BMI is higher than John');
}*/
/*
var firstName='John';
var age = 30;

if(age < 13){
    console.log(firstName + ' is a boy');
}else if(age>=13 && age<20){
    console.log(firstName + ' is a teenager');
}else if(age>=20 && age <30){
    console.log(firstName + ' is a young man');
}else{
    console.log(firstName + ' is a man');
}*/

var firstName ='John'
var age=16
age >= 18 ? console.log(firstName+ ' drinks beer'):console.log(firstName + ' drinks cola');
/*
var job='cop';
switch(job){
    case 'teacher':
    console.log(firstName + ' teaches coding');
    break;
    case 'driver':
    console.log(firstName + ' drives uber in lisbon');
    break;
    case 'designer':
            console.log(firstName + ' creates websites');
            break;
    default:
    console.log(firstName + ' does something else');
            
}
*/
//john team score

/*
var jM1=110,jM2=120,jM3=103,avgjM;
//mike team score
var mM1=116, mM2=94, mM3=123, avgmM;

avgjM=(jM1+jM2+jM3)/3;
avgmM=(mM1+mM2+mM3)/3;

if(avgjM>avgmM){
    console.log('the winner is Team John' );
}else if(avgjM===avgmM){
console.log('there is a draw');
}else{
    console.log('the winner is team MArk')
}
var maryM1=97, maryM2=134,maryM3=105, avgMary;
avgMary=(maryM1+maryM2+maryM3)/3;

if(avgjM>avgmM && avgjM>avgMary){
    console.log('john is the winner');
}else if(avgmM>avgMary){
    console.log('Mark is the winner');
}else{
    console.log('Mary is the winner');
}
*/
/*
function CalculateAge(birthYear){
    return 2019 - birthYear;
}

var ageJohn=CalculateAge(1990);
console.log('Age of john is '+ageJohn)

function yearsuntilRetirement(year, firstName){
    age=CalculateAge(year);
    var yearsuntilRetirement = 65 - age;
    if(yearsuntilRetirement > 0){
        console.log(firstName + ' retires in ' + yearsuntilRetirement + ' years');
    }else{
        console.log(firstName + ' has already retired');
    }
    
}

yearsuntilRetirement(1990, 'John');
yearsuntilRetirement(1948, 'Mike');
yearsuntilRetirement(1980, 'Jane');


*/

//Function statement and expressions
//Function expression
/*
var whatDoYouDo = function(job,firstName){
    switch(job){
        case 'teacher':
        return firstName + ' teaches kids how to code';
        case 'driver':
        return firstName + ' drives a cab in Pune';
        case 'designer':
        return firstName + ' designs beautiful websites';
        default:
        return firstName + ' does something';
    }
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('driver','mark'));
console.log(whatDoYouDo('designer','ravi'));
console.log(whatDoYouDo('banker','shyam'));
*/
//Array

/*
var john = ['John', 'Smith','1990','teacher',false]
john.push('blue');
console.log(john);
john.unshift('Mr');

john.pop();
john.pop();
console.log(john);

john.shift();
console.log(john);
*/
/*
// Tip calculator
var johnHotelBills =[124,48,268];
//var johnTipRange = [20%,15%,10%];
var tipamount=tipC(johnHotelBills[1]);
console.log('the tip for $'+ johnHotelBills[0] + ' is $' + tipamount);

function tipC(billamount){
    var range;
    if(billamount >=200){
        var range = 'c';
        }else if(billamount>=100 && billamount<200){
            range = 'b';
        }else{
            range = 'a';
        }
        switch(range){

        
        case 'c':
            return billamount*.1;
        case 'b':
            return billamount*.15;
        case 'a':
            return billamount*.2
        }
}
*/


//Objects
/*
var john = {
firstName: 'John',
lastName: 'Smith',
JohnHeight: 1.7,
JohnWeight: 65,
birthYear: 1990,
family: ['Jane','Mark','bob','Emily'],
job: 'teacher',
isMarried: false,
calcAge: function(){
    this.age = 2019 - this.birthYear;
}
};

var mark = {
    firstName: 'Mark',
    lastName: 'Wilbur',
    markHeight: 1.8,
    markWeight: 90,
    birthYear: 1990,
    family: ['Jane','John','bob','Emily'],
    job: 'designer',
    isMarried: false,
    bmiCalc: function(){
        this.bmi=this.markWeight/(this.markHeight * this.markHeight);
    }
    };
//console.log(john.birthYear);
//john.calcAge();
mark.bmiCalc();
console.log(mark.bmi);
/*
function bmiCalc(height,weight){
    var bmi=weight/(height*height);
    return bmi;
}

console.log(mark.bmiMark);
*/
/*
for (var i = 0; i<10;i++){
    console.log(i);
}
*/
var john = ['John', 'Smith',1990,'teacher',false];
/*
for(var i=0;i<john.length;i++){
    console.log(john[i]);
}

var i=0;
while(i <john.length){
    console.log(john[i]);
    i++;
}
*/

for (var i=0; i < john.length;i++){
    if (typeof john[i] !=='string') continue;
    console.log(john[i]);
}

for(var i=john.length -1;i>=0;i--){
    console.log(john[i]);
}







































































