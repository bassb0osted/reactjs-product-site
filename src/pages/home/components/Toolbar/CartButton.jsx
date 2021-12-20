import './styles.css';

export default function CartButton() {

    return(
        <div className='cart-button-container'>
            <p>520$</p>
            <span></span>

            <div style={{display: 'flex', alignItems:'center'}}>

                <svg className="cartIco" width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.71374 25.9355C11.0385 25.9355 12.1124 24.8163 12.1124 23.4355C12.1124 22.0548 11.0385 20.9355 9.71374 20.9355C8.38901 20.9355 7.31509 22.0548 7.31509 23.4355C7.31509 24.8163 8.38901 25.9355 9.71374 25.9355Z" stroke="#558881" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21.2273 25.9355C22.552 25.9355 23.6259 24.8163 23.6259 23.4355C23.6259 22.0548 22.552 20.9355 21.2273 20.9355C19.9025 20.9355 18.8286 22.0548 18.8286 23.4355C18.8286 24.8163 19.9025 25.9355 21.2273 25.9355Z" stroke="#558881" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.65003 6.60201H25.5448L23.7131 16.1104C23.6134 16.6322 23.3404 17.1009 22.9417 17.4345C22.5431 17.7681 22.0442 17.9453 21.5326 17.9351H10.0081C9.47573 17.9398 8.96006 17.7418 8.55838 17.3786C8.15669 17.0153 7.89674 16.5119 7.82754 15.9631L6.1703 2.90744C6.10157 2.36259 5.84476 1.86224 5.44765 1.4995C5.05054 1.13675 4.54017 0.936318 4.01151 0.935486H1.55835" stroke="#558881" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <p style={{margin: '0 5px'}}>3</p>
            </div>
        </div>
    );

}