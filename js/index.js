var contentList=['你好','abc','hello','js','java','html','css'];
$(function(){
    let container=$('#wall-content');
    createEle();
    setInterval(function(){
        let nodes=container.find('div').length;
        if(nodes<3&&contentList.length>0){
            createEle();
        }
    },300);
});

function submitForm(){
    let text=$('#comment').val();
    if(!text){
        return ;
    }
    contentList.push(text);
    move(text);
}

function clearform(){
    contentList=[];
    $('#wall-content').html("");
}

function createEle(){
    contentList.forEach((data)=>{
        move(data);
    });
}
function move(data){
    let container=$('#wall-content');
    let odiv = $("<div></div>");
        odiv.html(data);
        let color=randomColor();
        let size=randomSize();
        let top=(Math.round(Math.random()*container.height()-container.offset().top)) +'px'; 
        var left = Math.round(container.width() - odiv.width());
        odiv.css({
            position: 'absolute',
            display: 'block',
            top: top,
            fontSize: size,
            color: color,
            right:0
        })
        container.append(odiv);
        let time=Math.round(10000 + Math.random() * 10000);
        odiv.animate({
            left: '-'+left+'px'
        },time,function(){
            odiv.remove();
        })
}

function randomColor(){
    return 'rgb('+Math.round(Math.random()*254)+','+Math.round(Math.random()*254)+','+Math.round(Math.random()*254)+')';
}
function randomSize(){
    return (Math.round(Math.random()*2)+1)+'rem';
}