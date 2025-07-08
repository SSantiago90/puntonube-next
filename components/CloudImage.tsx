"use client"; // This directive is for Next.js App Router to mark it as a Client Component

function CloudImage() {

  return (
    <div className="clouds-container">
      <div className="sr-only">
        Cloud transition visual effect
      </div>    
      <div className={`cloud cloud-transition-static2`}/> 
      <div className={`cloud cloud-transition-static1`}/>   
       <div className={`cloud cloud-transition-bg`}/>
      <div className={`cloud cloud-transition-bot`}/>  
       <div className={`cloud cloud-transition-move1`}/>  
       <div className={`cloud cloud-transition-bottom`}/> 
      {/*
      */}
      
       <div 
        style={{ 
          top: `200px`, 
          animationDuration: `32s`, 
          backgroundSize: `auto 280px`,
          }}
          className="cloud cloud-transition-passing-by" 
      />
       <div 
        style={{ 
          top: `150px`, 
          animationDuration: `30s`, 
          backgroundSize: `auto 220px`,
        }}
        className="cloud cloud-transition-passing-by" 
      />
       <div 
        style={{ 
          top: `100px`, 
          animationDuration: `24s`, 
          backgroundSize: `auto 180px`,
          }}
          className="cloud cloud-transition-passing-by" 
          />       
          {/*
      */}         

     </div>
  );
}

export default CloudImage;

