document.addEventListener('input', function(event) {
  const activeElement = document.activeElement;
  if (activeElement && (activeElement.tagName === 'TEXTAREA' || (activeElement.tagName === 'INPUT' && activeElement.type === 'text'))) {
    const value = activeElement.value;
    const cursorPosition = activeElement.selectionStart;
    const trigger = ':t ';
    if (value.substring(cursorPosition - trigger.length, cursorPosition) === trigger) {
      const time = new Date().toLocaleTimeString([], {hour: 'numeric', minute: '2-digit'}) + ' ';
      const newValue = value.substring(0, cursorPosition - trigger.length) + time + value.substring(cursorPosition);
      activeElement.value = newValue;
      activeElement.selectionStart = activeElement.selectionEnd = cursorPosition - trigger.length + time.length;
    }
  }
});
