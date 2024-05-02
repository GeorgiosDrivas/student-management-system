import { useEffect, useRef } from 'react';

export default function useFocus() {
    const inputRef = useRef(null);

    useEffect(function () {
        inputRef.current.focus();
    }, []);

    return inputRef;
}