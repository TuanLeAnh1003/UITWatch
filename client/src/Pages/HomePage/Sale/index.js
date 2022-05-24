import React, { useState, useEffect } from 'react';
import './Sale.css';
import CategoryItem from '../../../Components/Category/CategoryItem/index';
import Product from '../../../Components/Product/index';
import ProductImageMain from './../../../Assets/Images/omega-watches.svg';
import ProductImg from './../../../Assets/Images/Rectangle 11.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductApi from '../../../Apis/ProductApi';
import UserApi from '../../../Apis/UserApi';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { Link } from 'react-router-dom'

function Sale() {
  const [brand, setBrand] = useState('')
  const [albert, setAlbert] = useState('')
  const [priceRange, setPriceRange] = useState('')
  const [glass, setGlass] = useState('')
  const [energyCore, setEnergyCore] = useState('')
  const [interfaceColor, setInterfaceColor] = useState('')
  const [caseColor, setCaseColor] = useState('')
  const [shape, setShape] = useState('')
  const [size, setSize] = useState('')
  const [waterRessitance, setWaterRessitance] = useState('')
  const [feature, setFeature] = useState('')

  const [productList, setProductList] = useState()

  console.log();

  const cateList = [
    {
      title: "THƯƠNG HIỆU",
      contentList: ["Rolex", "Seiko", "Casio", "Daniel Wellington", "Citizen", "Omega", "Hublot", "G-shock", "Epos - Thụy Sĩ", "Phillipe Auguste"]
    },
    {
      title: "TẦM GIÁ",
      contentList: ["0đ - 2.000.000đ", "2.000.000đ - 4.000.000đ", "4.000.000đ - 6.000.000đ", "6.000.000đ - 8.000.000đ", "8.000.000đ - 10.000.000đ", "10.000.000đ +"]
    },
    {
      title: "CHẤT LIỆU DÂY",
      contentList: ["Dây kim loại", "Dây nhựa / Cao su", "Dây da", "Dây lưới", "Dây vải", "Dây Titanium", "Dây da cá sấu"]
    }, 
    {
      title: "CHẤT LIỆU MẶT KÍNH",
      contentList: ["Kính cứng", "Kính Sapphire", "Kính nhựa"]
    },
    {
      title: "BỘ MÁY NĂNG LƯƠNG",
      contentList: ["Pin (Quartz)", "Cơ (Automatic)", "Năng lượng ánh sáng", "Vừa pin - vừa tự động"]
    },
    {
      title: "MÀU MẶT SỐ",
      contentList: ["Trắng", "Vàng", "Xà cừ", "Xanh", "Đen", "Đính đá", "Xám", "Nâu", "Khác"]
    },
    {
      title: "MÀU VỎ",
      contentList: ["Kim loại", "Vàng", "Vàng hồng", "Đen", "Trắng", "Khác"]
    },
    {
      title: "HÌNH DẠNG MẶT SỐ",
      contentList: ["Tròn", "Đặc biệt", "Chữ nhật", "Vuông"]
    },
    {
      title: "KÍCH THƯỚC MẶT SỐ",
      contentList: ["<29 mm", "30 - 34 mm", "35 - 39 mm", "40 - 43 mm", "> 44 mm"]
    },
    {
      title: "MỨC CHỐNG NƯỚC",
      contentList: ["Đi mưa nhỏ (3 ATM)", "Đi tắm (5 ATM)", "Đi bơi (10 ATM)", "Lặn biển (20 ATM)"]
    },
    {
      title: "TÍNH NĂNG",
      contentList: ["Chronograph", "World time", "Dạ quang", "Kính vòm", "Open heart", "La bàn", "Bluetooth", "Đo độ cao"]
    }
  ]

  useEffect(() => {
    ProductApi.getAll()
      .then((res) => {
        console.log(res);
        setProductList(res)
      })
  }, [])

  const [hideCate, setHideCate] = useState(false)

  const handleFilter = () => {
    ProductApi.filter({
      brand: brand,
      albert: albert, 
      priceRange: priceRange, 
      glass: glass, 
      energyCore: energyCore, 
      interfaceColor: interfaceColor, 
      caseColor: caseColor, 
      shape: shape, 
      size: size, 
      waterRessitance: waterRessitance, 
      feature: feature
    })
    .then((res) => {
      console.log(res)
      setProductList(res)
    })
  }
 
  return (
    <div className="sale" onClick={() => setHideCate(false)}>
      <div className="sale__category-bars" onClick={e => e.stopPropagation()}>
        <FontAwesomeIcon icon={solid("filter")} className="sale__bars-icon" onClick={() => setHideCate(!hideCate)} />
        {
          hideCate && 
          <div className="sale__category-bars--2">
            <div className="sale__category-gender">
              <Link to="/sale" className="sale__category-gender-item sale__category-gender-item--active">
                TẤT CẢ
              </Link>
              <div className="sale__category-gender-line"></div>
              <Link href="/sale" className="sale__category-gender-item">
                NAM
              </Link>
              <div className="sale__category-gender-line"></div>
              <Link href="/sale" className="sale__category-gender-item">
                NỮ
              </Link>
            </div>

            <div className="sale__category-line"></div>

            <div className="sale__category-type">
              <a href="/" className="sale__category-type-clock">Đồng hồ</a><br />
              <a href="/" className="sale__category-type-accessory">Phụ kiện</a>
            </div>

            {cateList.map((element, index) => index <= 3 && (
                <div key={index} className="sale__category-element">
                  <div className="sale__category-line"></div>

                  <CategoryItem
                    cate={index}
                    title={element.title}
                    contentList={element.contentList}
                    setBrand={setBrand}
                    setAlbert={setAlbert}
                    setPriceRange={setPriceRange}
                    setGlass={setGlass}
                    setEnergyCore={setEnergyCore}
                    setInterfaceColor={setInterfaceColor}
                    setCaseColor={setCaseColor}
                    setShape={setShape}
                    setSize={setSize}
                    setWaterRessitance={setWaterRessitance}
                    setFeature={setFeature}
                  ></CategoryItem>
                </div>
            )
            )}

            <button onClick={handleFilter}>Lọc</button>
          </div>  
        }
      </div>

      <div className="sale__category">
        <div className="sale__category-gender">
          <Link to="/sale" className="sale__category-gender-item sale__category-gender-item--active">
            TẤT CẢ
          </Link>
          <div className="sale__category-gender-line"></div>
          <Link to="/sale" className="sale__category-gender-item">
            NAM
          </Link>
          <div className="sale__category-gender-line"></div>
          <Link to="/sale" className="sale__category-gender-item">
            NỮ
          </Link>
        </div>

        <div className="sale__category-line"></div>

        <div className="sale__category-type">
          <a href="/" className="sale__category-type-clock">Đồng hồ</a><br />
          <a href="/" className="sale__category-type-accessory">Phụ kiện</a>
        </div>


        {cateList.map((element, index) => (
            <div key={index} className="sale__category-element">
              <div className="sale__category-line"></div>

              <CategoryItem
                cate={index}
                title={element.title}
                contentList={element.contentList}
                setBrand={setBrand}
                setAlbert={setAlbert}
                setPriceRange={setPriceRange}
                setGlass={setGlass}
                setEnergyCore={setEnergyCore}
                setInterfaceColor={setInterfaceColor}
                setCaseColor={setCaseColor}
                setShape={setShape}
                setSize={setSize}
                setWaterRessitance={setWaterRessitance}
                setFeature={setFeature}
              ></CategoryItem>
            </div>
        )
        )}

        <button onClick={handleFilter}>Lọc</button>

      </div>

      <div className="sale__product">
          <div className="sale__product-img">
            <img src={ProductImageMain} alt="" className="sale__product-img--main" />
          </div>
          <div className="sale__product-list">
            {
              productList?.map((element, index) => (
                <div key={index} className="sale__product-list-item">
                  <Product
                    productId={element._id}
                    img= {element.image}
                    name= {element.name}
                    type= {element.type}
                    price= {element.price}
                  ></Product>
                </div>
              ))
            }
          </div>
      </div>
    </div>
  )
}

export default Sale
