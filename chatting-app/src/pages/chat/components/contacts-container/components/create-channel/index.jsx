import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { animationDefaultOptions, getColor } from '@/lib/utils.js'
import Lottie from 'react-lottie'
import { apiClient } from "@/lib/api-client.js";
import { GET_ALL_CONTACT_ROUTES, HOST, SEARCH_CONTACTS_ROUTES } from "@/utils/constants.js";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useAppStore } from "@/store";
import { Button } from "@/components/ui/button";
import MultipleSelector from "@/components/ui/multipleselect";


const CreateChanel = () => {
    const { setSelectedChatType, setSelectedChatData } = useAppStore();
    const [newChannelModal, setNewChannelModal] = useState(false);
    const [searchedContacts, setSearchedContacts] = useState([]);
    const [allContacts,setAllContacts] = useState([]);
    const [selectedContacts,setSelectedContacts] = useState([]);
    const [channelName,setChannelName] = useState("");

    useEffect(()=>{
        const getData = async () =>{
            const response = await apiClient.get(GET_ALL_CONTACT_ROUTES,{
                withCredentials:true,
            });
            setAllContacts(response.data.contact);
        }

        getData()

    },[]);

    const createChanel = async ()=>{};

    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <FaPlus className="text-neutral-400 font-light text-opacity-90 text-start hover:text-neutral-100 cursor-pointer transition-all duration-300" onClick={() => setNewChannelModal(true)} />
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#1c1b1e] border-none mb-2 p-3 text-white">
                        Create New Channel
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Dialog open={newChannelModal} onOpenChange={setNewChannelModal}>
                <DialogContent className="bg-[#181920] border-none text-white w-[400px] h-[400px] flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Please fill up the details for new channel</DialogTitle>
                        <DialogDescription>
                        </DialogDescription>
                    </DialogHeader>
                    <div>
                        <Input placeholder="Channel Name" className="rounded-lg p-6 bg-[#2c2e3b] border-none" onChange={(e) => setChannelName(e.target.value)} value={channelName} />

                    </div>
                    <div>
                        <MultipleSelector className="rounded-lg bg-[#2c2e3b] border-none py-2 text-white" defaultOptions={allContacts} placeholder="Search Contacts" value={selectedContacts} onChange={setSelectedContacts}
                         emptyIndicator={
                            <p className="text-center text-lg leading-10 text-gray-600">No result found</p>
                        } 
                        />
                    </div>
                    <div>
                        <Button className="w-full bg-purple-700 hover:bg-purple-900 transition-all duration-300x" onClick={createChanel}>Create Channel</Button>
                    </div>
                </DialogContent>
            </Dialog>



        </>
    )
}

export default CreateChanel