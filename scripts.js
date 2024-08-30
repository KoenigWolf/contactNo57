// フィールドIDのリスト
const fieldIds = ['company-name', 'name', 'phone', 'email', 'message'];

// フォームのバリデーション関数
function validateForm() {
  return fieldIds.every(validateField);
}

// 各フィールドのバリデーション関数
function validateField(fieldId) {
  const field = document.getElementById(fieldId);
  const errorField = document.getElementById(`${fieldId}-error`);

  if (!field || !errorField) return false;

  const isValid = field.value.trim() !== '';
  errorField.style.display = isValid ? 'none' : 'block';

  return isValid;
}

// フォームの確認画面にデータを表示する関数
function showConfirmation() {
  fieldIds.forEach(fieldId => {
    const confirmFieldId = `confirm-${fieldId}`;
    const confirmField = document.getElementById(confirmFieldId);
    const inputValue = sanitizeInput(document.getElementById(fieldId).value);

    if (confirmField) confirmField.textContent = inputValue;
  });

  toggleFormVisibility('contact-form', 'confirmation-form');
}

// 入力データのエスケープ処理関数（XSS対策）
function sanitizeInput(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

// フォームと確認画面の表示切り替え関数
function toggleFormVisibility(hideFormId, showFormId) {
  document.getElementById(hideFormId).style.display = 'none';
  document.getElementById(showFormId).style.display = 'block';
}

// フォームデータの送信関数
async function submitForm() {
  const formData = new FormData();

  fieldIds.forEach(fieldId => {
    formData.append(fieldId, document.getElementById(fieldId).value);
  });

  try {
    const response = await fetch('/submit', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      toggleFormVisibility('confirmation-form', 'complete-form');
    } else {
      handleFormSubmissionError();
    }
  } catch (error) {
    console.error('Error:', error);
    handleFormSubmissionError();
  }
}

// 送信エラーのハンドリング関数
function handleFormSubmissionError() {
  alert('送信中にエラーが発生しました。');
}

// 戻るボタンの処理関数
function goBackToForm() {
  toggleFormVisibility('confirmation-form', 'contact-form');
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
