import { FaGoogle, FaApple, FaPhone } from "react-icons/fa";
import { useState } from "react";

const LoginCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      
     
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
       
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/30 to-purple-600/30 animate-pulse"></div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-cover bg-center" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               }}>
          </div>
        </div>
     
        <div className="absolute inset-0 bg-black/20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-ping" style={{animationDuration: '4s'}}></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-ping" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        </div>
      </div>
      
      
      <div 
        className="group relative w-full max-w-md transition-all duration-700 ease-out transform-gpu"
        style={{
          transform: isHovered ? 'perspective(1000px) rotateY(-5deg) rotateX(5deg) translateZ(50px)' : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)',
          transformStyle: 'preserve-3d'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        

        <div className="relative backdrop-blur-md bg-white/[0.08] border border-white/20 rounded-3xl shadow-2xl p-8 transition-all duration-700 hover:backdrop-blur-lg hover:bg-white/[0.12] hover:border-white/30 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
 
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/10 via-transparent to-black/10 opacity-60"></div>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tl from-blue-400/20 via-transparent to-purple-400/20 opacity-40"></div>
          
          
          <div className="absolute inset-1 rounded-3xl bg-gradient-to-b from-white/5 to-transparent opacity-80"></div>
          
        
          <div className="relative z-20">
        
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div 
                  className="w-20 h-20 bg-gradient-to-br from-blue-400/80 to-purple-500/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/40 shadow-lg transition-all duration-500 transform-gpu"
                  style={{
                    transform: isHovered ? 'translateZ(20px) rotateY(10deg)' : 'translateZ(0px)',
                    boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)' : '0 10px 20px rgba(0,0,0,0.2)'
                  }}
                >
                  <span className="text-white font-bold text-2xl drop-shadow-lg">EP</span>
                </div>
              
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-400/40 to-purple-500/40 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-2xl tracking-wide">
              Welcome Back
            </h2>
           
            <div className="space-y-4 mb-8">
              {[
                { icon: FaGoogle, text: "Continue with Google", color: "from-red-500/20 to-orange-500/20" },
                { icon: FaApple, text: "Continue with Apple", color: "from-gray-500/20 to-black/20" },
                { icon: FaPhone, text: "Continue with Phone", color: "from-green-500/20 to-blue-500/20" }
              ].map((button, index) => (
                <button 
                  key={index}
                  className="group/btn relative w-full backdrop-blur-sm bg-white/[0.05] hover:bg-white/[0.15] border border-white/20 hover:border-white/40 rounded-2xl p-5 transition-all duration-300 ease-out transform-gpu hover:scale-[1.02] hover:shadow-xl"
                  style={{
                    transform: isHovered ? `translateZ(${10 + index * 5}px)` : 'translateZ(0px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
                  }}
                >
                  <div className="flex items-center justify-center gap-4 relative z-10">
                    <button.icon className="text-white/90 group-hover/btn:text-white text-xl group-hover/btn:scale-110 transition-all duration-200 drop-shadow-sm" />
                    <span className="text-white/90 group-hover/btn:text-white font-medium text-lg transition-all duration-200">
                      {button.text}
                    </span>
                  </div>
                  
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${button.color} opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
         
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-transparent to-black/10 opacity-60"></div>
                </button>
              ))}
            </div>
            
            <div className="flex items-center my-10">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <div className="px-6 py-2 backdrop-blur-sm bg-white/10 rounded-full border border-white/20">
                <span className="text-white/80 text-sm font-medium">or</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-white/30 to-transparent"></div>
            </div>
            
        
            <div className="text-center space-y-4">
              <p className="text-white/80 text-base">
                Don't have an account? 
                <button className="text-blue-300 hover:text-blue-200 ml-2 underline decoration-blue-300/50 hover:decoration-blue-200 transition-colors font-medium underline-offset-4">
                  Sign up
                </button>
              </p>
              
              <p className="text-white/60 text-sm leading-relaxed max-w-sm mx-auto">
                By continuing, you agree to our{' '}
                <button className="text-white/70 hover:text-white/90 underline decoration-white/30 hover:decoration-white/60 transition-colors underline-offset-2">
                  Terms of Service
                </button>
                {' '}and{' '}
                <button className="text-white/70 hover:text-white/90 underline decoration-white/30 hover:decoration-white/60 transition-colors underline-offset-2">
                  Privacy Policy
                </button>
              </p>
            </div>
          </div>
          
         
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-2xl opacity-60"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-2xl opacity-60"></div>
          
        
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.1)] pointer-events-none"></div>
        </div>
        
        <div 
          className="absolute inset-0 bg-black/20 rounded-3xl blur-xl transition-all duration-700"
          style={{
            transform: isHovered ? 'translateY(20px) translateZ(-20px) scale(1.05)' : 'translateY(10px) translateZ(-10px) scale(1.02)',
            opacity: isHovered ? 0.4 : 0.2
          }}
        ></div>
      </div>
      
    
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-white/20 rounded-full animate-pulse shadow-lg"></div>
      <div className="absolute top-1/3 right-16 w-2 h-2 bg-blue-300/30 rounded-full animate-pulse shadow-md" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/4 right-10 w-2.5 h-2.5 bg-purple-300/25 rounded-full animate-pulse shadow-md" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 left-20 w-2 h-2 bg-white/25 rounded-full animate-pulse shadow-sm" style={{animationDelay: '0.5s'}}></div>
      
      
      <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/15 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
      <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-blue-200/20 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '1.5s'}}></div>
    </div>
  );
};

export default LoginCard;