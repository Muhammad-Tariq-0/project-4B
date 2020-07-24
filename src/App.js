import React,{useEffect} from 'react';
import america from "./pics/america.png";
import china from "./pics/china.jpg";
import japan from "./pics/japan.jpg";
import germany from "./pics/germany.png";
import france from "./pics/france.png";
import brazil from "./pics/brazil.png";
import uk from "./pics/uk.png";
import canada from "./pics/canada.jpg";
import italy from "./pics/italy.svg";
import india from "./pics/india.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css"

function App() {
  
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])


  return (
    <div>
    <div className="bar">
      <center><h1 data-aos="fade-down" ><font color="green">Economic Powers of world</font></h1></center>
      </div>
<div className="side">
</div>
<div className="side1">
</div>
      <br/> <br/> <br/> 
      <center> <h1 data-aos="zoom-in" >The United States </h1></center>
      <br/> 
      <div className="textside1" data-aos="slide-left"> 
       <h3 >The United States</h3>
       <p>U.S. Nominal GDP: $21.44 trillion - U.S. GDP (PPP): $21.44 trillion
       The U.S. has retained its position of being the world's largest economy since 1871.
        The size of the U.S. economy was at $20.58 trillion in 2018 in nominal terms and is expected to reach $22.32 trillion in 2020. The U.S. is often dubbed as an economic superpower. </p>
       </div>
      <div className="picbox1" data-aos="slide-right">
        <img src={america} width="600" height="300" alt="Image Loading..."/>
         </div>


<br/><br/><br/><br/><br/><br/><br/>
        <center> <h1 data-aos="zoom-in"> The State of China  </h1></center>
        <br/>
         <div className="textside2" data-aos="slide-right"> 
       <h3 >The State of China</h3>
       <p>China Nominal GDP: $14.14 trillion - China GDP (PPP): $27.31 trillion
      China has experienced exponential growth over the past few decades, breaking the barriers of a centrally-planned closed economy to evolve into a manufacturing and exporting hub of the world. China is often referred to as the "world's factory," given its huge manufacturing and export base.</p>
       </div>
      <div className="picbox2" data-aos="slide-left">
        <img src={china} width="600" height="300" alt="Image Loading..."/>
         </div>


 <br/><br/><br/><br/><br/><br/><br/>
 <br/><br/><br/><br/><br/><br/><br/>
 <br/><br/><br/><br/><br/><br/><br/>
 <br/><br/><br/><br/>

      <center> <h1 data-aos="zoom-in"> The State of Japan </h1></center>
      <div className="textside1" data-aos="slide-left"> 
       <h3> The State of Japan</h3>
       <p>Japan Nominal GDP: $5.15 trillion- Japan GDP (PPP): $5.75 trillion
Japan is the third-largest economy in the world, with its GDP crossing the $5 trillion mark in 2019.  </p>
       </div>
      <div className="picbox1" data-aos="slide-right">
        <img src={japan} width="600" height="300" alt="Image Loading..."/>
         </div>

     
<br/><br/><br/><br/><br/><br/><br/>
        <center> <h1 data-aos="zoom-in"> The State of Germany  </h1></center>
        <br/>
         <div className="textside2" data-aos="slide-right"> 
       <h3>The State of Germany </h3>
       <p>Germany Nominal GDP: $3.86 trillion - Germany GDP (PPP): $4.44 trillion
      Germany is not just Europe's largest economy but also the strongest. On the global scale, it is the fourth-largest economy in terms of nominal GDP, with a $4 trillion GDP. </p>
       </div>
      <div className="picbox2" data-aos="slide-left">
        <img src={germany} width="600" height="300" alt="Image Loading..."/>
         </div>
 
  <br/><br/><br/><br/><br/><br/><br/>
 <br/><br/><br/><br/><br/><br/><br/>
 <br/><br/><br/><br/><br/><br/><br/>
 <br/><br/><br/><br/>

      <center> <h1 data-aos="zoom-in"> The State of India </h1></center>
      <div className="textside1" data-aos="slide-left"> 
       <h3> The State of India</h3>
       <p>India Nominal GDP: $2.94 trillion-India GDP (PPP): $10.51 trillion
India is the fastest-growing trillion-dollar economy in the world and the fifth-largest overall, with a nominal GDP of $2.94 trillion. India has become the fifth-largest economy in 2019, overtaking the United Kingdom and France.  </p>
       </div>
      <div className="picbox1" data-aos="slide-right">
        <img src={india} width="600" height="300"  alt="Image Loading..."/>
         </div>


         <br/><br/><br/><br/><br/><br/><br/>
        <center> <h1 data-aos="zoom-in"> United Kingdom </h1></center>
        <br/>
         <div className="textside2" data-aos="slide-right"> 
       <h3> United Kingdom </h3>
       <p>U.K. Nominal GDP: $2.83 trillion - U.K. GDP (PPP): $3.04 trillion
The United Kingdom, with a $2.83 trillion GDP is the sixth largest economy in the world. When compared in terms of GDP purchasing-power-parity, U.K. slips to the ninth spot with a GDP-PPP of $3.04 trillion.</p>
       </div>
      <div className="picbox2" data-aos="slide-left">
        <img src={uk} width="600" height="300" alt="Image Loading..."/>
         </div>

         <br/><br/><br/><br/><br/><br/><br/>
 <br/><br/><br/><br/><br/><br/><br/>
 <br/><br/><br/><br/><br/><br/><br/>
 <br/><br/><br/><br/>

      <center> <h1 data-aos="zoom-in"> The State of France </h1></center>
      <div className="textside1" data-aos="slide-left"> 
       <h3> The State of France</h3>
       <p>France Nominal GDP: $2.71 trillion - France GDP (PPP): $2.96 trillion
France, the most-visited country in the world, is the third-largest economy of Europe and the sixth-largest in the world, with a nominal GDP of $2.78 trillion. Its GDP in terms of purchasing power parity is around $2.96 trillion. </p>
       </div>
      <div className="picbox1" data-aos="slide-right">
        <img src={france} width="600" height="300" alt="Image Loading..."/>
         </div>

   <br/><br/><br/><br/><br/><br/><br/>
        <center> <h1 data-aos="zoom-in">The State of Italy </h1></center>
        <br/>
         <div className="textside2" data-aos="slide-right"> 
       <h3> The State of Italy </h3>
       <p>Italy Nominal GDP: $1.99 trillion - Italy GDP (PPP): $2.40 trillion
With a nominal GDP of $2.07 trillion, Italy is the world’s eighth-largest economy. Its economy is expected to expand to $2.26 trillion by 2023. In terms of GDP (PPP), its economy is worth $2.40 trillion</p>
       </div>
      <div className="picbox2" data-aos="slide-left">
        <img src={italy} width="600" height="300" alt="Image Loading..."/>
         </div>

         <br/><br/><br/><br/><br/><br/><br/>
 <br/><br/><br/><br/><br/><br/><br/>
 <br/><br/><br/><br/><br/><br/><br/>
 <br/><br/><br/><br/>

      <center> <h1 data-aos="zoom-in"> The State of Brazil </h1></center>
      <div className="textside1" data-aos="slide-left"> 
       <h3> The State of Brazil</h3>
       <p>Brazil Nominal GDP: $1.85 trillion - Brazil GDP (PPP): $3.37 trillion
Brazil is the largest and most populous nation in Latin America. With a nominal GDP of $1.87 trillion, Brazil is the ninth-largest economy in the world. </p>
       </div>
      <div className="picbox1" data-aos="slide-right">
        <img src={brazil} width="600" height="300"  alt="Image Loading..."/>
         </div>

         <br/><br/><br/><br/><br/><br/><br/>
        <center> <h1 data-aos="zoom-in">Canadian State </h1></center>
        <br/>
         <div className="textside2" data-aos="slide-right"> 
       <h3> Canadian State </h3>
       <p>Canada Nominal GDP: $1.73 trillion - Canada GDP (PPP): $1.84 trillion
Canada displaced Russia to take the 10th spot in 2015 and has retained its position since then. Canada's nominal GDP is currently at $1.71 trillion and is expected to touch $1.74 trillion in 2019 and $2.13 trillion by 2023. </p>
       </div>
      <div className="picbox2" data-aos="slide-left">
        <img src={canada} width="600" height="300"  alt="Image Loading..."/>
         </div>
    </div>
    
   );
 }























// // function App() {
// //  const elem = useRef(null);
// //  useEffect(() => {
// //   elem.current.focus();
// //  }, [])
// //  return (
// //     <div >
// //       <h1>Hello World!</h1>
// //       <input type="text" ref={elem} />
// //       </div>
// //   );
// // }

 export default App;





