import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function PhoneInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    const handleKeyDown = (e) => {
        if (
            (e.key >= "0" && e.key <= "9") || // Allow numbers
            e.key === "-" || // Allow hyphen
            e.key === "Backspace" || // Allow backspace
            e.key === "ArrowLeft" || // Allow arrow keys for navigation
            e.key === "ArrowRight" || // Allow arrow keys for navigation
            e.key === "Delete" || // Allow delete key
            e.key === "Tab" // Allow tab key for tabbing between fields
        ) {
            // Allow the keypress
            return true;
        } else {
            // Prevent the default action for invalid keypresses
            e.preventDefault();
        }
    };


    return (
        <input
            {...props}
            type={type}
            className={
                'border-gray-300 focus:border-sky-600 focus:ring-sky-600 rounded shadow-sm ' +
                className
            }
            ref={input}
            onKeyDown={handleKeyDown}
        />
    );
});
