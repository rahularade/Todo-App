interface CheckboxProps{
    checked: boolean;
    onChange?: () => void
}

function Checkbox({checked, onChange}: CheckboxProps) {
    return (
        <input
            type="checkbox"
            className="appearance-none min-w-[18px] h-[18px] bg-transparent border-2 border-heading rounded-xs cursor-pointer flex justify-center pt-px after:content-[''] after:w-1.5 after:h-3 after:border-2 after:border-foreground after:border-t-0 after:border-l-0  after:rotate-45 checked:after:block after:hidden  checked:bg-heading checked:border-0"
            onChange={onChange}
            checked={checked}
        />
    );
}

export default Checkbox;
