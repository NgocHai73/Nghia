import React, { useRef, useState } from 'react'
import MetaData from './Metadata';
import "./Support.css";
import emailjs from "@emailjs/browser";
import BottomTab from './BottomTab.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Support = ({history}) => {

    const [done, setDone] = useState(false);

    const formRef = useRef(null)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_kx8pt2j', 'template_a4v79h9', formRef.current, 'ZHF3BNAIiknsW8CgR')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

    }

    return (
       <>
       <MetaData title="Hỗ trợ"/>
       <div 
       className='support'
       style={{
           width:"100%",
           justifyContent:"center",
           alignItems:"center",
           padding:'50px 0'
       }}>
           <h2 className='support__heading' style={{
               textAlign:"center"
           }}>Xin chào</h2>
           <h2  className='support__heading' style={{
               textAlign:"center"
           }}>Báo cáo cho chúng tôi về vấn đề của bạn...</h2>
           <div>
               <form style={{
                   width:"400px",
                   margin:"auto",
                   padding:"20px 0"
               }} ref={formRef}
               onSubmit={handleSubmit}
               >
                   <input type="text" placeholder='Tên của bạn ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }} 
                   name='user__name'
                   />
                    <input type="text" placeholder='Chủ đề ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}
                   name='user__subject'
                   />
                   <input type="email" placeholder='Email của bạn ...' required style={{
                       border:"none",
                       outline:"none",
                       width:"100%",
                       borderBottom:"1px solid #3BB77E",
                       margin:"10px 0",
                       fontSize:"1.2vmax",
                       height:"40px"
                   }}/>
                   <textarea cols="30" rows="5" required placeholder='Lời nhắn ...'
                   style={{
                    border:"none",
                    outline:"none",
                    width:"100%",
                    borderBottom:"1px solid #3BB77E",
                    margin:"10px 0",
                    fontSize:"1.2vmax",
                }}
                name='user__message'
                   ></textarea>
                   <button 
                   style={{
                       border:"none",
                       cursor:"pointer",
                       width:"100%",
                       background:"#3BB77E",
                       height:"40px",
                       margin:"10px 0",
                       color:"#fff",
                       fontSize:"1.2vmax"
                   }}
                   >Gửi</button>
                   {done && toast.success("Cảm ơn báo cáo của bạn, chúng tôi sẽ phản hồi trong thời gian sớm nhất...")}
               </form>
               <div className='animation'>

               </div>
           </div>
       </div>
       <ToastContainer 
       position="bottom-center"
       autoClose={5000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover
       />
       <div className="bottomTab">
            <BottomTab />
          </div>
       </>
    )
}

export default Support
