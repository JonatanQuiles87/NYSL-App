import {useNavigate} from "react-router-dom";

export const OrderPageTemp = () => {
    const navigate = useNavigate();
    return (
        <>
            <p>Order Confırmed!</p>
            <button onClick={() => navigate(-1)}>Go back</button>
        </>
    );
};