//
let str = '<table border="1">'
for(let a=1;a<10;++a){
    str += '<tr>'
    for(var b=1;b<=10;++b){
    //
    str += '<td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>'
    }
    str += '</tr>'
}
str += '</table>'
//
document.getElementById('table1').innerHTML = str

//
str = '<table border="1">'
for(let i=9;i>0;--i){
    str += '<tr>'
    for(var j=i;j>0;--j){
        str += '<td>&nbsp;</td>'
    }
    str += '</tr>'
}
str += '</table>'
document.getElementById('table2').innerHTML = str

//
str = '<table border="1">'
for(let c=9;c>0;--c){
    str += '<tr>'
    for(var d=c;d>0;--d){
    //
    str +='<td>'+ d + '*' + c + '=' + (d * c) +'</td>'
    }
    str += '</tr>'
}
str += '</table>'
//
document.getElementById('table3').innerHTML = str