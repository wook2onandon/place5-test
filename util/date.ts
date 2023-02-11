import { format, register } from 'timeago.js';
import koLocale from 'timeago.js/lib/lang/ko';

//한글버전 사용위해 import
register('ko', koLocale);

//time을 ~전으로 바꿔주는 method
export function formatAgo(date: Date, lang = 'ko') {
  return format(date, lang);
}
