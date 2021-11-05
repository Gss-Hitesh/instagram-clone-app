import { useSession, signOut } from "next-auth/react";

function MiniProfile() {
  const { data: session } = useSession();
  console.log(session) ;

  return (
    <div className="flex items-center justify-between mt-14 ml-10 ">
      <img
        className=" w-16 h-16 rounded-full border object-contain p-[2px]"
        src={session?.user?.image}
      />
      <div>
      {/* <div className="flex-1 mx-4"> */}
          <h2 className="font-bold">{session?.user?.username}</h2>
          <h3 className="text-sm text-gray-400">Welcome to Instagram 2.0</h3>
      </div>
      <button 
        className="pl-4 text-blue-400 text-sm text-semibold "
        onClick={signOut}
      > Sign Out</button>
    </div>
  );
}

export default MiniProfile;
