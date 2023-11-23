export const API = 'http://localhost:8080/api/';
export const socket = 'http://localhost:3000/';

export const environment = {
  production: true,
  localization: {
    languages: [
        { code: 'en', name: 'EN', culture: 'en-EN' },
        { code: 'ja', name: 'JP', culture: 'ja-JP' },
        { code: 'vn', name: 'VN', culture: 'vn-VN' }
    ],
    defaultLanguage: 'en'
  }
};