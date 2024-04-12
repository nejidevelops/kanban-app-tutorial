import { openAddAndEditBoardModal } from "@/components/redux/features/appSlice";

export default function Sidebar() {
 // rest of code here
return (
  <aside className="w-[18.75rem] flex-none dark:bg-dark-grey h-full py-6 pr-6">
    {/* rest of code here */}
    {/* trigger the create new board modal */}
    <button
      onClick={() => dispatch(openAddAndEditBoardModal("Add New Board"))}
      className="flex items-center space-x-2 pl-[2.12rem] py-3"
    >
      <p className="text-base font-bold capitalize text-main-purple">
        + Create New Board
      </p>
    </button>
  </aside>
);
}