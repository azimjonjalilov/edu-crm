import styles from "./Input.module.css";
import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

export const InputPassword = ({
  label = "Password",
  placeholder = "",
  value,
  setValue = function () {},
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.password}>
      <label htmlFor={label}>{label}</label>
      <div>
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          id={label}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="button" onClick={() => setShow((prev) => !prev)}>
          {show ? <FaRegEyeSlash /> : <FaRegEye />}
        </button>
      </div>
    </div>
  );
};

export const InputEmail = ({
  label = "Email",
  placeholder = "",
  value,
  setValue = function () {},
}) => {
  return (
    <div className={styles.email}>
      <label htmlFor={label}>{label}</label>
      <input
        type="email"
        placeholder={placeholder}
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const InputSearch = ({
  placeholder = "",
  value,
  setValue = function () {},
}) => {
  return (
    <input
      className={styles.search}
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const InputText = ({
  label = "",
  placeholder = "",
  value,
  setValue = function () {},
}) => {
  return (
    <div className={styles.text}>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export const InputSelectOptions = () => {
  const [showData, setShowData] = useState([]);
  const [value, setValue] = useState("");
  const [isShow, setIsShow] = useState(false);
  const teachers = [
    {
      id: 1,
      fullname: "Muhammadali",
    },
    {
      id: 2,
      fullname: "Habibullo",
    },
    {
      id: 3,
      fullname: "Diyorbek",
    },
  ];

  useEffect(() => {
    const filteredData = teachers.filter((teacher) =>
      teacher.fullname.toLowerCase().includes(value.toLowerCase()),
    );
    setShowData(filteredData);
  }, [value]);

  function handleSelect(teacher) {
    setValue(teacher.fullname);
    setIsShow(false);
  }

  return (
    <div className={styles.selectOptions}>
      <input
        type="search"
        placeholder="search by name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {isShow && (
        <ul>
          {showData.map((teacher) => (
            <li key={teacher.id} onClick={() => handleSelect(teacher)}>
              {teacher.fullname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// const SelectSearch = ({ text, options, searchTerm, setSearchTerm, width }) => {
//   const [filteredOptions, setFilteredOptions] = useState(options);
//   const [showOptions, setShowOptions] = useState(false);

//   const handleSearch = (e) => {
//     const searchValue = e.target.value;
//     setSearchTerm(searchValue);
//     const filtered = options.filter((option) =>
//       option.toLowerCase().includes(searchValue.toLowerCase()),
//     );
//     setFilteredOptions(filtered);
//     setShowOptions(true);
//     if (searchValue) {
//       setShowOptions(true);
//     } else {
//       setShowOptions(false);
//     }
//   };

//   const handleSelect = (option) => {
//     setSearchTerm(option);
//     setShowOptions(false);
//     onSelect(option);
//   };

//   return (
//     <div
//       className={`${styles.formGroup} ${styles.formGroupWrapper}`}
//       style={{ width: `calc(${width}/14.4*1vw)` }}
//     >
//       <input
//         type="text"
//         className={styles.searchBox}
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <span
//         className={styles.text}
//         style={{ display: searchTerm ? "none" : "inline-block" }}
//       >
//         {text}
//       </span>

//       {showOptions && (
//         <ul className={showOptions ? `${styles.active}` : undefined}>
//           {filteredOptions.length > 0 ? (
//             filteredOptions.map((option, index) => (
//               <li key={index} onClick={() => handleSelect(option)}>
//                 {option}
//               </li>
//             ))
//           ) : (
//             <li>No options found</li>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };
