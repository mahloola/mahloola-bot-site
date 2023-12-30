import { collection, getDocs } from "firebase/firestore";
import { db } from "../firestore";
import React from "react";

export default function Statistics() {
  const [serverCount, setServerCount] = React.useState(0);
  const [rollCount, setRollCount] = React.useState(0);
  const [userCount, setUserCount] = React.useState(0);
  const fetchPost = async () => {
    const querySnapshot = await getDocs(collection(db, "statistics"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setUserCount(doc.data().users);
      setRollCount(doc.data().rolls);
      setServerCount(doc.data().servers);
    });
  };
  React.useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="inline-flex items-center justify-center px-5 py-3 text-base font-light text-center text-white rounded-lg focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
      <table className="text">
        <thead className="tracking-tight text-l md:text-2xl xl:text-3xl">
          <tr>
            <th className="pr-4">Users</th>
            <th className="pl-4 pr-4">Rolls</th>
            <th className="pl-4">Servers</th>
          </tr>
        </thead>
        <tbody className="tracking-tight text-xl md:text-5xl xl:text-7xl">
            <tr>
                <td className="pr-4 lg:pr-8">
                {userCount?.toLocaleString('en-US')}
                </td>
                <td className="pl-4 lg:pl-8 pr-4 lg:pr-8">
                {rollCount?.toLocaleString('en-US')}
                </td>
                <td className="pl-4 lg:pl-8">
                {serverCount?.toLocaleString('en-US')}
                </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}
