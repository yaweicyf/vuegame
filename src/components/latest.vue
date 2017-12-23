<template>
	<div>
		<div v-for="tmp in newsList">
			<div @click="jumpTo(tmp.id)"  class="row game">
				<div class="col-xs-3">
					<img :src="imageDomain + tmp.picurl"/>
				</div>
				<div class="col-xs-6 con">
					<h5>{{tmp.title}}</h5>
					<p>
						<span>{{tmp.type}} |</span>
						<span>{{tmp.click}}</span>
					</p>
				</div>
				<div class="col-xs-3">
					<h5 class="download">收藏</h5>
				</div>
			</div>
			<div class="row last"></div>
		</div>
	</div>
</template>

<style scoped>
.game{
	margin:0px;
	height:60px;
}
.game img{
	width:85px;
	height:60px;
}
.game .con{
	height:60px;
} 
.game h5, .game p{
	text-align:left;
	overflow:hidden;
}
.game h5{
	font-size:16px;
	height:20px;
	line-height:20px;
}
.game p{
	font-size:14px;
	height:15px;
	line-height:15px;

}

.game .download{
	height:60px;
	line-height:60px;
	font-size:16px;
	margin:0;
	text-align:center;
}
.last{
	height:10px;
	border-bottom:1px solid #ccc;
	margin:0 10px;
	margin-bottom:10px;
}

</style>

<script>
	export default{
		name:'Latest',
		data: function() {
			return {
				newsList: [],
				imageDomain: this.apiDomain(),
			};
		},
		methods: {
			jumpTo: function(id) {
				this.$router.push('/Detail/'+id);
			}
		},
		mounted() {
			var app = this;
			new Promise(function(success, error){
				var url = app.apiDomain();
				$.get( url + "vue.php?type=1").then(function(list){
					if(list) {
						success(list);
					} else {
						error();
					}
				});
			}).then(function(list){
				app.newsList = list;
			}, function(){
				throw new Error("请求为空！");
			});
		}
	}
</script>
