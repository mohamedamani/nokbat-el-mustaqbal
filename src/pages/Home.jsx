// صفحة رئيسية فيها روابط للصفحات الأخرى
import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>الصفحة الرئيسية</h1>
            <nav>
                <ul>
                    <li><a href="/login">تسجيل الدخول</a></li>
                    <li><a href="/profile">الملف الشخصي</a></li>
                    <li><a href="/lessons">الدروس</a></li>
                    <li><a href="/experiment3d">تجربة 3D</a></li>
                    <li><a href="/smartchat">الدردشة الذكية</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
