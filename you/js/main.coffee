$ ->
	$("#gotoTop").click ->
		$ "html,body"
			.stop()
			.animate {
				scrollTop: 0
			},
			600,
			"swing"
