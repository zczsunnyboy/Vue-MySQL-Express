<template>
  <el-row>

  </el-row>
</template>

<script>
  import * as pixi from '../../assets/js/createApi'
  import _ from '../../assets/img/pika.png'

  export default {
    name: "create-chunk",
    data() {
      return {

      }
    },
    mounted(){
      let _data={
        width:this.$el.clientWidth,
        height:600,
        antialias: true,
        backgroundColor : 0x1099bb
      };
      pixi.createApp(_data,this.$el);
      let ImgContainer=new pixi.createContainer({});
      let pikaTexture=new pixi.createTexture({url:_});

      for(let i=0;i<25;i++){
        let pikaSprite=new pixi.createSprite({obj:pikaTexture,father:ImgContainer});
        pikaSprite.anchor.set(0.5);
        pikaSprite.x = (i % 5) * 40;
        pikaSprite.y = Math.floor(i / 5) * 40;
      }
      // Center on the screen
      ImgContainer.x = (pixi.app.screen.width ) / 2;
      ImgContainer.y = (pixi.app.screen.height ) / 2;
      // Center bunny sprite in local container coordinates
      ImgContainer.pivot.x = ImgContainer.width / 2;
      ImgContainer.pivot.y = ImgContainer.height / 2;

      // Listen for animate update
      pixi.app.ticker.add(function(delta) {
        // rotate the container!
        // use delta to create frame-independent tranform
        ImgContainer.rotation -= 0.01 * delta;
      });
    }
  }
</script>

<style scoped>

</style>
