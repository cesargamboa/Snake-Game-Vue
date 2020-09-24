export default {
    name: "SnakeCanvas",
    props: {
        cellSize: Number,
        boardSize: Number,
        speed: Number
    },
    computed: {
        boardSizePx(){
            return this.cellSize * this.boardSize;
        }
    }
}