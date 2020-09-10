import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/Book_Cover.png'
import Book2 from '../../static/books/Book_Cover_02.png'


const ATB = (props)=>{

    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'kendell-easley',
	  config: { identifier:  12, slug}
    }
      

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                spanFirst={`About The`}
                contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Feasting With The Trinity`,
                                    spanFirst:`A Formative Approach to Growing in Godliness`,
                                    imgSrc: Book1,
                                    id:'',
                                    content:
                                    `
                                        <p>
                                          Have you been bewildered by all the diverse
                                          options proposed as “the way” to Christlikeness?
                                          If so, you are not alone. Feasting with the Trinity
                                          sketches the way forward, based on two biblical observations.
                                          Kendell Easley presents feasting with the Trinity as a grand metaphor
                                          for living and enjoying the Christian life.
                                        </p> 

                                        <p>
                                          Formation in godliness
                                          can well be understood as responding to God’s invitation to feast with Father,
                                          Son, and Spirit. We also dine with others belonging to the people of God.
                                          As we partake of what God sets on his table, feasting with him and with others,
                                          we are formed over a lifetime into Christlike persons.
                                        </p>
                                    `,

                                    ebooks:{
                                        stratton:'https://www.stratton-press.com/books/feasting-with-the-trinity-a-formative-approach-to-growing-in-godliness/',
                                        barnes:'https://www.barnesandnoble.com/w/feasting-with-the-trinity-kendell-easley/1132646852?ean=9781643456300',
                                        amazon:'https://www.amazon.com/Feasting-Trinity-Formative-Approach-Godliness-ebook/dp/B07VNBBF5Z/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1598904480&sr=1-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Feasting-Trinity-Formative-Approach-Godliness/dp/1643456296/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1598904480&sr=1-1',
                                        barnes:'https://www.barnesandnoble.com/w/feasting-with-the-trinity-kendell-easley/1132646852?ean=9781643456294',
                                        booksamillion:'https://www.booksamillion.com/p/Feasting-Trinity/Kendell-Easley/9781643456294?id=7714171848832',
                                    }
                                }} 
                            />

                             <BookInfo
                                data={{
                                    title:`Jonathan's New Day`,
                                    spanFirst:``,
                                    imgSrc: Book2,
                                    id:'',
                                    content:
                                    `
                                        <p>
                                          The scene is Isreal in the time of Christ;
                                          the hero, a young boy whose life intersects
                                          with the Jewish carpenter. This is a classic
                                          adventure tale of daring rescues, run-ins with
                                          Roman soldiers, revenge by night, and unlooked-for miracles.
                                          Life will never be same for one boy, his family, his city, and,
                                          ultimately, the whole world. In the spirit of the Newberry-winner,
                                          The Bronze Bow, this coming of age trilogy that breathes new life
                                          into the greatest story ever told.
                                        </p> 

                                        <p>
                                          As a young professor of New Testament,
                                          Ken Easley began telling snippets of these
                                          stories aloud at bedtime for his eight year old son.
                                          Many years later (and shortly before his death) he put
                                          them to paper, crafting the sweeping tale of Jonathan Bar Matthias.
                                        </p>
                                    `,

                                    ebooks:{
                                        stratton:'https://www.stratton-press.com/books/jonathans-new-day/',
                                        barnes:'https://www.barnesandnoble.com/w/jonathans-new-day-kendell-easley/1136287283?ean=9781643458540',
                                        amazon:'https://www.amazon.com/Jonathans-New-Day-Kendell-Easley-ebook/dp/B084D57BG4/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1598910854&sr=1-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Jonathans-New-Day-Kendell-Easley/dp/1643458531/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1598910854&sr=1-1',
                                        barnes:'https://www.barnesandnoble.com/w/jonathans-new-day-kendell-easley/1136287283?ean=9781643458533',
                                        booksamillion:'https://www.booksamillion.com/p/Jonathans-New-Day/Kendell-Easley/9781643458533?id=7714171848832',
                                    }
                                }} 
                            />

                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;