import PikachuImage from "../assets/img/Pikachu.jpg"; // Import your Pikachu image

const WelcomeBanner = () => {
  return (
    <div
      className={`welcome-banner flex items-center justify-center stop-animation bounce`}
    >
      <h1 className="text-2xl font-semibold">Welcome</h1>
      <img src={PikachuImage} alt="Pikachu" className="animated-pokemon" />
    </div>
  );
};

export default WelcomeBanner;
