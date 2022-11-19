function func(){
    let pane = document.getElementsByClassName("pane");
    for(let s of pane){
        s.insertAdjacentHTML('afterbegin', '<button class="btn">{X}</button>');
        s.addEventListener('click', function(e){
            let megatarget = e.target;
            if(megatarget.closest('.btn')){
                s.hidden = true;
            }
        })

    }
}