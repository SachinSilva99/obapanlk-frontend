import './Nav.css';
interface Props{
    logo: string;
    listItems: string[];
}
const Nav = (props: Props) => {
    
    return (
        <div className="nav-outer">
            <div className="logo-outer">
                <h1 className="logo">{props.logo}</h1>
            </div>
            <div className="nav">
                {props.listItems.map((item) => (
                    <li key={item}>
                        <a className='navlinks' href="#">{item.toUpperCase()}</a>
                    </li>
                ))}
            </div>
        </div>
    );
};
export default Nav;
