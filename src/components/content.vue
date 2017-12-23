<template>
	<div class="container bg" >
		<div class="row list">
			<div class="col-xs-4 item"><router-link to="/"><p><i class="fa fa-home fa-2x" aria-hidden="true"></i></p><p>首页</p></router-link></div>
			<div class="col-xs-4 item"><router-link to="/Game/Latest"><p><i class="fa fa-gamepad fa-2x" aria-hidden="true"></i></p><p>游戏</p></router-link></div>	
			<div class="col-xs-4 item"><router-link to="/UserCenter"><p><i class="fa fa-gg fa-2x" aria-hidden="true"></i></p><p>我的</p></router-link></div>		
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
	.list .item p:nth-child(1){
		line-height: 30px;
		height: 25px;
		margin-top: 5px;
	}

	.list .item p:nth-child(2){
		line-height: 20px;
		height:20px;
		font-size: 12px;
	}
</style>

<script>
export default{
	name:"Content",
}

</script>