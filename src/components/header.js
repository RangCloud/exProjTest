import './header.css';
import React, { useState } from 'react';
import useMenuClose from './headerMenu';

const Header = () => {
    const [menuOpen, menuRef, menuHandler] =  useMenuClose(false);

    return (
    <div className="header">
        <div className="logo">로고</div>
        <div className="login-signup">
            <button onClick={menuHandler}
            ref={menuRef}>
                Portfolio
            </button>
        <menu isDropped={menuOpen}>
        <ul>
            <li>자유게시판</li>
            <li>모임 / 스터디</li>
            <li>면접 후기</li>
        </ul>
        <ul>
            <li>멘토링</li>
            <li>포폴 피드백</li>
        </ul>
        <ul>
            <li>클래스</li>
            <li>강의 Q/A</li>
        </ul>
        </menu>
        </div>
        <div className="login-signup">
            <button onClick={menuHandler}
            ref={menuRef}>
                Lecture
            </button>
        <menu isDropped={menuOpen}>
        <ul>
            <li>자유게시판</li>
            <li>모임 / 스터디</li>
            <li>면접 후기</li>
        </ul>
        <ul>
            <li>멘토링</li>
            <li>포폴 피드백</li>
        </ul>
        <ul>
            <li>클래스</li>
            <li>강의 Q/A</li>
        </ul>
        </menu>
        </div>
    </div>
    );
};

export default Header;