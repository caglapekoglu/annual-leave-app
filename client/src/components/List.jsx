import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import * as action from "../Store/_redux/LeaveStore/leaveAction";

function List() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.loginUser);
  const role = auth?.userType;
  const formLeave = useSelector((state) => state.leave.leaves);
//   const deletes = async (data) => {
//   try {
//     const response = await fetch(`http://localhost:8000/api/leave/${data?.id}`, {
//       method: "DELETE"
//     });
//     if (response.ok) {
//       console.log("The record has been deleted successfully.");
//     } else {
//       console.log("Failed to delete the record.");
//     }
//     console.log(await response.json());
//   } catch (error) {
//     console.error("An error occurred while deleting the record:", error);
//   }
// };
 const deletes = async (data) => {
   try {
     const response = await fetch(`http://localhost:8000/api/leave/${data?._id}`, {
       method: "DELETE"
     });
     window.location.reload();
     console.log(response);
   } catch (error) {
     console.error(error);
   }
 };
  const approves = (data) => {
    let newData = Object.assign({}, data);

    newData[role] = true;
    newData["isapprove"] = true; // Add this line
    newData["isnotapprove"] = false; // Add this line
    console.log(newData);
    dispatch(action.update(newData)).then((res) => {
      if (res) {
        dispatch(action.getLeave(role));
      }
    });
  };

  const reject = (data) => {
    let newData = Object.assign({}, data);

    newData[role] = true;
    newData["isapprove"] = false; // Add this line
    newData["isnotapprove"] = true; // Add this line
    console.log(newData);
    dispatch(action.update(newData)).then((res) => {
      if (res) {
        dispatch(action.getLeave(role));
      }
    });
  };

  useEffect(() => {
    dispatch(action.getLeave(role));
  }, [dispatch, role]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center w-[600px] mx-auto py-[30px]">
        <h1 className="font-semibold text-3xl py-5">Gelen izin istekleri</h1>
        
        <ul>
          {formLeave &&
            formLeave.map((contact, i) => {
              const approve = contact?.isapprove;
              return (
                <div
                  key={i}
                  className={`flex px-4 py-4 justify-between mb-3 ${
                    i % 2 === 0 ? 'bg-white': 'bg-input-bg' }`}
                >
                  <div>
                    <li className="font-semibold text-lg flex items-center">
                      <span className="pr-1">{contact.name}</span>
                      {contact.surname}
                      {!approve&&<p className="mx-5 font-[300] text-red-500 text-sm bg-red-100 px-3 py-1 rounded-lg">Reddedildi</p>}
                      {(role=='admin4')&&approve&&!contact?.admin3 &&!contact?.admin2&&!contact?.admin1&&<p className="mx-5 font-[300] text-yellow-500 text-sm bg-yellow-100 px-3 py-1 rounded-lg">Onaylanmadı</p>}
                      {(role=='admin4')&&approve&&contact?.admin3&&<p className="mx-5 font-[300] text-green-500 text-sm bg-green-100 px-3 py-1 rounded-lg">Admin3</p>}
                      {(role=='admin4')&&approve&&!contact?.admin3 &&contact?.admin2&&<p className="mx-5 font-[300] text-green-500 text-sm bg-green-100 px-3 py-1 rounded-lg">Admin2</p>}
                      {(role=='admin4')&&approve&&!contact?.admin3 &&!contact?.admin2&&contact?.admin1&&<p className="mx-5 font-[300] text-green-500 text-sm bg-green-100 px-3 py-1 rounded-lg">Admin1</p>}
                    </li>
                    <li>
                      <span className="text-secondary-text pr-3">TCKN:</span>
                      {contact.tc}
                    </li>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <a
                      href={`/detaylar/${contact?.id}`}
                      type="submit"
                      className={`text-select-b flex items-center border-select-b border-[1px] px-4 h-10 rounded-md ${!approve&&'bg-white'}`}
                    >
                      Detaylar
                    </a>
                    {!(role=='admin4') &&<button
                      onClick={() => approves(contact)}
                      type="submit"
                      className="bg-select-b border-select-b border-[1px] px-4 h-10 rounded-md text-white"
                    >
                      Onayla
                    </button>}
                    {approve && <button
                      onClick={() => reject(contact)}
                      type="submit"
                      className={`bg-red-500 px-4 h-10 rounded-md text-white ${!approve&&'border-[1px] border-white'}`}
                    >
                      X
                    </button>}
                    {!approve && <button
                      onClick={ () => deletes(contact)}
                      type="submit"
                      className={`bg-red-500 px-4 h-10 rounded-md text-white border-[1px] border-white`}
                    >
                      X
                    </button>}
                  </div>
                </div>
              );
            })}
        </ul>
      </div>
      {/* {!token && <><div className='h-12 flex justify-between items-center px-10 my-[22px]'>
                <p className='text-xl font-semibold'>Page Not Found</p>
                <a href='/' type='submit' className='bg-select-b px-4 py-2 rounded-md text-white flex text-[16px] gap-x-1'><img src={home} alt="" /> <span>Ana sayfaya dön</span></a>


            </div>
                <div className='flex justify-center items-center pt-[100px]'>
                    <img src={pagenotfound} alt="" />
                </div></>
            } */}
            
    </>

  );
}

export default List;
