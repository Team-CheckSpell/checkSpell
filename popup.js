document.addEventListener('DOMContentLoaded', () => {
  const onOffButton = document.querySelector('.button');

  chrome.storage.sync.get('enableCheckSpell', (data) => {
    onOffButton.checked = data.enableCheckSpell || false;
    updateStatusText(onOffButton.checked);
  });

  onOffButton.addEventListener('change', () => {
    const isEnabled = onOffButton.checked;

    chrome.storage.sync.set({ enableCheckSpell: isEnabled });
    updateStatusText(isEnabled);
  });
});

function updateStatusText(isEnabled) {
  const statusText = document.querySelector('.message');
  statusText.textContent = isEnabled
    ? '현재 맞춤법 검사기가 켜져있습니다.'
    : '현재 맞춤법 검사기가 꺼져있습니다.';
}
