let pads = document.querySelectorAll('.board div')

const colors = [
    "rgb(255, 119, 119)",
    "rgb(119, 248, 255)",
    "rgb(237, 255, 119)",
    "rgb(151, 119, 255)",
    "rgb(241, 119, 255)",
    "rgb(128, 255, 119)",
]

pads.forEach((Element,index)=>{
    Element.addEventListener("click",()=>{
        let ball = document.createElement('div')
        let visual = document.querySelector(".visual")
        visual.appendChild(ball)
        ball.style.background = colors[index]
        ball.style.animation = 'jump 1s linear' 
        ball.addEventListener("animationend",function(){
            visual.removeChild(this)
        })
    })
})