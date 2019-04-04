<template>
  <div id="app">
    <h2>Would you rather....</h2>
    <div v-for="question in questions">
        <WouldYouRatherQuestion
                v-bind:id="question.id"
                v-bind:question="question.question"
                v-bind:answer1="question.answer1"
                v-bind:answer2="question.answer2"
                v-on:answer-changed="answerChanged"
        ></WouldYouRatherQuestion>
    </div>

    <div v-for="value in userChoice">
        <li>{{ value }}</li>
    </div>

      <div>{{ userSelectionMessage }}</div>

  </div>
</template>

<script>
import WouldYouRatherQuestion from './components/WouldYouRatherQuestion'

export default {
  name: 'app',
  components: {
    WouldYouRatherQuestion
  },
  data(){
    return{
        userChoice: [],
        userSelectionMessage: '',
      questions: [
        {
          id: 0,
          question: 'be a wizard or a superhero?',
          answer1: 'Be a wizard',
          answer2: 'Be a superhero'
        },
        {
          id: 1,
          question: 'be able to type/text very fast or be able to read really quickly?',
          answer1: 'Type fast',
          answer2: 'Read fast'
        },
        {
          id: 2,
          question: 'be bulletproof or be able to survive falls from any height?',
          answer1: 'Be bulletproof',
          answer2: 'Survive falls from any height'
        }
      ]
    }
  },
  methods: {
    answerChanged(answer, id){
        this.userChoice.push({key: id, value: this.userSelectionMessage = `Thanks! You selected ${answer}`});
      this.userSelectionMessage = `Thanks! You selected ${answer}`
    },
    answerList(){

    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
