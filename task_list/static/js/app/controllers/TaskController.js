


export default class TaskController {

    /*@ngInject*/
    constructor(TaskService) {
        this.task = null;
        this.tasks = [];
        this.taskService = TaskService;
        this.loading = true;
        this.dialog = $('#modal_task');

        this.getTasks();
    }

    getTasks(){
        this.loading = true;
        this.taskService.getTasks().then( result =>  {
            this.tasks = result;
            this.loading = false;
        },
        failure => {
            this.loading = false;
            //alert(failure);
        });
    }

    getTask(taskId){
        this.loading = true;
        this.taskService.getTask(taskId).then(result => {
            this.task = result;

            this.dialog.modal('show');
            this.loading = false;
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
        this.loading = true;
        this.taskService.saveTask(this.task).then(result => {
            this.getTasks();
            this.dialog.modal('hide');
        });
    }

    doneTask(task){
        this.loading = true;
        this.taskService.doneTask(task).then(result => {
            this.getTasks();
        });
    }

    deleteTask(taskId){
        this.loading = true;
        this.taskService.deleteTask(taskId).then(result => {
            this.getTasks();
        });

    }


}