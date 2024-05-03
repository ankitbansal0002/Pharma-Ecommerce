// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
// import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
// import { auth } from "../firebase";
// import { getUser, useLoginMutation } from "../redux/api/userAPI";
// import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
// import { MessageResponse } from "../types/api-types";
// import { userExist, userNotExist } from "../redux/reducer/userReducer";
// import { useDispatch } from "react-redux";

const Login = () => {
//   const dispatch = useDispatch();
//   const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopNumber, setShopNumber] = useState("");

//   const [area, setArea] = useState("");

//   const [login] = useLoginMutation();

//   const loginHandler = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const { user } = await signInWithPopup(auth, provider);

//     //   console.log({
//     //     name: user.displayName!,
//     //     email: user.email!,
//     //     photo: user.photoURL!,
//     //     gender,
//     //     role: "user",
//     //     dob: date,
//     //     _id: user.uid,
//     //   });

//       const res = await login({
//         name: user.displayName!,
//         email: user.email!,
//         photo: user.photoURL!,
//         gender,
//         role: "user",
//         dob: date,
//         _id: user.uid,
//       });

//       if ("data" in res) {
//         toast.success(res.data.message);
//         const data = await getUser(user.uid);
//         dispatch(userExist(data?.user!));
//       } else {
//         const error = res.error as FetchBaseQueryError;
//         const message = (error.data as MessageResponse).message;
//         toast.error(message);
//         dispatch(userNotExist());
//       }
//     } catch (error) {
//       toast.error("Sign In Fail");
//     }
//   };

  return (
    <div className="login">
      <main>
        <h1 className="heading">Login</h1>

        <div>
          <label>Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>  
          <label>Shop Name</label>
          <input
            type="text"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
          />
        </div>
        <div>  
          <label>Shop Number</label>
          <input
            type="number"
            value={shopNumber}
            onChange={(e) => setShopNumber(e.target.value)}
          />
        </div>
        <div>
          <p>Already Signed In Once</p>
          <button>
            <FcGoogle /> <span>Sign in with Google</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;