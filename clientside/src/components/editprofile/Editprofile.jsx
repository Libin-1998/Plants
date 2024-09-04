import React, { useEffect, useState } from "react";
import "./Editprofile.css";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Editprofile() {
  const { id } = useParams();

  const [data, Setdata] = useState({});
  const [list,Setlist]=useState({})

  useEffect(() => {
    axios
      .get(`https://plants-96s1.onrender.com/api/auths/profile/${id}`)
      .then((response) => {
        console.log(response);
        Setdata(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
      <div className="editprofilepage">
        <div class="container editprofile">
          <div class="editprofileheading">Edit Profile</div>
          <form action="" class="editprofileform">
            <input
              required=""
              class="editprofileinput"
              type="text"
              name="name"
              id="name"
              placeholder="name"
              value={data.name}
            />
            <input
              required=""
              class="editprofileinput"
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              value={data.email}

            />
            <input
              required=""
              class="editprofileinput"
              type="text"
              name="phone"
              id="password"
              placeholder="phone"
              value={data.phone}

            />
            <input
              required=""
              class="editprofileinput"
              type="file"
              name="image"
              id="image"
              placeholder="image"

            />

            <button class="editprofilelogin-button"
              type="submit" >Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
