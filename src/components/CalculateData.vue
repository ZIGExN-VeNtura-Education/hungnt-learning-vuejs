<template>
  <div>
    <button @click="calculate">Calculate</button>
    <br>
    <br>
    <hr>
    <br>
    <div class="results">
      <span>{{ firstNum }}</span>
      <span v-if="calOptions == 'plus'"> + </span>
      <span v-else-if="calOptions == 'sub'"> - </span>
      <span v-else> x </span>
      <span>{{ lastNum }}</span>
      <span> = </span>
      <span> {{ result }} </span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      firstNum: {
        default: 0,
        type: Number,
        required: true
      },
      lastNum: {
        default: 0,
        type: Number,
        required: true
      },
      calOptions: {
        default: 'plus',
        type: String,
        required: true
      },
    },
    watch: {
      firstNum() { this.result = '?'},
      lastNum() { this.result = '?'},
      calOptions() { this.result = '?'},
    },
    methods: {
      calculate: function() {
        switch(this.calOptions) {
          case 'plus':
            this.result = this.firstNum + this.lastNum;
            break;
          case 'sub':
            this.result = this.firstNum - this.lastNum;
            break;
          default:
            this.result = this.firstNum * this.lastNum;
        }
      }
    },
    data() {
      return {
        result: ''
      }
    }
  }
</script>
