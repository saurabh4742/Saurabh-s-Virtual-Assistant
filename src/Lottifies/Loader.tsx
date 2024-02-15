import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./Loading.json";
const Loader: React.FC = () => {
    return (
        <div className=" z-50 flex justify-center item-center w-full"
        >
          <Player src={animationData} loop  autoplay   />
        </div>
    );
};

export default Loader;