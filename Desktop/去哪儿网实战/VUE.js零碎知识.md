# 						VUE.js零碎知识

1. 路径名字都需要带**'/'**(反斜杠)。

2. 当设置错误页面时：

   ```vue
   { path: '*', component: Error }			//直接就是Error，不用加引号
   ```

   

3. **‘’$‘’** 区别内置属性和用户自定义属性

4. **''@''**在vue脚手架代表的是**src**文件的意思

5. 百度网盘快速播放：videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(1.5);

6. 生命周期函数会在某一个时间自动执行的函数，不许要人工调用。

7. ```vue
   @import '../../../../assets/css/varibles.scss'
   
   简写：@import "~@/assets/styles/varibles.styl"
   //添加常用背景颜色时，引入stylus文件，前面要加～
   ```

8. **build/webpack.base.conf.js**   中找到**alias**可以改快捷的目录方式，起别名

   ```vue
   resolve: {
       extensions: ['.js', '.vue', '.json'],
       alias: {
         'vue$': 'vue/dist/vue.esm.js',
         '@': resolve('src'),
         'styles': resolve('src/assets/styles'),
   
       }
     },
   ```

   9. 移动端处理跳动问题

   ```css
   .wrapper {
     width: 100%;
     height: 0;
     overflow: hidden;
     padding-bottom: 31.25%； //图片的比例
   }
   ```

   10. vue 中寻找本地图片目录

   ```
   //添加require
   
   imgUrl: require("../../../assets/imgs/1.jpg")
   ```

   11. 图片等比例缩放

       ```css
       	width: auto;
         height: auto;
         max-width: 100%;
         max-height: 100%;
       ```

   12. 改变原有的css样式

       ```css
       //  >>>穿透
       .wrapper>>>.swiper-pagination-bullet-active {
         background: #ffffff;
       }
       ```

   13. 字符长时用“**...**”代替

       ```css
       	overflow: hidden;
         white-space: nowrap;
         text-overflow: ellipsis;
       //当出现不了...时:我们找到带有flex的样式，添加一个min-width:0
       ```

   14. 当链接图片时，前面要加“**：**”

       ```
       <img  :src="item.imgUrl"/>
       ```

   15. 写路由时候的格式，且所有路由都在一个【】内

       ```vue
       routes: [
           {
             path: '/',
             name: 'Home',
             component: Home  //不加双引号
           },
           {
             path: '/city',
             name: "City",
             component: City   //不加双引号
           }
         ] 
       ```

   16. 搜索框左右两边添加间隙（处理的精细一点儿）

       ```css
       box-sizing: border-box;
       padding: 0 0.1rem;
       ```

   17. 伪元素的样式格式

       ```css
       .border-topbottom::before {   <!--冒号和类样式要连在一起-->
         border-color: #ccc;
       }
       
       .border-topbottom::after {
         border-color: #ccc;
       }
       ```

   18. 在组件中传递数据时：不能用大写定义

       ```html
    <city-list :cities="cities" :hot-cities="hotCities"></city-list> 
       //hotCities==  hot-cities
       ```
    ```
   
   19. v-for传值时的坑
   
       ```html
       <div class="area" v-for="(city,key) in cities" :key="key">
               <div class="title border-topbottom">{{key}}</div>
               <div class="item-list">
                 <div
                   class="item border-bottom"
                   v-for="innerItem in city"   //这里的City就是 第一次传值时cities传入
                   :key="innerItem.id"
                 >{{innerItem.name}}</div>
               </div>
    ```

   20. router-link 标签可以别转化成其他标签

       ```html
       <router-link
            tag="li" to="其他地址">
       </router-link>
       ```

   21. 监听页面滚动事件时，不用actived，用mounted

       ```javascript
       mounted() {
           window.addEventListener("scroll", this.handleScroll, true);
         },
       ```

   22. 当你在一个组件中绑定事件时，全局就绑定上了，所以要解绑事件

       ```javascript
       beforeDestroy() {
           window.removeEventListener("scroll", this.handleScroll);
         }
       ```

   23. 切换页面时，不跳转

       ```javascript
       scrollBehavior (to, from, savedPosition) {
         return { x: 0, y: 0 }
       }
       ```

   24. 前后端交互时：config--->index.js--->proxyTable 修改端口

       <img src="/Users/houjinshuang/Library/Application Support/typora-user-images/image-20200305133333276.png" alt="image-20200305133333276" style="zoom:80%;" />
       
       最终修改结果
       
       ![image-20200305133949269](/Users/houjinshuang/Library/Application Support/typora-user-images/image-20200305133949269.png)
       
   25. 真机调试

   26. 打包上线

       ```
       npm run build
       ```

       ![image-20200305140841113](/Users/houjinshuang/Library/Application Support/typora-user-images/image-20200305140841113.png)

       将dist文件里面的文件-------->到后端文件htdocs根目录

       ![image-20200305140947233](/Users/houjinshuang/Library/Application Support/typora-user-images/image-20200305140947233.png)

       可以更改后端要打包放在的文件夹

       ![image-20200305141755810](/Users/houjinshuang/Library/Application Support/typora-user-images/image-20200305141755810.png)

       

       

       

       

       

       

       Mac 电脑：ifconfig

       window电脑：ifconfig

       1. 获取域名
       2. 修改package.json

       ![image-20200305134708817](/Users/houjinshuang/Library/Application Support/typora-user-images/image-20200305134708817.png)

       3. IP地址访问访问网站 IP地址+8080

       4. 如果低版本手机上，有些功能会出现白屏

       ```
       npm install babel-polyfill --save
       ```

       5. 异步处理组件

       

       

       

       

       

       

       

       

       

       

       

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   

   # 				vue常用插件和npm命令

```
npm install vue-awesome-swiper --save				轮播图插件
npm install stylus-loader --save
npm install stylus --save
npm install fastclick --save								解决移动端点击延迟300毫秒 
npm install better-scroll@next -S # install 2.x，with full-featured plugin. 字母表滚动
```

