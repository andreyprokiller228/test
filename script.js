function game(){
let randNumber = parseInt(Math(1)*10-1);
let attept = 10;
trying();
function trying(){
    let userNumber = prompt('Введите число',"");
    function checkNumber(){
        if(parseFloat(userNumber)){
            return Number(userNumber);
        }else{
            userNumber = prompt('Вы ввели не число. Повторите ввод',"");
            checkNumber();
        }
    }
        userNumber = checkNumber();

        if(userNumber>randNumber){
            alert("Ваше число больше загаданного");
        } else if(userNumber<randNumber){
            alert("Ваше число меньше загаданного");
        }
        else{
            alert("Ура! Вы победили");
            return;
        } 
        
        
        if(attept==1){
        alert("у вас кончились попытки.Вы проиграли:(");
        if(confirm('Хотите начать игру заново?')){
            game();
        }else{
                return;
            }
        
    }
        alert("у вас осталось "+(--attept)+"попыток");
        trying();
    }
}
game();