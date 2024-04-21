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
        <div className='parralaxContainer'>
            <ul className='image-track' onScroll={getScrollPosition}>

                {
                    projects.map((project) => {
                        return <ParallaxImage key={project.id} imageUrl={project.image} projectTitle={project.name} projectDescription={project.description} />

                    })
                }
            </ul>

        </div>
    )
    function ParallaxImage({ imageUrl, projectTitle, projectDescription }) {
        const [isShown, setIsShown] = useState(false);
        return (
            <li>
                <figure onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                    <img className='parallax-image' src={imageUrl} style={{ objectPosition: `${scrollLeft}% 50%` }} />
                    <div className={`shadow ${isShown ? 'showVis': 'showHide'}`}>
                        <figcaption className='title'>{projectTitle}</figcaption>
                        <figcaption className='description'>{projectDescription}</figcaption>
                    </div>

                </figure>

            </li>
        )

    }

}

export default Parallax