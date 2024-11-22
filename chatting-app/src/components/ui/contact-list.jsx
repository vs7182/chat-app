import { useAppStore } from '@/store'
import { Avatar, AvatarImage } from './avatar';
import { HOST } from '@/utils/constants.js';
import { getColor } from '@/lib/utils.js';


const ContactList=({ contact,isChannel=false }) =>{

  
    const {selectedChatData,setSelectedChatData,setSelectedChatType,selectedChatType,setSelectedChatMessages} = useAppStore();
    const handleClick=(contact)=>{
        if(isChannel) setSelectedChatType("channel");
          else selectedChatType("contact");
          setSelectedChatData(contact);
    
        
               
        if(selectedChatData && selectedChatData._id !== contact._id){
            setSelectedChatMessages([]);
        }
    }
  return (
  
    <div  className='mt-5'>
        {contact.map((contact)=> (
            <div key={contact._id}>{contact._id}
            {/* // className={`pl-10 py-2 transition-all duration-300 cursor-pointer ${selectedChatData && selectedChatData._id === contact._id ? "bg-[#8417ff] hover:bg-[#8417ff]":"hover:bg-[#f1f1f111]"}`} onClick={() =>handleClick(contact)}>{contact._id} */}
            {/* <div className='flex gap-5 items-center justify-start text-neutral-300'>
                {
                    !isChannel&& <Avatar className="h-10 w-10 rounded-full overflow-hidden">           
                    {
                      contact.image ? (
                        <AvatarImage src={`${HOST}/${contact.image}`} alt="Profile" className="object-cover w-full h-full bg-black" />
                      ) : (<div className={`uppercase h-10 w-10 text-lg border-[1px] flex items-center justify-center rounded-full ${getColor(contact.color)}`}> {
                        contact ? (contact.firstName.split("").shift() ) : (contact.email.split("").shift() )
                      }
                      </div>
                      )
                    }
                  </Avatar>
                }

            </div> */}
            </div>
        ))}

    </div>
  )  
}

export default ContactList