import { useRef, useEffect } from 'react';

export function useCallbackCustom<T extends (...args: any[]) => any>(
  callback: T,
  dependencies: ReadonlyArray<unknown>
): T {
  const callbackRef = useRef<T>(callback);
  const dependenciesRef = useRef<ReadonlyArray<unknown>>([]);

  // Используйте useEffect для проверки изменения зависимостей
  useEffect(() => {
    // Допишите эту часть:
    // 1. Проверьте, изменились ли зависимости.
    // 2. Если изменились, обновите callbackRef и dependenciesRef.
    // Подсказка: Используйте `dependencies.some()` для проверки изменений.

  }, [callback, dependencies]);

  // Возвращайте актуальный callback
  return callbackRef.current;
}

