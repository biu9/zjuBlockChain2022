import { Modal } from "@material-ui/core";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { closeModal } from "../../store/globalStateSlice";


// 点击submit后创建新合约
// 新合约对应一次投票
// 使用localStroage储存合约地址
// 通过合约地址获取合约信息
export default function UploadModal() {
    const [proposalTitle, setProposalTitle] = useState("");
    const [proposalDescription, setProposalDescription] = useState("");
    const dispatch = useDispatch();
    const ifOpen = useSelector(state => state.globalState.modalState);
    return (
        <Modal open={ifOpen}>
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-xl w-96 top-10 p-10 flex flex-col space-y-3 font-mono outline-none ">
                <div className="font-bold text-xl">initiate your proposal</div>
                <div className="font-semibold">proposal title</div>
                <input 
                value={proposalTitle}
                onChange={(e) => setProposalTitle(e.target.value)}
                type="text" className="border-2 border-gray-300 rounded-lg p-2" />
                <div className="font-semibold">proposal content</div>
                <textarea 
                value={proposalDescription}
                onChange={(e) => setProposalDescription(e.target.value)}
                className="border-2 border-gray-300 rounded-lg p-2" />
                <div className="flex space-x-6 justify-between">
                    <div 
                    onClick={() => {
                        dispatch(closeModal());
                    }}
                    className="bg-black text-white rounded-lg py-3 px-6 cursor-pointer w-full text-center">cancel</div>
                    <div 
                    onClick={() => {
                        dispatch(closeModal());
                    }}
                    className="bg-black text-white rounded-lg py-3 px-6 cursor-pointer w-full text-center">submit</div>
                </div>
            </div>
        </Modal>
    )
}