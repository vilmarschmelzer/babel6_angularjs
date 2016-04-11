


export default class TaskController {

    /*@ngInject*/
    constructor(TaskService) {
        this.task = null;
        this.tasks = [];
        this.taskService = TaskService;

        this.dialog = document.querySelector('dialog');

        TaskService.getTasks().then( result =>  {
            this.tasks = result;
        });
    }

    getTask(taskId){

        this.taskService.getTask(taskId).then(result => {
            this.task = result;

            dialog.showModal();
        });
    }


    newTask(){

        if(this.task != null){

            this.task.id=null;
            this.task.task='';
            this.task.done=false;
        }
        dialog.showModal();
    }


    saveTask(){

    }

}