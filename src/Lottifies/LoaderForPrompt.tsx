import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./Loading.json";
const LoaderForPrompt: React.FC = () => {
    return (
        <div className=" z-50 "
        >
          <Player src={animationData} loop  autoplay   />
        </div>
    );
};

export default LoaderForPrompt;