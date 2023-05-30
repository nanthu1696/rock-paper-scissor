let main = document.getElementsByTagName("main");
let hd = [{"id" : "paper2", "imge":"paper"}, {"id" : "rock2", "imge":"rock"} , {"id": "scissors2", "imge": "scissors"}];
let count = localStorage.getItem("score") | 0;
document.getElementById("scoreDisp").innerText = count;
console.log(count);
document.getElementById("open-button").addEventListener("click" , () => {
    document.getElementById("main").style.display = "block";
});

document.querySelector(".close").addEventListener("click" , () => {
    document.getElementById("main").style.display = "none";
})

let choice = document.querySelectorAll(".icons");
for( let i = 0; i< choice.length;i++)
{
    choice[i].addEventListener("click", () => {
        document.getElementById("page").style.display = "none";
        let newDiv = document.createElement("div");
        newDiv.className = "secondpage";
        newDiv.id = "page2";
        let left = document.createElement("div");
        left.className = "rightel";
        left.innerHTML = "<h1>You Picked</h1>";
        let lefti = document.createElement("div");
        lefti.className = "icons2";
        lefti.id = `${choice[i].id}2`;
        lefti.innerHTML = `<img src = "images/icon-${choice[i].id}.svg" />`;
        left.appendChild(lefti);
        let center = document.createElement("div"); 
        let centerel = document.createElement("div");
        centerel.id = "centerPage";
        centerel.innerHTML = `<h1 id = 'win'>You Win</h1> <h1 id = 'lose'>You Lose</h1><button id ='play' onclick = 'refresh()' >Play Again</button>`;
        center.style.display = "none";
        center.appendChild(centerel);
        let right = document.createElement("div");
        right.className = "rightel";
        right.innerHTML = "<h1 style = 'padding-bottom: 10px;'>The House Picked</h1>";
        let righti = document.createElement("div");
        righti.className = "empty";
        right.appendChild(righti);
        newDiv.appendChild(left);
        newDiv.appendChild(center);
        newDiv.appendChild(right);
        main[0].appendChild(newDiv);
        let righth = document.createElement("div");
        righth.className = "icons2";
        setTimeout(() =>{
            let home = Math.round(Math.random()*(2));
            console.log(home);
            righti.remove();
            righth.id = `${hd[home].id}`;
            righth.innerHTML = `<img src = "images/icon-${hd[home].imge}.svg" />`;
            right.appendChild(righth);
            if((choice[i].id == "paper" && hd[home].imge == "paper") || (choice[i].id =="rock" && hd[home].imge == "rock") || (choice[i].id =="scissors" && hd[home].imge == "scissors") )
            {
                document.getElementById("win").style.display = "none";
                document.getElementById("lose").style.display = "none";
            }
            else if ( choice[i].id == "paper" && hd[home].imge == "scissors")
            {
                document.getElementById("win").style.display = "none";
                document.getElementById("lose").style.display = "block";
                righth.classList.add("winner");
                count--;
            }
            else if( choice[i].id == "paper" && hd[home].imge == "rock")
            {
                document.getElementById("win").style.display = "block";
                document.getElementById("lose").style.display = "none";
                lefti.classList.add("winner");
                count++;
            }
            else if( choice[i].id == "scissors" && hd[home].imge == "paper")
            {
                document.getElementById("win").style.display = "block";
                document.getElementById("lose").style.display = "none";
                lefti.classList.add("winner");
                count++;
            }
            else if ( choice[i].id == "scissors" && hd[home].imge == "rock")
            {
                document.getElementById("win").style.display = "none";
                document.getElementById("lose").style.display = "block";
                righth.classList.add("winner");
                count--;
            }
            else if (choice[i].id  == "rock" &&  hd[home].imge == "paper")
            {
                document.getElementById("win").style.display = "none";
                document.getElementById("lose").style.display = "block";
                righth.classList.add("winner");
                count--;
            }
            else if (choice[i].id == "rock"  && hd[home].imge == "scissors")
            {
                document.getElementById("win").style.display = "block";
                document.getElementById("lose").style.display = "none";
                lefti.classList.add("winner");
                count++;
            }
            center.style.display = "block";
            if ( count < 0)
            {
                count = 0;
            }
            localStorage.setItem("score" , count);
            document.getElementById("scoreDisp").innerText = count;

        }, 1000);
        

        
    })
}

function refresh()
{
    document.getElementById("page2").remove();
    document.getElementById("page").style.display = "flex";
}
    
