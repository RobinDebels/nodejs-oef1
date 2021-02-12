function findGroep(birth){
    let group = birth%7 + 1;
    console.log('Geboortedatum: ' + birth);
    console.log('Groep: ' + group);
}


findGroep(20210204);
findGroep(20210205);
findGroep(20210206);
findGroep(20210207);
findGroep(20210208);
findGroep(20210202);
findGroep(20210203);