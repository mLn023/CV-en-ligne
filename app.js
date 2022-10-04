const el = document.getElementById('button_scolar');
el.addEventListener("click", hideTableTest);

const el2 = document.getElementById('button_pro');
el2.addEventListener("click",hideTableTest)

function hideTableTest(){
    const table_scolar = document.getElementById('table_scolar');
    const table_pro = document.getElementById('table_pro')
    if(table_scolar.hidden === false){
        table_scolar.hidden = true;
        table_pro.hidden = false;
    } else {
        table_scolar.hidden = false;
        table_pro.hidden = true;
    }
}