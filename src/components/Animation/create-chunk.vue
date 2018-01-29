<template>
  <el-row>

  </el-row>
</template>

<script>
  import * as PIXI from 'pixi.js'

  let app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});

  export default {
    name: "create-chunk",
    data() {
      return {

      }
    },
    mounted(){
      this.$el.appendChild(app.view)
    }
  }
</script>

<style scoped>

</style>
