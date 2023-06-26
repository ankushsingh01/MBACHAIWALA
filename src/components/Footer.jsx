import React from 'react'


const Footer = () => {

  const linkbacktonormal = ()=>{
    const allfooterlink = document.querySelectorAll(".footerLinks");
    allfooterlink.forEach((item)=>item.style.opacity=1)

  }

  const footerLink =(element)=>{

    const allfooterlink = document.querySelectorAll(".footerLinks");

    switch(element){
      case 0:
        allfooterlink.forEach((item,index)=>index===0 ? (item.style.opacity=1):(item.style.opacity=0.2))
        break;
      case 1:
        allfooterlink.forEach((item,index)=>index===1 ? (item.style.opacity=1):(item.style.opacity=0.2))
        break;
      case 2:
        allfooterlink.forEach((item,index)=>index===2 ? (item.style.opacity=1):(item.style.opacity=0.2))
        break;
      case 3:
        allfooterlink.forEach((item,index)=>index===3 ? (item.style.opacity=1):(item.style.opacity=0.2))
        break;
      case 4:
        allfooterlink.forEach((item,index)=>index===4 ? (item.style.opacity=1):(item.style.opacity=0.2))
        break;
      case 5:
        allfooterlink.forEach((item,index)=>index===5 ? (item.style.opacity=1):(item.style.opacity=0.2))
        break;

        default:
          allfooterlink.forEach((item)=>item.style.opacity=1)
        break;
    }
  }

  return (
    <>
        <footer>
            <h1>let's
            <br/>
            #connectoncutting
            </h1>
            <aside onMouseLeave={linkbacktonormal}>
                < a href='/' className='footerLinks' onMouseOver={()=>footerLink(0)}>Home</a>
                < a href='/story' className='footerLinks'onMouseOver={()=>footerLink(1)}>Story</a>
                < a href='/media' className='footerLinks'onMouseOver={()=>footerLink(2)}>Media</a>
                < a href='/franchise' className='footerLinks'onMouseOver={()=>footerLink(3)}>Franchise</a>
                < a href='/events' className='footerLinks'onMouseOver={()=>footerLink(4)}>Events</a>
                < a href='/chaiwalacares' className='footerLinks'onMouseOver={()=>footerLink(5)}>Chaiwalacares</a>

            </aside>
            <div>
                <h5>Phone</h5>
                <a href='tel: +9999999999'>+9999999999</a>
            </div>
            <div>
                <h5>Email</h5>
                <a href='mailto: info@chaiwala.com'>info@chaiwala.com</a>
                <a href='mailto: franchisembachaiwal@gmail.com'>franchisembachaiwal@gmail.com</a>
                <p>© COPYRIGHT 2023 MBA CHAIWALA. </p>
            </div>
            
        </footer>
        <div className='footer'></div>
    </>
  )
}

export default Footer