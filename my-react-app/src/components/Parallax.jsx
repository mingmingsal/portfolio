import { useState } from 'react'
import './Parallax.css'
import { projects } from './projects'


const Parallax = () => {
    const [scrollLeft, setScrollLeft] = useState(0);
    console.log(scrollLeft);
    const getScrollPosition = (e) => {
        setScrollLeft(100 * e.target.scrollLeft / (e.target.scrollWidth - e.target.clientWidth)
        )
    };

    return (
        <div >
            <ul className='image-track' onScroll={getScrollPosition}>

                {
                    projects.map((project) => {
                        return <ParallaxImage key={project.id} imageUrl={project.image} />
                        
                    })
                }
            </ul>

        </div>
    )
    function ParallaxImage({ imageUrl }) {
        return (
            <li>
                <img className='parallax-image' src={imageUrl} style={{objectPosition:`${scrollLeft}% 50%`}}/>
            </li>
        )
    
    }
}

export default Parallax