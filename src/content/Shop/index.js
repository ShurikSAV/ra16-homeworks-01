import ShopItemFunc from '../../components/ShopItemFunc';
import './css/main.css'


const Shop = ({item}) => {
    return (
        <div className="container">
            <div className="background-element"></div>
            <div className="highlight-window">
                <div className='highlight-overlay'></div>
            </div>
            <div className="window">
                <ShopItemFunc item={item} />
            </div>
        </div>
    )
}

export default Shop;