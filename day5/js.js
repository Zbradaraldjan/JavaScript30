const panels = document.querySelectorAll('.panel');
const title = document.querySelector('.title');

function toggleOpen(){

    if(this.classList.contains('open')){//you click on the opened panel
        title.classList.remove('hidden');
        this.classList.remove('open');
    }else{
        title.classList.add('hidden');
        const open = document.querySelector('.open');//get the current opened one
        open ? open.classList.remove('open') : null;//and close it

        this.classList.add('open');
    }
}

function toggleActive(e){

    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
    
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));