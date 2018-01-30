import * as PIXI from 'pixi.js'

let app;
const createApp=(obj,father)=>{
  app=new PIXI.Application(obj);

  father.appendChild(app.view);
};
//层
const createContainer=function ({obj,father}) {
  this.container = new PIXI.Container(obj);
  if(father){
    father.addChild(this.container)
  }else {
    app.stage.addChild(this.container)
  }
  return this.container
};
//纹理
const createTexture=function ({url,obj,father}) {
  this.texture = PIXI.Texture.fromImage(url);
  return this.texture
};
//精灵
const createSprite=function ({obj,father}) {
  this.Sprite=new PIXI.Sprite(obj);
  father.addChild(this.Sprite);
  return this.Sprite
};
//文字
const createText=function ({text,style,father}) {
  this.Text=new PIXI.Text(text,style);
  father.addChild(this.Text);
  return this.Text
};

export {
  app,
  createApp,
  createContainer,
  createTexture,
  createSprite,
  createText,
}
