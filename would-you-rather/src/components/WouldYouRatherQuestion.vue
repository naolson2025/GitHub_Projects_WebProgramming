<template>
    <div class="component">
        <h2>{{ question }}</h2>
        <input type="radio" v-model="choice" v-bind:value="answer1" v-on:change="$emit('answer-changed', choice, id)">
        <label>{{ answer1 }}</label>
        <input type="radio" v-model="choice" v-bind:value="answer2" v-on:change="$emit('answer-changed', choice, id)">
        <label>{{ answer2 }}</label>
    </div>
</template>

<script>
    export default {
        name: "WouldYouRatherQuestion",
        data() {
            return {
                choice: ''
            }
        },
        props: {
            id: Number,
            question: String,
            answer1: String,
            answer2: String
        }
    }
</script>

<style scoped>
.component{
   font-family: "Times New Roman", sans-serif;
}
</style>