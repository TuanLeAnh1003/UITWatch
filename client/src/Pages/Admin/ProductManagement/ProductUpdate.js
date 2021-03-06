import React, { useState, useEffect } from 'react'
import './ProductCreate.css'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";
import ProductApi from '../../../Apis/ProductApi'

function ProductUpdate() {
  const [name, setName] = useState()
  const [image, setImage] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [discount, setDiscount] = useState()
  const [quantity, setQuantity] = useState()
  const [status, setStatus] = useState()
  const [company, setCompany] = useState()
  const [brand, setBrand] = useState()
  const [priceRange, setPriceRange] = useState()
  const [albert, setAlbert] = useState()
  const [glass, setGlass] = useState()
  const [energyCore, setEnergyCore] = useState()
  const [interfaceColor, setInterfaceColor] = useState()
  const [caseColor, setCaseColor] = useState()
  const [shape, setShape] = useState()
  const [size, setSize] = useState()
  const [waterRessitance, setWaterRessitance] = useState()
  const [feature, setFeature] = useState()

  const { productId } = useParams()
  const [productUpdate, setProductUpdate] = useState()

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    ProductApi.getProductById({ productId: productId })
    .then(async (res) => {
      console.log(res)
      await setProductUpdate(res)
    })
  }, [])

  const handleUpdateProduct = () => {
    ProductApi.updateProduct({
      productId: productId,
      name: name,
      image: image,
      description: description,
      price: price,
      discount: discount,
      quantity: quantity,
      status: status,
      company: company,
      brand: brand,
      priceRange: priceRange,
      albert: albert,
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
      console.log(res);
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'S???a s???n ph???m th??nh c??ng',
        showConfirmButton: false,
        timer: 2000
      })
      navigate('/admin/product-management')
    })
  }

  return (
    <form className="productMng-create">
      <div className="productMng-create-wrapper">
        <h1>S???A S???N PH???M</h1>
        <p>S???a s???n ph???m m???i UITWatch ??? ????y</p>
      </div>
      <div className="productMng-create-form">
        <div className="productMng-create-item">
          <p>T??n s???n ph???m</p>
          <input type="text" name="name" placeholder={productUpdate?.name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>Link h??nh ???nh</p>
          <input type="text" name="image" placeholder={productUpdate?.image} onChange={e => setImage(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>M?? t???</p>
          <input type="text" name="description" placeholder={productUpdate?.description} onChange={e => setDescription(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>Gi?? s???n ph???m</p>
          <input type="number" name="price" placeholder={productUpdate?.price} onChange={e => setPrice(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>Gi?? s???n ph???m sau khi gi???m</p>
          <input type="number" name="discount" placeholder={productUpdate?.discount} onChange={e => setDiscount(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>S??? l?????ng</p>
          <input type="number" name="quantity" placeholder={productUpdate?.quantity} onChange={e => setQuantity(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>T??nh tr???ng</p>
          <input type="text" name="status" placeholder={productUpdate?.status} onChange={e => setStatus(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>C??ng ty s???n xu???t</p>
          <input type="text" name="company" placeholder={productUpdate?.company} onChange={e => setCompany(e.target.value)}/>
        </div>
        <div className="productMng-create-item">
          <p>Th????ng hi???u</p>
          <select name="brand" onChange={e => setBrand(e.target.value)}>
            <option value={productUpdate?.type.brand}>{productUpdate?.type.brand}</option>
            <option value="Rolex">Rolex</option>
            <option value="Seiko">Seiko</option>
            <option value="Casio">Casio</option>
            <option value="Daniel Wellington">Daniel Wellington</option>
            <option value="Citizen">Citizen</option>
            <option value="Omega">Omega</option>
            <option value="Hublot">Hublot</option>
            <option value="G-shock">G-shock</option>
            <option value="Epos - Th???y S??">Epos - Th???y S??</option>
            <option value="Phillipe Auguste">Phillipe Auguste</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>T???m gi??</p>
          <select name="priceRange" onChange={e => setPriceRange(e.target.value)}>
            <option value={productUpdate?.type.priceRange}>{productUpdate?.type.priceRange}</option>
            <option value="0?? - 2.000.000??">0?? - 2.000.000??</option>
            <option value="2.000.000?? - 4.000.000??">2.000.000?? - 4.000.000??</option>
            <option value="4.000.000?? - 6.000.000??">4.000.000?? - 6.000.000??</option>
            <option value="6.000.000?? - 8.000.000??">6.000.000?? - 8.000.000??</option>
            <option value="8.000.000?? - 10.000.000??">8.000.000?? - 10.000.000??</option>
            <option value="10.000.000?? +">10.000.000?? +</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>Ch???t li???u d??y</p>
          <select name="albert" onChange={e => setAlbert(e.target.value)}>
            <option value={productUpdate?.type.albert}>{productUpdate?.type.albert}</option>
            <option value="D??y kim lo???i">D??y kim lo???i</option>
            <option value="D??y v???i">D??y v???i</option>
            <option value="D??y da">D??y da</option>
            <option value="D??y Titanium">D??y Titanium</option>
            <option value="D??y nh???a">D??y nh???a</option>
            <option value="D??y da c?? s???u">D??y da c?? s???u</option>
            <option value="D??y Cao Su">D??y Cao Su</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>Ch???t li???u m???t k??nh</p>
          <select name="glass" onChange={e => setGlass(e.target.value)}>
            <option value={productUpdate?.type.glass}>{productUpdate?.type.glass}</option>
            <option value="K??nh c???ng">K??nh c???ng</option>
            <option value="K??nh Sapphire">K??nh Sapphire</option>
            <option value="K??nh kho??ng">K??nh kho??ng</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>B??? m??y n??ng l?????ng</p>
          <select name="energyCore" onChange={e => setEnergyCore(e.target.value)}>
            <option value={productUpdate?.type.energyCore}>{productUpdate?.type.energyCore}</option>
            <option value="Pin (Quartz)">Pin (Quartz)</option>
            <option value="C?? (Automatic)">C?? (Automatic)</option>
            <option value="N??ng l?????ng ??nh s??ng">N??ng l?????ng ??nh s??ng</option>
            <option value="V???a pin - v???a t??? ?????ng">V???a pin - v???a t??? ?????ng</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>M??u m???t s???</p>
          <select name="interfaceColor" onChange={e => setInterfaceColor(e.target.value)}>
            <option value={productUpdate?.type.interfaceColor}>{productUpdate?.type.interfaceColor}</option>
            <option value="Tr???ng">Tr???ng</option>
            <option value="V??ng">V??ng</option>
            <option value="X?? c???">X?? c???</option>
            <option value="Xanh">Xanh</option>
            <option value="??en">??en</option>
            <option value="????nh ????">????nh ????</option>
            <option value="X??m">X??m</option>
            <option value="N??u">N??u</option>
            <option value="Kh??c">Kh??c</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>M??u v???</p>
          <select name="caseColor" onChange={e => setCaseColor(e.target.value)}>
            <option value={productUpdate?.type.caseColor}>{productUpdate?.type.caseColor}</option>
            <option value="Kim lo???i">Kim lo???i</option>
            <option value="V??ng">V??ng</option>
            <option value="V??ng h???ng">V??ng h???ng</option>
            <option value="??en">??en</option>
            <option value="Tr???ng">Tr???ng</option>
            <option value="Kh??c">Kh??c</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>H??nh d???ng m???t s???</p>
          <select name="shape" onChange={e => setShape(e.target.value)}>
            <option value={productUpdate?.type.shape}>{productUpdate?.type.shape}</option>
            <option value="Tr??n">Tr??n</option>
            <option value="?????c bi???t">?????c bi???t</option>
            <option value="Ch??? nh???t">Ch??? nh???t</option>
            <option value="Vu??ng">Vu??ng</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>K??ch th?????c m???t s???</p>
          <select name="size" onChange={e => setSize(e.target.value)}>
            <option value={productUpdate?.type.size}>{productUpdate?.type.size}</option>
            <option value="<29 mm">{"<"} 29 mm</option>
            <option value="30 - 34 mm">30 - 34 mm</option>
            <option value="35 - 39 mm">35 - 39 mm</option>
            <option value="40 - 43 mm">40 - 43 mm</option>
            <option value="> 44 mm"> {">"} 44 mm</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>M???c ch???ng n?????c</p>
          <select name="waterRessitance" onChange={e => setWaterRessitance(e.target.value)}>
            <option value={productUpdate?.type.waterRessitance}>{productUpdate?.type.waterRessitance}</option>
            <option value="??i m??a nh??? (3 ATM)">??i m??a nh??? (3 ATM)</option>
            <option value="??i t???m (5 ATM)">??i t???m (5 ATM)</option>
            <option value="??i b??i (10 ATM)">??i b??i (10 ATM)</option>
            <option value="L???n bi???n (20 ATM)">L???n bi???n (20 ATM)</option>
          </select>
        </div>
        <div className="productMng-create-item">
          <p>T??nh n??ng</p>
          <select name="feature" onChange={e => setFeature(e.target.value)}>
            <option value={productUpdate?.type.feature}>{productUpdate?.type.feature}</option>
            <option value="Chronograph">Chronograph</option>
            <option value="World time">World time</option>
            <option value="D??? quang">D??? quang</option>
            <option value="K??nh v??m">K??nh v??m</option>
            <option value="Open heart">Open heart</option>
            <option value="La b??n">La b??n</option>
            <option value="Bluetooth">Bluetooth</option>
            <option value="??o ????? cao">??o ????? cao</option>
          </select>
        </div>
      </div>
      <div className="productMng-create-func">
        <div onClick={handleUpdateProduct}>C???P NH???T</div>
        <Link className="productMng-create-func--cancel" to="/admin/productMng-management">H???Y</Link>
      </div>
    </form>
  )
}

export default ProductUpdate
