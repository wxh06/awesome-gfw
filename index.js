const languages = ['en', 'en-US', 'zh', 'zh-CN'];

if (window.navigator.languages) {
  window.navigator.languages.some((l) => {
    if (languages.includes(l)) {
      window.location.replace(`${l}/`);
      return true;
    }
  });
}
