import { createSlice } from '@reduxjs/toolkit';

const globalStateSlice = createSlice({
    name: 'globalState',
    initialState: {
        modalState: false,
    },
    reducers: {
        openModal(state) {
            state.modalState = true;
        },
        closeModal(state) {
            state.modalState = false;
        },
    }
});

export const { openModal, closeModal } = globalStateSlice.actions;
export default globalStateSlice.reducer;
