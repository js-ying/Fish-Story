<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="一個梁靜茹的粉絲所做的梁靜茹介紹網站，在這裡讓您瞭解梁靜茹的點點滴滴與各種魅力。">
    <meta name="author" content="光Guand">

    <title>梁靜茹 FishLeong</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">

    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
</head>
<body>

	<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	<!-- Brand and toggle get grouped for better mobile display -->
	  	<div class="navbar-header">
    		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
	      		<span class="sr-only">Toggle navigation</span>
	      		<span class="icon-bar"></span>
	    		<span class="icon-bar"></span>
	      		<span class="icon-bar"></span>
	    	</button>
	    	<a class="navbar-brand" href="./index.html">梁靜茹 FishLeong</a>
	  	</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
	 	<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
		      	<li><a href="singer.html">歌手介紹</a></li>
		      	<li><a href="photo.html">照片欣賞</a></li>
				<li><a href="class.html">經典歌曲</a></li>
		      	<li><a href="album.html">歷代專輯</a></li>
	    	</ul>

		<form class="navbar-form navbar-left" role="search">
      		<div class="form-group">
        		<input type="text" class="form-control" placeholder="找歌詞">
      		</div>
	      	<button type="submit" class="btn btn-default">搜尋</button>
    	</form>

		<ul class="nav navbar-nav navbar-right">
			<li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">其他 <span class="caret" style="margin-right: 10px"></span></a>
				<ul class="dropdown-menu" role="menu">
					<li><a href="about.html">關於本站</a></li>
					<li><a href="contact.php">與我聯絡</a></li>
				</ul>
			</li>
		</ul>
	</nav>

	<div id="search">

		<div class= "row">
			<div class="col-lg-6">
    			<div class="input-group">
      				<input type="text" class="form-control" id="key" placeholder="Search for..." value="阿信">
      				<span class="input-group-btn">
        				<button class="btn btn-default" type="button" onclick="search()">Go !</button>
      				</span>
    			</div>
  			</div>
		</div>

    	<div id="search-display"></div>
	</div>

<script>

	function search(){

		$("#search-display").html("");

		$.ajax({
	        url: "js/album.json",
	        dataType: "json",
	        success: function(response) {

	            var data = $.parseJSON(JSON.stringify(response));

	            $.each(data.album, function(key,value) {
					$.each(value.album_info, function(k,v){
						$.each(v.song_info, function(i,j){

							if ( j.writer == $('#key').val() ){
		                        var templete = ""
		                        +" <div class=\"panel panel-default\">"
		                        +"     <div class=\"panel-heading\">"
		                        +"         <h3 class=\"panel-title\">" + v.song_name + "</h3>"
		                        +"     </div>"
		                        +"     <div class=\"panel-body\">"
								+"     		作詞者：" + j.writer + "<br>"
								+"          作曲者：" + j.composer + "<br><br>"
		                        +			j.content
		                        +"     </div>"
		                        +" </div>"

								$("#search-display").append(templete);
							}

						});
					});
	            });

				var str = $("#search-display").html();
				var regex = "<br />";
				$("#search-display").html(str.replace(/\n/g,regex));

	        },

	        error: function() {
	            alert("Fail!");
	        }
	    });

	}


</script>

</body>
</html>
