let dates=document.querySelector("#startDate").valueAsDate = new Date();
let tableRow=document.querySelector("#schedule")
let teamsArray=document.querySelector("#teams")
let errorMessage=document.querySelector("#error-message")
let submitButton=document.querySelector("#submit")
let teamsCount=document.querySelector("#teamCount")
var matchNo=1
var date=new Date();

const round=(lst)=>{
    a=String(lst.splice(1,1))
    lst.push(a)
    return lst  
}
  
const match=(lst)=>{
    teams=lst.length
    j=teams-1
    for(let i=0;i<teams+1;i++){
        if(j>i){

            let match=` <tr>
                        <td>${matchNo}</td>
                        <td>${date.toDateString()}</td>
                        <td>${lst[i]}</td>
                        <td>${lst[j]}</td>
                        </tr>`
                        tableRow.innerHTML+=match
                        matchNo+=1
                        date.setDate(date.getDate() + 1);
            j-=1
        }
       
    }
      
}

submitButton.addEventListener("click",()=>{
    var lst=teamsArray.value.split(" ")
    var length=lst.length
    if(lst.length!=teamsCount.value)
        alert(`enter ${teamsCount.value} names only`)
    else{
        
        match(lst)
            for(let r=0;r<length-2;r++){
                    round(lst)
                    match(lst)
                }
  
    }
})





  

