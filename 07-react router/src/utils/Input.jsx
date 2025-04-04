export const Input = ({ onChange}) => {
    const handleInputChange = (event) => {
        onChange(event.target.value); // Llama a la función pasada desde el padre con el valor del input
    };

    return (
        <input
            type="text"
            placeholder="Escribe algo..."
            onChange={handleInputChange}
        />
    );
};