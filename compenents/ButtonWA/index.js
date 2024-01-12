"use client"

import React from "react";
import { WhatsappShareButton } from "react-share";

function ButtonWA({blogs}) {
    const onSubmit = (e) => {
        const mobileNumber = "+62 81386361269"
    
        // Regex expression to remove all characters which are NOT alphanumeric 
        // let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");
    
        let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");
    
        // Appending the phone number to the URL
        let url = `https://wa.me/${number}`;
    
        let line1="Saya tertarik ingin lihat lahan Sugito dan bertemu tim Kitani."
        let title="Nama: "
        let title1="Tanggal: "
        let title2="Jam: "
        let project=`https://meta-og-nextjs.vercel.app/blog/${blogs.id}`
    
        // Saya tertarik ingin lihat lahan Sugito dan bertemu tim Kitani.
    
        // Nama:
        // Tanggal: 
        // Jam: 
    
        // [proyek link]
    
        // Appending the message to the URL by encoding it
        url += `?text=${encodeURIComponent(`${line1}\r\n\r\n${title}\r\n${title1}\r\n${title2}\r\n\r\n${project}`)}&app_absent=0`;
    
        // Open our newly created URL in a new tab to send the message
        window.open(url); 
      }
  return (
    <>
    <button onClick={() => {
        onSubmit()
      }}>
      Share WA Chatting
      </button>
    <div style={{ backgroundColor: "green", width: 200, height: 30, marginTop: 12 }}>
      <WhatsappShareButton
        url={`https://meta-og-nextjs.vercel.app/blog/${blogs.id}`}
        title="Ayo menanam bawang"
        separator=" : "
      >
        <p style={{color: "#FFFFFF"}}>Share WA Contact/Status</p>
      </WhatsappShareButton>
    </div>
    </>
  );
}

export default ButtonWA;
