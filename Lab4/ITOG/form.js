document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedbackForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const instrument = document.getElementById('instrument').value;
      const comment = document.getElementById('comment').value.trim();
      const consent = document.getElementById('consent').checked;
  
      if (!name || !email || !consent) {
        alert('Пожалуйста, заполните имя, email и примите политику.');
        return;
      }
    // Проверка email на домены .ru и .com
    const emailPattern = /^[^@]+@[^@]+\.(ru|com)$/i;
    if (!emailPattern.test(email)) {
      alert('Email должен оканчиваться на .ru или .com');
      return;
    }
    
      if (!confirm(`Вы уверены, что хотите отправить сообщение от ${name}?`)) {
        return;
      }
  

      const message = `
        🎵 Спасибо, ${name}!
        📧 Email: ${email}
        🎼 Инструмент: ${instrument}
        📝 Комментарий: ${comment || "без комментариев"}
      `;
  
      alert(message);
  
      // Динамически создаем сообщение на странице
      const feedbackSection = document.getElementById('feedbackSection');
      const response = document.createElement('p');
      response.textContent = `Спасибо за отзыв, ${name}! Мы свяжемся с вами по email: ${email}.`;
      feedbackSection.appendChild(response);
  
      form.reset();
    });
  });
  