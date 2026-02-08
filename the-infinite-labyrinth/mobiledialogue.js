
function advanceOpeningMobile() {
          if (dialogue.opening === 1) {
        if (!dialogue.openingHasPlayed) {
            dialogue.blockArrowTravel = true;
           p1.style.display = "none";
           pressEnter.style.display = "none";
           p2.style.display = "block";
           k.style.display = "none";
           kn.style.display = "block";
           penser.play();
           dialogue.opening++;
           return;
        }
       } else if (dialogue.opening === 2) {
           p2.style.display = "none";
           p3.style.display = "block";
           b.style.display = "block";
           kn.style.display = "none";
           terminalwaking.style.display = "block";
           terminalsleep.style.display = "none";
           dialogue.opening++;
           return;
       } else if (dialogue.opening === 3) {
           p3.style.display = "none";
              p4.style.display = "block";
              stmion.play();
              b.style.display = "none";
              st.style.display = "block";
              terminalwaking.style.display = "none";
              terminal.style.display = "block";
           dialogue.opening++;
           return;
       } else if (dialogue.opening === 4) {
               p4.style.display = "none";
                  p5.style.display = "block";
                  bs.style.display = "block";
                  st.style.display = "none";
           dialogue.opening++;
           return;
       } else if (dialogue.opening === 5) {
                   p5.style.display = "none";
                  p6.style.display = "block";
                  st.style.display = "block";
                  bs.style.display = "none";
           dialogue.opening++;
           return;
       } else if (dialogue.opening === 6) {
                   p6.style.display = "none";
                  p7.style.display = "block";
                  b.style.display = "block"; //omg!
                  st.style.display = "none";
           dialogue.opening++;
           return;
       } else if (dialogue.opening === 7) {
           p7.style.display = "none";
                  p8.style.display = "block";
                  st.style.display = "block";
                  b.style.display = "none";
           dialogue.opening++;
           return;
       } else if (dialogue.opening === 8) {
               p8.style.display = "none";
                  p9.style.display = "block";
                  st.style.display = "block";
           dialogue.opening++;
           return;
       } else if (dialogue.opening === 9) {
                   p9.style.display = "none";
                  p10.style.display = "block";
                  k.style.display = "block"; //we'll take you up on that
                  st.style.display = "none";
           dialogue.opening++;
           return;
       } else if (dialogue.opening === 10) {
               p10.style.display = "none";
                  p11.style.display = "block";
                  b.style.display = "block";
                  k.style.display = "none";
           dialogue.opening++;
           return;
       } else if (dialogue.opening === 11) {
                  p11.style.display = "none";
                  p12.style.display = "block";
                  st.style.display = "block";
                  b.style.display = "none";
           dialogue.opening++;
           return;
       } else if (dialogue.opening === 12) {
           p12.style.display = "none";
                  p13.style.display = "block";
                  stt.style.display = "block";
                  st.style.display = "none";
           dialogue.opening++;
           return;
       } else if (dialogue.opening === 13) {
           p13.style.display = "none";
                  p14.style.display = "block";
                  st.style.display = "block";
                  stt.style.display = "none";
           dialogue.opening++;
           return;
       } else if (dialogue.opening === 14) {
                  notifTwo.style.display = "block";
                  notificationLevel.two = true;
                  p14.style.display = "none";
                  st.style.display = "none";
                  dialogue.opening = true;
                  dialogue.notOnMobile = true
                  chapter1banner.style.display = "block";
                  bannerDecay1();
                  notifnoise.play();
                  dialogue.blockArrowTravel = false;
                  document.cookie = "open=open;";
                  document.cookie = "lobbyThree=lobbyThree"; //skip to chapter 3 jump to chapter three delete when done testing
                advanceButt.style.display = "none";
                }
       }


function ladderMobile() {
  if (!dialogue.ladderDialogue) {
      if (dialogue.ladder === 1) {
        zo1.style.display = "none";
        zo2.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 2) {
        zo2.style.display = "none";
        zo3.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
          dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 3) {
        zo3.style.display = "none";
        zo4.style.display = "block";
        k.style.display = "none";
        ksl.style.display = "block";
          dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 4) {
        zo4.style.display = "none";
        zo5.style.display = "block";
        kow.style.display = "block";
        ksl.style.display = "none";
          dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 5) {
        zo5.style.display = "none";
        zo6.style.display = "block";
        b.style.display = "block";
        kow.style.display = "none";
        dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 6) {
        zo6.style.display = "none";
        zo7.style.display = "block";
        kow.style.display = "block"; //is the player diagetic?
        b.style.display = "none";
          dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 7) {
        zo7.style.display = "none";
        zo8.style.display = "block";
        b.style.display = "block";
        kow.style.display = "none";
          dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 8) {
        zo8.style.display = "none";
        zo9.style.display = "block";
        b.style.display = "none";
        kow.style.display = "block";
          dialogue.ladder++;
          return;
        } else if (dialogue.ladder === 9) {
        zo9.style.display = "none";
        zo10.style.display = "block";
        kow.style.display = "none";
        ksl.style.display = "block";
          dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 10) {
        zo10.style.display = "none";
        zo11.style.display = "block";
        b.style.display = "block";
        ksl.style.display = "none";
        dialogue.ladder++;
          return;
      } else if (dialogue.ladder === 11) {
        zo11.style.display = "none";
        b.style.display = "none";
        dialogue.ladderDialogue = true;
        dialogue.ladder2 = false;
        document.cookie = "ladder=ladder";
        dialogue.blockArrowTravel = false;
        return;
      }
  } else if (!dialogue.ladder2) {
       if (dialogue.ladder2 === 1) {
        zp1.style.display = "none";
        zp2.style.display = "block";
        b.style.display = "block";
        dialogue.ladder2++;
          return;
      } else if (dialogue.ladder2 === 2) {
        zp2.style.display = "none";
        zp3.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
          dialogue.ladder2++;
          return;
      } else if (dialogue.ladder2 === 3) {
        zp3.style.display = "none";
        zp4.style.display = "block";
        k.style.display = "none";
        btn.style.display = "block";
          dialogue.ladder2++;
          return;
      } else if (dialogue.ladder2 === 4) {
        zp4.style.display = "none";
        btn.style.display = "none";
          dialogue.ladder2 = true;
          document.cookie = "ladder2=ladder2";
          dialogue.blockArrowTravel = false;
          advanceButt.style.display = "none";
      }
}}