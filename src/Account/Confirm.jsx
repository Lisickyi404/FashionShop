
import { useSelector,useDispatch } from 'react-redux';
import {accountSlice} from '../redux/account';

function Confirm(){
    const booking=useSelector(state=>state.account.accountsData)
    console.log(booking)
    return(
        <div className="Confirm">
            <h3>Подтверждение заказа</h3>
            <div className="one">
                <p>оплата</p>
                <h3>{123}</h3>
            </div>
            <div className="one">
                <p>Доставка</p>
                <h3>{123}</h3>
            </div>
            <div className="one">
                <p>Доставка</p>
                <h3>{123}</h3>
            </div>
            <div className="one">
                <p>Адрес</p>
                <h3>{123}</h3>
            </div>
        </div>
    )
}

export default Confirm;