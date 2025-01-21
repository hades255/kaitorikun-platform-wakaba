import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { forwardRef, useEffect, useRef, useState } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div>
            <input
                {...props}
                type={type == 'password' ? (showPassword ? 'text' : 'password') : 'text'}
                className={
                    'border-gray-300 focus:border-sky-600 focus:ring-sky-600 rounded shadow-sm ' +
                    className
                }
                ref={input}
            />
            {type == 'password' && (
                showPassword ?
                    <VisibilityOff
                        onClick={togglePasswordVisibility}
                        style={{
                            marginLeft: '-27px',
                            cursor: 'pointer',
                        }}
                    />
                    :
                    <Visibility
                        onClick={togglePasswordVisibility}
                        style={{
                            marginLeft: '-27px',
                            cursor: 'pointer',
                        }}
                    />
            )}
        </div>
    );
});
