/**
 * when enter is clicked, prevent default form submit
 * @param e keyboard event
 */
export const preventDefaultFormSubmit = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
};
