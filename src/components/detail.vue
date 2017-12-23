<template>
	<div>
		<Headerx></Headerx>
		<div>
			<div class="col-xs-12 title text-left">{{detail.title}}</div>
			<div class="row time">
				<div class="col-xs-9 text-left">2017-12-23 12:13 游民星空[编译]</div>
				<div class="col-xs-3"><i class="fa fa-commenting"></i>13</div>
			</div>
			<div class="col-xs-12 text-left content">
				<p>  前段时间有“游戏界中的奥斯卡”美誉的The Game Awards（简称TGA）公布了一系列年度游戏的提名，当中的“年度游戏”堪称奥斯卡的“最佳影片”，能够获得这项殊荣的游戏，都是玩家值得花心思玩一玩的。除了TGA之外，还有“金摇杆奖”也很值得玩家关注，当然咯，IGN的年度游戏（Best Overall Game）评选份量也很重。</p>
				<p><img src="/src/assets/img/image1_S.jpg"></p> 
				<P>在今天的凌晨，IGN也公布了自己评选的年度游戏，获奖游戏可以也是意料之中。为此，小编特意整理了IGN自2010年以来历年评选出的最佳游戏，你有没有都玩过呢？
				</p>
				<p>Best Overall Game of 2010：《质量效应2》</p>
				<p>虽然今年的《质量效应：仙女座》引来一波差评，但是当年的《质量效应2》可是当之无愧的佳作。《质量效应2》作为BioWare的《质量效应》三部曲的第2部，这款科幻RPG将带你走向宇宙的最深处，最黑暗的所在，你必须揭开一些很神秘的东西。这是一个相当于自杀式袭击的凶险任务，但是你不得不去做，因为整个人类的命运就在你手中。在游戏中你要集合起一支训练有素的战斗小队，前往敌人的腹地进行一场你死我活的血战。
				</p>
				<p><img src="/src/assets/img/image2_S.jpg"></p> 
				<p>提名：《光环：致远星》、《暴雨》、《荒野大镖客》、《超级马里奥银河2》
				</p>
				<p>当年的提名游戏还有《暴雨》、《荒野大镖客》这样的的佳作，但是质量效应依然在IGN评选当中拔得头筹，也是对这部游戏最大的肯定（R星的游戏竟然没获奖？）。如今《仙女座》遭受了风波，不知道BioWare接下来的大作《赞歌》又会有什么样的表现呢？
				</p>
				<p><img src="/src/assets/img/image3_S.jpg"></p> 

			</div>
		</div> 
	</div>
</template>	
<style scoped>
	.title{
		width:100%;
		overflow: hidden;
		font-size: 25px;
		font-weight: bold;	
	}
	.time{
		height:30px;
		line-height: 30px;
		text-indent: 1em;
	}
	.content p{
		line-height: 25px;
		font-size: 18px;
	}
	.content img{
		width:100%;
		height:200px;
	}

</style>

<script>
import Headerx from './header'
	export default{
	  	name:"Detail",
	  	components:{Headerx},
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