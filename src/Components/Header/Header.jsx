import headerMenuButton from './clarity_menu-line.svg';
import headerFindButton from './HdrRghtFind.svg';
import Ava from './UsersLogoHdr.svg'
import Like from './LokeLogoHdr.svg'
import Basket from './BasketLogoHdr.svg'
import './Header.scss';

function Header(){

    return(
        <header className="Header">
        <div className='Header_left'>
            <img src={headerMenuButton}></img>
        </div>


        <div className='Header_right'>
            <img src={headerFindButton} width={36} height={36}/>
            <input></input>
            <img src={Ava} width={35} height={35}></img>
            <img src={Like} width={35} height={35}></img>
            <img src={Basket} width={35} height={35}></img>
        </div>
        </header>
    );
}

export default Header