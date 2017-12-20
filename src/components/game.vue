<template>
	<div>
		<Headerx></Headerx>
		<div class="row game">
			<div class="col-xs-6 red"  @click="jump('/Game/Latest')"  v-bind:style="{background:myBg1,color:myColor1}">最新游戏</div>
			<div class="col-xs-6 red" v-bind:style="{background:myBg2,color:myColor2}" @click="jump('/Game/Rank')">游戏排行</div>
		</div>
		<router-view></router-view>
	</div>

</template>

<style scoped>
	.game{
		height:40px;
		line-height:40px;
		margin:10px 10px;
		font-size:16px;
		
	}
	.game .red{
		border:1px solid #f00;
	}
	
</style>

<script>
import Headerx from './header'
export default{
	name:'Game',
	components:{Headerx},
	data (){
		return {
			myBg1:"#fff",
			myBg2:"#fff",
			myColor1:"",
			myColor2:"",
			newsList: [],
		}

	},
		
	methods:{
		jump:function (path){
				this.$router.push(path);
				if(path=='/Game/Latest') {
					this.myBg1="#f00";
					this.myBg2="#fff";
					this.myColor1="#fff";
					this.myColor2="";
				} else {
					this.myBg2="#f00";
					this.myBg1="#fff";
					this.myColor2="#fff";
					this.myColor1="";
				}	
		}
	},
	mounted:function(){
		this.$router.push("/Game/Latest");
		this.myBg1="#f00";
		this.myBg2="#fff";
		this.myColor1="#fff";
		this.myColor2="";

	}

}

</script>