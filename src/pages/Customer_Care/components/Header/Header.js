import React from "react";
import './Header.css'

function Header() {
    return(
        <div className="header">
            <div>
                <button className="CSKHButton">
                    CSKH
                </button>
                <button className="LogoutButton">
                    Đăng xuất
                </button>
            </div>
        </div>
    )
}

export default Header;