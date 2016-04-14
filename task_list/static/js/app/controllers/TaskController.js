


export default class TaskController {

    /*@ngInject*/
    constructor(TaskService) {
        this.task = null;
        this.tasks = [];
        this.taskService = TaskService;

        this.dialog = $('#modal_task');

        this.getTasks();
    }

    getTasks(){

        this.taskService.getTasks().then( result =>  {
            this.tasks = result;
        });
    }

    getTask(taskId){

        this.taskService.getTask(taskId).then(result => {
            this.task = result;

            this.dialog.modal('show');
        });
    }


    newTask(){

        if(this.task != null){

            this.task.id=null;
            this.task.task='';
            this.task.done=false;
        }
        this.dialog.modal('show');
    }


    saveTask(){

        this.taskService.saveTask(this.task).then(result => {

        });

        this.getTasks();
        this.dialog.modal('hide');

    }

}