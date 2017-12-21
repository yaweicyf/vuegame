<template>
	<div>
		<div class="row">
			<h3>亚伟</h3>
		</div>
		<div class="row">
			<img src="/src/assets/img/_venonat-128.png"/>
		</div>
		<div class="row">
			<p>编辑个人资料</p>
		</div>
		<div class="row dark">
		</div>
		<div class="row sort">
			<div class="col-xs-6 text-left">账户</div>
			<div class="col-xs-6 text-right">&gt</div>
		</div>
		<div class="row sort">
			<div class="col-xs-6 text-left">关注</div>
			<div class="col-xs-6 text-right">&gt</div>
		</div>
		<div class="row sort">
			<div class="col-xs-6 text-left">收藏</div>
			<div class="col-xs-6 text-right">&gt</div>
		</div>
		<div class="row dark">
		</div>
		<div class="row sort">
			<div class="col-xs-6 text-left">设置</div>
			<div class="col-xs-6 text-right">&gt</div>
		</div>
		<div class="row sort">
			<div class="col-xs-6 text-left">反馈</div>
			<div class="col-xs-6 text-right">&gt</div>
		</div>
		<div class="row last">
		</div>
	</div>
</template>

<style scoped>
.sort{
	height:50px;
	line-height:50px;
	margin:0 20px;
}
img{
	height:80px;
	width:80px;
	border-radius:50%;
}
.dark{
	background:#eee;
	height:20px;
}
.last{
	background:#eee;
	height:130px;
}

</style>

<script>
export default{
	name:'UserCenter',
	data (){
		return {}

	}	
}

</script>