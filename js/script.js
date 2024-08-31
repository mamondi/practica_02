// Task 1 ============================================
const div1 = document.getElementById('div-1');

document.getElementById('b-1').addEventListener('click', () => { 
  div1.style.width = '200px';
  div1.style.height = '100px';
})

// Task 2 ============================================
document.getElementById('b-2').addEventListener('click', () => {
  document.getElementById('div-2').classList.toggle('bg-orange');
})

// Task 3 ============================================
document.getElementById('b-3').addEventListener('click', () => {
  const hasClass = document.getElementById('div2').classList.contains('bg-orange');
  document.getElementById('out-3').textContent = hasClass;
})

// Task 4 ============================================
document.getElementById('b-4').addEventListener('click', () => {
  const all5Elements = document.querySelectorAll('.div-4');
  all5Elements.forEach((element) => {
    element.classList.add('bg-red');
  })
})

// Task 5 ============================================
document.querySelectorAll('.out-5').forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('bg-blue');
  })
})

// Task 6 ============================================
document.getElementById('b-6-1').addEventListener('click', () => {
  const out6 = document.getElementById('out-6');
  out6.textContent = +out6.textContent + 1;
})    

// Task 7 ============================================
const color = document.getElementById('color');

document.getElementById('btn-color').addEventListener('click', () => {
const crDiv = document.createElement('div');
color.appendChild(crDiv);
crDiv.className = 'color_item';
crDiv.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);

crDiv.addEventListener('click', () => {
  crDiv.remove();
}) 
})

// Task 8 ============================================
document.querySelectorAll('.div-8').forEach(function(element) { 
  element.addEventListener('click', function() {
    const color = element.dataset.color;
    document.querySelector('.out-8').style.color = color;
  }) 
});
