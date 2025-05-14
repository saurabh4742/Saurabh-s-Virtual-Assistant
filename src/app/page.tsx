import Footer from "@/components/Footer";
import Notes from "@/components/Notes";
import TitleAndCopyright from "@/components/TitleAndCopyright";
import UserInteractive from "@/components/UserInteractive";
import RealtimeView from "@/socketComponent/RealtimeView";
export default function Home() {
  return (
    <div className="flex justify-center w-full bg-[#0F172A] min-h-screen text-[#F8FAFC] ">
      <div className="flex flex-col  w-full justify-between  min-h-screen ">
      <div className="flex justify-center w-full">
      <div className="flex-none justify-center my-4 items-center  pt-4 w-10/12 sm:w-8/12 border-1 shadow-lg   rounded-3xl">
        <Notes />
        <RealtimeView/>
        <div>
          <div className="flex-none justify-center my-4 items-center  pt-4 w-full bg-[#1E293B] border-1 shadow-lg border-[#020617]  rounded-3xl">
            <TitleAndCopyright />
            <div className="flex-col w-full justify-center item-center pb-8">
              
              <UserInteractive/>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className=" flex justify-center items-end">
      <Footer/>  
      </div>
      </div>
    </div>
  );
}
