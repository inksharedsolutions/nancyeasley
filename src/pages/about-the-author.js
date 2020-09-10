import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.png'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
		 		<Nav 
                    pathExt={props.path}/>

                <Banner 
                    spanFirst={`About The`} 
                    contextHeading={`Author`}/>
                
		 		<div className="container">
				    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                  “All Flesh Will Die One Day And Leave This World We Now Live In. But The Soul Will Live On. There Is A Choice Individual Have To Make--Who Will Be Your Choice The World Or The Kingdom Of God”.
                                </h4>
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                 Kendell Easley served on the faculty of three
                                 institutions of Christian higher education,
                                 teaching mainly in the area of New Testament
                                 studies and New Testament Greek. He was people
                                 focused and mentored many students and pastors over
                                 a good cup of coffee. This book represents the culmination
                                 of his thinking and experience of a formative approach in
                                 growing in godliness. Kendell finished this project in the
                                 last days of his struggle with leukemia. Nancy, his wife,
                                 observed the authenticy of his godly heart and walk during
                                 this season. She welcomes your comments on how this work
                                 encourages your lifelong walk with God.
                            </p>


                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Kendell Easley</span>
                                </span>
                            </p>
                            
                        </article>
                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;