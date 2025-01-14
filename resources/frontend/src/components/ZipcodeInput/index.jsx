import { forwardRef, useEffect, useRef, useState } from 'react';

export default forwardRef(function ZipcodeInput({value = "", inputClass='', className = '', onChange, ...props }, ref) {
    const input = ref ? ref : useRef();

    const normalizeZipcode = (val) => {
        const normailzed = val.replace(/[^0-9]/g, "")
        return {
            part1: normailzed.slice(0,3) || "",
            part2: normailzed.slice(3,7) || "",
        }
    }
    const part2Ref = useRef(null)

    const [zipcode, setZipcode] = useState("")

    useEffect(() => {
        setZipcode(() => normalizeZipcode(value))
    }, [value])


    const handleInputChange = (e, part) => {
        const inputValue = e.target.value;
        if (
            (part === "part1" && inputValue.length > 3) ||
            (part === "part2" && inputValue.length > 4)
        ) {
            return;
        }

        setZipcode((prev) => {
            const updatedPostcode = { ...prev, [part]: inputValue };

            if (onChange) {
                onChange(`${updatedPostcode.part1}-${updatedPostcode.part2}`);
            }

            // Automatically move focus to part2 if part1 reaches 3 characters
            if (part === "part1" && inputValue.length === 3) {
                part2Ref.current.focus();
            }

            return updatedPostcode;
        });
    };

    const handleKeyDown = (e) => {
        const allowedKeys = [
            "Backspace",
            "ArrowLeft",
            "ArrowRight",
            "Tab",
            "Delete",
        ];
        if (
            !/^[0-9]$/.test(e.key) && // Allow numeric keys
            !allowedKeys.includes(e.key) // Allow navigation keys
        ) {
            e.preventDefault();
        }
    };

    const handlePaste = (e) => {
        const pastedData = e.clipboardData.getData("text");
        if (!/^\d+$/.test(pastedData)) {
            e.preventDefault();
        }
    };

    return (
        <div className="zipcode flex gap-2 items-center" ref={input}>
            <input
                type="text"
                className={"shop-select w-70"}
                value={zipcode.part1}
                onChange={(e) => handleInputChange(e, "part1")}
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
                maxLength={3}
            />
            <span>–</span>
            <input
                type="text"
                className={"shop-select w-100"}
                value={zipcode.part2}
                onChange={(e) => handleInputChange(e, "part2")}
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
                maxLength={4}
                ref={part2Ref}
            />
        </div>
    );
});
