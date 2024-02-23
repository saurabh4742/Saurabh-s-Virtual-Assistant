import Footer from "@/components/Footer";
import Notes from "@/components/Notes";
import TitleAndCopyright from "@/components/TitleAndCopyright";
import UserInteractive from "@/components/UserInteractive";
import RealtimeView from "@/socketComponent/RealtimeView";
export default function Home() {
  return (
    <div className="flex justify-center w-full bg-[#0F172A]  text-[#F8FAFC] ">
      <div className="flex-none w-full justify-center">
      <div className="flex justify-center w-full">
      <div className="flex-none justify-center my-4 items-center min-h-screen pt-4 w-10/12 sm:w-8/12 border-1 shadow-lg   rounded-3xl">
        <Notes />
        <RealtimeView/>
        <div>
          <div className="flex-none justify-center my-4 items-center min-h-fit   pt-4 w-full bg-[#1E293B] border-1 shadow-lg border-[#020617]  rounded-3xl">
            <TitleAndCopyright />
            <div className="flex-col w-full justify-center item-center pb-8">
              <UserInteractive/>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer/>   
      </div>
    </div>
  );
}
