import React from "react";
import CategoryCard from "../../components/CategoryCard";

const Categories = () => {
  return (
    <div className="categories">
      <CategoryCard
        heading={"Gaming accessories"}
        btnTitle={"See more"}
        image={[
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_2x._SY232_CB667159063_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_2x._SY232_CB667159063_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_2x._SY232_CB667159060_.jpg",
        ]}
        multipleImage
      />
      <CategoryCard
        heading={"Shop by Category"}
        btnTitle={"Shop now"}
        image={[
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer240x._SY170_CB468850970_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_240X._SY170_CB438749318_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg",
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Toys240X._SY170_CB468851693_.jpg",
        ]}
        multipleImage
      />
      <CategoryCard
        heading={"Health & Personal Care"}
        btnTitle={"Shop now"}
        image={
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg"
        }
      />
      <div></div>

      <CategoryCard
        heading={"Dresses"}
        btnTitle={"Shop now"}
        image={
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_2X._SY608_CB626369146_.jpg"
        }
      />
      <CategoryCard
        heading={"Shop activity trackers and smartwatches"}
        btnTitle={"Shop now"}
        image={
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
        }
      />
      <CategoryCard
        heading={"For your Fitness Needs"}
        btnTitle={"Shop now"}
        image={
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
        }
      />
      <CategoryCard
        heading={"Computers & Accessories"}
        btnTitle={"Shop now"}
        image={
          "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_2x._SY608_CB431800964_.jpg"
        }
          />
          
    </div>
  );
};

export default Categories;
