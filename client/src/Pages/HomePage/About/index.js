import React, { useEffect } from "react";
import Creator from "../../../Components/Creator/Creator";
import "./About.css";
import medImg from '../../../Assets/Images/Rectangle 15.png';
import vidImg from '../../../Assets/Images/image 3.png';
import bgImg from '../../../Assets/Images/Rectangle 387.png';

function About() {

    const creators = [{
        img: "",
        name: "Duy An",
        position: "C.E.O Communication",
        color: "#0474C6",
      }, {
        img: "",
        name: "Tuấn Lê",
        position: "Event & Activation",
        color: "#2CA05A",
      }, {
        img: "",
        name: "Hưng Phò",
        position: "Marketing & Entertainment",
        color: "#E25050",
      }, {
        img: "",
        name: "Quốc An",
        position: "Studios & Distribution",
        color: "#D1A67C",
      }, {
        img: "",
        name: "Mai Anh",
        position: "Cinemas & Service",
        color: "#F5859E",
      }];

      useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div className="about">
      <div className="row about-container">
        <div className="text-block">
          <h1 className="bottom">VỀ CHÚNG TÔI</h1>
          <div>
            <p className="line">
              Được thành lập tại Seoul – Hàn Quốc năm 2001. Với những gì đã đạt
              được, Julius đã trở thành một thương hiệu lớn mang tầm quốc tế năm
              2015.
            </p>
            <p className="line">
              Trải qua quá trình 17 năm phát triển, Julius được phái đẹp chào
              đón nhiệt liệt chào đón khi xuất hiện từ những ngày đầu tiên như
              Hàn Quốc sau đó lan tỏa và đăng ký hiệp hội Marid quốc tế trên 30
              nước trên thế giới như America, Canada, Mexico, Iran, Vietnam,
              India, Philippines, Thai Lan, Trung Quốc. etc.
            </p>
          </div>
        </div>
        <img src="" style={{ width: "50%" }} />
      </div>
      <div className="about-container-2">
        <div className="ctn-2-left">
          <img src={medImg} />
        </div>
        <div className="ctn-2-right">
          <h2>ĐỒNG HỒ CỦA UITWATCH</h2>
          <p className="row-2" style={{ textAlign: "justify" }}>
            Phillipe Auguste mang phong cách cổ điển, sang trọng với những thiết
            kế đồng hồ dành riêng cho thị trường. Mức giá vô cùng hợp lý, chỉ từ
            4 triệu đồng, khách hàng đã có thể lên tay những chiếc đồng hồ lịch
            lãm và đẳng cấp như những quý ông Châu Âu.
          </p>
          <button className="detail" type="button" style={{ border: "none" }}>
            CHI TIẾT
          </button>
        </div>
      </div>

      <div className=" about-container-3">
        <div className="about-child-container">
            <h2>VỀ UIT</h2>
            <p>UITWatch là trang web bán đồng hồ uy tín tại Việt Nam với các mặt hàng giảm giá, hàng outlet cực hấp dẫn. Dù chỉ mới xuất hiện trên thị trường nhưng chất lượng đồng hồ và trải nghiệm mua sắm tại đây luôn được người dùng tin tưởng và đánh giá đây là một trong các trang web bán đồng hồ uy tín có giá cả cạnh tranh nhất hiện nay.</p>
            <h2>WEBSITE UITWATCH</h2>
            <img src={vidImg} alt="" />
        </div>
        <div className="text-block-founder">
          <h2 className="founder">ĐỘI NGŨ LÃNH ĐẠO GOLFMAID</h2>
          <div className="founder-line">
            <p>
              Gặp gỡ nhau từ những ngày đầu tiên, GolfMaid là một trong những
              chuỗi dữ án đã được hoàn thành bỡi những con người dưới đây. Với
              họ lĩnh vực thương mại điện tử là lĩnh vực mà họ luôn đánh giá cao
              và đâu từ tiền bạc lẫn thời gian, chất xám của mình để đưa
              GolfMaid phát triển và vươn tầm quốc tế.
            </p>
          </div>

            <div className="theaterSystem__creaters">
            {creators.map((item, index)  => (
                <div key={index} className="theaterSystem__creater">
                    <Creator 
                        img={item.img}
                        name={item.name}
                        position={item.position}
                        color={item.color}
                    />
                </div>
            ))}
            </div>
        </div>
      </div>

      <div className="about-container-4">
        <div className="text-block">
          <h1 className="foot-head">LIÊN HỆ VỚI CHÚNG TÔI</h1>
          <div>
            <p className="foot-line" style={{width: "70%", textAlign: "center", margin: "0 auto"}}>
              Nếu có bất kỳ phản hồi gì về cửa hàng GolfMaid. Hãy liên hệ với
              chúng tôi để được giải đáp sớm nhất.
            </p>
          </div>
          <div className="button-container-div">
            <button className="go-to-detail" type="button" style={{border: "none"}}>
              ĐẾN TRANG CHI TIẾT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
