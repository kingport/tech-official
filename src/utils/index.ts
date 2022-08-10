// 获取language
export const getLanguage = () => {
  return localStorage.getItem('lang') || 'en';
}
