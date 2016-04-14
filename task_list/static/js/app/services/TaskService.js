export default class TaskService {

    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
    }

    getTasks() {

        return this.$http
            .get('/task/')
            .then((result) => {
                return result.data;
            });
    }

    getTask(taskId) {

        return this.$http
            .get('/task/'+taskId+'/')
            .then((result) => {
                return result.data;
            });
    }

    saveTask(task) {

        if(task.id == null){

            return this.$http.post('/task/', task)
            .then((result) => {
                return true;
            });
        }
        else{
            return this.$http.put('/task/'+task.id+'/', task)
            .then((result) => {

                return true;
            });
        }
    }

}