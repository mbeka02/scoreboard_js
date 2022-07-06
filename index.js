 let score1=0
 let score2=0
 document.getElementById("score1-el").textContent=score1
 document.getElementById("score2-el").textContent=score2
 
let score1El=document.getElementById("score1-el")
let score2El=document.getElementById("score2-el")

function add1()
{
    score1++
    score1El.textContent=score1
}
 
 function add2()
{
    score1+=2
    score1El.textContent=score1
}

function add3()
{
    score1+=3
    score1El.textContent=score1
}

function G_add1()
{
    score2++
    score2El.textContent=score2
}
 
 function G_add2()
{
    score2+=2
    score2El.textContent=score2
}

function G_add3()
{
    score2+=3
    score2El.textContent=score2
}
 
