function g_string_to_j_string(g_date_string){
    var g_date_array = g_date_string.split('-'),
        gy = +g_date_array[0],
        gm = +g_date_array[1],
        gd = +g_date_array[2];

    var gy,gm,gd,jy;
    var g_d_m=[0,31,59,90,120,151,181,212,243,273,304,334];
    if(gy > 1600){
        jy=979;
        gy-=1600;
    }else{
        jy=0;
        gy-=621;
    }
    var gy2=(gm > 2)?(gy+1):gy;
    var days=(365*gy) +(parseInt((gy2+3)/4)) -(parseInt((gy2+99)/100)) +(parseInt((gy2+399)/400)) -80 +gd +g_d_m[gm-1];
    jy+=33*(parseInt(days/12053));
    days%=12053;
    jy+=4*(parseInt(days/1461));
    days%=1461;
    if(days > 365){
        jy+=parseInt((days-1)/365);
        days=(days-1)%365;
    }
    var jm=(days < 186)?1+parseInt(days/31):7+parseInt((days-186)/30);
    var jd=1+((days < 186)?(days%31):((days-186)%30));
    var month_names = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

    return jd+' '+month_names[jm-1]+' '+jy;
}
