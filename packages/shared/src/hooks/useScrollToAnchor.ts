import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Хук для обработки прокрутки к якорю при загрузке страницы
export const useScrollToAnchor = (scrollOffset = 0, smoothScroll = true) => {
    const location = useLocation();
    const hasScrolledRef = useRef(false);

    useEffect(() => {
        // Сбрасываем флаг при смене страницы
        hasScrolledRef.current = false;
    }, [location.pathname]);

    useEffect(() => {
        // Если уже прокрутили, выходим
        if (hasScrolledRef.current) return;

        // Проверяем есть ли якорь в хэше
        const hash = location.hash;
        if (!hash) return;

        const anchorId = hash.substring(1); // убираем #
        if (!anchorId) return;

        // Ждем немного, чтобы DOM успел обновиться
        const timer = setTimeout(() => {
            const element = document.getElementById(anchorId);

            if (element) {
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - scrollOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: smoothScroll ? 'smooth' : 'auto'
                });

                hasScrolledRef.current = true;
            }
        }, 100); // Небольшая задержка для стабильности

        return () => clearTimeout(timer);
    }, [location, scrollOffset, smoothScroll]);
};