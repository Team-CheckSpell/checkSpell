// 디바운싱 함수
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

// 타이핑 중인 input, textarea, contenteditable 요소에 대한 이벤트 리스너 추가
document.addEventListener(
  'input',
  debounce(async function (event) {
    chrome.storage.sync.get('enableCheckSpell', (data) => {
      const isEnabled = data.enableCheckSpell || false;
      if (isEnabled) {
        //TODO: CheckSpell 활성화시켜 둔 경우에만 맞춤법 검사 수행

        const target = event.target;

        // input, textarea, contenteditable div인지 확인
        if (
          (target.tagName === 'INPUT' ||
            target.tagName === 'TEXTAREA' ||
            target.isContentEditable) &&
          target.offsetParent !== null // 요소가 화면에 보이는 경우
        ) {
          const inputValue = target.value || target.innerText; // input 또는 contenteditable의 값 가져오기
          //@TODO: 해당 문장 마지막 단어를 맞춤법 검사 함수를 통해
          //대체되는 단어가 있는 경우, 최대 3개를 아래 툴팁에 제안
          console.log('Current value:', inputValue);
        }
      }
    });
  }, 300)
); // 300ms의 지연 시간
