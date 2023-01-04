import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <Wrapper>
      <Link href={"/"}>
        <h1>TODO</h1>
      </Link>
      {token ? (
        <button
          onClick={() => {
            localStorage.removeItem("token");
          }}
        >
          로그아웃
        </button>
      ) : (
        <div>
          <Link href={"/auth/login"}>
            <button>로그인</button>
          </Link>
          <Link href={"/auth/signup"}>
            <button>회원가입</button>
          </Link>
        </div>
      )}
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  /* 레이아웃 */
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 0 70px 0 40px;
  height: 80px;
  width: 100%;
  top: 0px;
  box-sizing: border-box;
  z-index: 5;
  border-bottom: 2px solid white;

  /* 색상 */
  color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.2);

  /* 폰트 */
  font-size: 1.5rem;

  button {
    height: 25px;
    margin: 10px;
  }
`;
