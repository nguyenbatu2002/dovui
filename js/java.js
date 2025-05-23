const questions = document.querySelectorAll('.quiz-question');

questions.forEach(question => {
  const correctAnswer = question.getAttribute('data-answer');
  const options = question.querySelectorAll('.option');
  const feedback = question.querySelector('.feedback');

  options.forEach(option => {
    option.addEventListener('click', () => {
      if (feedback.textContent !== '') return; // Ngăn chọn lại

      const selected = option.textContent.trim();
      if (selected === correctAnswer) {
        option.classList.add('correct');
        feedback.textContent = "✅ Chính xác!";
        feedback.classList.add('correct');
      } else {
        option.classList.add('wrong');
        feedback.textContent = `❌ Sai rồi! Đáp án đúng là: ${correctAnswer}`;
        feedback.classList.add('wrong');
        // Tô màu đúng cho đáp án thật
        options.forEach(opt => {
          if (opt.textContent.trim() === correctAnswer) {
            opt.classList.add('correct');
          }
        });
      }

      // Disable các nút sau khi đã chọn
      options.forEach(btn => btn.disabled = true);
    });
  });
});
