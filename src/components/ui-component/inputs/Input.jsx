import styles from "./Input.module.css";
import { useEffect, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FaXmark, FaCheck, FaClock, FaMinus } from "react-icons/fa6";

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
  const [name, setName] = useState("");
  const [filteredData, setFilteredData] = useState(null);
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
    if (name === "") {
      setFilteredData(null);
      return;
    }

    const newData = teachers.filter((teacher) =>
      teacher.fullname.toLowerCase().includes(name.toLowerCase()),
    );

    setFilteredData(() =>
      teachers.filter((teacher) =>
        teacher.fullname.toLowerCase().includes(name.toLowerCase()),
      ),
    );
  }, [name]);

  function handleSelect(teacher) {
    setFilteredData(null);
    setName(teacher.fullname);
  }

  return (
    <div className={styles.selectOptions}>
      <input
        type="search"
        placeholder="search by name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {filteredData && (
        <ul>
          {filteredData.map((teacher) => (
            <li key={teacher.id} onClick={() => handleSelect(teacher)}>
              {teacher.fullname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const InputAttendance = () => {
  const [name, setName] = useState(null);
  const [show, setShow] = useState(false);
  const statuses = [
    {
      id: 1,
      icon: <FaXmark />,
      status: true,
    },
    {
      id: 2,
      icon: <FaCheck />,
      status: false,
    },
    {
      id: 3,
      icon: <FaClock />,
      status: undefined,
    },
    {
      id: 4,
      icon: <FaMinus />,
      status: null,
    },
  ];

  function handleSelect(status) {
    setName(status);
    setShow(false);
  }

  return (
    <div className={styles.attendance}>
      <div onClick={() => setShow(true)}>
        {name?.status === null ? "" : name?.icon}
      </div>
      {show && (
        <ul>
          {statuses.map((status) => (
            <li key={status.id} onClick={() => handleSelect(status)}>
              {status.icon}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const InputCoin = () => {
  const [grade, setGrade] = useState(null);
  const [show, setShow] = useState(false);
  const coins = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function handleSelect(coin) {
    setGrade(coin);
    setShow(false);
  }

  return (
    <div className={styles.coins}>
      <div onClick={() => setShow(!show)}>{grade}</div>
      {show && (
        <ul>
          {coins.map((coin) => (
            <li key={coin} onClick={() => handleSelect(coin)}>
              {coin}
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
