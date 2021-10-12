const  Text = document.querySelector('#Text');
Text.addEventListener('click', () => 
{
    
    document.querySelector("a").textContent =  prompt();
    document.querySelector("a").preventDefault();
    
})

