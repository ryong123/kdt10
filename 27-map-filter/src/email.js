import React, { useState } from 'react';

function UserInfoForm() {
  // 사용자 정보를 관리하는 상태
  const [userInfo, setUserInfo] = useState({
    name: '코디',
    email: 'cody@example.com'
  });

  // 입력된 사용자 정보 목록을 관리하는 상태
  const [userList, setUserList] = useState([]);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setUserList([...userList, userInfo]);
    setUserInfo({ name: '', email: '' }); // 입력 필드 초기화
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleChange}
          placeholder="이름"
        />
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          placeholder="이메일"
        />
        <button onClick={handleSubmit}>등록</button>
      </div>
      <div>
        <ul>
          {userList.map((user, index) => (
            <li key={index}>{`${user.name} (${user.email})`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserInfoForm;