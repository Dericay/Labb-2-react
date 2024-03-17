const handleKeyPress = (event, setIsVisible) => {
    if (event.key.toLowerCase() === 'e') {
        setIsVisible(true);
    }
};

export default handleKeyPress;
