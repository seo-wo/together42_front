import React, { useState } from 'react';
import '@css/Auth/AuthForm.scss';

interface Props {
  mode: boolean;
}

function AuthForm(props: Props) {
  const { mode } = props;
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passCheck, setPassCheck] = useState('');

  const onSubmit = (e: any) => {
    e.preventDefault();
    // write this code with data!
  };

  const onChange = (e: any) => {
    if (e.target.id === 'id') setId(e.target.value);
    else if (e.target.id === 'password') setPassword(e.target.value);
    else setPassCheck(e.target.value);
  };

  return (
    <div className="authForm">
      <form className="authForm--form" onSubmit={onSubmit}>
        <div className="authForm--forFlex">
          <div className="authForm--label">
            <span>아이디</span>
          </div>
          <input
            className="authForm--input"
            id="id"
            placeholder="인트라 id 입력"
            onChange={onChange}
            value={id}
          ></input>
        </div>
        <div className="authForm--forFlex">
          <div className="authForm--label">
            <span>비밀번호</span>
          </div>
          <input
            className="authForm--input password"
            id="password"
            placeholder="문자+숫자로 9자 이상"
            onChange={onChange}
            value={password}
          ></input>
        </div>
        {mode && (
          <div className="authForm--forFlex">
            <div className="authForm--label">
              <span>비번확인</span>
            </div>
            <input
              className="authForm--input passCheck"
              id="passCheck"
              placeholder="비밀번호 재입력"
              onChange={onChange}
              value={passCheck}
            ></input>
          </div>
        )}
        <button className="authForm--button">{mode ? '회원가입' : '로그인'}</button>
      </form>
    </div>
  );
}

export default AuthForm;