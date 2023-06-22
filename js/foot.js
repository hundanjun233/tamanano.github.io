// 动态心跳，更改自己的名称
$(function(e){
    console.log(111);
    $('.copyright').html('©2023 <i class="fa-fw fas fa-heartbeat card-announcement-animation cc_pointer"></i> By tamanano');
})
$(function(e){
    show_date_time();
})
function show_date_time(){
    $('.framework-info').html('本站已经<font style=color:#33DD99> <i class="fa-fw fas fa-heartbeat card-announcement-animation cc_pointer"></i>Wonderhoi<i class="fa-fw fas fa-heartbeat card-announcement-animation cc_pointer"></i> </font>了<span id="span_dt_dt" style="color: #fff;"></span>');
    window.setTimeout("show_date_time()", 1000);
    BirthDay=new Date("6/20/2023 0:0:0");
    today=new Date();
    timeold=(today.getTime()-BirthDay.getTime());
    sectimeold=timeold/1000
    secondsold=Math.floor(sectimeold);
    msPerDay=24*60*60*1000
    e_daysold=timeold/msPerDay
    daysold=Math.floor(e_daysold);
    e_hrsold=(e_daysold-daysold)*24;
    hrsold=Math.floor(e_hrsold);
    e_minsold=(e_hrsold-hrsold)*60;
    minsold=Math.floor((e_hrsold-hrsold)*60);
    seconds=Math.floor((e_minsold-minsold)*60);
    span_dt_dt.innerHTML='<font style=color:#33DD99> '+daysold+'</font> 天 <font style=color:#33DD99>'+hrsold+'</font> 时 <font style=color:#33DD99>'+minsold+'</font> 分 <font style=color:#33DD99>'+seconds+'</font> 秒';
}