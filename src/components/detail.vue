<template>
	<div>
		<div class="col-xs-12">{{detail.title}}</div>
		<div class="col-xs-12">{{detail.content}}</div>
	</div> 
</template>	

<script>
	export default{
	  	name:"Detail",
	  	data:function (){
	  		return {
	  			detail:[]
	  		};
	  	},
	  	mounted:function(){
	  		var index=this.$route.params.i;
			var url = this.apiDomain();
			
	  		$.get(url + "detail.php?id="+index,(data)=>{
	  			this.detail=data;
	  		});
	  	}
	}
</script>