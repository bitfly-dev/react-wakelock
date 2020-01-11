import WakeLockAndroid from './android';
import WakeLockIOS from './ios';

// http://stackoverflow.com/a/9039885
const oldIOS = typeof navigator !== 'undefined' && parseFloat(
  ('' + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1])
    .replace('undefined', '3_2').replace('_', '.').replace('_', '')
) < 10 && !window.MSStream

export default (oldIOS ? WakeLockIOS : WakeLockAndroid);


if (console.warn) {
  console.warn("Warning: <WakeLock> will abort any HTTP requests every 15" +
    " seconds on iOS - see https://github.com/jampy/react-wakelock/issues/1");
}