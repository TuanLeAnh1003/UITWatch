import React from "react";
import "./About.css";
import watch from './../../../Assets/Images/about.png';
import watch1 from './../../../Assets/Images/watch_about1.png';
import about1 from './../../../Assets/Images/about1.png';
import about2 from './../../../Assets/Images/about2.png';
import about3 from './../../../Assets/Images/about4.png';
import intro from './../../../Assets/Video/intro.mp4';
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
            <div class="row-three">
            <div class="column left" >
                <img src={watch1} style={{width:'100%'}} />
            </div>
            <div class="column right" >
                <h2>ĐỒNG HỒ CỦA UITWATCH</h2>
                <p class='row-2'>Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết kế đồng hồ dành riêng cho thị trường. Mức giá vô cùng hợp lý, chỉ từ 4 triệu đồng, khách hàng đã có thể lên tay những chiếc đồng hồ lịch lãm và đẳng cấp như những quý ông Châu Âu.</p>
                <button class='detail' type="button">CHI TIẾT</button>
            </div>
            </div>
            <div class="row-two container ">
                <img src={about1} style={{width:'100%'}} />
                <div class="text-block introduce-middle just">
                <h1 class='middle marg'>VỀ UITWATCH</h1>
                <div>
                <p class='line'>UITWatch là trang web bán đồng hồ uy tín tại Việt Nam với các mặt hàng giảm giá, hàng outlet cực hấp dẫn. Dù chỉ mới xuất hiện trên thị trường nhưng chất lượng đồng hồ và trải nghiệm mua sắm tại đây luôn được người dùng tin tưởng và đánh giá đây là một trong các trang web bán đồng hồ uy tín có giá cả cạnh tranh nhất hiện nay.</p>
                </div>
                <div class='introduce'>
                <div >
                <h1 class='middle-two'>WEBSITE UITWATCH</h1>
                </div>
                <video class='video' width="750" height="500" controls>
                <source src={intro} type="video/mp4"/>
                Your browser does not support the video tag.
                </video>
                </div>
            </div>
            </div>
            <div class="row-two container">
            <img src={about3}  style={{width:'100%'}} />
            <div class="text-block-founder">
            <h1 class='founder'>ĐỘI NGŨ LÃNH ĐẠO UITWATCH</h1>
            <div class='founder-line'>
            <p >Gặp gỡ nhau từ những ngày đầu tiên, UITWatch là một trong những chuỗi dữ án đã được hoàn thành
                bỡi những con người dưới đây. Với họ lĩnh vực thương mại điện tử là lĩnh vực mà họ luôn đánh giá cao và đâu từ tiền bạc lẫn thời gian, chất xám của mình để đưa UITWatch phát triển và vươn tầm quốc tế.</p>
            </div>
            
            </div>
            </div>
            <div class="row-two container padd">
                <img src={about2} style={{width:'100%'}} />
            <div class="text-block">
                <h1 class='foot-head'>LIÊN HỆ VỚI CHÚNG TÔI</h1>
                <div>
                <p class='foot-line'>Nếu có bất kỳ phản hồi gì về cửa hàng UITWatch. Hãy liên hệ với chúng tôi để được giải đáp sớm nhất.</p>
                </div>
                <div class='button-container-div'>
                <button class='go-to-detail' type="button">ĐẾN TRANG CHI TIẾT</button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default About;