/*
* @Author: Administrator
* @Date:   2017-04-01 10:54:47
* @Last Modified by:   LX
* @Last Modified time: 2017-04-12 08:50:03
*/




'use strict';

window.onload=function(){
 	var designWidth=750;

   	function fontSize(){
		var CW=document.documentElement.clientWidth; 

	var size=CW/designWidth*100+"px";
	document.querySelector("html").style.fontSize = size;  
   }
   fontSize();
   window.onresize=fontSize;      
}