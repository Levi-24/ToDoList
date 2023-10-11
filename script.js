let list = JSON.parse(localStorage.getItem('list'))|| {
    todo: [
        {
            nev: "Étcsoki",
        },

    ]
};

function Save(){
    let value = document.getElementById('task').value;
    localStorage.setItem(key,value);
    key++;
}

function Render() {
    let print = "";
    let i = 0;
    while (i != key) {
        print += `
        <h4>${localStorage.getItem(i)}</h4>
        <br>
        `
        i++
    }
        
    document.getElementById('printOut').innerHTML = print;
    Save();
}

window.onload = Render();