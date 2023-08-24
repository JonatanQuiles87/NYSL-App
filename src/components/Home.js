import {useNavigate} from 'react-router-dom'

export const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>Upcoming Events</h2>
            <dl>
                <dt>August 4</dt>
                <dd>NYSL Fundraiser</dd>
                <dt>August 16</dt>
                <dd>Season Kick-off: Meet the Teams</dd>
                <dt>September 1</dt>
                <dd>First Game of the Season (Check Game Schedule for details)</dd>
            </dl>
            <button onClick={() => navigate('order-summary')}>Place Order</button>
        </div>
    );
}
