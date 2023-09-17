import { signOut } from "next-auth/react";

interface AccountMenuProps {
    visible?: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
    if (!visible) {
        return null;
    }
  
    return (
    <div className="bg-black/70 w-56 absolute top-16 right-9 border-gray-600/40 flex-col">
        <div className="flex gap-3 group/item items-center p-3">
            <img src="/defaultpfp.jpg" alt="user" className="w-6 rounded-[4px]"/>
            <p className="text-white text-sm group-hover/item:underline">Username</p>
        </div>
        <div 
        onClick={() => signOut()}
        className="text-white border-t-gray-600/40 border-t p-3 items-center text-center text-sm group/item">
            <p className="group-hover/item:underline">Sign out of Cloneflix</p>
        </div>
    </div>
  )
}

export default AccountMenu