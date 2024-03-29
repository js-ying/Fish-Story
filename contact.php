<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <meta name="description" content="生命中不可缺少的聲音，這是一條悠游於天籟歌聲之中──魚的故事。">
    <meta name="author" content="光Guand">

    <title>與我聯絡 - Fish Story 梁靜茹</title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">

    <script src="js/jquery.js"></script>
	<script src="js/jquery.ui.js"></script>
    <script src="js/bootstrap.min.js"></script>
	<script src="js/navbar_effect.js"></script>
	<script src="js/jquery.validate.js"></script>
	<scritt src="js/jquery.validate.messages.js"></scritt>

  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-D55EC92GJP"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-D55EC92GJP');
  </script>
</head>
<body>

	<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
	  	<div class="navbar-header">
    		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
	      		<span class="sr-only">Toggle navigation</span>
	      		<span class="icon-bar"></span>
	    		<span class="icon-bar"></span>
	      		<span class="icon-bar"></span>
	    	</button>
	    	<a class="navbar-brand" href="./">Fish Story 梁靜茹</a>
	  	</div>

	 	<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
		      	<li><a href="singer.html">歌手介紹</a></li>
		      	<li><a href="photo.html">照片欣賞</a></li>
				<li><a href="class.html">經典歌曲</a></li>
		      	<li><a href="album.html">歷代專輯</a></li>
				<li><a href="search.html"><span class="glyphicon glyphicon-search" aria-hidden="true"></span> 快速找歌</a></li>
	    	</ul>

		<ul class="nav navbar-nav navbar-right">
			<li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">其他 <span class="caret" style="margin-right: 10px"></span></a>
				<ul class="dropdown-menu" role="menu">
					<li><a href="about.html">關於本站</a></li>
					<li><a href="vote.html">投票系統</a></li>
					<li><a href="comments.html">留言板</a></li>
					<li><a href="contact.php">私訊我</a></li>
				</ul>
			</li>
		</ul>
	</nav>

	<div id="contact">

		<h3>私訊我</h3>
		<form class="form-horizontal" id="contact-form" role="form" method="post" enctype="multipart/form-data" action="contact.proc.php">
		  	<div class="form-group">
		    	<label class="col-lg-3 control-label">您的暱稱？</label>
			    <div class="col-lg-7">
			      	<input type="text" class="form-control required" name="nickname" placeholder="怎麼稱呼您呢？">
			    </div>
		  	</div>
		  	<div class="form-group">
		    	<label class="col-lg-3 control-label">您的E-mail？</label>
		    	<div class="col-lg-7">
		      		<input type="email" class="form-control required" name="email" placeholder="有了E-mail我才可以回覆您">
		    	</div>
		  	</div>
		  	<div class="form-group">
		    	<label class="col-lg-3 control-label">您要反應的類型？</label>
		    	<div class="col-lg-7">
					<select name="type" class="form-control required">
						<option value="網站內容有誤">網站內容有誤</option>
						<option value="資源提供">資源提供</option>
						<option value="網站（版面、功能）建議">網站（版面、功能）建議</option>
						<option value="鼓勵的話">鼓勵的話</option>
						<option value="其他">其他</option>
					</select>
		    	</div>
		  	</div>
		  	<div class="form-group">
		    	<label class="col-lg-3 control-label">反應內容：</label>
		    	<div class="col-lg-7">
		      		<textarea rows="5" class="form-control required" name="content" placeholder=""></textarea>
		    	</div>
		  	</div>
		  	<br />
		  	<div class="form-group">
		    	<div class="col-sm-offset-3 col-lg-7">
		      		<button type="submit" class="btn btn-default" name="post-btn">送出</button>
		    	</div>
		  	</div>
		</form>

	</div>

<script>
	$(document).ready(function() {

		$("#contact").fadeIn(500);

		$("#contact-form").validate({
            submitHandler: function(form) {
               form.submit();
            },
            errorPlacement: function(error, element) {
               element.closest('.form-group').append(error);
            },
            rules: {
            }
         });
	});
</script>

</body>
</html>
