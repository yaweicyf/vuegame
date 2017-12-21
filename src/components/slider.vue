<template>
	<div class="row slider no-margin">
		<div class="col-xs-12 no-padding">
      <ul id="slider">
        <li class="insider" v-for="tmp in slider" @click="jump(tmp.linkid)" >
            <div class="wangba">
              <img :src="imageDomain+tmp.picurl"/>
              <p>{{tmp.title}}</p>
            </div>
        </li>
      </ul>
    </div>
	</div>
</template>

<style scoped>
  .slider{
    width:100%;    
  }
  .slider ul{
    position: relative;      
    width:100%;
    list-style:none;
    padding:0;
    margin:0;
    overflow:hidden;
    height: 220px;
  }
  .slider ul>li{
    top:0;
    left:0;
    width: 100%;
    position:absolute;
    text-align: center;
  }
  .slider ul>li .wangba {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .slider img{
    width:auto;
    height: 220px;
  }
  .slider p{
    width:100%;
    height:30px;
    line-height:30px;
    bottom: -10px;
    position:absolute;
    background:linear-gradient(transparent,#000);
    z-index:1;
    color:#fff;
    opacity:0.9;
    text-align:center;
    overflow:hidden;
  }
  .no-margin {
    margin: 0;
  }
  .no-padding{
    padding: 0;
  }
  @keyframes transform {
    from {left: 0}
    to {left: -100%};
  }
  .inside {
    z-index: 1;
  }
  .outside {
    z-index: 2;
  }
  .transform {
    z-index: 3;
    animation: transform 1s;
    animation-fill-mode: forwards;
  }
</style>


<script>
export default {
  	name: 'Index',
    data:function(){
      return {
        slider:[],
        imageDomain: this.apiDomain(),
      };
    },

    methods: {
        jump: function(id) {
           this.$router.push('/Detail/' + id);
        },
    },

    mounted:function() {
      var carousel=this;
	  var apiDomain = this.apiDomain();
	  
      (function() {
        var i = 0;
        $('#slider li').eq(0).addClass('outside');
        setInterval(function(){
          if(i<3) {
            $('#slider li').eq(i).addClass('transform');
            $('#slider li').eq(i+1).addClass('outside');
            i++;
          } else {
            i=0;
            $('#slider li').removeClass('transform');
            $('#slider li').removeClass('outside');
            $('#slider li').eq(0).addClass('outside');
          }
        }, 3000);   
      }());

      //slider数据
      $.get(apiDomain + "slider.php",function (data){
		console.log(apiDomain + "slider.php");
        data.map(function(v, k) {
            data[k].linkid = v.link.split('=')[1];
        })
        carousel.slider=data;
      });
    }
}
</script>