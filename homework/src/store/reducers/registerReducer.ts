
const storedCheckString = localStorage.getItem('register');
const initialRegister = storedCheckString ? JSON.parse(storedCheckString) : [];
const reducerRegister = (state = initialRegister, action: { type: string, payload: any }) => {
    switch (action.type) {
        case "SUBMITFORM":
            const updatedRegister = [...state, action.payload];
            localStorage.setItem('register', JSON.stringify(updatedRegister));
            return updatedRegister;
        default:
            return state;
    }
};

export default reducerRegister;
