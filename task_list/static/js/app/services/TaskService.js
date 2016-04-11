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
}