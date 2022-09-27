export const loadState = () => {
    try {
        const savedState = localStorage.getItem('todos');

        if (savedState === null) {
            return undefined;
        }

        return JSON.parse(savedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        //difficult task
        const stateTodosToBeSaved = JSON.stringify(state);

        localStorage.setItem('todos', stateTodosToBeSaved);
    } catch (err) {
        console.error(err);
    }
};
