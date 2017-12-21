<template>
	<div>
		<headerx></headerx>
    <Slider></Slider>
    <List></List>
	</div>
</template>


<script>
import Headerx from './header';
import Slider from './slider';
import List from './list';
export default {
	components:{ Headerx, Slider,List},
  	name: 'Index',
  	data () {
    	return {
      		msg: 'Welcome to Your Vue.js App'
    	}
  	},
  	methods:{
  		
  	},
  	mounted:function(){
		
	}
}
</script>