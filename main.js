let ladder = {
    number : 0,
 }
 function showStep(){
    return console.log(ladder.number);
 }
 function up(){
    ladder.number+=1
    return ladder.number
 }
 function down(){
    ladder.number -=1
    return ladder.number
 }
 
 showStep();
 up();
 up();
 showStep();
 down();
 showStep();