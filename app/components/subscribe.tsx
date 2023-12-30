import { Autocomplete } from "@mui/material";
import { PayPalButtons } from "@paypal/react-paypal-js";
import TextField from "@mui/material/TextField";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firestore";
import React from "react";

export default function Subscribe() {
  const [player, setPlayer] = React.useState([]);
  const [statistics, setStatistics] = React.useState([]);
  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "statistics"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };
  React.useEffect(() => {
    fetchPost();
  }, []);
  const top100Films = [
    { label: "mahloola", year: 1994 },
    { label: "FunOrange", year: 1972 },
    { label: "Cookiezi", year: 1974 },
  ];
  return (
    <>
      <TextField label="Username" className={"text-white"} />
      <PayPalButtons
        style={{
          shape: "rect",
          color: "gold",
          height: 46,
          layout: "vertical",
        }}
        // disabled={!user || paidSub}
        fundingSource="paypal"
        createSubscription={(data, actions) => {
          return actions.subscription.create({
            plan_id: "P-5DC05698WC351562JMGZFV6Y", // production: $1.99 per month
          });
        }}
        // eslint-disable-next-line no-unused-vars
        onApprove={async (data, actions) => {
          await api.linkPaypalSubscription(data.subscriptionID);
          history.push("/payments/success");
        }}
        onError={(error) => {
          console.error(error); 
          setPaypalError(error);
        }}
      />
    </>
  );
}
