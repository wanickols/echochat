<script setup lang="ts">
import {onMounted, ref } from 'vue';

const name = ref('John Doe');
    const status = ref('active');
    const tasks = ref(['One', 'Two', 'Three']);
    const newTask = ref('sjwkdsjf')

    const addTask = () => {
        if(newTask.value.trim() != ''){
            tasks.value.push(newTask.value)
            newTask.value = '';
        }
    };

    const deleteTask = (index: number | null) => {
        if(index != null){
            tasks.value.splice(index, 1)
        }
    }

   const toggleStatus = () => {
        if(status.value == 'active'){
            status.value = 'pending'
        }else if(status.value == 'pending'){
            status.value = 'inactive'
        } else {
            status.value = 'active'
        }
    };
   
   onMounted( async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json();
            tasks.value = data.map((task: { title: any; }) => task.title);

        }catch (error) {
            console.log('Error fetching tasks ' + error);
        }
   });
</script>

<template>
 <h1>{{ name }}</h1>
 <p v-if="status === 'active'">User Is active</p>
 <p v-else-if="status === 'pending'">User is pending</p>
 <p v-else> User is inactive</p>

<form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id =newTask name="newTask" v-model="newTask"/>
    <button type="submit">Submit</button>
</form>

 <h3>Tasks</h3>
<ul>
    <li v-for="(task, index) in tasks" :key="task">
        <span>Task {{task}}</span>
        <button @click="deleteTask(index)">X</button>
    </li>
</ul>


<h3>Button</h3>
<button @click="toggleStatus">Click me</button>



</template>



<style scoped>

</style>