<?php
header("Content-Type:text/html; charset=utf-8");
include("phpmailer/PHPMailerAutoload.php");

//驗證表單
$arr_errorMsg = array("暱稱","Email","反應類型","反應內容");
$arr_errorCode = array();

if ( (empty($_POST['nickname'])) || (preg_match('/[[:cntrl:][:punct:]]/', $_POST['nickname'])) ) {
	array_push($arr_errorCode, "0");
}
if ( (empty($_POST['email'])) || (!preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/', $_POST['email']))) {
	array_push($arr_errorCode, "1");
}
if ( (empty($_POST['type'])) || (preg_match('/[[:cntrl:][:punct:]]/', $_POST['type']))) {
	array_push($arr_errorCode, "2");
}
if ( (empty($_POST['content'])) ) {
	array_push($arr_errorCode, "3");
}

if (!empty($arr_errorCode)) {

	$msgDisplay = "";
	$msgDisplayNoJs  = "";
	foreach ($arr_errorCode as $key => $value) {
		$msgDisplay .= '* '.$arr_errorMsg[$value] .'\n';
		$msgDisplayNoJs .= '* '.$arr_errorMsg[$value];
	}

	echo "請勿使用特殊字元或欄位未填：";
	echo $msgDisplayNoJs;
?>
	<script>
		alert("請勿使用特殊字元或欄位未填：\n <?php echo $msgDisplay; ?> ");
		history.go(-1);
	</script>
<?php
}
else {

	// 產生 Mailer 實體
	$mail = new PHPMailer();

	// 設定為 SMTP 方式寄信
	$mail->IsSMTP();

	// SMTP 伺服器的設定，以及驗證資訊
	$mail->SMTPAuth = true;
	$mail->SMTPSecure = "ssl";
	$mail->Host = "smtp.gmail.com";
	$mail->Port = 465;

	// 信件內容的編碼方式
	$mail->CharSet = "utf-8";

	// 信件處理的編碼方式
	$mail->Encoding = "base64";

	// SMTP 驗證的使用者資訊
	$mail->Username = "jhihsiying@gmail.com";  //在cpanel新增mail的帳號（需要完整的mail帳號，含@後都要填寫）
	$mail->Password = "myquwoelsuoszrna";  //在cpanel新增mail帳號時設定的密碼，請小心是否有空格，空格也算一碼。

	// 信件內容設定
	$mail->From = "jhihsiying@gmail.com"; //與上面帳號相同
	$mail->FromName = $_POST['nickname']; //此顯示寄件者名稱
	$mail->Subject = "梁靜茹FishLeong 意見反應系統"; //信件主旨
	$mail->Body = "【來信人】".$_POST['nickname']."<br>【Email】".$_POST['email']."<br>【反應類型】".$_POST['type']."<br>【內容】".$_POST['content'];   //信件內容
	$mail->IsHTML(true);

	// 收件人
	$mail->AddAddress("jhihsiying@gmail.com"); //此為收件者的電子信箱及顯示名稱

	if(!$mail->Send()) {
		echo '寄信失敗！' . $mail->ErrorInfo;
	} else {
		?>
		<script>
			alert('寄信成功！');
			window.location.href = "contact.php";
		</script>
		<?php
	}

}
?>
