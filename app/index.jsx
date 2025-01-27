import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import axios from "axios";

const CRUD = () => {
  const url = "http://localhost:3000/posts";
  // Get request fetch
  const getfetchdata = async () => {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const formatted = await data.json();
    console.log("Fetch get data", formatted);
  };

  // Get request using axios
  const getaxiosdata = async () => {
    try {
      const response = await axios.get(url);
      console.log("Axios response", response.data);
    } catch (e) {
      console.log(e);
    }
  };
  // Post request using fetch
  const postfetchdata = async () => {
    try {
      const data = {
        title: "Learn API requests in react native",
        body: "learn it",
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responsedata = await response.json();
      console.log(responsedata);
    } catch (e) {
      console.log("error", e);
    }
  };

  // post reqquest using AXIOS
  const postusinaxios = async () => {
    const response = await axios.post(url, {
      title: "Post request using axios",
    });
    console.log(response.data);
  };
  // put request using axios
  const putRequestFetch = async () => {
    const id = "b213"; // Use the correct ID from your JSON
    const value = {
      title: "Updated using fetch 2",
    };

    try {
      const response = await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const result = await response.json();
      console.log("PUT request result:", result);
    } catch (error) {
      console.error("Error during PUT request:", error.message || error);
    }
  };

  // put request using axios
  const axiosput = async () => {
    try {
      id = "da6e";
      const data = await axios.put(`http://localhost:3000/posts/${id}`, {
        title: "Updated using axios",
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  // Delete request using fetch
  const fetchdelete = async () => {
    id = "da6e";
    const data = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const formatted = await data.json();
    console.log(formatted);
  };
  return (
    <View>
      <Button onPress={getfetchdata} title="Fetch Get method" />
      <Text>--------</Text>
      <Button onPress={getaxiosdata} title="axios Get method" />
      <Text>--------</Text>
      <Button onPress={postfetchdata} title="fetch post data" />
      <Text>--------</Text>
      <Button onPress={postusinaxios} title="axios post request" />
      <Text>--------</Text>
      <Button onPress={putRequestFetch} title="put request using fetch" />
      <Text>--------</Text>
      <Button onPress={axiosput} title="put request using axios" />
      <Text>--------</Text>
      <Button onPress={fetchdelete} title="delete request using fetch" />
    </View>
  );
};

export default CRUD;
