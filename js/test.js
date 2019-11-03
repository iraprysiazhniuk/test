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
