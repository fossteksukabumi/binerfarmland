import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  CheckoutContainer,
  CheckoutLeft,
  CheckoutRight,
  InputGroup,
  Input,
  Label,
  PaymentMethod,
  CartList,
  CartItem,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductPrice,
  CheckoutButton,
  SummarySection,
  SummaryRow,
  SummaryLabel,
  SummaryValue,
} from "./Checkout.style";

const Checkout = () => {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  const [contact, setContact] = useState("");
  const [country, setCountry] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [saveInfo, setSaveInfo] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("QRIS");
  const [courier, setCourier] = useState("");
  const [shippingCost, setShippingCost] = useState(0);
  const [qrisImage, setQrisImage] = useState(""); // State untuk menyimpan QRIS image

  const totalHarga = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const finalTotal = totalHarga + shippingCost;

  const handleCheckout = async () => {
    const waNumber = "6289613640494"; // Ganti dengan nomor admin
    let message = `Halo, saya ingin konfirmasi pembayaran.\n\n` +
      `Nama: ${firstName} ${lastName}\n` +
      `Alamat: ${address}, ${apartment ? apartment + ", " : ""}${selectedCity}, ${postalCode}, ${country}\n` +
      `Kontak: ${contact}\n` +
      `Metode Pembayaran: ${paymentMethod}\n` +
      `Total: Rp ${finalTotal.toLocaleString()}\n`;

    if (paymentMethod === "QRIS") {
      message += `\nLink Pembayaran QRIS: ${qrisImage}\n(Silakan scan QR dan kirim bukti pembayaran ke WhatsApp ini)\n`;
    }

    message += `\nTerima kasih.`;

    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  };

  // Data statis untuk provinsi dan kota
  const provinces = [
    { id: "1", name: "Jawa Barat" },
    { id: "2", name: "Jawa Tengah" },
    { id: "3", name: "Jawa Timur" },
    { id: "4", name: "DKI Jakarta" },
  ];

  const cities = {
    "1": [
      { id: "1", name: "Bandung" },
      { id: "2", name: "Bogor" },
    ],
    "2": [
      { id: "3", name: "Semarang" },
      { id: "4", name: "Solo" },
    ],
    "3": [
      { id: "5", name: "Surabaya" },
      { id: "6", name: "Malang" },
    ],
    "4": [
      { id: "7", name: "Jakarta" },
      { id: "8", name: "Bekasi" },
    ],
  };

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedCity(""); // Reset city when province changes
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleCourierChange = (e) => {
    const selectedCourier = e.target.value;
    setCourier(selectedCourier);

    // Set shipping cost based on selected courier
    switch (selectedCourier) {
      case "jne":
        setShippingCost(10000); // Contoh biaya untuk JNE
        break;
      case "tiki":
        setShippingCost(15000); // Contoh biaya untuk TIKI
        break;
      case "pos":
        setShippingCost(20000); // Contoh biaya untuk POS Indonesia
        break;
      default:
        setShippingCost(0); // Reset jika tidak ada kurir yang dipilih
    }
  };

  const mockPayment = async () => {
    // Simulasi delay untuk meniru permintaan jaringan
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status_code: '201',
          actions: [
            {
              url: 'https://qris.id/api-doc/assets/img/MPM_QRIS_Dasar.jpg' // Ganti dengan URL QRIS yang sesuai
            }
          ]
        });
      }, 1000); // Simulasi delay 1 detik
    });
  };
  
  const handlePayment = async () => {
    // Validasi input
    if (!contact || !country || !firstName || !lastName || !address || !selectedProvince || !selectedCity || !postalCode) {
      alert("Silakan lengkapi semua informasi yang diperlukan.");
      return;
    }
  
    try {
      const data = await mockPayment();
  
      if (data.status_code === '201') {
        setQrisImage(data.actions[0].url);
      } else {
        console.error("Error creating QRIS payment:", data);
      }
    } catch (error) {
      console.error("Error during payment process:", error);
    }
  };

  return (
    <CheckoutContainer>
      <CheckoutLeft>
        <h5>Contact</h5>
        <InputGroup>
          <Input type="text" placeholder="Email atau No HP" value={contact} onChange={(e) => setContact(e.target.value)} required />
        </InputGroup>

        <h5>Delivery</h5>
        <Label>Negara</Label>
        <InputGroup>
          <select value={country} onChange={(e) => setCountry(e.target.value)} required>
            <option value="">Pilih Negara</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Singapore">Singapore</option>
          </select>
        </InputGroup>

        <InputGroup>
          <Input type="text" placeholder="First Name (Opsional)" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <Input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </InputGroup>

        <InputGroup>
          <Input type="text" placeholder="Alamat" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </InputGroup>

        <InputGroup>
          <Input type="text" placeholder="Apartment, suite, etc (Opsional)" value={apartment} onChange={(e) => setApartment(e.target.value)} />
        </InputGroup>
        
        <Label>Provinsi</Label>
        <InputGroup>
          <select value={selectedProvince} onChange={handleProvinceChange} required>
            <option value="">Pilih Provinsi</option>
            {provinces.map((province) => (
              <option key={province.id} value={province.id}>
                {province.name}
              </option>
            ))}
          </select>
        </InputGroup>

        <Label>Kota</Label>
        <InputGroup>
          <select value={selectedCity} onChange={handleCityChange} required>
            <option value="">Pilih Kota</option>
            {selectedProvince && cities[selectedProvince]?.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </InputGroup>

        <InputGroup>
          <Input type="text" placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required />
        </InputGroup>

        <InputGroup>
          <input type="checkbox" checked={saveInfo} onChange={() => setSaveInfo(!saveInfo)} />
          <Label>Simpan informasi untuk pemesanan berikutnya</Label>
        </InputGroup>

        <h5>Shipping Method</h5>
        <InputGroup>
          <select value={courier} onChange={handleCourierChange}>
            <option value="">Pilih Jasa Ekspedisi</option>
            <option value="jne">JNE</option>
            <option value="tiki">TIKI</option>
            <option value="pos">POS Indonesia</option>
          </select>
        </InputGroup>
        <p>Biaya Pengiriman: Rp {shippingCost.toLocaleString()}</p>

        <PaymentMethod>
          <h5>Payment</h5>
          <label>
            <input type="radio" value="QRIS" checked={paymentMethod === "QRIS"} onChange={(e) => setPaymentMethod(e.target.value)} />
            QRIS
          </label>
          <label>
            <input type="radio" value="COD" checked={paymentMethod === "COD"} onChange={(e) => setPaymentMethod(e.target.value)} />
            COD (Bayar di Tempat)
          </label>

          {paymentMethod === "QRIS" && (
            <div>
              <button onClick={handlePayment}>Dapatkan QRIS</button>
              {qrisImage && (
                <div>
                  <p>Scan kode QR untuk pembayaran:</p>
                  <img src={qrisImage} alt="QRIS Payment" />
                  <p>Total: Rp {finalTotal.toLocaleString()}</p>
                </div>
              )}
            </div>
          )}

          {paymentMethod === "COD" && <p>Total Bayar: Rp {finalTotal.toLocaleString()}</p>}
        </PaymentMethod>
      </CheckoutLeft>

      <CheckoutRight>
        {/* Replace this in your Checkout.jsx */}
        <h5>Daftar Belanja</h5>
        <CartList>
          {cartItems.map((item, index) => (
            <CartItem key={index}>
              <ProductImage src={item.image} alt={item.name} />
              <ProductDetails>
                <ProductName>{item.name} (x{item.quantity})</ProductName>
                <ProductPrice>Rp {(item.price * item.quantity).toLocaleString()}</ProductPrice>
              </ProductDetails>
            </CartItem>
          ))}
        </CartList>

        <SummarySection>
          <SummaryRow>
            <SummaryLabel>Total Produk:</SummaryLabel>
            <SummaryValue>Rp {totalHarga.toLocaleString()}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Ongkir:</SummaryLabel>
            <SummaryValue>Rp {shippingCost.toLocaleString()}</SummaryValue>
          </SummaryRow>
          <SummaryRow isTotal>
            <SummaryLabel>Total Bayar:</SummaryLabel>
            <SummaryValue>Rp {finalTotal.toLocaleString()}</SummaryValue>
          </SummaryRow>
        </SummarySection>

        <CheckoutButton onClick={handleCheckout}>Konfirmasi Pembayaran</CheckoutButton>
      </CheckoutRight>
    </CheckoutContainer>
  );
};

export default Checkout;
