import Buttons from '../../Components/Button/button'
import './hero.scss'


export default function Hero() {
    return (
        <div className='hero-container' aria-label='New Arrival - Hero'>
            <div className='hero-text'>
                <span>New Arrival</span>
                <h1>Discover Our New Collection</h1>
                <p>
                    Explore Furniro's latest collection, where elegance meets innovation.
                    Elevate your space with our brand-new, stylish furniture pieces.
                    Redefine your home with the latest trends and timeless classics.
                    Shop now!
                </p>
                <Buttons variant='quaternary' text='Buy Now' onClick={() => console.log('Button Clicked')} />
            </div>
        </div>
    )
}