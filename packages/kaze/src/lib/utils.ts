export function debounce(func: (...args: any[]) => void, delay: number) {
  let timer: number;

  return (...args: any[]) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      func(...args);
    }, delay);
  };
}
