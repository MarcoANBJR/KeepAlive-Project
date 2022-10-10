// import { useState } from "react";

// type InputProps = {
//     type: string,
//     placeholder: string,
//     border: boolean
// }

// export const Input = ({type, placeholder, border}: InputProps) => {
//     const [visible, setVisible] = useState(false);
//     const [focusUser, setFocusUser] = useState('false');
//     const [focusPassword, setFocusPassword] = useState('false');

//     return (
//         <Input
//             type="text"
//             placeholder="Usuário"
//             value={form.user}
//             border={visible}
//             onChange={(e) => setForm({
//                 ...form,
//                 user: e.target.value
//             })}
//             onFocus={() => setFocusUser('true')}
//             onBlur={() => setFocusUser('false')}
//         />
//     )
// } 