


const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
   document.documentElement.style.setProperty(`--${this.name}`, this.value);
}


inputs.forEach(input => document.documentElement.style.setProperty(`--${input.name}`, input.value)); 
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))