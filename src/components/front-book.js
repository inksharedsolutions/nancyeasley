import React from 'react'
import {Link} from 'gatsby'
import FrontBook from '../../static/books/Book_Cover.png'
import Accordions from '../containers/accordions'

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook}/>
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p>
                                  Have you been bewildered by all the diverse
                                  options proposed as “the way” to Christlikeness?
                                  If so, you are not alone. Feasting with the Trinity
                                  sketches the way forward, based on two biblical observations.
                                  Kendell Easley presents feasting with the Trinity as a grand
                                  metaphor for living and enjoying the Christian life. 
                            </p>

                            <button className="btn-book-featured">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook