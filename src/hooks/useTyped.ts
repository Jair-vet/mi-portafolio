import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface UseTypedOptions {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
}

export const useTyped = (elementId: string, options: UseTypedOptions): void => {
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    typedRef.current = new Typed(`#${elementId}`, {
      ...options,
      typeSpeed: options.typeSpeed ?? 100,
      backSpeed: options.backSpeed ?? 100,
      backDelay: options.backDelay ?? 999,
      loop: options.loop ?? true,
    });

    return () => {
      typedRef.current?.destroy();
    };
  }, [elementId]);
};
