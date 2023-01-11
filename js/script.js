console.log('vue ok', Vue);

const app = Vue.createApp({
    name: 'To Do List',
    data() {
        return {
            tasks: [
                {
                    text: 'fare la spesa',
                    done: false
                },
                {
                    text: 'giocare alla play',
                    done: true
                }
            ]
        }
    },
    methods: {
        deleteTask(target){
            this.tasks.splice(target, 1);
        }
    }
});

app.mount('#app');