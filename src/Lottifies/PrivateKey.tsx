import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./privateKEy.json";
const PrivateKey: React.FC = () => {
    return (
        <div className=" z-50 "
        >
          <Player src={animationData} loop  autoplay   />
        </div>
    );
};

export default PrivateKey;