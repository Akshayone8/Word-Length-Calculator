let txt1 = document.getElementById('text_length');
let btn = document.getElementById('btn_submit');
let res = document.getElementById('text_res');
let btn_res = document.getElementById('btn2');

btn.addEventListener('click',function(){
  let val_len = txt1.value;
  res.value = (val_len.length);
  
});

btn_res.addEventListener('click',function(){
  res.value = '';
  txt1.value='';
})


