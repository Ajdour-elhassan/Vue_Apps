const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
        };
    },
    methods: {
        add() {
            this.counter = this.counter + 2
        },
        remove(num) {
            this.counter = this.counter - num;
        },

        OutputFullname() {

            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + 'Mata';
        },
        resetInput() {
            this.name = '';
        },

        Submitform(event) {
            //event.preventDefault();
            alert("Submitted!");

        }
    }
});

app.mount('#events');