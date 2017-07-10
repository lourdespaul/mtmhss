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
    });
});
       