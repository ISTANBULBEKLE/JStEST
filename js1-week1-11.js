function totalNumber (){
    let firstName='Ekip';
    let lastName= 'Kalir';
    let myAge=42;
    let lifeExIs=90;
    let myLifeLeft= lifeExIs - myAge;
    let myMsgAndLeftAge = `My name is ${firstName} ${lastName} and I have ${myLifeLeft} year to live.`;
    console.log(myMsgAndLeftAge);
}
totalNumber();


/*
function totalNumber (firstName, lastName, myAge, lifeExIs){
    let firstName='Ekip';
    let lastName= 'Kalir';
    let myAge=42;
    let lifeExIs=90;
    let myLifeLeft= lifeExIs - myAge;
    let myMsgAndLeftAge = `My name is ${firstName} ${lastName} and I have ${myLifeLeft} year to live.`;
    return myMsgAndLeftAge;
}
totalNumber('Ebenezer', 'Sum', 47, 90); */