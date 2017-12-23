<template>
	<div class="row header">
		<div class="col-xs-12 logo text-left">
			<img src="/src/assets/img/gamelogo.png">
		</div>
	</div>

</template>

<style scoped>
	.header{
		height:50px;
		margin-bottom:5px;
		color:#fff;
	}
	.header .logo{
		height:50px;
		background:#000;
		border-bottom:1px solid #484848;
	}
	.header img{
		width:100px;
		height: 50px;
	}
	/*.header ul{
		background:#222;
		height:40px;
	}
	.header li{
		padding-top:10px;
		margin:0 15px;
		float:left;
		font-size:18px;
	}*/
</style>

<script>
	export default{
		name:'Header',
		data:function(){
			return {imageDomain:this.apiDomain()}
		}
	}

</script>