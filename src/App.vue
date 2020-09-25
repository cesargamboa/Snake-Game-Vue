
<template>
  <div id="app">
    <h1>Snake Game</h1>
    <h2>Augusto Cesar Gamboa A. Programacion 2.</h2>
  <div class="score-container">
  <div class="score">Puntaje: <span class="badge">{{ scores }} </span></div>
  <div class="column">
    Velocidad: 
    <input type="number" min="1" v-model.number = "speed"/>
  </div>
  </div>
  <SnakeCanvas 
    :cellSize="cellSize"
    :boardSize="boardSize"
    :speed= "speed"
    :isPlaying="isPlaying"
    :stop="stop"
    :addScores="addScores" 
    :scores="scores" 
  />
  <button v-on:click = "isPlaying ? stop(): start()">
  {{ isPlaying ? "Stop Game" : "Play"}}
  </button>
  </div>
</template>

<script>
import SnakeCanvas from './components/SnakeCanvas/SnakeCanvas.vue'
export default {
  name: 'App',
  components: {
    SnakeCanvas
  },
  data(){
    return {
      cellSize: 15,
      boardSize: 30,
      speed: 10,
      scores: 0,
      isPlaying: false,

    };
  },
  methods: {
    start(){
      this.isPlaying = true;
    },
    stop(){
      this.isPlaying =  false;
      this.scores = 0;
    },
    addScores(scores) {
      this.scores += scores;
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}
body{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
}
.score-container{
  display: flex;
    align-items: center;
    justify-content: space-around;
}
.score{
  font-size: 20px;
    font-weight: 700;
}
.badge{
  background-color: #008CBA;
  color: white;
  display: inline-block;
    padding: .25em .4em;
    font-size: 110%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
h2{
  color: gray;
  font-size: 0.9rem;
}
button{
  margin-top: 40px;
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  width: 200px;
  cursor: pointer;
}
.column{
  display: inline-block;
  width: calc(30% -5px);
  background-color: #f4f4f4;
  border-radius: 4px;
  padding: 5px;
  margin: 5px;
}
.column input{
  width: 40px;
}
</style>
