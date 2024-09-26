import React, { useState } from "react";
import TestpointCard from "../../components/TestpointCard"
import SamsungLogo from "../../assets/images/samsung-logo.svg"
import RedmiLogo from "../../assets/images/redmi-logo.svg"
import HuaweiLogo from "../../assets/images/huawei-logo.svg"

const Testpoints = () => {
  return (
    <section className="bg-gradient-to-r px-5 from-gray-800 via-gray-900 to-black text-white py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Test Points</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestpointCard logo={SamsungLogo} brand={"Samsung"}/>
          <TestpointCard logo={RedmiLogo} brand={"Redmi"}/>
          <TestpointCard logo={HuaweiLogo} brand={"Huawei"}/>
        </div>
      </div>
    </section>
  )
}

export default Testpoints;
