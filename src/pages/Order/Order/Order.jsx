import Cover from "../../Shared/Cover/Cover";
import orderImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Order.css";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];

  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div className="mb-24">
      <Helmet>
        <title>MT Restaurant | Order Food</title>
      </Helmet>
      <Cover
        img={orderImg}
        title="Order Food"
        subTitle="Would you like to try a dish?"
      ></Cover>
      <Tabs
        className="max-w-screen-xl mx-auto"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className="flex justify-center items-center gap-12 mb-6 ">
          <Tab className="text-xl font-primary font-[500px] uppercase">
            Salad
          </Tab>
          <Tab className="text-xl font-primary font-[500px] uppercase">
            Pizza
          </Tab>
          <Tab className="text-xl font-primary font-[500px] uppercase">
            Soups
          </Tab>
          <Tab className="text-xl font-primary font-[500px] uppercase">
            Desserts
          </Tab>
          <Tab className="text-xl font-primary font-[500px] uppercase">
            Drinks
          </Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
