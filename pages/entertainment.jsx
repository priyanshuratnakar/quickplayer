import { Flex, Text, Button } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import React, { useState, useEffect } from "react";
import { RWebShare } from "react-web-share";
import { arr } from "../database/entertainment.db";
import styles from '../styles/Player.module.css'


export default function Home() {
  let [prevIndex, setPrevIndex] = useState();
  let [links, setLinks] = useState([]);
  let [id, setId] = useState(Math.floor(Math.random() * 40));
  let sameLink1 = "https://www.youtube.com";

  return (
    <div className={styles.container}>      
    <div className="player">
      <Flex flexDir={"column"} justify={"center"} paddingBottom={"38px"} height={"100vh"}>
        <Flex
          flexDir={"column"}
          align={"center"}
          marginTop={"67px"}
          marginLeft={"11"}
        >
          <meta name="viewport" content="width=1024"></meta>
          <ReactPlayer
            width={"1016px"}
            height={"579px"}
            style={{ zIndex: "3" }}
            playsInline={true}
            className="react-player"
            playing={true}
            controls={true}
            volume={0.75}
            pip={true}
            url={sameLink1 + arr[id]}
          />

          <Flex
            paddingTop={"72px"}
            justifyContent={"space-between"}
            width={"1016px"}
          >
            <Flex>
              <Button
                width={"170px"}
                border={"1px solid #383636"}
                color={"white"}
                background={""}
                _hover={{ backgroundColor: "#FF3465", color: "white" }}
                onClick={() => {
                  setId(prevIndex);
                  setPrevIndex(prevIndex - 1);
                }}
              >
                Previous
              </Button>
              <Button
                width={"170px"}
                marginLeft={"49px"}
                border={"1px solid #383636"}
                color={"white"}
                background={""}
                _hover={{ backgroundColor: "#FF3465", color: "white" }}
                onClick={() => {
                  setPrevIndex(id)
                  setId(Math.floor(Math.random() * 268));
                  console.log(sameLink1 + arr[id], id);
                }}
              >
                Next
              </Button>
            </Flex>

            <div>
              <RWebShare
                data={{
                  text: "Hey, check out this amazing product Quick Player, Enjoy content the new way. Play random videos add-free.",
                  url: "https://www.quickplayer.xyz",
                  title: "QuickPlayer - play random videos ads free.",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <Button
                  width={"176px"}
                  height={"44px"}
                  color={"white"}
                  background={""}
                  _hover={{ backgroundColor: "white", color: "#FF3465" }}
                >
                  Share with friends ??????
                </Button>
              </RWebShare>
            </div>
          </Flex>
        </Flex>


      </Flex>
    </div>
    </div>
  );
}
