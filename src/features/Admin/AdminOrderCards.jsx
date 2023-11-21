import axios from '../../config/axios';
import Modal from '../../components/Modal';
import ShowOrderImg from './ShowOrderImg';
import { useState } from 'react';
import Swal from 'sweetalert2'


export default function AdminOrderCards({ allOrder }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleUpdateOrder = async () => {
        try {
            const response = await axios.patch(`/product/updateorder/${allOrder.id}`);
            if (response.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Order Accepted",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleCancelOrder = async () => {
        try {
            const response = await axios.delete(`/product/cancelorder/${allOrder.id}`);
            if (response.status === 200) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Order Cancel",
                    showConfirmButton: false,
                    timer: 1500
                });
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleImageClick = () => {
        setIsOpen(true);
    };

    const formatDateString = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric',
        });
    };

    return (
        <tr className="border text-center items-center">
            <td>{allOrder.id}</td>
            <td>{formatDateString(allOrder.createAt)}</td>
            <td>{formatDateString(allOrder.updateAt)}</td>
            <td
                className="flex flex-col items-center pt-4 hover"
                onClick={handleImageClick}
                style={{ cursor: 'pointer' }}
            >
                {allOrder.paymentsubmission && (
                    <img src={allOrder.paymentsubmission} className="w-14 h-14" alt="Order Submission" />
                )}
            </td>
            <td>{allOrder.orderstatus}</td>
            <td>{allOrder.userId}</td>
            <td className="flex gap-3 justify-center items-center h-28">
                {allOrder.orderstatus !== 'ACCEPTED' && (
                    <>
                        <button
                            className="bg-green-700 text-sm text-white rounded-2xl p-1 text-center hover:bg-green-500"
                            onClick={handleUpdateOrder}
                        >
                            Approve
                        </button>
                        <button
                            className="bg-red-700 text-sm text-white rounded-2xl p-1 text-center hover:bg-red-500"
                            onClick={handleCancelOrder}
                        >
                            Cancel
                        </button>
                    </>
                )}
            </td>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                {allOrder.paymentsubmission && <ShowOrderImg allOrder={allOrder} />}
            </Modal>
        </tr>
    );
}
