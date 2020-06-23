const languages = [['en-US', 'zh-CN'], ['en', 'zh']];

if (window.navigator.languages) {
  languages.some((al) => {
    return window.navigator.languages.some((l) => {
      if (al.includes(l)) {
        window.location.replace(`${l}/`);
        return true;
      }
      return false;
    });
  });
}
