import {useNavigate} from 'react-router-dom'

// This is called named export
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
            {/*<button onClick={() => navigate('order-summary', {replace: true})}>Place Order</button>  // This optional second parameter ({replace: true}) provides to go to the page which is open before this page(home). It kinda replaces the history*/}
        </div>
    );
}

// We could have exported some other named exported components here in the same module/file as shown below.
// However, we can only export one default per module/file as in App.js. We didn't use default export in this module
