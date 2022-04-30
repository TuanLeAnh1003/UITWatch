import React from "react";
import "./About.css";
import watch from './../../../Assets/Images/about.png';
import watch1 from './../../../Assets/Images/watch_about1.png';
import about1 from './../../../Assets/Images/about1.png';
import about2 from './../../../Assets/Images/about2.png';
function About() {
    return (
        <div className='about'>
            <div class="row container">
            <img src={watch}  style={{width:'100%'}} />
            <div class="text-block">
                <h1 class='bottom'>VỀ CHÚNG TÔI</h1>
                <div>
                <p class='line'>Được thành lập tại Seoul – Hàn Quốc năm 2001. Với những gì đã đạt được, Julius đã trở thành một thương hiệu lớn mang tầm quốc tế năm 2015.</p>
                <p class='line'>Trải qua quá trình 17 năm phát triển, Julius được phái đẹp chào đón nhiệt liệt chào đón khi xuất hiện từ những ngày đầu tiên như Hàn Quốc sau đó lan tỏa và đăng ký hiệp hội Marid quốc tế trên 30 nước trên thế giới như America, Canada, Mexico, Iran, Vietnam, India, Philippines, Thai Lan, Trung Quốc. etc.</p>
                </div>
            </div>
            </div>
            <div class="row-two">
            <div class="column left" >
                <img src={watch1} style={{width:'100%'}} />
            </div>
            <div class="column right" >
                <h2>ĐỒNG HỒ CỦA UITWATCH</h2>
                <p>Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết kế đồng hồ dành riêng cho thị trường. Mức giá vô cùng hợp lý, chỉ từ 4 triệu đồng, khách hàng đã có thể lên tay những chiếc đồng hồ lịch lãm và đẳng cấp như những quý ông Châu Âu.</p>
                <button class='detail' type="button">CHI TIẾT</button>
            </div>
            </div>
            <div class="row">
                <img src={about1} style={{width:'100%'}} />
            </div>
            <div class="row">

            </div>
            <div class="row">
                <img src={about2} style={{width:'100%'}} />
            </div>
        </div>
    );
}

export default About;