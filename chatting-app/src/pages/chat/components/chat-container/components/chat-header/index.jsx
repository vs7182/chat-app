import { RiCloseFill } from "react-icons/ri";
import { useAppStore } from "@/store";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { HOST } from "@/utils/constants.js";
import { getColor } from "@/lib/utils.js";



const ChatHeader = () => {

  const { selectedChatType,selectedChatData,closeChat } = useAppStore();
  return (
    <div className="h-[10vh] border-b-2 border-[#2f303b] flex items-center justify-between px-20">
      <div className="flex gap-5 items-center w-full justify-between">
        <div className="flex gap-3 items-center justify-center">
          <div className="w-12 h-12 relative">
            {
              selectedChatType==="contact"?<Avatar className="h-12 w-12 rounded-full overflow-hidden">
            
            
              {
                selectedChatData.image ? (
                  <AvatarImage src={`${HOST}/${selectedChatData.image}`} alt="Profile" className="object-cover w-full h-full bg-black" />
                ) : (<div className={`uppercase h-12 w-12 text-lg border-[1px] flex items-center justify-center rounded-full ${getColor(selectedChatData.color)}`}> {
                  selectedChatData ? (selectedChatData.firstName.split("").shift() ) : (selectedChatData.email.split("").shift() )
                }
                </div>
                )
              }
            </Avatar> :<div className='bg-[#ffffff22] h-10 w-10 flex items-center justify-center rounded-full'>#</div>
            }


          </div>
          <div>
            {selectedChatType==="channel" && selectedChatData.name}
            {
              //TODO:= set Email also on this area 
              `${selectedChatType}` === `contact` && `${selectedChatData.firstName} ${selectedChatData.lastName}`
           }
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <button className="text-neutral-500 focus:outline-none focus:text-white duration-300 transition-all">
          <RiCloseFill className="text-3xl" onClick={closeChat} />
        </button>
      </div>
    </div>
  
  )
}

export default ChatHeader

