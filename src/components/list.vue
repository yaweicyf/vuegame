<template>
	<ul>
		<li v-for="tmp in list">
			<div class="row list">
				<div class="col-xs-3 pic-con-list">
					<img :src="imageDomain+tmp.picurl"/>
				</div>
				<div class="col-xs-6">
					<h3>{{tmp.title}}</h3>
					<p>{{tmp.content}}</p>
				</div>
				<div class="col-xs-3">
					<p class="score">{{tmp.data}}</p>
				</div>
			</div>
		</li>
		
	</ul>
</template>

<style scoped>
	ul{
		margin-top: 15px;
	}
	.list{
		margin:5px;
		height:60px;
		background: #eee;
		color:#484848;
		border-radius: 5px;
		margin-bottom: 8px;
	}
	.list img{
		width:80px;
		height:60px;
	}
	.list h3{
		height:25px;
		line-height:20px;
		overflow:hidden;
		font-size:14px;
		margin:0;
		text-align:left;
	}
	.list p{
		height:30px;
		line-height:15px;
		font-size:12px;
		margin:0;
		overflow:hidden;
	}
	.list .score{
		height:60px;
		line-height: 60px;
		text-align: center;
		font-size: 18px;

	}
	.pic-con-list {
		padding: 0 5px;
		overflow: hidden;
	}

</style>


<script>
	export default{
		name:"List",
		data:function(){
			return{
				list:[],
				imageDomain:this.apiDomain(),
			};
		},
		mounted:function(){
			var url = this.apiDomain();
			$.get( url + "slider.php?type=12",(data)=>{
				this.list=data;
			});
		}
	}
</script>