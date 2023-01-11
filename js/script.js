console.log('vue ok', Vue);

const app = Vue.createApp({
    name: 'To Do List',
    data() {
        return {
            newText: '',
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
            if(this.newText){
                const newTask = {
                    text: this.newText,
                    done: false
                };
                
                this.tasks.push(newTask);
            };
            this.clearText();
        },
        deleteTask(target){
            this.tasks.splice(target, 1);
        },
        clearText(){
            this.newText = '';
        },
        isDone(target){
            this.tasks[target].done = !this.tasks[target].done
        }
    }
});

app.mount('#app');