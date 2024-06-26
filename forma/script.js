 document.getElementById('Login-form').addEventListener('submit', function(event){
    event.preventDefault();
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    const errorMassage=document.getElementById('error-massage');
    if(password.Length<=6){
        errorMassage.textContent='Пароль 6 элементтен коп болуш керек!'
        errorMassage.style.color='red'
 } else{
    errorMassage.textContent='кируу ийгиликтуу болду!'
    errorMassage.style.color='green'
 }

 });