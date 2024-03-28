
function print(val){
    let element = document.createElement('p');
    element.innerText = val;
    element.style.display = 'flex';
    element.style.height = '100%';
    element.style.justifyContent ='center';
    element.style.alignItems = 'center';

    document.body.appendChild(element);
}

const observable = rxjs.Observable.create(observer => {
    observer.next('semaphore');
});
observable.subscribe(val => print(val))