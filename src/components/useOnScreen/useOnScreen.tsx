import { useEffect, useRef, useState } from "react";

export default function useOnScreen<T extends HTMLElement>(rootMargin = "200px"): [React.RefObject<T>, boolean] {
    const ref = useRef<T>(null);
    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { rootMargin }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return [ref, isVisible];
}