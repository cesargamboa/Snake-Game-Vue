export default {
    name: "SnakeCanvas",
    props: {
        cellSize: Number,
        boardSize: Number,
        speed: Number,
        isPlaying: Boolean,
    },
    computed: {
        boardSizePx(){
            return this.cellSize * this.boardSize;
        }
    }
}