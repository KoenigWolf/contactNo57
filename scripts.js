// フォームのバリデーション関数
function validateForm() {
  let isValid = true;

  // 各フィールドのバリデーション
  isValid = validateField('company-name') && isValid;
  isValid = validateField('name') && isValid;
  isValid = validateField('phone') && isValid;
  isValid = validateField('email') && isValid;
  isValid = validateField('message') && isValid;

  return isValid;
}

// 各フィールドのバリデーション関数
function validateField(fieldId) {
  const field = document.getElementById(fieldId);
  const errorField = document.getElementById(`${fieldId}-error`);
  
  if (field.value.trim() === '') {
    errorField.style.display = 'block';
    return false;
  } else {
    errorField.style.display = 'none';
    return true;
  }
}

// フォームの確認画面にデータを表示する関数
function showConfirmation() {
  document.getElementById('confirm-company-name').textContent = sanitizeInput(document.getElementById('company-name').value);
  document.getElementById('confirm-name').textContent = sanitizeInput(document.getElementById('name').value);
  document.getElementById('confirm-phone').textContent = sanitizeInput(document.getElementById('phone').value);
  document.getElementById('confirm-email').textContent = sanitizeInput(document.getElementById('email').value);
  document.getElementById('confirm-message').textContent = sanitizeInput(document.getElementById('message').value);
  
  document.getElementById('contact-form').style.display = 'none';
  document.getElementById('confirmation-form').style.display = 'block';
}

// 入力データのエスケープ処理関数（XSS対策）
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

// 戻るボタンの処理関数
function goBackToForm() {
  document.getElementById('confirmation-form').style.display = 'none';
  document.getElementById('contact-form').style.display = 'block';
}

// フォームデータの送信関数
async function submitForm() {
  const formData = new FormData();
  formData.append('company', document.getElementById('company-name').value);
  formData.append('name', document.getElementById('name').value);
  formData.append('phone', document.getElementById('phone').value);
  formData.append('email', document.getElementById('email').value);
  formData.append('message', document.getElementById('message').value);

  try {
    const response = await fetch('/submit', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      document.getElementById('confirmation-form').style.display = 'none';
      document.getElementById('complete-form').style.display = 'block';
    } else {
      alert('送信中にエラーが発生しました。');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('送信中にエラーが発生しました。');
  }
}

// 戻るボタン（送信完了画面から）の処理関数
function returnToHome() {
  window.location.href = '/'; // ホームページにリダイレクト
}

// イベントリスナーの設定
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('confirm-btn').addEventListener('click', function () {
    if (validateForm()) {
      showConfirmation();
    }
  });

  document.getElementById('back-btn').addEventListener('click', goBackToForm);
  document.getElementById('submit-btn').addEventListener('click', submitForm);
  document.getElementById('back-to-form-btn').addEventListener('click', returnToHome);
});
