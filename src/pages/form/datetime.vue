<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card>
      <v-text :fontSize="34" label="弹窗使用"></v-text>
      <v-cell title="年月日" @click="() => { dateShow1 = true }" :value="date1.toString()"></v-cell>
      <v-datetime-picker v-model:show="dateShow1" v-model="date1" @change="handleDateChange"
        @confirm="handleDateChange"></v-datetime-picker>
      <v-cell title="年月" @click="() => { dateShow2 = true }" :value="date2.toString()"></v-cell>
      <v-datetime-picker v-model:show="dateShow2" mode="year-month" v-model="date2" @change="handleDateChange"
        @confirm="handleDateChange"></v-datetime-picker>
      <v-cell title="完整时间" @click="() => { dateShow3 = true }" :value="date3.toString()"></v-cell>
      <v-datetime-picker v-model:show="dateShow3" mode="date-time" v-model="date3" @change="handleDateChange"
        @confirm="handleDateChange"></v-datetime-picker>
      <v-cell title="时分秒" @click="() => { dateShow4 = true }" :value="date4.toString()"></v-cell>
      <v-datetime-picker v-model:show="dateShow4" mode="time" v-model="date4" @change="handleDateChange"
        @confirm="handleDateChange"></v-datetime-picker>
      <v-cell title="时分" @click="() => { dateShow5 = true }" :value="date5.toString()"></v-cell>
      <v-datetime-picker v-model:show="dateShow5" :isSecond="false" mode="time" v-model="date5" @change="handleDateChange"
        @confirm="handleDateChange"></v-datetime-picker>
    </v-card>
    <v-card :margin="[16,16]">
      <v-text :fontSize="34" label="view使用"></v-text>
      <v-datetime-picker v-model:show="dateShow3" mode="date-time" :isPop="false" v-model="date3" @change="handleDateChange"
        @confirm="handleDateChange"></v-datetime-picker>
    </v-card>
  </v-root>
</template>

<script>
export default {
  data () {
    return {
      dateShow1: false,
      date1: new Date(),
      dateShow2: false,
      date2: new Date(),
      dateShow3: false,
      date3: new Date(),
      dateShow4: false,
      date4: new Date(),
      dateShow5: false,
      date5: new Date(),
    }
  },
  methods: {
    handleDateChange (date) {
      console.log('date', date)
    }
  }
}
</script>

<style></style>