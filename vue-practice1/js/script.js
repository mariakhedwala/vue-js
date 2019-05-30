new Vue({
    el: "#app",
    data: {
        message: "Hello Vue.js!"
    }
});

var app2 = new Vue({
    el: "#app-2",
    data: {
        message: "You loaded this page on " + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
                text: 'Learn JavaScript'
            },
            {
                text: 'Learn Vue'
            },
            {
                text: 'Build something awesome'
            }
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});

// Define a new component called todo-item
Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [{
                id: 0,
                text: 'Chicken chilly'
            },
            {
                id: 1,
                text: 'Cheese'
            },
            {
                id: 2,
                text: 'Whatever else humans are supposed to eat'
            }
        ]
    }
});

// Our data object
var data = {
    a: 1
}

// The object is added to a Vue instance
var vm = new Vue({
    data: data
});

// Getting the property on the instance
// returns the one from the original data
console.log(vm.a == data.a); // => true

// Setting the property on the instance
// also affects the original data
vm.a = 2;
console.log(data.a); // => 2

// ... and vice-versa
data.a = 3;
console.log(vm.a); // => 3

var data = {
    a: 1
}
var vm = new Vue({
    el: '#example',
    data: data
})

console.log(vm.$data === data); // => true
var idExample = document.getElementById('example');
console.log(vm.$el === idExample); // => true

// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
    // This callback will be called when `vm.a` changes
    console.log('change');
});

var app8 = new Vue({
    el: '#app-8',
    data: {
        title: 'hello vue',
        link: '',
        finishedLink: '<a href="https://vuejs.org">vue finished parsed</a>',
    },
    methods: {
        sayHello: function() {
            this.title = 'Heyyy';
            return this.title;
        }
    }
});

var app9 = new Vue({
    el: '#app-9',
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    watch: {
        counter: function(value) { // counter : should match atleast one of the data var
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },
    computed: {
        output: function() {
            console.log('computed');
            return this.counter > 5 ? 'Greater than 5 ' : 'Smaller than 5';
        }
    },
    methods: {
        result: function() {
            console.log('method');
            return this.counter > 5 ? 'Greater than 5 ' : 'Smaller than 5';
        },
        increase: function(step) {
            this.counter += step;
        },
        // important 
        updateCordinates: function(event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        // dummy: function() {
        //     event.stopPropagation();
        // }, //replaced by inline stop
        alertMe: function() {
            alert('Here is the alert!');
        }
    }
});

var app10 = new Vue({
    el: '#app-10',
    data: {
        attachRed: false,
        attachGreen: false,
        attachBlue: false,
        color: 'green',
        width: 100
    },
    //toggle between classes
    computed: {
        divClasses: function() {
            return {
                red: this.attachRed,
                blue: !this.attachRed,
            }
        },
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px',
            }
        }
    }
});

var app11 = new Vue({
    el: '#app-11',
    data: {
        show: true
    }
})
