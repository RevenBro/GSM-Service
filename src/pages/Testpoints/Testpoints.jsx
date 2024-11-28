import React, { useState } from "react";
import TestpointCard from "../../components/TestpointCard"
import SamsungLogo from "../../assets/images/samsung-logo.svg"
import RedmiLogo from "../../assets/images/redmi-logo.svg"
import HuaweiLogo from "../../assets/images/huawei-logo.svg"
import PocoLogo from "../../assets/images/poco-logo.png"
import { useNavigate } from "react-router-dom";

const Testpoints = () => {
  const navigate = useNavigate()

  const handleBrandClick = (brand) => {
    navigate(`/testpoints/${brand}`);
  };
  return (
    <section className="bg-gradient-to-r px-5 from-gray-800 via-gray-900 to-black text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Test Points</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestpointCard onclick={() => handleBrandClick('samsung')} logo={SamsungLogo} brand={"Samsung"} body={`Mavjud modellar soni: 16`}/>
          <TestpointCard onclick={() => handleBrandClick('redmi')} logo={RedmiLogo} brand={"Redmi"} body={`Mavjud modellar soni: 44`}/>
          <TestpointCard onclick={() => handleBrandClick('poco')} logo={PocoLogo} brand={"Poco"} body={`Mavjud modellar soni: 11`}/>
          <TestpointCard onclick={() => handleBrandClick('huawei')} logo={HuaweiLogo} brand={"Huawei"} body={`Mavjud modellar soni: 0`}/>
        </div>
      </div>
    </section>
  )
}

export default Testpoints;
