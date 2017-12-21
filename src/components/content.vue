<template>
	<div class="container bg" >
		<div class="row list">
			<div class="col-xs-4"><router-link to="/">首页</router-link></div>
			<div class="col-xs-4"><router-link to="/Game/Latest">游戏</router-link></div>	
			<div class="col-xs-4"><router-link to="/UserCenter">我的</router-link></div>		
		</div>
	</div>
</template>

<style scoped>
	.bg{
		width:100%;
		background-color:#262626;
		position:fixed;
		bottom:0;
	}
	.list{
		height:50px;
		line-height:50px;
		font-size:19px;
		color:#fff;
	}
</style>

<script>
export default{
	name:"Content",
}

</script>