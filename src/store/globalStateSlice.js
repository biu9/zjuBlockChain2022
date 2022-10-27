import { createSlice } from '@reduxjs/toolkit';

const globalStateSlice = createSlice({
    name: 'globalState',
    initialState: {
        modalState: false,
        ifAgree: null,
    },
    reducers: {
        openModal(state) {
            state.modalState = true;
        },
        closeModal(state) {
            state.modalState = false;
        },
        agree(state) {
            state.ifAgree = true;
        },
        disagree(state) {
            state.ifAgree = false;
        },
        resetAgree(state) {
            state.ifAgree = null;
        }
    }
});

export const { 
    openModal, closeModal,
    agree, disagree, resetAgree
 } = globalStateSlice.actions;
export default globalStateSlice.reducer;
