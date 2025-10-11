export const debounce = (func: (...args: any[]) => void, delay: number): VoidFunction => {
  let timer: number;

  return (...args: any[]) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      func(...args);
    }, delay);
  };
};
