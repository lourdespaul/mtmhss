$(document).ready(function() {
    $('select').material_select();
    $('select[name=standard]').on('change',function(){
        $.ajax({
            type:'GET',
            url:'register/section/'+this.value,
            dataType: 'json',
            success: function(data){
                var select = document.getElementById('section');
                select.options.length = 0;
                $('select').material_select();
                data.section.forEach(function(element) {
                    console.log(element);
                    var opt = document.createElement('option');
                    opt.value = element._id;
                    opt.innerHTML = element.code;
                    select.appendChild(opt);
                    $('select').material_select();
                }, this);
            }
        });
        $('select[name=sms-standard]').on('change',function(){
        $.ajax({
            type:'GET',
            url:'register/section/'+this.value,
            dataType: 'json',
            success: function(data){
                var select = document.getElementById('sms-section');
                select.options.length = 0;
                $('select').material_select();
                var option = document.createElement('option')
                opt.value = "ALL";
                opt.innerHTML="ALL";
                select.appendChild(option);
                data.section.forEach(function(element) {
                    console.log(element);
                    var opt = document.createElement('option');
                    opt.value = element._id;
                    opt.innerHTML = element.code;
                    select.appendChild(opt);
                    $('select').material_select();
                }, this);
            }
        });
    });
});
       