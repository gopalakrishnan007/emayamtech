import Serviceimg from '../components/Serviceimg'
import data from '../datafiles/serviceimg.json'
export default function com(){
    return(
        <>
<div>
{
    data.map((element)=>(

        <Serviceimg title = {element.title} key={element.id}  img ={element.img} altimg ={element.altimg} description={element.description}/>
    ))
}
</div>

<div className='pad bg-change'>
                <div className='row '>
                <div  className='col-lg-6 center'>
                        {/* <img className='data-image' src={Img18} alt="" /> */}
                    </div>
                    <div className='col-lg-6 '>
                        <h2>WhatsApp Blast</h2>
                        <p>Engage with your audience directly and instantly through strategic
                             WhatsApp campaigns. Our WhatsApp blast services enable you to deliver
                              personalized messages, promotions, and updates to your customers, driving 
                              engagement and nurturing relationships. </p>
                    </div>
                    
                </div>
            </div>
            <div  className='pad bg-change'>
                <div className='row white'>
                    <div className='col-lg-6 '>
                        <h2>Data Scraping</h2>
                        <p>In today's data-driven world, access to actionable insights is
                             key to gaining a competitive edge. Our data scraping services
                              harness the power of technology to gather valuable information 
                              from various online sources. Whether you're conducting market 
                              research, competitor analysis, or lead generation, we help you extract, analyze, and
                             leverage data to make informed decisions and drive business growth.</p>
                    </div>
                    <div  className='col-lg-6 center'>
                        {/* <img className='data-image' src={Img17} alt="" /> */}
                    </div>
                </div>
            </div>
            <div>
                <div className='row  bg-change pad'>
                <div  className='col-lg-6 center'>
                        {/* <img className='data-image' src={Img16} alt="" /> */}
                    </div>
                    <div className='col-lg-6 '>
                        <h2>Email Blasting</h2> 
                        <p>Email marketing remains one of the most effective ways to
                            connect with your audience and drive conversions. Our email
                            blasting services leverage targeted campaigns, compelling     , 
                            and advanced analytics to deliver results. From building subscriber
                            lists to crafting engaging newsletters, we help you maximize 
                            the reach and impact of your email marketing efforts.</p>
                    </div>
                    
                </div>
            </div>
</>




    )
}


