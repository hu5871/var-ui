<template>
  <v-root bgColor="rgb(245, 245, 245)">
    <v-card >
      <v-cell title="标题1" value="value"></v-cell>
      <v-cell title="标题2" leftIcon="icon-pencil" rightIcon="icon-pricetag" value="value"></v-cell>
      <v-cell title="标题3" >
        <template v-slot:value>
          <v-input ></v-input>
        </template>
      </v-cell>
      <v-cell value="value">
        <template v-slot:title>
          <v-input ></v-input>
        </template>
      </v-cell>
    </v-card>
    
  </v-root>
</template>

<script>
export default {

}
</script>

<style></style>