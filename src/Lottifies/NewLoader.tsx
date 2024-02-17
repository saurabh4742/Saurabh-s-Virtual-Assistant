import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./NewLoader.json";
const NewLoader: React.FC = () => {
    return (
        <div className=" z-50 "
        >
          <Player src={animationData} loop  autoplay   />
        </div>
    );
};

export default NewLoader;