
<template>
  <div id="app">
  <h1>Snake Game</h1>
  <div class="column">
    Filas (px):
    <input type="number" min="10" v-model.number = "cellSize"/>
  </div>
  <div class="column">
    Tamano del cuadrado
    <input type="number" min="5" v-model.number = "boardSize"/>
  </div>
  <div class="column">
    Velocidad: 
    <input type="number" min="1" v-model.number = "speed"/>
  </div>
  <SnakeCanvas 
    :cellSize="cellSize"
    :boardSize="boardSize"
    :speed= "speed"
    :isPlaying="isPlaying"
  />
  <div>Scores: {{ scores }}</div>
  <button>
  {{ isPlaying ? "Stop" : "Play"}}
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
      cellSize: 30,
      boardSize: 5,
      speed: 1,
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
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
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
