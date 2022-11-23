let count = 0;

const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");
// console.log(btns);

btns.forEach(function(btn){
    // console.log(btn);
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        console.log(styles);
        if(styles.contains("decrease")){
            count--;
        } else if(styles.contains("increase")){
            count++;
        }else{
            count =0;
        }
        if(count>0){
            value.style.color ="green";
        }
        if(count<0){
            value.style.color ="red";

        }
        if(count === 0){
            value.style.color = "#222";
        }
        value.textContent = count;
    });

}); 