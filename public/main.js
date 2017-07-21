$(document).ready(function() {
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 50, // Creates a dropdown of 15 years to control year,
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect:true // Close upon selecting a date,
    });
    $('select').material_select();
    // document.getElementById('sms_section').disabled = true;
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
    $('select[name=sms_standard]').on('change',function(){
        if(this.value != "ALL"){
            $.ajax({
                type:'GET',
                url:'register/section/'+this.value,
                dataType: 'json',
                success: function(data){
                    var select = document.getElementById('sms_section');
                    select.disabled = false;
                    select.options.length = 0;
                    $('select').material_select();
                    var option = document.createElement('option')
                    option.value = "ALL";
                    option.innerHTML="ALL";
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
        } else {
            var select = document.getElementById('sms_section');
            select.disabled = true;
            select.options.length = 0;
            $('select').material_select();
        }
    });        
});
       