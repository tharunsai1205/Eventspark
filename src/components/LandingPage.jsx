
import LoginCard from './LoginCard';
import SignInCard from './SignInCard';

const LandingPage = () => {
  return (
    <div id="main-content">
      <video autoPlay muted loop className="video-background">
        <source src="/disco.mp4" type="video/mp4" />
      </video>
      <img src="/lg.png" alt="Event Logo" className="logo" />
      <div className="container">
        <div className="content-box">
          <div className="cards-container">
            <LoginCard />
            <SignInCard />
          </div>
          <div className="quote">
            <p>"Your events, your joy. Let us bring your dreams to life!"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
