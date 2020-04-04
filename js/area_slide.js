(function(){
	$(".move-area").on({
		'touchstart':function(e){
			this.touchY = event.changedTouches[0].pageY;
			this.slideY = $(this).position().top;
			this.originalY = $(this).position().top;
		},
		'touchmove':function(e){
			e.preventDefault();
			this.diff = Math.floor(this.touchY - event.changedTouches[0].pageY);
			this.slideY =this.slideY - (this.touchY - event.changedTouches[0].pageY);
			$(this).css({ top:this.slideY });
			var areaHeight = $(this).height();
			var refresh = Math.floor(this.originalY - this.diff);
			if(refresh >= 0){
				// 上側
				// this.slideY = 0;
				$(this).css({ top:"0px" });
			}
			else if(refresh < "-"+areaHeight)
			{
				// 下側
				// this.slideY = -areaHeight;
				$(this).css({ top:-areaHeight+"px" });
			}
			else
			{
				$(this).css({ top:refresh+"px"});
			}
		},
		'touchend':function(e){
			var areaHeight = $(this).height();
			this.diff = Math.floor(this.touchY - event.changedTouches[0].pageY);
			var outLineHeight = $(this).parent(".area-slide").height();
			var areaHeight = areaHeight - outLineHeight;
			var refresh = Math.floor(this.originalY - this.diff);
			if(refresh >= 0){
				// 上側
				// this.slideY = 0;
				$(this).css({ top:"0px" });
			}
			else if(refresh < -areaHeight)
			{
				// 下側
				// this.slideY = -areaHeight;
				$(this).css({ top:-areaHeight+"px" });
			}
			else
			{
				$(this).css({ top:refresh+"px"});
			}
		}

	});
	//クリック向け
	$(".move-area").mousedown(function(e){
		this.touchY = event.pageY;
		this.slideY = $(this).position().top;
		this.originalY = $(this).position().top;

		$(".move-area").mousemove(function(e){
			e.preventDefault();
			this.diff = Math.floor(this.touchY - event.pageY);
			this.slideY =this.slideY - (this.touchY - event.pageY);
			// var areaHeight = $(".move-area").height();
			// var outLineHeight = $(".area-slide").height();
			// var areaHeight = areaHeight - outLineHeight;
			// var refresh = Math.floor(this.originalY - this.diff);
			// alert(refresh);



		}).mouseup(function(e){
			var areaHeight = $(".move-area").height();
			var outLineHeight = $(".area-slide").height();
			var areaHeight = areaHeight - outLineHeight;
			var refresh = Math.floor(this.originalY - this.diff);

			if(refresh > 0){
				// 左側
				// this.slideY = 0;
				$(this).animate({ top:"0px" },100);
				$('.move-area').off("mousemove");
			}
			else if(refresh < -areaHeight)
			{
				// 右側
				// this.slideY = -areaHeight;
				$(this).animate({ top:"-"+areaHeight+"px" },100);
				$('.move-area').off("mousemove");
			}
			else
			{
				$(this).animate({ top:refresh+"px"},100);
				$('.move-area').off("mousemove");
			}
		});
	});

})();
