import Img1 from '../assests/img1.png'
import '../styles/services.css'
import Webdevimg from '../assests/webdevelopment.png' 
import Img3 from '../assests/2.png'
import Erpimg from '../assests/erp.png' 
import Dataserverimg from '../assests/dataserver.png'
import Img9 from '../assests/webimg1.png'
import Img10 from '../assests/webimg2.png'
import Img11 from '../assests/webimg3.png'
import Img12 from '../assests/erp-img1.png' 
import Img13 from '../assests/erp-img2.png'
import Img14 from '../assests/erp-img3.png'
import Img19 from '../assests/linkedin.png'
import Img20 from '../assests/facebook.png'
import Img21 from '../assests/whatsapp.png'
import Img22 from '../assests/insta.webp'
import data  from '../datafiles/serviceimg.json'  
import Datascr  from '../assests/datascr.png'
import Emailbst  from '../assests/emailbst.png'
import Whatappbst  from '../assests/whatappbst.png'
export default function Services(){
    console.log(data);
    return( 
       
        <>
        <div className=" services">
            <div className='bg-change'>
            <div className='row  pad title'>
                <div className='col-md-6 overalltitlesection'>
                    <h1 className='services-title'>Empowering Businesses Digitally</h1>
                    <p  className='services-description linehgt'>From captivating web development to targeted social media management, 
                        we provide the tools you need to succeed online. With seamless ERP integration, 
                        secure data servers, and strategic messaging services, we empower you to drive 
                        growth and connect with your audience effectively. Partner with us to unlock your business's full digital 
                        potential.</p>
                </div>
                <div className='col-md-6 center  img-fluid '>
                    <img src={Img1} className='servicesimage hideinmob' alt="services-image" />
                </div>
            </div>
            <div className='spt-overall  center pad '>
                <div className="spt">
                <div className='center'>
                    <img src={Webdevimg} className="spt-image" alt="..."/>
                </div>
                    <div className="spt-body">
                        <p className="spt-text">Web development</p>
                        <p className='hiddentext'>Craft impactful digital solutions.</p>
                    </div>
                </div>
                <div className="spt">
                    <div className='center'>
                    <img src={Img3} className="spt-image" alt="..."/>
                    </div>
                    <div className="spt-body">
                        <p className="spt-text">Social Media Management</p>
                        <p className='hiddentext'>Cultivate brand awareness, drive engagement.</p>
                    </div>
                </div>
                <div className="spt">
                    <div className='center'>
                        <img src={Erpimg} className="spt-image" alt="..."/>
                    </div>
                    <div className="spt-body">
                        <p className="spt-text">ERP</p>
                        <p className='hiddentext'>Optimize operations, empower strategic growth.</p>
                    </div>
                </div>
                <div className="spt">
                <div className='center'>
                    <img src={Dataserverimg} className="spt-image" alt="..."/>
                </div>
                    <div className="spt-body">
                        <p className="spt-text">Data Server</p>
                        <p className='hiddentext'>Secure data foundation, drive informed decisions.</p>
                    </div>
                </div>
                <div className="spt">
                <div className='center'>

                    <img src={Whatappbst} className="spt-image" alt="..."/>
                    </div>
                    <div className="spt-body">
                        <p className="spt-text">Whatsapp Marketing</p>
                        <p className='hiddentext'>Targeted outreach, strengthen connections.</p>
                    </div>
                </div>
                <div className="spt">
                <div className='center'>

                    <img src={Emailbst} className="spt-image center" alt="..."/>
                    </div>
                    <div className="spt-body">
                        <p className="spt-text">Email Marketing</p>
                        <p className='hiddentext'>Data-driven campaigns, maximize ROI.</p>
                    </div>
                </div>
                <div className="spt ">
                    <div className='center'>

                    <img src={Datascr} className="spt-image " alt="..."/>
                    </div>
                    <div className="spt-body" >
                        <p className="spt-text">Data Scrapping</p>
                        <p className='hiddentext'>Extract valuable insights, gain strategic edge.</p>
                    </div>
                </div>
            </div>
            </div>
            <div className='web-overall bg-change clr pad '>
                <div className='web'>
                <h2 className='btmsp '>WEB DEVELOPMENT</h2>
                <p className='linehgt'>Your website serves as the virtual storefront of your business.
                     Our expert team specializes in crafting visually stunning and 
                     user-friendly websites that captivate your audience and drive conversions. 
                    From sleek designs to seamless navigation, we ensure that every aspect of your website reflects your 
                    brand identity and resonates with your target market.</p>
                   
                </div>
                 <div className='cnt center'>
                    <div className='img-cnt'>
                        <img className='webimage' src={Img9} alt="" />
                    </div>
                    <div className='img-cnt'>
                        <img className='webimage' src={Img10} alt="" />
                    </div>
                    <div className='img-cnt'>
                        <img className='webimage' src={Img11} alt="img11" />
                    </div>
                    </div>
                    <div className='center'>

                    <button className='btn web-btn btn-primary '>VIEW MORE</button>
                    </div>
            </div>
            <div className='erp  pad '>
                <h2 className='btmsp'>Enterprise Resource Management</h2>
                <p className='linehgt'>Efficiently managing your business operations is crucial for sustained
                     growth and success. Our comprehensive ERP solutions integrate various 
                     functions, including accounting, human resources, inventory management,
                      and more, into a centralized system. With real-time insights and 
                      streamlined processes, you can enhance productivity, reduce costs,
                     and make informed decisions that propel your business forward.</p>
                     <div className='center cnt'>
                        <img src={Img12} className='erp-image' alt="" />
                        <img src={Img13} className='erp-image' alt="" />
                        <img src={Img14} className='erp-image' alt="" />
                     </div>
            </div>
            <div className='pad bg-change'>
                <div className='row '>
                    <div className='col-lg-6 white dt-cnt dtser'>
                        <h2>DATA SERVER</h2>
                        <p className='linehgt dt-des'>Data is the lifeblood of modern businesses, and safeguarding it is 
                            paramount. Our secure and reliable data servers provide a robust 
                            infrastructure for storing and accessing your valuable information.
                             Whether you're a small startup or a large enterprise, our scalable 
                             solutions ensure optimal performance and data protection, allowing you 
                            to focus on what matters most—growing your business.</p>
                    </div>
                    <div  className='col-lg-6 center animate'>
                        <img className='data-image animate' src={Dataserverimg} alt="" />
                    </div>
                </div>
            </div>
            <div className='pad soc-cmpt bg-change row'>
                
                <div className='soc-overall col-lg-6 white  spt-overall'  >
                  
                    
                    
                    <div className='soc-el1'>
                        <div className='soc-link-cnt center'>
                        <img className='soc-image' src={Img19} alt="" />
                        <p  className=' soc-text'>Linkedin</p>
                    </div>
                    <div className='soc-link-cnt center'>
                        <img className='soc-image' src={Img20} alt="" />
                        <p  className=' soc-text'>Facebook</p>
                    </div>
                    </div>
                    <div className='soc-el2'>
                    <div className='soc-link-cnt center'>
                        <img className='soc-image' src={Img21} alt="" />
                        <p  className=' soc-text'>Whatsapp</p>
                    </div>
                    <div className='soc-link-cnt center'>
                        <img className='soc-image' src={Img22} alt="" />
                        <p className=' soc-text'>Instagram</p>
                    </div>
                    </div>
                    
                </div>
                <div className='col-lg-6 white soc-des'>
                    <h2>Social Media     Management</h2>
                    <p className='linehgt'>In a world where social media reigns supreme, leveraging these
                         platforms effectively can significantly impact your brand's visibility 
                         and engagement. Our social media management services encompass 
                         strategic content creation, community engagement, and targeted 
                         advertising across popular platforms such as YouTube, LinkedIn, 
                         Facebook, and Instagram. We help you build meaningful connections
                          with your audience, 
                        foster brand loyalty, and drive measurable results.</p>
                </div>  
            </div>
            <div className='pad web dgi' >
                    <div>
                        <h2 className=''>Digital Marketing</h2>
                        <p className='linehgt '>
                        Reach your audience where they are with our comprehensive digital marketing 
                        solutions. From strategic WhatsApp campaigns to engaging email blasts and
                        insightful data scraping services, we've got you covered. Harness the power
                        of direct communication, targeted messaging, and actionable insights to drive
                            engagement, conversions, and business growth.
                        Let us help you make a meaningful impact in today's competitive landscape.
                        </p>
                    </div>
                    <div className='row dgi-overall'>
                        <div className='col-lg-4'>
                            <h3>  WhatsApp Blast</h3>
                            <img className='data-image' src={Whatappbst} alt="" />
                            <div className='center'>
                                <p className='linehgt dgi-cnt'>Engage with your audience directly and instantly through 
                                strategic WhatsApp campaigns. Our WhatsApp blast services 
                                enable you to deliver personalized messages, promotions, and updates 
                                to your customers, driving engagement and nurturing relationships. 
                               </p>
                            </div>
                            
                        </div>
                        <div className='col-lg-4'>
                            <h3> Email Blast</h3>
                            <img className='data-image' src={Emailbst} alt="" />
                            <div className='center'>
                            <p className='linehgt dgi-cnt'>Email marketing remains one of the most effective ways to 
                                connect with your audience and drive conversions. Our email
                                 blasting services leverage targeted campaigns, compelling content, 
                                 and advanced analytics to deliver results. </p>
                        </div>
                        </div>
                        <div className='col-lg-4'>
                            <h3>  Data Scraping</h3>
                            <img className='data-image' src={Datascr} alt="" />
                            <div className='center'>
                            <p className='linehgt dgi-cnt'>In today's data-driven world, access to actionable 
                                insights is key to gaining a competitive edge. 
                                Our data scraping services harness the power of technology to gather valuable
                                 information from various online sources. </p>
                        </div>
                        </div>
                    </div>
            </div>
           <div>
                
            </div>
            
            <div className='center bottom  regrand'>
                bottom padding sater irevar
            </div>
        </div>
        </>
    )
}