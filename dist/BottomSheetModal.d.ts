import React from "react";
interface BottomSheetModalProps {
    modalVisible: boolean;
    onClose: (show: boolean) => void;
    children: React.ReactNode;
}
declare const BottomSheetModal: React.FC<BottomSheetModalProps>;
export default BottomSheetModal;
