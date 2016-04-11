$(document).ready(function(){
	
    $(".login-form .form-group button").click(function(){
       var username =$("#username").val();
       var password = $("#password").val();
       if(isNull(username)){
       	 $(".login-form .form-group .tips").show();
       	 $(".login-form .form-group .tips").html("提示：用户名不能为空");      	
       	  return false;
       }
       if(isNull(password)){
       	 $(".login-form .form-group .tips").show();
       	 $(".login-form .form-group .tips").html("提示：密码不能为空");
       	  return false;
       }
       //指定的用户名和密码
       if(username=="admin" && password=="123"){
       	 $("form").submit();
       }else{
          $(".login-form .form-group .tips").show();
          $(".login-form .form-group .tips").html("提示：用户名或密码输入有误");
       }
       

    })   

});
function isNull(value){
  if(value == null ||  value == undefined || value == '' || value == "") { 
        return true;
    }else{
       return false;
    }

}

