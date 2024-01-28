function main(){

    let confirm = document.getElementById("mainResult").innerHTML;
    if(confirm ==  "You Lost !!"){
        alert("Game Over ! Please Restart the game");
    }else{
        let x;
        do{
            x = Math.floor(Math.random() * 100/7.6);
        }while(x==0);
        
        let current_total = parseInt(document.getElementById("result").innerHTML);
        let total = current_total + x;
        document.getElementById("result").innerHTML = total;

        if(total < 21){
            document.getElementById("mainResult").innerHTML = "Generate another card ? "
        }else if(total == 21){
            document.getElementById("mainResult").innerHTML = "You've won !!"
            alert("Congratulations :)");
            document.getElementById("btn_restart").style.display = "block"
        }else if(total > 21){
            document.getElementById("mainResult").innerHTML = "You Lost !!"
            alert("Lost :( Click Restart to Play again");
            document.getElementById("btn_restart").style.display = "block"
        }

        let img = document.createElement("img");
        img.src = "img/" + x + ".png";
        img.height = 200;

        document.body.appendChild(img);
    }  
}

function restart(){
    location.reload();
}