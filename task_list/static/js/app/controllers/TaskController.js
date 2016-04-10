export default class TaskController {

    /*@ngInject*/
    constructor(TaskService) {
        this.tasks = [];

        TaskService.getTasks().then( result =>  {
            this.tasks = result;
        });
    }

}