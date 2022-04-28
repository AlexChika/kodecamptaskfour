// import React from "react";
// import { useState } from "react";
// const List = () => {
//   const values = [45, 1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 5, 7, 8, 7, 8, 9, 9];
//   const unique = [...new Set(values)];
//   const getUnique = (uni) => {
//     let array = [];
//     uni.forEach((val) => {
//       if (!array.includes(val)) {
//         array.push(val);
//       }
//     });
//     return array.sort((a, b) => {
//       return a - b;
//     });
//   };
//   console.log(getUnique(values));
//   const [show, setShow] = useState(false);
//   return <div></div>;
// };

// export default List;
// /*
//       <form onSubmit={handleForm}>
//         <h2>Welcome</h2>
//         <div className="input_con">
//           <label htmlFor="firstname">First Name</label>
//           <input
//             placeholder="Enter your firstname"
//             required
//             type="text"
//             name="firstname"
//             id="firstname"
//             value={inputs.firstname}
//             onChange={(e) =>
//               setInputs({ ...inputs, firstname: e.target.value })
//             }
//           />
//           <p></p>
//         </div>
//         <div className="input_con">
//           <label htmlFor="lastname">Last Name</label>
//           <input
//             placeholder="Enter your lastname"
//             required
//             type="text"
//             name="lastname"
//             id="lastname"
//             value={inputs.lastname}
//             onChange={(e) => setInputs({ ...inputs, lastname: e.target.value })}
//           />
//           <p></p>
//         </div>
//         <div className="input_con">
//           <label htmlFor="email">Email</label>
//           <input
//             placeholder="Enter your email"
//             required
//             type="email"
//             name="email"
//             id="email"
//             value={inputs.email}
//             onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
//           />
//         </div>
//         <p>Gender</p>
//         <div className="gender">
//           <div>
//             <label htmlFor="male">Male</label>
//             <input
//               onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
//               required
//               type="radio"
//               value="Male"
//               name="gender"
//               id="male"
//             />
//           </div>
//           <div>
//             <label htmlFor="female">Female</label>
//             <input
//               onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
//               required
//               type="radio"
//               value="Female"
//               name="gender"
//               id="female"
//             />
//           </div>
//         </div>
//         <div className="input_con">
//           <label htmlFor="address">Address</label>
//           <input
//             placeholder="Enter your Address"
//             type="text"
//             name="address"
//             id="address"
//             value={inputs.address}
//             onChange={(e) => setInputs({ ...inputs, address: e.target.value })}
//           />
//         </div>
//         <div className="input_con">
//           <label htmlFor="bio">Bio</label>
//           <input
//             placeholder="Enter a brief bio"
//             type="text"
//             name="bio"
//             id="bio"
//             value={inputs.bio}
//             onChange={(e) => setInputs({ ...inputs, bio: e.target.value })}
//           />
//         </div>
//         <input type="submit" value="Submit" />
//       </form>
// */
