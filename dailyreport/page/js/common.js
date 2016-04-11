$(document).ready(function(){
	//验证完之后提交表单	
			
});
function addDaily(){
	alert(0)
  var dailyTitle = $("#dailyTitle").val();//新增日报的标题
  var dailyContent = $("#dailyContent").val();//新增日报的内容
  var dailyCategory =  $("input[name='dailyCategory'][type='radio']:checked").val();//类别
  var dailyDate = $("#dailyDate").val();
  var dailyTime = $("#dailyTime").val();
  var json= {
  	 "dailyTitle":dailyTitle,
  	 "dailyContent":dailyContent,
  	 "dailyCategory":dailyCategory,
  	 "dailyDate":dailyDate,
  	 "dailyTime":dailyTime
  }
  console.log(JSON.stringify(json));
   $.ajax({
		type:"post",
		url:"",
		data:json,
		async:true,//异步提交
		beforeSend:function(XMLHttpRequest){
		  //发送之前需要做的事情
		  this;
		},
		success:function(data){
		  //请求成功之后需要做的事情	
		  
		},		
		error:function(XMLHttpRequest, textStatus, errorThrown){
		  	
			
		}
	});
	
}

