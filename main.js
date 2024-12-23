document.addEventListener('DOMContentLoaded', function() {
    console.log("Сайт для вивчення всесвітньої історії завантажено!");
  
    // Функції для показу/приховання підказок
    window.showHint = function(id) {
      const hint = document.getElementById(id);
      hint.style.display = "block";
    };
  
    window.hideHint = function(id) {
      const hint = document.getElementById(id);
      hint.style.display = "none";
    };
  });
  