var d = new Date();

var day=new Array("Воскресенье","Понедельник","Вторник",
"Среда","Четверг","Пятница","Суббота");

var month=new Array("Jan.","Feb.","Mar.","Apr.","May.","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec.");

document.write(month[d.getMonth()]);
