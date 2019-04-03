<template>
    <div>
        <h2>{{ question }}</h2>
        <input type="radio" v-model="choice" v-bind:value="question.answer1" v-on:change="$emit('answer-changed', choice)">
        <label>{{ answer1 }}</label>
        <input type="radio" v-model="choice" v-bind:value="question.answer2" v-on:change="$emit('answer-changed', choice)">
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
            question: String,
            answer1: String,
            answer2: String
        }
    }
</script>

<style scoped>

</style>