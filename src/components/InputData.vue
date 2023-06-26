<script setup>
  import CalculateData from '../components/CalculateData.vue'
</script>
<script>
  export default {
    data() {
      return {
        firstNum: 0,
        lastNum: 0,
        calOptions: 'plus'
      }
    }
  }
</script>
<template>
  <div id="input-data">
    <label for="firstNum">Fist Number: </label>
    <input id="firstNum" type="number" class="firstnum" v-model="firstNum">
    <br>
    <label for="lastNum">Last Number: </label>
    <input id="lastNum" type="number" class="lastNum" v-model="lastNum">
    <br>
    <label for="calOption">Calculate Options: </label>
    <select name="caculateType" id="calOption" class="calOption" v-model="calOptions">
      <option value="plus" id="plus">Plus</option>
      <option value="sub" id="plus">Sub</option>
      <option value="mul" id="plus">Mul</option>
    </select>
  </div>
  <CalculateData :firstNum="firstNum" :lastNum="lastNum" :calOptions="calOptions"/>
</template>
