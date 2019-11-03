document.addEventListener('DOMContentLoaded', () => {
    let btnCreate = document.querySelectorAll("[create-task-btn]")[0];
    let saveBtn = document.querySelector("[save-btn]");
    let closeBtn = document.querySelector("[cancel-btn]");
    let dialog;
    btnCreate.addEventListener('click', event => {
        dialog = new CreateDialog();
        dialog.open();
    });
    saveBtn.addEventListener('click', event => {
        dialog.submit();
    });
    closeBtn.addEventListener('click', event => {
        dialog.close();
    });


});
let setVerifyStatus = (ctx) => {
    let guid = ctx.getAttribute('task');
    if (ctx.value === 'done') {
        let task = document.querySelector('[task=' + guid + ']');
        task.innerHTML += '<i class="fas fa-check-square"></i>';
    }
}

let search = document.getElementById('search');
search.addEventListener('keyup', filterTaskTitles);

function filterTaskTitles(){
  let searchValue = document.getElementById('search').value.toUpperCase();

  let mainDiv = document.getElementById('tasks');
  let div = mainDiv.querySelectorAll('div.task');

  for(let i = 0; i < div.length; i++){
    let p = div[i].getElementsByTagName('p')[0];
    if(p.innerHTML.toUpperCase().indexOf(searchValue) > -1){
      div[i].style.display = '';
    } else {
      div[i].style.display = 'none';
    }
  }

}
