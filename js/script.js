console.log('vue ok', Vue);

const app = Vue.createApp({
    name: 'To Do List',
    data() {
        return {
            newTask: {
                 text: '',
                 done: false
            },
            tasks: [
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'giocare alla play',
                    done: true
                },
            ]
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.newTask);
        },
        deleteTask(target){
            this.tasks.splice(target, 1);
        },
    }
});

app.mount('#app');