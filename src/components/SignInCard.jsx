import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignInCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(`Signed in with: ${email} / ${password}`);
    navigate("/city-selection");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0" />

      <div
        className="relative w-full max-w-md transition-all duration-500 ease-out transform hover:scale-[1.02]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative backdrop-blur-sm bg-white/[0.02] hover:backdrop-blur-md hover:bg-white/[0.08] border border-white/10 hover:border-white/30 rounded-3xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-black/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-white/[0.05] hover:bg-white/[0.15] rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 hover:border-white/40 shadow-md hover:shadow-lg transition-all duration-300">
                <span className="text-white/90 font-bold text-xl drop-shadow-lg">EP</span>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white text-center mb-8 drop-shadow-lg tracking-wide">
              Sign In
            </h2>

            <form onSubmit={handleSignIn} className="space-y-6">
              
              <div className="relative">
                <input
                  type="email"
                  required
                  className="w-full backdrop-blur-none bg-transparent hover:backdrop-blur-sm hover:bg-white/[0.05] border border-white/20 hover:border-white/40 focus:backdrop-blur-md focus:bg-white/[0.08] focus:border-white/50 rounded-2xl p-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 text-lg"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
                <div className={`absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity duration-300 -z-10 blur-sm ${focusedField === 'email' ? 'opacity-100' : ''}`}></div>
                {email && (
                  <label className="absolute -top-2 left-4 bg-white/90 text-black text-xs font-medium px-2 rounded">
                    Email Address
                  </label>
                )}
              </div>

             
              <div className="relative">
                <input
                  type="password"
                  required
                  className="w-full backdrop-blur-none bg-transparent hover:backdrop-blur-sm hover:bg-white/[0.05] border border-white/20 hover:border-white/40 focus:backdrop-blur-md focus:bg-white/[0.08] focus:border-white/50 rounded-2xl p-4 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all duration-300 text-lg"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                />
                <div className={`absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity duration-300 -z-10 blur-sm ${focusedField === 'password' ? 'opacity-100' : ''}`}></div>
                {password && (
                  <label className="absolute -top-2 left-4 bg-white/90 text-black text-xs font-medium px-2 rounded">
                    Password
                  </label>
                )}
              </div>

              <div className="text-right">
                <button
                  type="button"
                  className="text-white/70 hover:text-white/90 text-sm underline decoration-white/50 hover:decoration-white/80 transition-colors underline-offset-4"
                >
                  Forgot password?
                </button>
              </div>


              <button
                type="submit"
                className="group w-full relative backdrop-blur-none bg-transparent hover:backdrop-blur-md hover:bg-white/[0.08] border border-white/30 hover:border-white/50 rounded-2xl p-4 text-white font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg transform active:scale-[0.98]"
              >
                <span className="relative z-10">Sign In</span>
                <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>

          
            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-white/20"></div>
              <div className="px-4 py-2 backdrop-blur-sm bg-white/[0.05] hover:bg-white/[0.1] rounded-full border border-white/20 hover:border-white/30 transition-all duration-300">
                <span className="text-white/80 text-sm font-medium">or</span>
              </div>
              <div className="flex-1 h-px bg-white/20"></div>
            </div>

        
            <div className="text-center space-y-4">
              <p className="text-white/80 text-base">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="text-white/90 hover:text-white underline decoration-white/50 hover:decoration-white/80 transition-colors font-medium underline-offset-4"
                >
                  Sign up
                </button>
              </p>

              <p className="text-white/60 text-sm leading-relaxed">
                By signing in, you agree to our{" "}
                <button className="text-white/70 hover:text-white/90 underline decoration-white/30 hover:decoration-white/60 transition-colors underline-offset-2">
                  Terms
                </button>{" "}
                and{" "}
                <button className="text-white/70 hover:text-white/90 underline decoration-white/30 hover:decoration-white/60 transition-colors underline-offset-2">
                  Privacy Policy
                </button>
              </p>
            </div>
          </div>

          <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-transparent hover:border-white/30 rounded-tr-lg transition-all duration-500 ${isHovered ? 'border-white/40 w-12 h-12' : ''}`}></div>
          <div className={`absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-transparent hover:border-white/30 rounded-bl-lg transition-all duration-500 ${isHovered ? 'border-white/40 w-12 h-12' : ''}`}></div>

          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </div>

      
      <div className="absolute top-1/4 left-10 w-1 h-1 bg-white/30 rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 right-16 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-1/4 right-10 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-1/3 left-20 w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
    </div>
  );
};

export default SignInCard;
