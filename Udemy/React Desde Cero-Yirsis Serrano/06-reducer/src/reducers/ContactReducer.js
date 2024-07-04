export const ContactReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            const newState = state.filter(contact => contact.id !== action.payload.id);
            return newState;
        case "modify":
            return state.map(contact => {
                if (contact.id === action.payload.id) {
                    return { ...contact, ...action.payload.updatedContact };
                }
                return contact;
            });
        default:
            return state;
    }
}
