const counter = document.querySelector('.counter');
const btns = document.querySelectorAll('.button');

let count = 0;

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let allClass = e.currentTarget.classList;
        if(allClass.contains('increase')){
            count++;
        }
        else if(allClass.contains('decrease')){
            count--;
        }
        else{
            count = 0;
        }

        let counterList = counter.classList;
        if(count > 0){
            negativeRemove(counterList);
            if(!counterList.contains('positive_number')){
                counterList.add('positive_number');
            }
        }else if(count < 0){
            positiveRemove(counterList);
            if(!counterList.contains('negative_number')){
                counterList.add('negative_number');
            }
        }
        else{
            positiveRemove(counterList);
            negativeRemove(counterList);
        }
        counter.innerHTML = count;
    })
})

let positiveRemove = (counterList) => {
    if(counterList.contains('positive_number')){
        counterList.remove('positive_number');
    }
}
let negativeRemove = (counterList) => {
    if(counterList.contains('negative_number')){
        counterList.remove('negative_number');
    }
}