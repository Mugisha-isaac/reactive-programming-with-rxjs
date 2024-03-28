// const {fromEvent} = rxjs;

function print(val){
    let element = document.createElement('p');
    element.innerText = val;
    element.style.display = 'flex';
    element.style.height = '100%';
    element.style.justifyContent ='center';
    element.style.alignItems = 'center';

    document.body.appendChild(element);
}

// const observable = rxjs.Observable.create(observer => {
//     observer.next('semaphore');
// });
// observable.subscribe(val => print(val))

// const clicks = rxjs.Observable.fromEvent(document,'click');
// clicks.subscribe(val => console.log(val))

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('resolved')
    },1000)
});

const obsPromise = rxjs.from(promise);
obsPromise.subscribe(result => print(result));