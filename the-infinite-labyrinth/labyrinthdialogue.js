//TABLE OF CONTENTS
//stymieDialogue
//ladderDialogue
//haveYouSeenThisMan
//haventSeenHim
//shuriEncounter
//randomBook
//itsaDeadEnd
//whoopsThatWasTooFast
//noLongerFucked
//weGotTheGreenSwitch

//hoistingYou
//scarletSpottedSnickerBeetle
//liftRoomDialogue
//heyCanYouHitTheButtonsThisTime
//itsAPipeSegment
//redSwitchDialogue
//undergroundLake
//itsASpareHandle
//looksLikeTheDisplayIsOff
//verilyIsBurningAShrub

//verilyIdleDialogue
//signDialogue
//wouldASwordHelp
//niceACode
//looksLikeTheresAnEnvelopeInTheChandelier
//applySwordToRope
//whyPipe
//takeCupcake
//takeMacaroniPipe
//takeTeddyBear

//inspectSink
//selectTable
//trueMutualismGo
//modernArt
//secretPaintingPassage
//secretPaintingPassageStairs
//sixteenFeralRacoons
//wasntThereAShrubHere
//butWedGetAllWet
//youdonthavetostandthere

//goodWorkTeam
//itsLockedSauna
//ahStillLocked
//ahISee
//itsLockedSecond
//itsLocked
//thatWasEasy
//betterTakeTheseToo
//unlocking
//unlockingSecond

//tooHeavyTooKeys
//tooHeavy
//testingTheWaters
//wouldARopeBridgeHelp
//ropeToss
//ropeToss2
//northLocked
//tooFar
//deeperInWeGo
//shrub1

//shrub2
//itsAFlowerPot
//workingTogether
//isSummerSuspicious
//thatWasNotThereASecondAgo
//itsSomeSortOfPanelInTheWall
//onwardsAndInwards
//areWeFucked
//comingBackIntoTheSquareLiftRoomAfterBridgeCut
//successfullyPlacedPipeDialogue

//weNeedAPipeSegmentThatWillFitThisGap
//itsASecretMessageInAStrangeLanguage
//strangePaintingsConvo
//thatsNotRight
//nowTheyMatchMatch
//itWontBudge
//illLeaveYouHere
//illLeaveYouHereKodalyInput
//takeCareOfBrunhilde
//iDontThinkICanFitThroughThat

//


//event.key === 'Enter' should match travel = true



//i sure hope stymie doesn't misrepresent any information
function stymieDialogue() {
    if (current.room === "lobby") {
    if (!dialogue.hobbyists) {
        stmigo.play();
        dialogue.blockArrowTravel = true;
        h1.style.display = "block";
        st.style.display = "block";
        dialogue.hobbyists = 1;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.hobbyists === 1) {
        h1.style.display = "none";
        h2.style.display = "block";
        k.style.display = "block";
        st.style.display = "none";
        dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 2) {
        h2.style.display = "none";
        h3.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 3) {
        h3.style.display = "none";
        h4.style.display = "block";
        kn.style.display = "block";
        b.style.display = "none"; //same budget
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 4) {
        h4.style.display = "none";
        h5.style.display = "block";
        st.style.display = "block";
        kn.style.display = "none";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 5) {
        h5.style.display = "none";
        h6.style.display = "block";
        b.style.display = "block";
        st.style.display = "none";
        dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 6) {
        h6.style.display = "none";
        h7.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 7) {
        h7.style.display = "none";
        h8.style.display = "block";
        b.style.display = "block";
        k.style.display = "none"; //kodaly!!
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 8) {
        h8.style.display = "none";
        h9.style.display = "block";
        k.style.display = "block";
        b.style.display = "none"; //what? it's true
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 9) {
        h9.style.display = "none";
        h10.style.display = "block";
        kn.style.display = "block";
        k.style.display = "none";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 10) {
        h10.style.display = "none";
        h11.style.display = "block";
        kn.style.display = "none";
        ksa.style.display = "block";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 11) {
        h11.style.display = "none";
        h12.style.display = "block";
        k.style.display = "block";
        ksa.style.display = "none";
        dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 12) {
        h12.style.display = "none";
        h13.style.display = "block";
        st.style.display = "block";
        k.style.display = "none";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 13) {
        h13.style.display = "none";
        h14.style.display = "block";
        st.style.display = "block";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 14) {
        h14.style.display = "none";
        h15.style.display = "block";
        br3.style.display = "block";
        st.style.display = "none";
          dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 15) {
        h15.style.display = "none";
        h16.style.display = "block";
        k3.style.display = "block";
        br3.style.display = "none";
        dialogue.hobbyists++;
          return;
      } else if (dialogue.hobbyists === 16) {
        h16.style.display = "none";
        k3.style.display = "none";
        dialogue.hobbyists = true;
        dialogue.blockArrowTravel = false;
        decreaseNotification();
        denotifnoise.play();
        document.cookie = "hobby=hobby";
      }
  }
}); 
    }
    //stymie's sauna convo
    else if (dialogue.saunaKeyTried && !lobby2.achieved) {
        stmigo.play();
        b1.style.display = "block";
       k.style.display = "block";
       dialogue.blockArrowTravel = true;
       dialogue.saunaSeen = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.saunaSeen === 1) {
       b1.style.display = "none";
       b2.style.display = "block";
       st.style.display = "block";
       k.style.display = "none";
       dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 2) {
       b2.style.display = "none";
       b3.style.display = "block";
       k.style.display = "block";
       st.style.display = "none";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 3) {
       b3.style.display = "none";
       b4.style.display = "block";
       st.style.display = "block";
       k.style.display = "none"; //Normally, but no data cube
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 4) {
       b4.style.display = "none";
       b5.style.display = "block";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 5) {
       b5.style.display = "none";
       b6.style.display = "block";
       b.style.display = "block";
       st.style.display = "none";
       dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 6) {
       b6.style.display = "none";
       b7.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 7) {
       b7.style.display = "none";
       b8.style.display = "block";
       st.style.display = "none";
       stt.style.display = "block";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 8) {
       b8.style.display = "none";
       b9.style.display = "block";
       bs.style.display = "block";
       stt.style.display = "none"; //a soldier!?
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 9) {
       b9.style.display = "none";
       b10.style.display = "block";
       st.style.display = "block";
       bs.style.display = "none";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 10) {
       b10.style.display = "none";
       b11.style.display = "block";
       ks.style.display = "block";
       st.style.display = "none";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 11) {
       b11.style.display = "none";
       b12.style.display = "block";
       st.style.display = "block";
       ks.style.display = "none"; //possibly
       dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 12) {
       b12.style.display = "none";
       b13.style.display = "block";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 13) {
       b13.style.display = "none";
       b14.style.display = "block";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 14) {
       b14.style.display = "none";
       b15.style.display = "block";
       stt.style.display = "block";
       st.style.display = "none";
         dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 15) {
       b15.style.display = "none";
       b16.style.display = "block";
       st.style.display = "block";
       stt.style.display = "none";
       dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 16) {
       b16.style.display = "none";
       b17.style.display = "block";
       k.style.display = "block";
       st.style.display = "none";      
        dialogue.saunaSeen++;
         return;
     } else if (dialogue.saunaSeen === 17) {
       b17.style.display = "none";
       k.style.display = "none";
       dialogue.saunaKeyTried = false;
       dialogue.dataCubeIsAThingWeKnowAbout = true;
       dialogue.saunaSeen = false;
       dialogue.blockArrowTravel = false;
       decreaseNotification();
       denotifnoise.play();
       dialogue.datacube = false;
       document.cookie = "roguesoldier=roguesoldier";
     }
 } });
    }
    //found stymie's missing cube
    else if (!dialogue.datacubeFound && dialogue.dataCubeIsAThingWeKnowAbout) {
        y1.style.display = "block";
        dialogue.blockArrowTravel = true;
        stmigo.play();
      b.style.display = "block"; //Stymie! We found your missing data cube!
      dialogue.saunaDisabling = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.saunaDisabling === 1) {
     y1.style.display = "none";
     y2.style.display = "block";
      st.style.display = "block";
      b.style.display = "none";
      dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 2) {
     y2.style.display = "none";
     y3.style.display = "block";
        dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 3) {
     y3.style.display = "none";
     y4.style.display = "block";
     sal.style.display = "block";
     st.style.display = "none";
        dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 4) {
     y4.style.display = "none";
     y5.style.display = "block";
     sal.style.display = "block";
        dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 5) {
     y5.style.display = "none";
     y6.style.display = "block";
     stgra.style.display = "block";
     sal.style.display = "none";
      dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 6) {
     y6.style.display = "none";
     y7.style.display = "block";
     stgra.style.display = "none";
     strag.style.display = "block";
        dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 7) {
     y7.style.display = "none";
     y8.style.display = "block"; //Great! It should be safe to use the sauna now.
     strag.style.display = "none";
     st.style.display = "block";
        dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 8) {
     y8.style.display = "none";
     y9.style.display = "block";
      st.style.display = "none"; //Let's check it out.
      b.style.display = "block";
        dialogue.saunaDisabling++;
        return;
    } else if (dialogue.saunaDisabling === 9) {
     y9.style.display = "none";
     b.style.display = "none";
        dialogue.saunaDisabling = true;
        dialogue.datacubeFound = true;
        dialogue.blockArrowTravel = false;
        dialogue.hrrg = false;
        decreaseNotification();
        denotifnoise.play();
        dropDataCube();
        water.zappy = false;
    }
 }
});
   } else if (!dialogue.datacubeFound && !dialogue.dataCubeIsAThingWeKnowAbout) {
        //stymie we found this weird cube
         yb1.style.display = "block";
        stmigo.play();
        dialogue.blockArrowTravel = true;
      b.style.display = "block";
      dialogue.saunaDisabling2 = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.saunaDisabling2 === 1) {
     yb1.style.display = "none";
     yb2.style.display = "block";
      st.style.display = "block";
      b.style.display = "none";
      dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 2) {
     yb2.style.display = "none";
     yb3.style.display = "block";
        dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 3) {
     yb3.style.display = "none";
     yb4.style.display = "block";
     sal.style.display = "block";
     st.style.display = "none";
        dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 4) {
     yb4.style.display = "none";
     yb5.style.display = "block";
     sal.style.display = "block";
        dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 5) {
     yb5.style.display = "none";
     yb6.style.display = "block";
     stgra.style.display = "block";
     sal.style.display = "none";
      dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 6) {
     yb6.style.display = "none";
     yb7.style.display = "block";
     stgra.style.display = "none";
     strag.style.display = "block";
        dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 7) {
     yb7.style.display = "none";
     yb8.style.display = "block";
     strag.style.display = "none";
     st.style.display = "block";
        dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 8) {
     yb8.style.display = "none";
     yb9.style.display = "block";
      st.style.display = "none"; //Let's check it out.
      b.style.display = "block";
        dialogue.saunaDisabling2++;
        return;
    } else if (dialogue.saunaDisabling2 === 9) {
     yb9.style.display = "none";
     b.style.display = "none";
        dialogue.saunaDisabling2 = true;
        dialogue.saunaDisabling = true;
        dialogue.datacubeFound = true;
        dialogue.blockArrowTravel = false;
        dialogue.hrrg = false;
        decreaseNotification();
        denotifnoise.play();
        dropDataCube();
        water.zappy = false;
    }
 }
});
   }
    else if (!dialogue.disparateFragment && !dialogue.longTimeNoSeeComplete) { //won't trigger if they've been to lobby two
           //no idea what's back there
        stmigo.play();
       a1.style.display = "block";
       b.style.display = "block";
       dialogue.blockArrowTravel = true;
       dialogue.disparateFragment = 1;
       document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.disparateFragment === 1) {
       a1.style.display = "none";
       a2.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
       dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 2) {
       a2.style.display = "none";
       a3.style.display = "block";
       stt.style.display = "block";
       st.style.display = "none";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 3) {
       a3.style.display = "none";
       a4.style.display = "block";
       st.style.display = "block";
       stt.style.display = "none";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 4) {
       a4.style.display = "none";
       a5.style.display = "block";
       stt.style.display = "block";
       st.style.display = "none";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 5) {
       a5.style.display = "none";
       a6.style.display = "block";
       stsu.style.display = "block";
       stt.style.display = "none";
       dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 6) {
       a6.style.display = "none";
       a7.style.display = "block";
       k.style.display = "block"; //i had no idea that was possible...
       stsu.style.display = "none";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 7) {
       a7.style.display = "none";
       a8.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 8) {
       a8.style.display = "none";
       a9.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 9) {
       a9.style.display = "none";
       a10.style.display = "block";
       st.style.display = "none";
       stw.style.display = "block";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 10) {
       a10.style.display = "none";
       a11.style.display = "block";
       st.style.display = "block";
       stw.style.display = "none";
         dialogue.disparateFragment++;
         return;
     } else if (dialogue.disparateFragment === 11) {
       a11.style.display = "none";
       st.style.display = "none";
       dialogue.disparateFragment = true;
       dialogue.blockArrowTravel = false;
       document.cookie = "fragment=fragment";
       decreaseNotification();
       denotifnoise.play();
        }
  }
});}
//stymie actually misrepresents something breifly
    else if (!dialogue.labyrinthNames) {
        stmigo.play();
        dialogue.blockArrowTravel = true;
        zj1.style.display = "block";
        st.style.display = "block";
        dialogue.labyNames = 1;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.labyNames === 1) {
        zj1.style.display = "none";
        zj2.style.display = "block";
        st.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 2) {
        zj2.style.display = "none";
        zj3.style.display = "block";
        st.style.display = "block";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 3) {
        zj3.style.display = "none";
        zj4.style.display = "block";
        k.style.display = "block";
        st.style.display = "none";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 4) {
        zj4.style.display = "none";
        zj5.style.display = "block";
        k.style.display = "none";
        b.style.display = "block"; //TIM?
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 5) {
        zj5.style.display = "none";
        zj6.style.display = "block";
        b.style.display = "none";
        st.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 6) {
        zj6.style.display = "none";
        zj7.style.display = "block";
        st.style.display = "block";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 7) {
        zj7.style.display = "none";
        zj8.style.display = "block";
        bf.style.display = "block"; //fainted
        st.style.display = "none";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 8) {
        zj8.style.display = "none";
        zj9.style.display = "block";
        st.style.display = "block";
        bf.style.display = "none";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 9) {
        zj9.style.display = "none";
        zj10.style.display = "block";
        st.style.display = "block";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 10) {
        zj10.style.display = "none";
        zj11.style.display = "block";
        st.style.display = "block";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 11) {
        zj11.style.display = "none";
        zj12.style.display = "block";
        st.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 12) {
        zj12.style.display = "none";
        zj13.style.display = "block";
        st.style.display = "block";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 13) {
        zj13.style.display = "none";
        zj14.style.display = "block";
        st.style.display = "block";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 14) {
        zj14.style.display = "none";
        zj15.style.display = "block";
        st.style.display = "block";
          dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 15) {
        zj15.style.display = "none";
        zj16.style.display = "block";
        st.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 16) {
        zj16.style.display = "none";
        zj17.style.display = "block";
        st.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 17) {
        zj17.style.display = "none";
        zj18.style.display = "block";
        st.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 18) {
        zj18.style.display = "none";
        zj19.style.display = "block";
        st.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 19) {
        zj19.style.display = "none";
        zj20.style.display = "block";
        st.style.display = "none";
        k.style.display = "block";
        dialogue.labyNames++;
          return;
      } else if (dialogue.labyNames === 20) {
        zj20.style.display = "none";
        k.style.display = "none";
        dialogue.labyNames = true;
        dialogue.labyrinthNames = true;
        dialogue.blockArrowTravel = false;
        decreaseNotification();
        denotifnoise.play();
      }
  }
});
    }
    //any luck finding the data cube?
    else if (!dialogue.datacube && !dialogue.anyLuck && !key.gold && !dialogue.hrrg && !dialogue.datacubehasbeenfound) {
        stmigo.play();
      m1.style.display = "block";
      st.style.display = "block";
      dialogue.blockArrowTravel = true;
      dialogue.anyLuck = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.anyLuck === 1) {
     m1.style.display = "none";
     m2.style.display = "block";
      k.style.display = "block"; //any luck?
      st.style.display = "none";
      dialogue.anyLuck++;
        return;
    } else if (dialogue.anyLuck === 2) {
     m2.style.display = "none";
     m3.style.display = "block";
      st.style.display = "block";
      k.style.display = "none";
        dialogue.anyLuck++;
        return;
    } else if (dialogue.anyLuck === 3) {
     m3.style.display = "none";
      st.style.display = "none"; //keep me posted!
      dialogue.anyLuck = true;
      dialogue.blockArrowTravel = false;
        return;
        }
    }
});
} else if (dialogue.longTimeNoSeeSee) {
    stmigo.play();
        zv1.style.display = "block";
        st3.style.display = "block"; //hey guys, long time no see!
       dialogue.longTimeNoSee = 1;
       dialogue.blockArrowTravel = true;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.longTimeNoSee === 1) {
       zv1.style.display = "none";
       zv2.style.display = "block";
       kstu.style.display = "block";
       st3.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 2) {
       zv2.style.display = "none";
       zv3.style.display = "block";
       kstu.style.display = "none";
       st.style.display = "block";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 3) {
       zv3.style.display = "none";
       zv4.style.display = "block";
       st.style.display = "none";
       stt.style.display = "block";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 4) {
       zv4.style.display = "none";
       zv5.style.display = "block";
       stt.style.display = "none";
       st.style.display = "block";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 5) {
       zv5.style.display = "none";
       zv6.style.display = "block";
       k.style.display = "block";
       st.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 6) {
       zv6.style.display = "none";
       zv7.style.display = "block";
       k.style.display = "none";
       st.style.display = "block";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 7) {
       zv7.style.display = "none";
       zv8.style.display = "block";
       k.style.display = "block";
       st.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 8) {
       zv8.style.display = "none";
       zv9.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 9) {
       zv9.style.display = "none";
       zv10.style.display = "block";
       b.style.display = "block";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 10) {
       zv10.style.display = "none";
       zv11.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 11) {
       zv11.style.display = "none";
       zv16.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 12) {
       zv16.style.display = "none";
       zv17.style.display = "block";
       sal.style.display = "block";
       b.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 13) {
       zv17.style.display = "none";
       zv18.style.display = "block";
       stw.style.display = "block";
       sal.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 14) {
       zv18.style.display = "none";
       zv19.style.display = "block";
       st.style.display = "block";
       stw.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 15) {
       zv19.style.display = "none";
       zv20.style.display = "block";
       st.style.display = "block";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 16) {
        zv20.style.display = "none";
        zv21.style.display = "block";
        st.style.display = "block";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 17) {
        zv21.style.display = "none";
        zv22.style.display = "block";
        k.style.display = "block";
        st.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 18) {
       zv22.style.display = "none";
       zv23.style.display = "block";
       ksl.style.display = "block";
       k.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 19) {
       zv23.style.display = "none";
       zv24.style.display = "block";
       b.style.display = "block";
       ksl.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 20) {
       zv24.style.display = "none";
       zv25.style.display = "block";
       k.style.display = "block"; //unless she's a soldier too
       b.style.display = "none";
              dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 21) {
       zv25.style.display = "none";
       zv26.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 22) {
       zv26.style.display = "none";
       zv27.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
                dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 23) {
       zv27.style.display = "none";
       zv28.style.display = "block";
       k.style.display = "block";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 24) {
       zv28.style.display = "none";
       zv29.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 25) {
       zv29.style.display = "none";
       zv30.style.display = "block";
       b.style.display = "block";
         dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 26) {
       zv30.style.display = "none";
       zv31.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     } else if (dialogue.longTimeNoSee === 27) {
       zv31.style.display = "none";
       zv32.style.display = "block";
       b.style.display = "block";
       st.style.display = "none";
       dialogue.longTimeNoSee++;
         return;
     }  else if (dialogue.longTimeNoSee === 28) {
       zv32.style.display = "none";
       b.style.display = "none";
       st.style.display = "none";
       document.cookie = "longtime=longtime";
       dialogue.longTimeNoSee = true;
       dialogue.longTimeNoSeeSee = false;
       dialogue.longTimeNoSeeComplete = true;
        dialogue.workingTogether = true;
        dialogue.getASignalOut = true;
        dialogue.actionAndInformation = true;
        dialogue.blockArrowTravel = false;
        decreaseNotification();
        denotifnoise.play();
        increaseNotificationLobbyTwo();
     }
 }
});

} //you can add new lobby 1 stymie dialogue here
    }
    //verily confrontation
    else if (current.room === "lobbyTwo") {
        if (!dialogue.verilyIntro) {
        zk1.style.display = "block";
        dialogue.blockArrowTravel = true;
        b.style.display = "block";
        vtamp1.style.display = "none";
        vtamp2.style.display = "block";
       dialogue.verilyIntro = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.verilyIntro === 1) {
       zk1.style.display = "none";
       zk2.style.display = "block";
       b.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 2) {
       zk2.style.display = "none";
       zk3.style.display = "block";
       stg.style.display = "block";
       stmigifhelper.style.display = "block";
       b.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 3) {
       zk3.style.display = "none";
       zk4.style.display = "block";
       stg.style.display = "none";
       vsup.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 4) {
       zk4.style.display = "none";
       zk5.style.display = "block";
       vsup.style.display = "none";
       vdm.style.display = "block";
       vtamp2.style.display = "none";
        vtamp3.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 5) {
       zk5.style.display = "none";
       zk6.style.display = "block";
       vdm.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 6) {
       zk6.style.display = "none";
       zk7.style.display = "block";
       v.style.display = "block";
       vdm.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 7) {
       zk7.style.display = "none";
       zk8.style.display = "block";
       k.style.display = "block";
       v.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 8) {
       zk8.style.display = "none";
       zk9.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 9) {
       zk9.style.display = "none";
       zk10.style.display = "block";
       b.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 10) {
       zk10.style.display = "none";
       zk11.style.display = "block";
       k.style.display = "block"; //who are you
       b.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 11) {
       zk11.style.display = "none";
       zk12.style.display = "block"; //im summer verily
       vhap.style.display = "block";
       k.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 12) {
       zk12.style.display = "none";
       zk13.style.display = "block";
       k.style.display = "block";
       vhap.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 13) {
       zk13.style.display = "none";
       zk14.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 14) {
       zk14.style.display = "none";
       zk15.style.display = "block";
       v.style.display = "block";
       b.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 15) {
       zk15.style.display = "none";
       zk16.style.display = "block";
       k.style.display = "block";
       v.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 16) {
       zk16.style.display = "none";
       zk17.style.display = "block";
       k.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 17) {
       zk17.style.display = "none";
       zk18.style.display = "block"; //i have a knack for puzzles
       v.style.display = "block";
       k.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 18) {
       zk18.style.display = "none";
       zk19.style.display = "block";
       stg.style.display = "block";
       
       v.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 19) {
       zk19.style.display = "none";
       zk20.style.display = "block";
       stg.style.display = "none";
       
       kstu.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 20) {
        zk20.style.display = "none";
        zk21.style.display = "block";
        stg.style.display = "block"; //that's me
       kstu.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 21) {
        zk21.style.display = "none";
        zk22.style.display = "block";
        kstu.style.display = "block";
        
       stg.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 22) {
       zk22.style.display = "none";
       zk23.style.display = "block";
       v.style.display = "block";
       kstu.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 23) {
       zk23.style.display = "none";
       zk24.style.display = "block";
       vrel.style.display = "block";
       v.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 24) {
       zk24.style.display = "none";
       zk25.style.display = "block";
       v.style.display = "block";
       vrel.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 25) {
       zk25.style.display = "none";
       zk26.style.display = "block";
       stg.style.display = "block";
       
       v.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 26) {
       zk26.style.display = "none";
       zk27.style.display = "block";
       stg.style.display = "block";
       
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 27) {
       zk27.style.display = "none";
       zk28.style.display = "block";
       stlag.style.display = "block";
       stg.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 28) {
       zk28.style.display = "none";
       zk28b.style.display = "block";
       stlag.style.display = "block";
         dialogue.verilyIntro = "pickles";
         return;
     } else if (dialogue.verilyIntro === "pickles") {
       zk28b.style.display = "none";
       zk29.style.display = "block";
       stlag.style.display = "none";
       v.style.display = "block";
         dialogue.verilyIntro = 29;
         return;
     } else if (dialogue.verilyIntro === 29) {
       zk29.style.display = "none";
       zk30.style.display = "block";
       st.style.display = "block";
       v.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 30) {
       zk30.style.display = "none";
       zk31.style.display = "block";
       st.style.display = "block";
       stmigifhelper.style.display = "none";
       v.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 31) {
       zk31.style.display = "none";
       zk32.style.display = "block";
       st.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 32) {
       zk32.style.display = "none";
       zk33.style.display = "block";
       st.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 33) {
       zk33.style.display = "none";
       zk34.style.display = "block";
       st.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 34) {
       zk34.style.display = "none";
       zk35.style.display = "block";
       st.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 35) {
       zk35.style.display = "none";
       zk36.style.display = "block";
       st.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 36) {
       zk36.style.display = "none";
       zk37.style.display = "block";
       st.style.display = "none";
       v.style.display = "block"; //you're welcome
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 37) {
       zk37.style.display = "none";
       zk38.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 38) {
       zk38.style.display = "none";
       zk39.style.display = "block";
       b.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 39) {
        zk39.style.display = "none";
        zk40.style.display = "block";
       vrel.style.display = "block";
       b.style.display = "none";
       dialogue.verilyIntro++;
         return;
     }
     else if (dialogue.verilyIntro === 40) {
        zk40.style.display = "none";
        zk41.style.display = "block";
        vrel.style.display = "none";
        v.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 41) {
       zk41.style.display = "none";
       zk42.style.display = "block";
       v.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 42) {
       zk42.style.display = "none";
       zk43.style.display = "block";
       v.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 43) {
       zk43.style.display = "none";
       zk44.style.display = "block";
       v.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 44) {
       zk44.style.display = "none";
       zk45.style.display = "block";
       v.style.display = "block";
       dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 45) {
       zk45.style.display = "none";
       zk46.style.display = "block";
       v.style.display = "none";
       vrel.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 46) {
       zk46.style.display = "none";
       zk47.style.display = "block";
       k.style.display = "block";
       vrel.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 47) {
       zk47.style.display = "none";
       zk48.style.display = "block";
       k.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 48) {
       zk48.style.display = "none";
       zk49.style.display = "block";
       v.style.display = "block";
       k.style.display = "none";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 49) {
       zk49.style.display = "none";
       zk50.style.display = "block";
       v.style.display = "block";
         dialogue.verilyIntro++;
         return;
     } else if (dialogue.verilyIntro === 50) {
       zk50.style.display = "none";
       v.style.display = "none";
       dialogue.verilyIntro = true;
       document.cookie = "verily=verily";
       dialogue.verilyIntro = true;
        dialogue.longTimeNoSeeSee = true;
        dialogue.blockArrowTravel = false;
        notifnoise.play();
        increaseNotification(); //ready for Long time no see in lobby1
         return;
     }
 }
});

        } else if (dialogue.actionAndInformation && !dialogue.actionAndInformationComplete) {
        zy1.style.display = "block";
        stmigo.play();
        dialogue.blockArrowTravel = true;
        st.style.display = "block";
       dialogue.actionAndInformationIncrimenter = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.actionAndInformationIncrimenter === 1) {
       zy1.style.display = "none";
       zy2.style.display = "block";
       st.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 2) {
       zy2.style.display = "none";
       zy3.style.display = "block";
       k.style.display = "block"; //what?
       st.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 3) {
       zy3.style.display = "none";
       zy4.style.display = "block";
       k.style.display = "none";
       st.style.display = "block"; // i said did you
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 4) {
       zy4.style.display = "none";
       zy5.style.display = "block";
       st.style.display = "none";
       k.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 5) {
       zy5.style.display = "none";
       zy6.style.display = "block";
       k.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 6) {
       zy6.style.display = "none";
       zy7.style.display = "block";
       st.style.display = "block";
       k.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 7) {
       zy7.style.display = "none";
       zy8.style.display = "block";
       k.style.display = "block";
       st.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 8) {
       zy8.style.display = "none";
       zy9.style.display = "block";
       stt.style.display = "block"; 
       k.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 9) {
       zy9.style.display = "none";
       zy10.style.display = "block";
       st.style.display = "block"; //i see the confusion
       stt.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 10) {
       zy10.style.display = "none";
       zy11.style.display = "block";
       st.style.display = "block";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 11) {
       zy11.style.display = "none";
       zy12.style.display = "block";
       st3.style.display = "block";
       st.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 12) {
       zy12.style.display = "none";
       zy13.style.display = "block";
       k.style.display = "block"; //im lost
       st3.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 13) {
       zy13.style.display = "none";
       zy14.style.display = "block";
       stsu.style.display = "block";
       k.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 14) {
       zy14.style.display = "none";
       zy15.style.display = "block";
       stsu.style.display = "block";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 15) {
       zy15.style.display = "none";
       zy16.style.display = "block";
       stt.style.display = "block";
       stsu.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 16) {
       zy16.style.display = "none";
       zy17.style.display = "block";
       st.style.display = "block";
       stt.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 17) {
       zy17.style.display = "none";
       zy18.style.display = "block";
       st.style.display = "none";
       stsu.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 18) {
       zy18.style.display = "none";
       zy19.style.display = "block";
       stdem.style.display = "block";
       stsu.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 19) {
       zy19.style.display = "none";
       zy20.style.display = "block";
       stmigifhelper.style.display = "block";
       stdem2.style.display = "block";
       stdem.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 20) {
        zy20.style.display = "none";
        zysidebar.style.display = "block";
        stmigifhelper.style.display = "block";
        b.style.display = "block"; //huh
        stdem2.style.display = "none";
        dialogue.actionAndInformationIncrimenter++;
         return;
     }  else if (dialogue.actionAndInformationIncrimenter === 21) {
        zysidebar.style.display = "none";
        zy21.style.display = "block";
        stmigifhelper.style.display = "none";
        b.style.display = "block"; //so...
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 22) {
        zy21.style.display = "none";
        zy22.style.display = "block";
        st.style.display = "block"; //oops, that was misleading
       b.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 23) {
       zy22.style.display = "none";
       zy23.style.display = "block";
       st.style.display = "none";
       b.style.display = "block";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 24) {
       zy23.style.display = "none";
       zy24.style.display = "block";
       sal.style.display = "block";
       b.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 25) {
       zy24.style.display = "none";
       zy25.style.display = "block";
       stw.style.display = "block";
       sal.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 26) {
       zy25.style.display = "none";
       zy26.style.display = "block";
       b.style.display = "block";
       stw.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 27) {
       zy26.style.display = "none";
       zy27.style.display = "block";
       stw.style.display = "block"; //why would i do that?
       b.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 28) {
       zy27.style.display = "none";
       zy28.style.display = "block";
       k.style.display = "block";
       stw.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 29) {
       zy28.style.display = "none";
       zy29.style.display = "block";
       k.style.display = "none";
       stsu.style.display = "block";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 30) {
       zy29.style.display = "none";
       zy30.style.display = "block";
       b.style.display = "block"; //maybe we're acsking the wrong quesotin 
       stsu.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 31) {
       zy30.style.display = "none";
       zy31.style.display = "block";
       sal.style.display = "block";
       b.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 32) {
       zy31.style.display = "none";
       zy32.style.display = "block";
       b.style.display = "block";
       sal.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 33) {
       zy32.style.display = "none";
       zy33.style.display = "block";
       ksl.style.display = "block";
       b.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 34) {
       zy33.style.display = "none";
       zy34.style.display = "block";
       st.style.display = "block";
       ksl.style.display = "none";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 35) {
       zy34.style.display = "none";
       zy35.style.display = "block";
       k.style.display = "block";
       st.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 36) {
       zy35.style.display = "none";
       zy36.style.display = "block";
       sal.style.display = "block";
       k.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 37) {
       zy36.style.display = "none";
       zy37.style.display = "block";
       sal.style.display = "none";
       b.style.display = "block"; //i'm sure
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 38) {
       zy37.style.display = "none";
       zy38.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 39) {
       zy38.style.display = "none";
       zy39.style.display = "block";
       st.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 40) {
        zy39.style.display = "none";
        zy40.style.display = "block";
        k.style.display = "block"; //typically 
        st.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     }
     else if (dialogue.actionAndInformationIncrimenter === 41) {
        zy40.style.display = "none";
        zy41.style.display = "block";
        st.style.display = "block";
        k.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 42) {
       zy41.style.display = "none";
       zy42.style.display = "block";
       st.style.display = "block";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 43) {
       zy42.style.display = "none";
       zy43.style.display = "block";
       st.style.display = "block";
         dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 44) {
       zy43.style.display = "none";
       zy44.style.display = "block";
       st.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 45) {
       zy44.style.display = "none";
       zy45.style.display = "block";
       st.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 46) {
       zy45.style.display = "none";
       zy46.style.display = "block";
       st.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 47) {
       zy46.style.display = "none";
       zy47.style.display = "block";
       st.style.display = "none";
       kstu.style.display = "block";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 48) {
       zy47.style.display = "none";
       zy48.style.display = "block";
       b.style.display = "block";
       kstu.style.display = "none";
       dialogue.actionAndInformationIncrimenter++;
         return;
     } else if (dialogue.actionAndInformationIncrimenter === 49) {
       zy48.style.display = "none";
       b.style.display = "none";
       decreaseNotificationLobbyTwo();
       denotifnoise.play();
        dialogue.actionAndInformation = false;
        dialogue.trueMutualism = false;
        dialogue.verilyIsKnownToBeNotAtTheSTMITerminal = "true";
        document.cookie = "actionAndInfo=actionAndInfo";
        dialogue.actionAndInformationComplete = true;
        dialogue.actionAndInformationIncrimenter = true;
        dialogue.blockArrowTravel = false;
     }
 }
});

        } else if (!dialogue.haventSeenHim && !dialogue.workingTogether) {
            haventSeenHim();
            stmigo.play(); //only happens here in lobby 2 if k and b havent gone back to talk to 1st stymie, otherwise must happen when verily has shifted to the other room //mark (this isn't included in verily's idle dialogue but doesn necessarily need to be.)
       
    } else if (dialogue.shuriComplete && dialogue.lostRogueSoldiers && !dialogue.stymieHasntSeenHim) {
        haveYouSeenThisMan();
        stmigo.play();
    }   
    
    //add new lobby 2 stymie dialogue here (with an else if (dialogue.conditions) {})
    } else if (current.room === "chandelierRoom") {
        looksLikeTheresAnEnvelopeInTheChandelier();
    } else if (current.room === "source1") {
        handleHandle1();
    }
        else if (current.room === "lobbyThree") {
        if (!dialogue.enteringLobbyThree) {
            //intrepid explorers
            stmigo.play();
            dialogue.blockArrowTravel = true;
            yyb1.style.display = "block";
            st.style.display = "block";
            dialogue.intrepidExplorers = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.intrepidExplorers === 1) {
       yyb1.style.display = "none";
       yyb2.style.display = "block";
       st.style.display = "none";
       k.style.display = "block";
       dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 2) {
       yyb2.style.display = "none";
       yyb3.style.display = "block";
       st.style.display = "block";
       k.style.display = "none";
         dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 3) {
       yyb3.style.display = "none";
       yyb4.style.display = "block";
       st.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 4) {
       yyb4.style.display = "none";
       yyb5.style.display = "block";
       st.style.display = "block";
       dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 5) {
       yyb5.style.display = "none";
       yyb6.style.display = "block";
       st.style.display = "block";
       dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 6) {
       yyb6.style.display = "none";
       yyb7.style.display = "block";
              st.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 7) {
       yyb7.style.display = "none";
       yyb8.style.display = "block";
        st.style.display = "none";
       stfl.style.display = "block";
         dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 8) {
       yyb8.style.display = "none";
       yyb9.style.display = "block";
       stfl.style.display = "none";
              k.style.display = "block"; 
         dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 9) {
       yyb9.style.display = "none";
       yyb10.style.display = "block";
       st.style.display = "block";
       k.style.display = "none";
         dialogue.intrepidExplorers++;
         return;
     } else if (dialogue.intrepidExplorers === 10) {
       yyb10.style.display = "none";
       st.style.display = "none";
        dialogue.enteringLobbyThree = true;
        dialogue.feralRacoons = true;
        decreaseNotificationLobbyThree();
        dialogue.blockArrowTravel = false;
        denotifnoise.play();
        dialogue.intrepidExplorers = false;
     }
    }});
        } else if (dialogue.signPost) {
            stmigo.play();
            dialogue.blockArrowTravel = true;
            yyc1.style.display = "block";
            b.style.display = "block";
            dialogue.signPost = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.signPost === 1) {
       yyc1.style.display = "none";
       yyc2.style.display = "block";
       b.style.display = "block";
       dialogue.signPost++;
         return;
     } else if (dialogue.signPost === 2) {
       yyc2.style.display = "none";
       yyc3.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
         dialogue.signPost++;
         return;
     } else if (dialogue.signPost === 3) {
       yyc3.style.display = "none";
       st.style.display = "none";
       denotifnoise.play();
       decreaseNotificationLobbyThree();
       dialogue.signPost = false;
       dialogue.blockArrowTravel = false;
     }
    }});
        } //add new lobby 3 stymie dialogue here
    } else if (current.room === "gardenWest") {
        trueMutualismGo();
    }
}



//it's ladder dialogue
function ladderDialogue() {
    if (current.room === "lobby") {
        if (!dialogue.ladder) {
            dialogue.blockArrowTravel = true;
        zo1.style.display = "block";
        k.style.display = "block"; //we can't leave yet!
        dialogue.ladder = 1;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
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
        dialogue.ladder = true;
        dialogue.ladder2 = false;
        document.cookie = "ladder=ladder";
        dialogue.blockArrowTravel = false;
        return;
      }
  }
}); 
//wow now it's really ladder dialogue
} else if (!dialogue.ladder2) {
        zp1.style.display = "block";
        b.style.display = "block"; //can you clarify for the player what diagetic means?
        dialogue.ladder2 = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
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
      } } });}
}
}



function haveYouSeenThisMan() { //stymie! have you misplaced any soldiers?
    if (dialogue.verilyIsKnownToBeNotAtTheSTMITerminal) {
        zzp1.style.display = "block";
       b.style.display = "block";
       dialogue.seenThisMan2 = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.seenThisMan2 === 1) {
        zzp1.style.display = "none";
        zzp2.style.display = "block";
       b.style.display = "none";
       st.style.display = "block";
       dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 2) {
       zzp2.style.display = "none";
       zzp3.style.display = "block";
       b.style.display = "block";
       st.style.display = "none";
         dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 3) {
       zzp3.style.display = "none";
       zzp4.style.display = "block";
       b.style.display = "none";
       st.style.display = "block";
         dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 4) {
       zzp4.style.display = "none";
       zzp5.style.display = "block";
       st.style.display = "none";
       k.style.display = "block";
         dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 5) {
       zzp5.style.display = "none";
       zzp6.style.display = "block";
       k.style.display = "none";
       st.style.display = "block";
         dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 6) {
       zzp6.style.display = "none";
       zzp7.style.display = "block";
       stt.style.display = "block";
       st.style.display = "none";
         dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 7) {
       zzp7.style.display = "none";
       zzp8.style.display = "block";
       b.style.display = "block";
       stt.style.display = "none";
         dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 8) {
       zzp8.style.display = "none";
       zzp9.style.display = "block";
       b.style.display = "none";
       st3.style.display = "block";
         dialogue.seenThisMan2++;
         return;
     } else if (dialogue.seenThisMan2 === 9) {
       zzp9.style.display = "none";
       st3.style.display = "none";
       dialogue.lostRogueSoldiers = "false";
       dialogue.stymieHasntSeenHim = "true";
       decreaseNotificationLobbyTwo();
       dialogue.seenThisMan2 = true;
       denotifnoise.play();
     } 
}});
    } else {
        //if verily is not known to have left the terminal
        //wait where's verily?
       zzo1.style.display = "block";
       b.style.display = "block";
       dialogue.seenThisMan = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.seenThisMan === 1) {
        zzo1.style.display = "none";
        zzo2.style.display = "block";
       b.style.display = "none";
       st.style.display = "block";
       dialogue.seenThisMan++;
         return;
     } else if (dialogue.seenThisMan === 2) {
       zzo2.style.display = "none";
       zzo3.style.display = "block";
       b.style.display = "block";
       st.style.display = "none";
         dialogue.seenThisMan++;
         return;
     } else if (dialogue.seenThisMan === 3) {
       zzo3.style.display = "none";
       zzo4.style.display = "block";
       b.style.display = "none";
       st.style.display = "block";
         dialogue.seenThisMan++;
         return;
     } else if (dialogue.seenThisMan === 4) {
       zzo4.style.display = "none";
       zzo5.style.display = "block";
       st.style.display = "none";
       k.style.display = "block";
         dialogue.seenThisMan++;
         return;
     } else if (dialogue.seenThisMan === 5) {
       zzo5.style.display = "none";
       zzo6.style.display = "block";
       k.style.display = "none";
       st.style.display = "block";
         dialogue.seenThisMan++;
         return;
     } else if (dialogue.seenThisMan === 6) {
       zzo6.style.display = "none";
       zzo7.style.display = "block";
       st.style.display = "none";
       b.style.display = "block";
         dialogue.seenThisMan++;
         return;
     } else if (dialogue.seenThisMan === 7) {
       zzo7.style.display = "none";
       zzo8.style.display = "block";
       b.style.display = "none";
       st.style.display = "block";
         dialogue.seenThisMan++;
         return;
     }  else if (dialogue.seenThisMan === 8) {
       zzo8.style.display = "none";
       st.style.display = "none";
       dialogue.lostRogueSoldiers = false;
       dialogue.stymieHasntSeenHim = true;
       dialogue.forCookiesStymieHasntSeenHim = true;
       document.cookie = "alwaysMisplacing=alwaysMisplacing";
       decreaseNotificationLobbyTwo();
       dialogue.seenThisMan = true;
       denotifnoise.play();
     } 
}});}
}

function haventSeenHim() { //verily doesn't know what you're talking about
    zn1.style.display = "block";
       b.style.display = "block";
       dialogue.haventSeenHim = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.haventSeenHim === 1) {
       zn1.style.display = "none";
       zn2.style.display = "block";
       b.style.display = "none";
       v.style.display = "block";
       dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 2) {
       zn2.style.display = "none";
       zn3.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
         dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 3) {
       zn3.style.display = "none";
       zn4.style.display = "block";
       b.style.display = "none"; //anyone else?
       v.style.display = "block";
         dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 4) {
       zn4.style.display = "none";
       zn5.style.display = "block";
       v.style.display = "block";
       dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 5) {
       zn5.style.display = "none";
       zn6.style.display = "block";
       v.style.display = "block";
       dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 6) {
       zn6.style.display = "none";
       zn7.style.display = "block";
       b.style.display = "block";
       v.style.display = "none";
         dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 7) {
       zn7.style.display = "none";
       zn8.style.display = "block";
       b.style.display = "block";
         dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 8) {
       zn8.style.display = "none";
       zn9.style.display = "block";
       st.style.display = "block";
       b.style.display = "none";
         dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 9) {
       zn9.style.display = "none";
       zn10.style.display = "block";
       st.style.display = "block";
         dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 10) {
       zn10.style.display = "none";
       zn11.style.display = "block";
       st.style.display = "block"; 
         dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 11) {
       zn11.style.display = "none";
       zn12.style.display = "block"; 
       v.style.display = "block";
       st.style.display = "none";
       dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 12) {
       zn12.style.display = "none";
       zn13.style.display = "block";
       v.style.display = "block";
       dialogue.haventSeenHim++;
         return;
     } else if (dialogue.haventSeenHim === 13) {
       zn13.style.display = "none";
       v.style.display = "none";
       dialogue.haventSeenHim = true;
       document.cookie = "haventSeenHim=haventSeenHim";
         return;
     } 
 }
});
}



function shuriEncounter() {
if (!chapterTwoPartTwo.activated && !dialogue.preventShuriCookies) {
    shurisprite.style.display = "block";
    dialogue.blockArrowTravel = true;
    lamano.pause();
    elmare.play();
    chapterTwoPartTwo.activated = "true";
    dialogue.shuriEncounter = 1;
   zzn1.style.display = "block";
   b.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.shuriEncounter === 1) {
        zzn1.style.display = "none";
        zzn2.style.display = "block";
        b.style.display = "none";
        shuri.style.display = "block";
           dialogue.shuriEncounter++;
           return;
       } else if (dialogue.shuriEncounter === 2) {
        zzn2.style.display = "none";
        zzn3.style.display = "block";
           kstu.style.display = "block";
           shuri.style.display = "none";
           dialogue.shuriEncounter++;
           return;
       } else if (dialogue.shuriEncounter === 3) {
        zzn3.style.display = "none";
        zzn4.style.display = "block";
           shuri.style.display = "block";
           kstu.style.display = "none";
           shurisprite.style.display = "none";
           randomDoorAudio();
           dialogue.shuriEncounter++;
           return;
       } else if (dialogue.shuriEncounter === 4) {
        zzn4.style.display = "none";
        zzn5.style.display = "block";
           ksta.style.display = "block"; //hey wait!
           shuri.style.display = "none";
           dialogue.shuriEncounter++;
           return;
       }  else if (dialogue.shuriEncounter === 5) {
        zzn5.style.display = "none";
           ksta.style.display = "none";
           //this also triggers verily to move
           verilyIs.inThePortholeRoom = true;
        verilysprite.style.display = "block";
        terminal2.style.display = "block";
        vtamp1.style.display = "none";
        vtamp2.style.display = "none";
        vtamp3.style.display = "none";
           dialogue.chaseSequence = "true";
           dialogue.haventSeenHim = true;
       document.cookie = "haventSeenHim=haventSeenHim";
       document.cookie = "shruEncountered=shruEncountered";
       dialogue.preventShuriCookies = true;
       dialogue.blockArrowTravel = false;
           return;
       }
    }
});}
}



//library dialogue
function randomBook() {
    if (!bookTalk.initialdone) {
   dialogue.randombook = 1;
   zzl1.style.display = "block";
   ksta.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.randombook === 1) {
        zzl1.style.display = "none";
        zzl2.style.display = "block";
        ksta.style.display = "none";
        br3.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 2) {
        zzl2.style.display = "none";
        zzl3.style.display = "block";
           b.style.display = "block";
           br3.style.display = "none";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 3) {
        zzl3.style.display = "none";
        zzl4.style.display = "block";
           b.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 4) {
        zzl4.style.display = "none";
        zzl5.style.display = "block";
           b.style.display = "block";
           dialogue.randombook++;
           return;
       }  else if (dialogue.randombook === 5) {
        zzl5.style.display = "none";
        zzl6.style.display = "block";
        ks.style.display = "block";
        b.style.display = "none";
           dialogue.randombook++;
           return;
       }  else if (dialogue.randombook === 6) {
        zzl6.style.display = "none";
        zzl7.style.display = "block";
        ks.style.display = "none";
        b.style.display = "block";
           dialogue.randombook++;
           return;
       }  else if (dialogue.randombook === 7) {
        zzl7.style.display = "none";
        zzl8.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
           dialogue.randombook++;
           return;
       }   else if (dialogue.randombook === 8) {
        zzl8.style.display = "none";
        zzl9.style.display = "block";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 9) {
        zzl9.style.display = "none";
        zzl10.style.display = "block";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 10) {
        zzl10.style.display = "none";
        zzl11.style.display = "block";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 11) {
        zzl11.style.display = "none";
        zzl12.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 12) {
        zzl12.style.display = "none";
        zzl13.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 13) {
        zzl13.style.display = "none";
        zzl14.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 14) {
        zzl14.style.display = "none";
        zzl15.style.display = "block";
        b.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 15) {
        zzl15.style.display = "none";
        zzl16.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 16) {
        zzl16.style.display = "none";
        zzl17.style.display = "block";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 17) {
        zzl17.style.display = "none";
        zzl18.style.display = "block";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 18) {
        zzl18.style.display = "none";
        zzl19.style.display = "block";
        k.style.display = "none";
        kow.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 19) {
        zzl19.style.display = "none";
        zzl20.style.display = "block";
        ksl.style.display = "block";
        kow.style.display = "none";
        dialogue.randombook++;
           return; 
    } else if (dialogue.randombook === 20) {
        zzl20.style.display = "none";
        zzl21.style.display = "block";
        ksl.style.display = "none";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       }  else if (dialogue.randombook === 21) {
        zzl21.style.display = "none";
        zzl22.style.display = "block";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       }  else if (dialogue.randombook === 22) {
        zzl22.style.display = "none";
        zzl23.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
           dialogue.randombook++;
           return;
       } else if (dialogue.randombook === 23) {
        zzl23.style.display = "none";
        zzl24.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
           dialogue.randombook++;
           return;
       }  else if (dialogue.randombook === 24) {
        zzl24.style.display = "none";
        k.style.display = "none";
        bookTalk.initialdone = true;
        bookTalk.second = true;
           return;
       }
   }
}
);
} else if (bookTalk.second) {
    dialogue.readnonsense = 1;
   zzm1.style.display = "block";
   b.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.readnonsense === 1) {
        zzm1.style.display = "none";
        zzm2.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
           dialogue.readnonsense++;
           return;
       } else if (dialogue.readnonsense === 2) {
        zzm2.style.display = "none";
        zzm3.style.display = "block";
           b.style.display = "block";
           dialogue.readnonsense++;
           return;
       } else if (dialogue.readnonsense === 3) {
        zzm3.style.display = "none";
           b.style.display = "none";
           bookTalk.second = false;
           bookTalk.third = true;
           return;
       }
    }});} else if (bookTalk.third) {
        dialogue.readnonsense2 = 1;
   zzm4.style.display = "block";
   b.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.readnonsense2 === 1) {
        zzm4.style.display = "none";
        zzm5.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
           dialogue.readnonsense2++;
           return;
       } else if (dialogue.readnonsense2 === 2) {
        zzm5.style.display = "none";
        zzm6.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
        dialogue.readnonsense2++;
           return;
       } else if (dialogue.readnonsense2 === 3) {
        zzm6.style.display = "none";
        zzm7.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.readnonsense2++;
           return;
       } else if (dialogue.readnonsense2 === 4) {
        zzm7.style.display = "none";
        zzm8.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.readnonsense2++;
           return;
       }  else if (dialogue.readnonsense2 === 5) {
        zzm8.style.display = "none";
        zzm9.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.readnonsense2++;
           return;
       }  else if (dialogue.readnonsense2 === 6) {
        zzm9.style.display = "none";
        zzm10.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.readnonsense2++;
           return;
       }  else if (dialogue.readnonsense2 === 7) {
        zzm10.style.display = "none";
        zzm11.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.readnonsense2++;
           return;
       }  else if (dialogue.readnonsense2 === 8) {
        zzm11.style.display = "none";
        zzm12.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.readnonsense2++;
           return;
       } else if (dialogue.readnonsense2 === 9) {
        zzm12.style.display = "none";
        k.style.display = "none";
        bookTalk.third = false;
        bookTalk.fourth = true;
        return;
       }
    }});
} else if (bookTalk.fourth) {
    dialogue.readnonsense3 = 1;
   zzm13.style.display = "block";
   k.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.readnonsense3 === 1) {
        zzm13.style.display = "none";
        zzm14.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
           dialogue.readnonsense3++;
           return;
       } else if (dialogue.readnonsense3 === 2) {
        zzm14.style.display = "none";
        zzm15.style.display = "block";
        b.style.display = "block";
        dialogue.readnonsense3++;
           return;
       } else if (dialogue.readnonsense3 === 3) {
        zzm15.style.display = "none";
        zzm16.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.readnonsense3++;
           return;
       } else if (dialogue.readnonsense3 === 4) {
        zzm16.style.display = "none";
        zzm17.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.readnonsense3++;
           return;
       }  else if (dialogue.readnonsense3 === 5) {
        zzm17.style.display = "none";
        b.style.display = "none";
        bookTalk.fourth = false;
           return;
       } 
    }});
}
}

function itsaDeadEnd() {
if (dialogue.chaseChase) { //they've already checked one dead end, now a longer conversation
   dialogue.chaseComplete = 1;
   zzn8.style.display = "block";
   b.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.chaseComplete === 1) {
        zzn8.style.display = "none";
        zzn9.style.display = "block";
        kstu.style.display = "block";
        b.style.display = "none";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 2) {
        zzn9.style.display = "none";
        zzn10.style.display = "block";
        b.style.display = "block";
        kstu.style.display = "none";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 3) {
        zzn10.style.display = "none";
        zzn11.style.display = "block";
        kow.style.display = "block";
        b.style.display = "none";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 4) {
        zzn11.style.display = "none";
        zzn12.style.display = "block";
        b.style.display = "block";
        kow.style.display = "none";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 5) {
        zzn12.style.display = "none";
        zzn13.style.display = "block";
        kwtf.style.display = "block";
        b.style.display = "none";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 6) {
        zzn13.style.display = "none";
        zzn14.style.display = "block";
        b.style.display = "block";
        kwtf.style.display = "none";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 7) {
        zzn14.style.display = "none";
        zzn15.style.display = "block";
        b.style.display = "block";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 8) {
        zzn15.style.display = "none";
        zzn16.style.display = "block";
        b.style.display = "block";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 9) {
        zzn16.style.display = "none";
        zzn17.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
           dialogue.chaseComplete++;
           return;
       } else if (dialogue.chaseComplete === 10) {
        zzn17.style.display = "none";
        k.style.display = "none";
        dialogue.chaseChase = "false";
        dialogue.shuriComplete = "true";
        dialogue.lostRogueSoldiers = "true";
        increaseNotificationLobbyTwo();
        notifnoise.play();
        dialogue.chaseComplete = true;
        document.cookie = "wildSoldierChase=wildSoldierChase"
           return;
       }
}}); } else {
    dialogue.chase = 1;
   zzn6.style.display = "block";
   b.style.display = "block";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.chase === 1) {
        zzn6.style.display = "none";
        zzn7.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
           dialogue.chase++;
           return;
       } else if (dialogue.chase === 2) {
        zzn7.style.display = "none";
        k.style.display = "none";
        dialogue.chaseChase = "true";
       }
}});
}
}


function whoopsThatWasTooFast() {
 if (!dialogue.whoopsTooFasties) {
            v1.style.display = "block";
            bd.style.display = "block";  //Whoops! That was fast. Are you okay down there?
            dialogue.whoopsTooFast = 1;
            document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
        if (dialogue.whoopsTooFast === 1) {
            v1.style.display = "none";
            v2.style.display = "block"; //peachy keen
            k.style.display = "block";
            bd.style.display = "none";
            dialogue.whoopsTooFast++;
            return;
        } else if (dialogue.whoopsTooFast === 2) {
            v2.style.display = "none";
            v3.style.display = "block";
            bd.style.display = "block";
            k.style.display = "none";
            dialogue.whoopsTooFast++;
            return;
        } else if (dialogue.whoopsTooFast === 3) {
            v3.style.display = "none";
            v4.style.display = "block";
            k.style.display = "block"; //locked hatch
            bd.style.display = "none";
            dialogue.whoopsTooFast++;
            return;
        } else if (dialogue.whoopsTooFast === 4) {
            v4.style.display = "none";
            v5.style.display = "block";
            bd.style.display = "block";
            k.style.display = "none";
            dialogue.whoopsTooFast++;
            return;
        } else if (dialogue.whoopsTooFast === 5) {
            v5.style.display = "none";
            v6.style.display = "block";
            bd.style.display = "block";
            k.style.display = "none";
            dialogue.whoopsTooFast++;
            return;
        }  else if (dialogue.whoopsTooFast === 6) {
            v6.style.display = "none";
            v7.style.display = "block";
            bd.style.display = "block";
            dialogue.whoopsTooFast++;
            return;
        }  else if (dialogue.whoopsTooFast === 7) {
            v7.style.display = "none";
            bd.style.display = "none";
            upArrow.style.display = "block";
            dialogue.whoopsTooFast = true;
            lifthas.currentlyUp = false;
            dialogue.whoopsTooFasties = true;
            document.cookie = "whoops=whoops;";
            return;
        }
        }});}
}



function noLongerFucked() {
    if (!dialogue.letsGetHisAss) {
        dialogue.gethisass = 1;
   yys1.style.display = "block";
   k.style.display = "block";
   dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.gethisass === 1) {
        yys1.style.display = "none";
        yys2.style.display = "block";
        k.style.display = "none";
        ka.style.display = "block";
           dialogue.gethisass++;
           return;
       } else if (dialogue.gethisass === 2) {
        yys2.style.display = "none";
        yys3.style.display = "block";
        ka.style.display = "none";
        b.style.display = "block";
        dialogue.gethisass++;
       } else if (dialogue.gethisass === 3) {
        yys3.style.display = "none";
        b.style.display = "none";
        dialogue.gethisass = false;
        dialogue.letsGetHisAss = true;
        dialogue.blockArrowTravel = false;

       }
    }});
    }
}



function weGotTheGreenSwitch() {
      yyt5.style.display = "block";
      b.style.display = "block";
      dialogue.dond = 1;
      document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.dond === 1) {
     yyt5.style.display = "none";
      b.style.display = "none";
        return;
    }}}); 
}

function hoistingYou() {
    if (!dialogue.hoistedHoisted) {
      v8.style.display = "block"; //ready for hoisting
      k.style.display = "block";
      dialogue.hoistMe = 1;
      document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.hoistMe === 1) {
     v8.style.display = "none";
     v9.style.display = "block"; 
      bd.style.display = "block"; 
      k.style.display = "none";
      dialogue.hoistMe++;
        return;
    } else if (dialogue.hoistMe === 2) {
     v9.style.display = "none";
      bd.style.display = "none"; 
      stonesound.play();
        lift.style.display = "block";
        liftBottom.style.display = "none";
        dialogue.arrowUpWillRaiseLift = false;
        current.room = "lift";
        baseroom.style.display = "block";
        upArrow.style.display = "none";
        lifthas.goneDown = true;
        lifthas.returned = true;
        khigher.style.display = "none";
        klift.style.display = "block";
        platformup.style.display = "none";
        platform.style.display = "block";
        lifthas.currentlyUp = false;
        dialogue.hoistMe = false;
        dialogue.hoistedHoisted = true;
        return;
      }}});
}}

function scarletSpottedSnickerBeetle() {
    if (!dialogue.scarletSpottedSnicker) {
    dialogue.wifeandkids = 1;
   yyk10.style.display = "block";
   kwtf.style.display = "block";
   dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.wifeandkids === 1) {
        yyk10.style.display = "none";
        yyk11.style.display = "block";
        kwtf.style.display = "block";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 2) {
        yyk11.style.display = "none";
        yyk12.style.display = "block";
        kwtf.style.display = "block";
           dialogue.wifeandkids++;
           return;
       }  else if (dialogue.wifeandkids === 3) {
        yyk12.style.display = "none";
        yyk13.style.display = "block";
        b.style.display = "block";
        kwtf.style.display = "none";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 4) {
        yyk13.style.display = "none";
        yyk14.style.display = "block";
        kwtf.style.display = "block";
        b.style.display = "none";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 5) {
        yyk14.style.display = "none";
        yyk15.style.display = "block";
        b.style.display = "block";
        kwtf.style.display = "none";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 6) {
        yyk15.style.display = "none";
        yyk16.style.display = "block";
        bfur.style.display = "block";
        b.style.display = "none";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 7) {
        yyk16.style.display = "none";
        yyk17.style.display = "block";
        bfur.style.display = "block";
        b.style.display = "block";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 8) {
        yyk17.style.display = "none";
        yyk18.style.display = "block";
        b.style.display = "block";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 9) {
        yyk18.style.display = "none";
        yyk19.style.display = "block";
        b.style.display = "block";
           dialogue.wifeandkids++;
           return;
       }  else if (dialogue.wifeandkids === 10) {
        yyk19.style.display = "none";
        yyk20.style.display = "block";
        bfur.style.display = "block";
        b.style.display = "none";
           dialogue.wifeandkids++;
           return;
       } else if (dialogue.wifeandkids === 11) {
        yyk20.style.display = "none";
        bfur.style.display = "none";
           dialogue.wifeandkids = false;
           dialogue.scarletSpottedSnicker = true;
           dialogue.blockArrowTravel = false;
       }
    }});
}}


//entering the lift room
function liftRoomDialogue() {
    if (!dialogue.ohABigCircleOnTheGround) {
    if (!cookiesHas('liftroom')) {
    //triggered when going west from the lobby for the first time
    dialogue.firstTimeInTheLiftRoom = true;
    dialogue.blockArrowTravel = true;
    w1.style.display = "block";
      k.style.display = "block"; //What do you think this big circle does?
      dialogue.liftInvestigation = 1;
      document.addEventListener("keydown", function() {
    if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.liftInvestigation === 1) {
     w1.style.display = "none";
     w2.style.display = "block"; //Whatever it is, I'm sure standing directly in the middle of it is sure to yield interesting results.
      b.style.display = "block"; 
      k.style.display = "none";
      dialogue.liftInvestigation++;
        return;
    } else if (dialogue.liftInvestigation === 2) {
     w2.style.display = "none";
     w3.style.display = "block";
      b.style.display = "block"; //Which is why I'm going to stand over here by these buttons.
        dialogue.liftInvestigation++;
        return;
    } else if (dialogue.liftInvestigation === 3) {
     w3.style.display = "none";
      b.style.display = "none";
      document.cookie = "liftroom=liftroom;";
      dialogue.ohABigCircleOnTheGround = true;
      dialogue.blockArrowTravel = false;
    }
}});}}
}

function heyCanYouHitTheButtonsThisTime() {
   if (!dialogue.yourturn) {
    dialogue.heyitsyourturn = 1;
   yyt1.style.display = "block";
   b.style.display = "block";
   dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.heyitsyourturn === 1) {
        yyt1.style.display = "none";
        yyt2.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
           dialogue.heyitsyourturn++;
           return;
       } else if (dialogue.heyitsyourturn === 2) {
        yyt2.style.display = "none";
        yyt3.style.display = "block";
        k.style.display = "block";
           dialogue.heyitsyourturn++;
           return;
       }  else if (dialogue.heyitsyourturn === 3) {
        yyt3.style.display = "none";
        k.style.display = "none";
           dialogue.heyitsyourturn = true;
           dialogue.yourturn = true;
           explorers.style.display = "none";
    kbuttons.style.display = "block";
            bplatform.style.display = "block";
            dialogue.canyouhitthebuttonsthistime = true;
               dialogue.blockArrowTravel = false;

   }}});}
   
}


function itsAPipeSegment() {
if (dialogue.whyPipe || dialogue.macaroniPipeSeen) {
    zzv3.style.display = "block"; //this must be...
       k.style.display = "block";
       dialogue.goobleydooblyey = 1;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.goobleydooblyey === 1) {
        zzv3.style.display = "none";
        k.style.display = "none";
     }}});
} else {
    zzv1.style.display = "block"; //it's a pipe segment!
       k.style.display = "block";
       dialogue.goobleydooblyey = 1;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.goobleydooblyey === 1) {
        zzv1.style.display = "none";
        zzv2.style.display = "block";
        k.style.display = "block";
       dialogue.goobleydooblyey++;
     } else if (dialogue.goobleydooblyey === 2) {
        zzv2.style.display = "none";
        k.style.display = "none";
     }
    }});
}
}


function redSwitchDialogue() {
    if (!dialogue.looksImportant) {
    //this looks important
    dialogue.thickLayerOfGlass = 1;
    dialogue.blockArrowTravel = true;
       yyo1.style.display = "block";
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.thickLayerOfGlass === 1) {
        yyo1.style.display = "none";
        k.style.display = "none";
        yyo2.style.display = "block";
        b.style.display = "block";
         dialogue.thickLayerOfGlass++;
         return;
     }  else if (dialogue.thickLayerOfGlass === 2) {
        yyo2.style.display = "none";
       b.style.display = "none";
       dialogue.blockArrowTravel = false;
       dialogue.thickLayerOfGlass = false;
       dialogue.looksImportant = true;
         return;
     } 
   }});} else if (dialogue.looksImportant && !dialogue.redSwitch) {
    dialogue.thickLayerOfGlass2 = 1;
    dialogue.blockArrowTravel = true;
       yyo3.style.display = "block";
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.thickLayerOfGlass2 === 1) {
        yyo3.style.display = "none";
        k.style.display = "none";
        yyo4.style.display = "block";
        b.style.display = "block";
         dialogue.thickLayerOfGlass2++;
         return;
     }  else if (dialogue.thickLayerOfGlass2 === 2) {
        yyo4.style.display = "none";
       b.style.display = "none";
       dialogue.blockArrowTravel = false;
       dialogue.redSwitch = true;
     } 
   }});
   } else if (dialogue.looksImportant && dialogue.redSwitch) {
    dialogue.thickLayerOfGlass3 = 1;
    dialogue.blockArrowTravel = true;
       yyo2.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.thickLayerOfGlass3 === 1) {
        yyo2.style.display = "none";
        b.style.display = "none";
         dialogue.thickLayerOfGlass3 = 1;
             dialogue.blockArrowTravel = false;
     }}});
     } 
    }

function undergroundLake() {
    if (!dialogue.undergroundLake) {
    dialogue.undergroundLake = 1;
    dialogue.blockArrowTravel = true;
       zz1.style.display = "block";
       knoba.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.undergroundLake === 1) {
        zz1.style.display = "none";
        knoba.style.display = "none";
        zz2.style.display = "block";
        bnoba.style.display = "block";
         dialogue.undergroundLake++;
         return;
     }  else if (dialogue.undergroundLake === 2) {
        zz2.style.display = "none";
       bnoba.style.display = "none";
         dialogue.undergroundLake = true;
         dialogue.blockArrowTravel = false;
        document.cookie = "undergroundLake=undergroundLake";
         return;
     } 
   }});
}}

function itsASpareHandle() {
    if (!(inventory.slot1 === "missing handle" || inventory.slot2 === "missing handle" || inventory.slot3 === "missing handle" || inventory.slot4 === "missing handle")) {
    dialogue.spareHandle = 1;
       yyh1.style.display = "block";
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.spareHandle === 1) {
        yyh1.style.display = "none";
        k.style.display = "none";
     }}});
}
}

function looksLikeTheDisplayIsOff() { //there's some sort of display screen behind the curtains... 2
   if (dialogue.displayFace2) {
    dialogue.displayTerminal = 1;
       zr1.style.display = "block";
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.displayTerminal === 1) {
        zr1.style.display = "none";
        k.style.display = "none";
        zr2.style.display = "block";
        b.style.display = "block";
         dialogue.displayTerminal++;
         return;
     }  else if (dialogue.displayTerminal === 2) {
        zr2.style.display = "none";
        zr3.style.display = "block";
       b.style.display = "block";
         dialogue.displayTerminal++;
         return;
     } else if (dialogue.displayTerminal === 3) {
        zr3.style.display = "none";
        zr4.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.displayTerminal++;
         return;
     } else if (dialogue.displayTerminal === 4) {
        zr4.style.display = "none";
        zr5.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
         dialogue.displayTerminal++;
         return;
     } else if (dialogue.displayTerminal === 5) {
        zr5.style.display = "none";
        zr6.style.display = "block";
        kstu.style.display = "block";
        b.style.display = "none";
         dialogue.displayTerminal++;
         return;
     } else if (dialogue.displayTerminal === 6) {
        zr6.style.display = "none";
        kstu.style.display = "none";
        dialogue.displayFace2 = false;
         return;
     } 
   }});
   } else if (dialogue.displayFace) { //there's some sort of display screen behind the curtains...
    dialogue.displayFace = 1;
       zq1.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.displayFace === 1) {
        zq1.style.display = "none";
       b.style.display = "none";
       dialogue.displayFace2 = true;
       dialogue.displayFace = false;
         return;
     } 
   }});}
}       



function verilyIsBurningAShrub() {
 if (!dialogue.verilyfour) {
      yyp1.style.display = "block";
      v.style.display = "block";
      dialogue.verilyShruberies = 1;
      dialogue.blockArrowTravel = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.verilyShruberies === 1) {
        yyp1.style.display = "none";
        yyp2.style.display = "block";
      v.style.display = "block";
      dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 2) {
        yyp2.style.display = "none";
        yyp3.style.display = "block";
        v.style.display = "none";
        ksul.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    }  else if (dialogue.verilyShruberies === 3) {
        yyp3.style.display = "none";
        yyp4.style.display = "block";
        ksul2.style.display = "block";
        ksul.style.display = "none";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 4) {
        yyp4.style.display = "none";
        yyp5.style.display = "block";
        ksul.style.display = "block";
        ksul2.style.display = "none";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 5) {
        yyp5.style.display = "none";
        yyp6.style.display = "block";
        k.style.display = "block";
        ksul.style.display = "none";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 6) {
        yyp6.style.display = "none";
        yyp7.style.display = "block";
        v.style.display = "block"; //i wanted to confirm something
        k.style.display = "none";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 7) {
        yyp7.style.display = "none";
        yyp8.style.display = "block";
        v.style.display = "none";
        b.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 8) {
        yyp8.style.display = "none";
        yyp9.style.display = "block";
        b.style.display = "none";
        v.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 9) {
        yyp9.style.display = "none";
        yyp10.style.display = "block";
        v.style.display = "none";
        bfur.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 10) {
        yyp10.style.display = "none";
        yyp11.style.display = "block";
        bfur.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 11) {
        yyp11.style.display = "none";
        yyp12.style.display = "block";
        b.style.display = "block"; //we are guests
        bfur.style.display = "none";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 12) {
        yyp12.style.display = "none";
        yyp13.style.display = "block";
        b.style.display = "none";
        v.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 13) {
        yyp13.style.display = "none";
        yyp14.style.display = "block";
        v.style.display = "none";
        bfur.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 14) {
        yyp14.style.display = "none";
        yyp15.style.display = "block";
        bfur.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 15) {
        yyp15.style.display = "none";
        yyp16.style.display = "block";
        bfur.style.display = "none";
        k.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 16) {
        yyp16.style.display = "none";
        yyp17.style.display = "block";
        k.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 17) {
        yyp17.style.display = "none";
        yyp18.style.display = "block";
        k.style.display = "none";
        v.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 18) {
        yyp18.style.display = "none";
        yyp19.style.display = "block";
        v.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 19) {
        yyp19.style.display = "none";
        yyp20.style.display = "block";
        v.style.display = "block";
        dialogue.verilyShruberies++;
        return;
    } else if (dialogue.verilyShruberies === 20) {
        yyp20.style.display = "none";
        v.style.display = "none";
        dialogue.verilyShruberies = true;
        dialogue.blockArrowTravel = false;
    }
}})}
}

function verilyIdleDialogue() {
     if (dialogue.verilythree) {
 zzk1.style.display = "block";
      k.style.display = "block";
      dialogue.verilyIdles3 = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.verilyIdles3 === 1) {
        zzk1.style.display = "none";
        zzk2.style.display = "block";
      v.style.display = "block";
      k.style.display = "none";
      dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 2) {
        zzk2.style.display = "none";
        zzk3.style.display = "block";
      v.style.display = "block";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 3) {
        zzk3.style.display = "none";
        zzk4.style.display = "block";
      v.style.display = "none";
      k.style.display = "block";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 4) {
        zzk4.style.display = "none";
        zzk5.style.display = "block";
      v.style.display = "block";
      k.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 5) {
        zzk5.style.display = "none";
        zzk6.style.display = "block";
      v.style.display = "block";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 6) {
        zzk6.style.display = "none";
        zzk7.style.display = "block";
      k.style.display = "block";
      v.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 7) {
        zzk7.style.display = "none";
        zzk8.style.display = "block";
      v.style.display = "block"; //gonna map the whole thing?
      k.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 8) {
        zzk8.style.display = "none";
        zzk9.style.display = "block";
      k.style.display = "block";
      v.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 9) {
        zzk9.style.display = "none";
        zzk10.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 10) {
        zzk10.style.display = "none";
        zzk11.style.display = "block";
      b.style.display = "block";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 11) {
        zzk11.style.display = "none";
        zzk12.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 12) {
        zzk12.style.display = "none";
        zzk13.style.display = "block";
      vhap.style.display = "block"; //haha!
      k.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 13) {
        zzk13.style.display = "none";
        zzk14.style.display = "block";
      v.style.display = "block";
      vhap.style.display = "none";
            dialogue.verilyIdles3++;
        return;
    } else if (dialogue.verilyIdles3 === 14) {
        zzk14.style.display = "none";
      v.style.display = "none";
      dialogue.verilytwo = false;
      dialogue.verilythree = false;
        return;
    } 
}});  
    } else if (dialogue.verilytwo) {
      zzj1.style.display = "block";
      b.style.display = "block";
      dialogue.verilyIdles2 = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.verilyIdles2 === 1) {
        zzj1.style.display = "none";
        zzj2.style.display = "block";
      v.style.display = "block";
      b.style.display = "none";
      dialogue.verilyIdles2++;
        return;
    } else if (dialogue.verilyIdles2 === 2) {
        zzj2.style.display = "none";
        zzj3.style.display = "block";
      v.style.display = "block";
            dialogue.verilyIdles2++;
        return;
    } else if (dialogue.verilyIdles2 === 3) {
        zzj3.style.display = "none";
        zzj4.style.display = "block";
      vrel.style.display = "block";
      v.style.display = "none";
            dialogue.verilyIdles2++;
        return;
    } else if (dialogue.verilyIdles2 === 4) {
        zzj4.style.display = "none";
      vrel.style.display = "none";
            dialogue.verilythree = true;
            dialogue.verilytwo = false;
            dialogue.verilyone = true;
        return;
    }
}});  
    } else if (!dialogue.verilyone) {
      zzi1.style.display = "block";
      v.style.display = "block";
      dialogue.verilyIdles = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.verilyIdles === 1) {
        zzi1.style.display = "none";
        zzi2.style.display = "block";
      k.style.display = "block";
      v.style.display = "none";
      dialogue.verilyIdles++;
        return;
    } else if (dialogue.verilyIdles === 2) {
        zzi2.style.display = "none";
        zzi3.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
            dialogue.verilyIdles++;
        return;
    } else if (dialogue.verilyIdles === 3) {
        zzi3.style.display = "none";
        zzi4.style.display = "block";
      b.style.display = "none";
      v.style.display = "block";
            dialogue.verilyIdles++;
        return;
    } else if (dialogue.verilyIdles === 4) {
        zzi4.style.display = "none";
        zzi5.style.display = "block";
      v.style.display = "block";
            dialogue.verilyIdles++;
        return;
    } else if (dialogue.verilyIdles === 5) {
        zzi5.style.display = "none";
        zzi6.style.display = "block";
      k.style.display = "block";
      v.style.display = "none";
            dialogue.verilyIdles++;
        return;
    } else if (dialogue.verilyIdles === 6) {
        zzi6.style.display = "none";
      k.style.display = "none";
      dialogue.verilytwo = true;
      dialogue.verilyone = true;
        return;
    }
}});  
}
}

function signDialogue() {
    if (game.underConstruction) {
    if (!dialogue.blankSign) {
    yyd1.style.display = "block";
    b.style.display = "block";
    dialogue.blankSign = 1;
    document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.blankSign === 1) {
        yyd1.style.display = "none";
        b.style.display = "none";
        dialogue.blankSign = true;
        dialogue.signPost = true;
        notifnoise.play();
        increaseNotificationLobbyThree();
    }
}});
    } }
}

function wouldASwordHelp() {
    zzc1.style.display = "block";
      k.style.display = "block";
      dialogue.wouldASwordHelp = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.wouldASwordHelp === 1) {
        zzc1.style.display = "none";
        zzc2.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
      dialogue.wouldASwordHelp++;
        return;
    } else if (dialogue.wouldASwordHelp === 2) {
        zzc2.style.display = "none";
      b.style.display = "none";
        return;
    }
}});
}

function niceACode() {
if (!dialogue.aNumericalCode2){
    zzh2.style.display = "block";
      k.style.display = "block";
      dialogue.aNumericalCode = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.aNumericalCode === 1) {
        zzh2.style.display = "none";
        zzh3.style.display = "block";
      k.style.display = "block";
      dialogue.aNumericalCode++;
        return;
    } else if (dialogue.aNumericalCode === 2) {
        zzh3.style.display = "none";
      k.style.display = "none";
      dialogue.aNumericalCode2 = true;
      dialogue.aNumericalCode4 = true;
      return;
    }
}});} else if (dialogue.aNumericalCode4) {
    zzh4.style.display = "block";
      b.style.display = "block";
      dialogue.aNumericalCode3 = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.aNumericalCode3 === 1) {
        zzh4.style.display = "none";
        b.style.display = "none";
       dialogue.aNumericalCode4 = false;
        return;
    } 
    }});}
}


function looksLikeTheresAnEnvelopeInTheChandelier() {
    if (!dialogue.looksLikeTheresAnEnvelopeInTheChandelier){
    zza1.style.display = "block";
      k.style.display = "block";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 1) {
        zza1.style.display = "none";
        zza2.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 2) {
        zza2.style.display = "none";
        zza3.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 3) {
        zza3.style.display = "none";
        zza4.style.display = "block";
      b.style.display = "block";
      k.style.display = "none";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    }  else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 4) {
        zza4.style.display = "none";
        zza5.style.display = "block";
      b.style.display = "block";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 5) {
        zza5.style.display = "none";
        zza6.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
    return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 6) {
        zza6.style.display = "none";
        zza7.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
    return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 7) {
        zza7.style.display = "none";
        zza8.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
              dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 8) {
        zza8.style.display = "none";
        zza9.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
              dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 9) {
        zza9.style.display = "none";
        zza10.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 10) {
        zza10.style.display = "none";
        zza11.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.looksLikeTheresAnEnvelopeInTheChandelier++;
        return;
    } else if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier === 11) {
        zza11.style.display = "none";
        k.style.display = "none";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier = true;
        return;
    }

}});} else {
    zzb1.style.display = "block";
      b.style.display = "block";
      dialogue.looksLikeTheresAnEnvelopeInTheChandelier2 = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.looksLikeTheresAnEnvelopeInTheChandelier2 === 1) {
        zzb1.style.display = "none";
      b.style.display = "none";
        return;
    } 
}});
}
}


function applySwordToRope() {
    if (!candleLeer.isOnTheGround) {
    zzd1.style.display = "block";
      b.style.display = "block";
      dialogue.applySwordToRope = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.applySwordToRope === 1) {
        zzd2.style.display = "block";
        zzd1.style.display = "none";
        b.style.display = "block";
      dialogue.applySwordToRope++;
        return;
    } else if (dialogue.applySwordToRope === 2) {
        zzd2.style.display = "none";
        b.style.display = "none";
        chandelierexplorers.style.display = "block";
    chandelierground.style.display = "block";
    explorers.style.display = "none";
    chandelier.style.display = "none";
    candleLeer.isOnTheGround = true;
    dialogue.applySwordToRope = false;
    document.cookie = "chandelierCut=chandelierCut";
    chandelierfall.play();
        return;
    }
}});
    
    }
}

function whyPipe() {
      zzy1.style.display = "block";
      k.style.display = "block";
      dialogue.whyapipe = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.whyapipe === 1) {
        zzy1.style.display = "none";
        zzy2.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.whyapipe++;
        return;
    } else if (dialogue.whyapipe === 2) {
        zzy2.style.display = "none";
        zzy3.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    } else if (dialogue.whyapipe === 3) {
        zzy3.style.display = "none";
        zzy4.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.whyapipe++;
        return;
    } else if (dialogue.whyapipe === 4) {
        zzy4.style.display = "none";
        zzy5.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    } else if (dialogue.whyapipe === 5) {
        zzy5.style.display = "none";
        zzy6.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 6) {
        zzy6.style.display = "none";
        zzy7.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 7) {
        zzy7.style.display = "none";
        zzy8.style.display = "block";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 8) {
        zzy8.style.display = "none";
        zzy9.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 9) {
        zzy9.style.display = "none";
        zzy10.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 10) {
        zzy10.style.display = "none";
        zzy11.style.display = "block";
        k.style.display = "none";
        b.style.display = "block"; //why?
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 11) {
        zzy11.style.display = "none";
        zzy12.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 12) {
        zzy12.style.display = "none";
        zzy13.style.display = "block";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 13) {
        zzy13.style.display = "none";
        zzy14.style.display = "block";
        kstu.style.display = "block";
        k.style.display = "none";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 14) {
        zzy14.style.display = "none";
        zzy15.style.display = "block";
        kwtf.style.display = "block";
        kstu.style.display = "none";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 15) {
        zzy15.style.display = "none";
        zzy16.style.display = "block";
        kwtf.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 16) {
        zzy16.style.display = "none";
        zzy17.style.display = "block";
        kwtf.style.display = "none";
        b.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 17) {
        zzy17.style.display = "none";
        zzy18.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
        dialogue.whyapipe++;
        return;
    }else if (dialogue.whyapipe === 18) {
        zzy18.style.display = "none";
        k.style.display = "none";
        dialogue.whyPipe = true;
        pickCenterS();
        document.cookie = "waipaiype=waipaiype";
        return;
    }
}});
}



function takeCupcake() {
if (prizes.cupcake && !dialogue.treated) {
    cupcake.style.display = "none";
    //a little treat for me
    yyi5.style.display = "block";
    k.style.display = "block"; 
    dialogue.treatforme = 1;
    document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.treatforme === 1) {
        yyi5.style.display = "none";
        yyi6.style.display = "block";
        kdem.style.display = "block";
        k.style.display = "none";
        dialogue.treatforme++;
        return;
    } else if (dialogue.treatforme === 2) {
        yyi6.style.display = "none";
        kdem.style.display = "none";
        dialogue.treatforme = false;
        dialogue.treated = true;
        return;
    }}});
    } else {
        //it's a cupcake!
        if (!dialogue.itsacuppacake) {
      yyi1.style.display = "block";
      k.style.display = "block";
      dialogue.itsacuppacake = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.itsacuppacake === 1) {
        yyi1.style.display = "none";
        yyi2.style.display = "block";
        k.style.display = "block";
        dialogue.itsacuppacake++;
        return;
    } else if (dialogue.itsacuppacake === 2) {
        yyi2.style.display = "none";
        yyi3.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.itsacuppacake++;
        return;
    }  else if (dialogue.itsacuppacake === 3) {
        yyi3.style.display = "none";
        yyi4.style.display = "block";
        b.style.display = "block";
        dialogue.itsacuppacake++;
        return;
    }  else if (dialogue.itsacuppacake === 4) {
        yyi4.style.display = "none";
        yyi5.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
        dialogue.itsacuppacake++;
        return;
    } else if (dialogue.itsacuppacake === 5) {
        yyi5.style.display = "none";
        k.style.display = "none";
        dialogue.itsacuppacake = true;
    }
    }});} else {
      yyi5.style.display = "block";
      k.style.display = "block";
      dialogue.itsacuppacake2 = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.itsacuppacake2 === 1) {
        yyi5.style.display = "none";
        k.style.display = "none";
    }}});}
}
}

function takeMacaroniPipe() {
    if (prizes.macaroniPipe) {
        if (!inventory.slot1) {
            if (inventory.slot1 !== "macaroni pipe"
            && inventory.slot2 !== "macaroni pipe"
            && inventory.slot3 !== "macaroni pipe"
            && inventory.slot4 !== "macaroni pipe") {
                macaronipipe.style.display = "none";
                document.cookie = "macaronipipe=macaronipipe";
                key.macaroni = true;
                inventory.slot1 = "macaroni pipe";}
        } else if (!inventory.slot2) {
            if (inventory.slot1 !== "macaroni pipe"
            && inventory.slot2 !== "macaroni pipe"
            && inventory.slot3 !== "macaroni pipe"
            && inventory.slot4 !== "macaroni pipe") {
                macaronipipe.style.display = "none";
                document.cookie = "macaronipipe=macaronipipe";
                key.macaroni = true;
                inventory.slot2 = "macaroni pipe";}
        } else if (!inventory.slot3) {
            if (inventory.slot1 !== "macaroni pipe"
            && inventory.slot2 !== "macaroni pipe"
            && inventory.slot3 !== "macaroni pipe"
            && inventory.slot4 !== "macaroni pipe") {
                macaronipipe.style.display = "none";
                document.cookie = "macaronipipe=macaronipipe";
                key.macaroni = true;
                inventory.slot3 = "macaroni pipe";}
        }  else if (!inventory.slot4) {
            if (inventory.slot1 !== "macaroni pipe"
            && inventory.slot2 !== "macaroni pipe"
            && inventory.slot3 !== "macaroni pipe"
            && inventory.slot4 !== "macaroni pipe") {
                macaronipipe.style.display = "none";
                document.cookie = "macaronipipe=macaronipipe";
                key.macaroni = true;
                inventory.slot4 = "macaroni pipe";}
        } else {
            tooHeavy();
        }
    } else {
      zzv3.style.display = "block";
      k.style.display = "block";
      dialogue.looksLikeMacaroni = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.looksLikeMacaroni === 1) {
        zzv3.style.display = "none";
        k.style.display = "none";
        dialogue.macaroniPipeSeen = true;
    }}});
    }
}

function takeTeddyBear() {
    if (prizes.teddyBear) {
        yyv1.style.display = "block";
      br3.style.display = "block";
      dialogue.nowhaveTeddyBear = 1;
      dialogue.blockArrowTravel = true;
      teddybear.style.display = "none";
      explorersteddybear.style.display = "block";
      dialogue.explorersteddybearworn = true;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.nowhaveTeddyBear === 1) {
        yyv1.style.display = "none";
        br3.style.display = "none";
      dialogue.nowhaveTeddyBear = true;
      dialogue.blockArrowTravel = false;
    }
  }});} else {
        if (!dialogue.haveThatBear) {
      zzw1.style.display = "block";
      b.style.display = "block";
      dialogue.haveTeddyBear = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.haveTeddyBear === 1) {
        zzw1.style.display = "none";
        zzw2.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
      dialogue.haveTeddyBear++;
        return;
    } else if (dialogue.haveTeddyBear === 2) {
        zzw2.style.display = "none";
        zzw3.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.haveTeddyBear++;
        return;
    } else if (dialogue.haveTeddyBear === 3) {
        zzw3.style.display = "none";
        zzw4.style.display = "block";
        b.style.display = "none";
        kwtf.style.display = "block";
        dialogue.haveTeddyBear++;
        return;
    } else if (dialogue.haveTeddyBear === 4) {
        zzw4.style.display = "none";
        kwtf.style.display = "none";
        dialogue.haveThatBear = true;
        dialogue.haveThatBear2 = true;
        return;
    }
}});} else if (dialogue.haveThatBear2) {
    zzwa1.style.display = "block";
      b.style.display = "block";
      dialogue.haveTeddyBear2 = 1; //we will stop at nothing
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.haveTeddyBear2 === 1) {
        zzwa1.style.display = "none";
        b.style.display = "none";
        dialogue.haveThatBear2 = false;
        dialogue.haveThatBear3 = true;
    } }});
} else if (dialogue.haveThatBear3) {
    zzwb1.style.display = "block";
      b.style.display = "block";
      dialogue.haveTeddyBear3 = 1; //there will be no survivors
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.haveTeddyBear3 === 1) {
        zzwb1.style.display = "none";
        b.style.display = "none";
        dialogue.haveThatBear3 = false;
    } }});
}
    }
}



function inspectSink() {
    yyo5.style.display = "block";
      b.style.display = "block";
      dialogue.clearglasspipe = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.clearglasspipe === 1) {
        yyo5.style.display = "none";
        b.style.display = "none";
    } }});
}

function selectTable() {
if (!dialogue.mutualism) {
      yyj1.style.display = "block";
      b.style.display = "block";
      dialogue.mutualism = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.mutualism === 1) {
        yyj1.style.display = "none";
        yyj2.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
      dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 2) {
        yyj2.style.display = "none";
        yyj3.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 3) {
        yyj3.style.display = "none";
        yyj4.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 4) {
        yyj4.style.display = "none";
        yyj5.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    }  else if (dialogue.mutualism === 5) {
        yyj5.style.display = "none";
        yyj6.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 6) {
        yyj6.style.display = "none";
        yyj7.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 7) {
        yyj7.style.display = "none";
        yyj8.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 8) {
        yyj8.style.display = "none";
        yyj9.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 9) {
        yyj9.style.display = "none";
        yyj10.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 10) {
        yyj10.style.display = "none";
        yyj11.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 11) {
        yyj11.style.display = "none";
        yyj12.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 12) {
        yyj12.style.display = "none";
        yyj13.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 13) {
        yyj13.style.display = "none";
        yyj14.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 14) {
        yyj14.style.display = "none";
        yyj15.style.display = "block";
        b.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 15) {
        yyj15.style.display = "none";
        yyj16.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 16) {
        yyj16.style.display = "none";
        yyj17.style.display = "block";
        k.style.display = "block";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 17) {
        yyj17.style.display = "none";
        yyj18.style.display = "block";
        kpun.style.display = "block";
        k.style.display = "none";
        dialogue.mutualism++;
        return;
    } else if (dialogue.mutualism === 18) {
        yyj18.style.display = "none";
        kpun.style.display = "none";
        dialogue.mutualism = true;
        dialogue.mutualism2 = true;
    }
}});} else if (dialogue.mutualism2) {
      yyj19.style.display = "block";
      k.style.display = "block";
      dialogue.mutualism2 = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.mutualism2 === 1) {
        yyj19.style.display = "none";
        yyj20.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
      dialogue.mutualism2++;
        return;
    } else if (dialogue.mutualism2 === 2) {
        yyj20.style.display = "none";
        b.style.display = "none";
        dialogue.mutualism2 = false;
    } 
}});} else if (!dialogue.trueMutualism) {
    trueMutualismGo();
}
}

function trueMutualismGo() {
    if (!dialogue.trueMutualism) {
    yyr1.style.display = "block";
    dialogue.blockArrowTravel = true;
      b.style.display = "block";
      dialogue.mutualism3 = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.mutualism3 === 1) {
        yyr1.style.display = "none";
        yyr2.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 2) {
        yyr2.style.display = "none";
        yyr3.style.display = "block";
        k.style.display = "block";
        b.style.display = "none";
      dialogue.mutualism3++;
        return;
    }  else if (dialogue.mutualism3 === 3) {
        yyr3.style.display = "none";
        yyr4.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 4) {
        yyr4.style.display = "none";
        yyr5.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 5) {
        yyr5.style.display = "none";
        yyr6.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 6) {
        yyr6.style.display = "none";
        yyr7.style.display = "block";
        ks.style.display = "block";
        k.style.display = "none";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 7) {
        yyr7.style.display = "none";
        yyr8.style.display = "block";
        ks.style.display = "none";
        kth.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 8) {
        yyr8.style.display = "none";
        yyr9.style.display = "block";
        k.style.display = "block";
                kth.style.display = "none";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 9) {
        yyr9.style.display = "none";
        yyr10.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 10) {
        yyr10.style.display = "none";
        yyr11.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 11) {
        yyr11.style.display = "none";
        yyr12.style.display = "block";
        b.style.display = "none";
        kha.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 12) {
        yyr12.style.display = "none";
        yyr13.style.display = "block";
         k.style.display = "block";
        kha.style.display = "none";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 13) {
        yyr13.style.display = "none";
        yyr14.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 14) {
        yyr14.style.display = "none";
        yyr15.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 15) {
        yyr15.style.display = "none";
        yyr16.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 16) {
        yyr16.style.display = "none";
        yyr17.style.display = "block";
        b.style.display = "none";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 17) {
        yyr17.style.display = "none";
        yyr18.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 18) {
        yyr18.style.display = "none";
        yyr19.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 19) {
        yyr19.style.display = "none";
        yyr20.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 20) {
        yyr20.style.display = "none";
        yyr21.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 21) {
        yyr21.style.display = "none";
        yyr22.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 22) {
        yyr22.style.display = "none";
        yyr23.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 23) {
        yyr23.style.display = "none";
        yyr24.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 24) {
        yyr24.style.display = "none";
        yyr25.style.display = "block";
       b.style.display = "none";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 25) {
        yyr25.style.display = "none";
        yyr26.style.display = "block";
        k.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 26) {
        yyr26.style.display = "none";
        yyr27.style.display = "block";
        k.style.display = "none";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 27) {
        yyr27.style.display = "none";
        yyr28.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 28) {
        yyr28.style.display = "none";
        yyr29.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 29) {
        yyr29.style.display = "none";
        yyr30.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 30) {
        yyr30.style.display = "none";
        yyr31.style.display = "block";
        bfur.style.display = "block";
        b.style.display = "none";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 31) {
        yyr31.style.display = "none";
        yyr32.style.display = "block";
        bfur.style.display = "none";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 32) {
        yyr32.style.display = "none";
        yyr33.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 33) {
        yyr33.style.display = "none";
        yyr34.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 34) {
        yyr34.style.display = "none";
        yyr35.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    }  else if (dialogue.mutualism3 === 35) {
        yyr35.style.display = "none";
        yyr36.style.display = "block";
        b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 36) {
        yyr36.style.display = "none";
        yyr37.style.display = "block";
                b.style.display = "block";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 37) {
        yyr37.style.display = "none";
        yyr38.style.display = "block";
   b.style.display = "none";
        k.style.display = "block";
              dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 38) {
        yyr38.style.display = "none";
        yyr39.style.display = "block";
                k.style.display = "block";
      dialogue.mutualism3++;
        return;
    }  else if (dialogue.mutualism3 === 39) {
        yyr39.style.display = "none";
        yyr40.style.display = "block";
                b.style.display = "block";
                k.style.display = "none";
      dialogue.mutualism3++;
        return;
    } else if (dialogue.mutualism3 === 40) {
        yyr40.style.display = "none";
        b.style.display = "none";
dialogue.mutualism3 = true;
dialogue.blockArrowTravel = false;
      dialogue.trueMutualism = true;
}}});
}
}

function modernArt() {
    if (!dialogue.itsmodernart) {
           k.style.display = "block";
    dialogue.veryhelpfulmap = 1;
       yyq1.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.veryhelpfulmap === 1) {
       yyq1.style.display = "none";
       yyq2.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
         dialogue.veryhelpfulmap++;
         return;
     } else if (dialogue.veryhelpfulmap === 2) {
       yyq2.style.display = "none";
       b.style.display = "none";
         dialogue.veryhelpfulmap = false;
         dialogue.itsmodernart = true;
     }}});
    }
}


function secretPaintingPassage() {
    if (!dialogue.secretPaintingPassageDiscovered) {
if (!dialogue.secretPassage) {
       dialogue.secretPassage = 1;
       yya1.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.secretPassage === 1) {
       yya1.style.display = "none";
       yya2.style.display = "block";
       ksl.style.display = "block";
       b.style.display = "none";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 2) {
       yya2.style.display = "none";
       yya3.style.display = "block";
       ksl.style.display = "none";
       k.style.display = "block";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 3) {
       yya3.style.display = "none";
       yya4.style.display = "block";
             k.style.display = "block";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 4) {
       yya4.style.display = "none";
       yya5.style.display = "block"; 
       k.style.display = "block";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 5) {
       yya5.style.display = "none";
       yya6.style.display = "block";
       ksl2.style.display = "block";
       k.style.display = "none";
       dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 6) {
       yya6.style.display = "none";
       yya7.style.display = "block";
       ksl.style.display = "block";
       ksl2.style.display = "none";
       dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 7) {
       yya7.style.display = "none";
       yya8.style.display = "block";
             k.style.display = "block";
             ksl.style.display = "none";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 8) {
       yya8.style.display = "none";
       yya9.style.display = "block";
       k.style.display = "block";
       ksl2.style.display = "none";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 9) {
       yya9.style.display = "none";
       yya10.style.display = "block";
       k.style.display = "block";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 10) {
       yya10.style.display = "none";
       yya11.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 11) {
       yya11.style.display = "none";
       yya12.style.display = "block";
       ksl.style.display = "block";
        b.style.display = "none";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 12) {
       yya12.style.display = "none";
       ksl.style.display = "none";
       dialogue.secretPassage = true;
       dialogue.secretPassage1a = true; //secretPassage -> secretPassage1a -> secretPassage2
     }
   }});} else if (dialogue.secretPassage1a) {
        dialogue.secretPassage1a = 1;
       yya13.style.display = "block";
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.secretPassage1a === 1) {
       yya13.style.display = "none";
       yya14.style.display = "block";
       k.style.display = "block";
       k.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 2) {
       yya14.style.display = "none";
       yya15.style.display = "block";
       k.style.display = "block";
       k.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 3) {
       yya15.style.display = "none";
       yya16.style.display = "block";
       ksl.style.display = "block";
       k.style.display = "none";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 4) {
       yya16.style.display = "none";
       yya17.style.display = "block";
              k.style.display = "block";
              ksl.style.display = "none";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 5) {
       yya17.style.display = "none";
       yya18.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 6) {
       yya18.style.display = "none";
       yya19.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 7) {
       yya19.style.display = "none";
       yya20.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 8) {
       yya20.style.display = "none";
       yya21.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 9) {
       yya21.style.display = "none";
       yya22.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 10) {
       yya22.style.display = "none";
       yya23.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 11) {
       yya23.style.display = "none";
       yya24.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 12) {
       yya24.style.display = "none";
       b.style.display = "none";
       dialogue.secretPassage1a = false;
       dialogue.secretPassage2 = true;
       dialogue.verilyisnowburningashrub = true;
     } }});} else if (dialogue.secretPassage2) {
        dialogue.secretPassage2 = 1;
       yya26.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.secretPassage2 === 1) {
       yya26.style.display = "none";
        b.style.display = "none";
        northpaintings.style.display = "none";
        northpaintings2.style.display = "block";
        yya27.style.display = "block";
       kstu.style.display = "block"; //!
         dialogue.secretPassage2++;
         return;
     } else if (dialogue.secretPassage2 === 2) {
       yya27.style.display = "none";
       yya28.style.display = "block";
       kstu.style.display = "none";
       kflip.style.display = "block";
         dialogue.secretPassage2++;
         return;
     }  else if (dialogue.secretPassage2 === 3) {
       yya28.style.display = "none";
       yya29.style.display = "block";
       kflip.style.display = "none";
       kflip2.style.display = "block";
         dialogue.secretPassage2++;
         return;
     } else if (dialogue.secretPassage2 === 4) {
       yya29.style.display = "none";
       yya30.style.display = "block";
       kflip2.style.display = "none";
       b.style.display = "block";
         dialogue.secretPassage2++;
         return;
     }else if (dialogue.secretPassage2 === 5) {
       yya30.style.display = "none";
       b.style.display = "none";
       dialogue.secretPassage2 = false;
       randomDoorAudio();
        gallery.style.display = "none";
        arcadeRoom.style.display = "block";
        current.room = "arcadeRoom";  
        dialogue.secretPaintingPassageDiscovered = true; 
        dialogue.verilyisnowburningashrub = true;
        document.cookie = "secretPaintingPassage=secretPaintingPassage"; 
         return;
     }
   }});
   } 
 } else if (dialogue.secretPaintingPassageDiscovered) {
        randomDoorAudio();
        gallery.style.display = "none";
        arcadeRoom.style.display = "block";
        current.room = "arcadeRoom";  
   }
}


function secretPaintingPassageStairs() {
    if (!dialogue.secretPaintingPassageDiscovered) {
if (!dialogue.secretPassage) {
       dialogue.secretPassage = 1;
       yya1.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.secretPassage === 1) {
       yya1.style.display = "none";
       yya2.style.display = "block";
       ksl2.style.display = "block";
       b.style.display = "none";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 2) {
       yya2.style.display = "none";
       yya3.style.display = "block";
       ksl2.style.display = "none";
       k.style.display = "block";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 3) {
       yya3.style.display = "none";
       yya4.style.display = "block";
             k.style.display = "block";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 4) {
       yya4.style.display = "none";
       yya5.style.display = "block"; 
        ksl.style.display = "block";
       k.style.display = "none";
         dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 5) {
       yya5.style.display = "none";
       yya6.style.display = "block";
       ksl2.style.display = "block";
       ksl.style.display = "none";
       dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 6) {
       yya6.style.display = "none";
       yya7.style.display = "block";
       k.style.display = "block";
       ksl2.style.display = "none";
       dialogue.secretPassage++;
         return;
     } else if (dialogue.secretPassage === 7) {
       yya7.style.display = "none";
       yya8.style.display = "block";
             k.style.display = "block";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 8) {
       yya8.style.display = "none";
       yya9.style.display = "block";
       k.style.display = "block";
       ksl2.style.display = "none";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 9) {
       yya9.style.display = "none";
       yya10.style.display = "block";
       k.style.display = "block";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 10) {
       yya10.style.display = "none";
       yya11.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 11) {
       yya11.style.display = "none";
       yya12.style.display = "block";
       ksl.style.display = "block";
        b.style.display = "none";
       dialogue.secretPassage++;
         return;
     }else if (dialogue.secretPassage === 12) {
       yya12.style.display = "none";
       ksl.style.display = "none";
       dialogue.secretPassage = true;
       dialogue.secretPassage1a = true; //secretPassage -> secretPassage1a -> secretPassage2
     }
   }});} else if (dialogue.secretPassage1a) {
        dialogue.secretPassage1a = 1;
       yya13.style.display = "block";
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.secretPassage1a === 1) {
       yya13.style.display = "none";
       yya14.style.display = "block";
       k.style.display = "block";
       k.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 2) {
       yya14.style.display = "none";
       yya15.style.display = "block";
       k.style.display = "block";
       k.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 3) {
       yya15.style.display = "none";
       yya16.style.display = "block";
       ksl.style.display = "block";
       k.style.display = "none";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 4) {
       yya16.style.display = "none";
       yya17.style.display = "block";
              k.style.display = "block";
              ksl.style.display = "none";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 5) {
       yya17.style.display = "none";
       yya18.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 6) {
       yya18.style.display = "none";
       yya19.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 7) {
       yya19.style.display = "none";
       yya20.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 8) {
       yya20.style.display = "none";
       yya21.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 9) {
       yya21.style.display = "none";
       yya22.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 10) {
       yya22.style.display = "none";
       yya23.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 11) {
       yya23.style.display = "none";
       yya24.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 12) {
       yya24.style.display = "none";
       yya25.style.display = "block";
       b.style.display = "block";
       dialogue.secretPassage1a++;
         return;
     } else if (dialogue.secretPassage1a === 13) {
       yya25.style.display = "none";
       b.style.display = "none";
       dialogue.secretPassage1a = false;
       dialogue.secretPassage2 = true;
     } }});} else if (dialogue.secretPassage2) {
        console.log("but you're in the wrong room");
   } 
 }
}


function sixteenFeralRacoons() {
    if (dialogue.feralRacoons) {
        dialogue.racoons = 1;
       yye1.style.display = "block";
       dialogue.blockArrowTravel = true;
       feralracoons.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.racoons === 1) {
       yye1.style.display = "none";
       yye2.style.display = "block";
       k.style.display = "block";
       feralracoons.style.display = "none";
         dialogue.racoons++;
         return;
     } else if (dialogue.racoons === 2) {
       yye2.style.display = "none";
       yye3.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.racoons++;
         return;
     } else if (dialogue.racoons === 3) {
       yye3.style.display = "none";
       b.style.display = "none";
         dialogue.feralRacoons = false;
         dialogue.blockArrowTravel = false;
     }}});
    }
}

function wasntThereAShrubHere() {
    if (!dialogue.wasntThereAShrub) {
dialogue.wasntThereAShrub = 1;
dialogue.blockArrowTravel = true;
       yyw1.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.wasntThereAShrub === 1) {
       yyw1.style.display = "none";
       b.style.display = "none";
         dialogue.wasntThereAShrub = true;
         dialogue.blockArrowTravel = false;
    }}});}
}

function butWedGetAllWet() {
if (!dialogue.letsGoBoating) {
dialogue.letsGoBoating = 1;
dialogue.blockArrowTravel = true;
       zzu1.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.letsGoBoating === 1) {
       zzu1.style.display = "none";
       zzu2.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.letsGoBoating++;
         return;
     } else if (dialogue.letsGoBoating === 2) {
       zzu2.style.display = "none";
       zzu3.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.letsGoBoating = 4;
         return;
     } else if (dialogue.letsGoBoating === 4) {
       zzu3.style.display = "none";
       zzu5.style.display = "block"; 
       b.style.display = "block";
         dialogue.letsGoBoating++;
         return;
     } else if (dialogue.letsGoBoating === 5) {
       zzu5.style.display = "none";
       zzu6.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
      dialogue.letsGoBoating++;
         return;
     } else if (dialogue.letsGoBoating === 6) {
       zzu6.style.display = "none";
       zzu7.style.display = "block";
       k.style.display = "block";
       dialogue.letsGoBoating++;
         return;
     } else if (dialogue.letsGoBoating === 7) {
       zzu7.style.display = "none";
       k.style.display = "none";
       dialogue.letsGoBoating = true;
       dialogue.letsGoBoating2 = true;
       dialogue.blockArrowTravel = false;
     } 
   }});} else if (dialogue.letsGoBoating2 && !key.oars) {
dialogue.goBoating2 = 1;
       zzu7b.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.goBoating2 === 1) {
       zzu7b.style.display = "none";
       zzu8.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.goBoating2++;
         return;
     } else if (dialogue.goBoating2 === 2) {
       zzu8.style.display = "none";
       zzu9.style.display = "block";
       k.style.display = "block";
         dialogue.goBoating2++;
         return;
     } else if (dialogue.goBoating2 === 3) {
       zzu9.style.display = "none";
       zzu10.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.goBoating2++;
         return;
     } else if (dialogue.goBoating2 === 4) {
       zzu10.style.display = "none";
       zzu11.style.display = "block"; 
       b.style.display = "block";
         dialogue.goBoating2++;
         return;
     } else if (dialogue.goBoating2 === 5) {
       zzu11.style.display = "none";
      b.style.display = "none";
      dialogue.letsGoBoating3 = true;
      dialogue.letsGoBoating2 = false;
         return;
     }  
   }});} else if (dialogue.letsGoBoating3 && !key.oars) {
dialogue.goBoating3 = 1;
       zzu12.style.display = "block";
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.goBoating3 === 1) {
       zzu12.style.display = "none";
       zzu13.style.display = "block";
       k.style.display = "block";
         dialogue.goBoating3++;
         return;
     } else if (dialogue.goBoating3 === 2) {
       zzu13.style.display = "none";
       zzu14.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.goBoating3++;
         return;
     } else if (dialogue.goBoating3 === 3) {
       zzu14.style.display = "none";
       zzu15.style.display = "block";
       kstu.style.display = "block";
       b.style.display = "none";
         dialogue.goBoating3++;
         return;
     } else if (dialogue.goBoating3 === 4) {
       zzu15.style.display = "none";
       zzu16.style.display = "block";
       kstu.style.display = "none";
       kwtf.style.display = "block";
        dialogue.goBoating3++;
     } else if (dialogue.goBoating3 === 5) {
       zzu16.style.display = "none";
       kwtf.style.display = "none";
       dialogue.letsGoBoating3 = false;
       dialogue.letsGoBoating4 = true;
     } 
   }});} else if (dialogue.letsGoBoating4 && !key.oars) {
dialogue.goBoating4 = 1;
       zzu17.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.goBoating4 === 1) {
       zzu17.style.display = "none";
       b.style.display = "none";
         return;
     } 
   }});}
   }


function youdonthavetostandthere() {
       zzz1.style.display = "block";
       b.style.display = "block";
       dialogue.donthaveto = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.donthaveto === 1) {
       zzz1.style.display = "none";
       zzz5.style.display = "block";
       b.style.display = "block";
       dialogue.donthaveto++;
         return;
     } else if (dialogue.donthaveto === 2) {
       zzz5.style.display = "none";
       zzz6.style.display = "block";
        ksta.style.display = "block";
        b.style.display = "none";
       dialogue.donthaveto++;
         return;
     } else if (dialogue.donthaveto === 3) {
       zzz6.style.display = "none";
       zzz7.style.display = "block";
         ksta.style.display = "none";
        b.style.display = "block";
         dialogue.donthaveto++;
         return;
     } else if (dialogue.donthaveto === 4) {
        zzz7.style.display = "none";
       zzz8.style.display = "block";
       ksta.style.display = "block";
        b.style.display = "none";
        dialogue.donthaveto++;
         return;
     } else if (dialogue.donthaveto === 5) {
       zzz8.style.display = "none";
       ksta.style.display = "none";
       dialogue.donthavetostandthere = true;
       document.cookie = "movemeupanddown=movemeupanddown";
         return;
     }
    }})};


function goodWorkTeam() {
    if (!dialogue.goodWork) {
        elmare.pause();
        lamano.pause();
        loferm.play();
        penser.pause();
        zzr1.style.display = "block";
       b.style.display = "block";
       dialogue.goodWork = 1;
       dialogue.blockArrowTravel = true;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.goodWork === 1) {
       zzr1.style.display = "none";
       zzr2.style.display = "block";
       b.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 2) {
       zzr2.style.display = "none";
       zzr3.style.display = "block";
        b.style.display = "block";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 3) {
       zzr3.style.display = "none";
       zzr4.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 4) {
       zzr4.style.display = "none";
       zzr5.style.display = "block";
             k.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 5) {
       zzr5.style.display = "none";
       zzr6.style.display = "block";
            k.style.display = "none";
            k3.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 6) {
       zzr6.style.display = "none";
       zzr7.style.display = "block";
        k3.style.display = "none";
        k.style.display = "block";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 7) {
       zzr7.style.display = "none";
       zzr8.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 8) {
       zzr8.style.display = "none";
       zzr9.style.display = "block";
       b.style.display = "block";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 9) {
       zzr9.style.display = "none";
       zzr10.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 10) {
       zzr10.style.display = "none";
       zzr11.style.display = "block";
       b.style.display = "block"; //i would love a plum
       k.style.display = "none";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 11) {
       zzr11.style.display = "none";
       zzr12.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 12) {
       zzr12.style.display = "none";
       zzr13.style.display = "block";
       b.style.display = "block"; //thank you sir knight
       k.style.display = "none";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 13) {
       zzr13.style.display = "none";
       zzr14.style.display = "block";
       b.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 14) {
       zzr14.style.display = "none";
       zzr15.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
        dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 15) {
           zzr15.style.display = "none";
       k.style.display = "none";
        kmap2.style.display = "block";
        dialogue.goodWork++;
        return;
         }    else if (dialogue.goodWork === 16) {
        kmap2.style.display = "none";
       zzr16.style.display = "block";
       b.style.display = "block"; //interesting!
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 17) {
       zzr16.style.display = "none";
       zzr17.style.display = "block";
       b.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 18) {
       zzr17.style.display = "none";
       zzr18.style.display = "block";
       b.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 19) {
       zzr18.style.display = "none";
       zzr19.style.display = "block";
       b.style.display = "none";
       k.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 20) {
       zzr19.style.display = "none";
       zzr20.style.display = "block";
       k.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 21) {
        zzr20.style.display = "none";
        zzr21.style.display = "block";
        k.style.display = "block";
       dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 22) {
        zzr21.style.display = "none";
        zzr22.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 23) {
       zzr22.style.display = "none";
       zzr23.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.goodWork++;
         return;
     } else if (dialogue.goodWork === 24) {
       zzr23.style.display = "none";
       k.style.display = "none";
        dialogue.goodWork = true;
        dialogue.blockArrowTravel = false;
         return;
     } 
 }
});
    }
}


function itsLockedSauna() { //sauna door dialogue
       dialogue.locked = 1;
       j1.style.display = "block"; //this one's locked...
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.locked === 1) {
       j1.style.display = "none";
       j2.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.locked++;
         return;
     } else if (dialogue.locked === 2) {
       j2.style.display = "none";
       j3.style.display = "block";
       dr.style.display = "block"; //door: ...
       k.style.display = "none";
         dialogue.locked++;
         return;
     } else if (dialogue.locked === 3) {
       j3.style.display = "none";
       j4.style.display = "block";
       b.style.display = "block";
       dr.style.display = "none";
         dialogue.locked++;
         return;
     } else if (dialogue.locked === 4) {
       j4.style.display = "none";
       j5.style.display = "block"; //let's look for a key
       b.style.display = "block";
         dialogue.locked++;
         return;
     } else if (dialogue.locked === 5) {
       j5.style.display = "none";
       b.style.display = "none";
         dialogue.locked = true; 
         dialogue.unlocking = true;
         dialogue.lockedconvo = true;
         return;
     } 
   }});
}

function ahStillLocked() {
 if (dialogue.lockedconvo) {
       dialogue.lconvo = 1;
       j6.style.display = "block"; //ah. still locked
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lconvo === 1) {
       j6.style.display = "none";
       j7.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
       dialogue.lconvo++;
         return;
     } else if (dialogue.lconvo === 2) {
        j7.style.display = "none";
       b.style.display = "none";
       dialogue.lockedconvo = false;
       dialogue.lconvo = true;
    }
   }});
}
}


function ahISee(){
    if (!dialogue.aha && dialogue.betterTakeThese && !dialogue.noAhISee && !dialogue.ahSimplePlayed) {
        if (dialogue.thatWasEasy){
       dialogue.ahaIsee = 1;
       zzs10.style.display = "block"; //ah. (bridget)
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.ahaIsee === 1) {
       zzs10.style.display = "none";
       b.style.display = "none";
       dialogue.aha = false;
       dialogue.ahSimplePlayed = true;
       document.cookie = "keysEntrance=keysEntrance";
       return;
     }}});}} else if (!dialogue.aha && !dialogue.betterTakeThese && !dialogue.ahaIseeSecond) {
       dialogue.ahaIsee2 = 1;
       zzs10.style.display = "block"; //ah.
       b.style.display = "block";
       dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.ahaIsee2 === 1) {
       zzs10.style.display = "none";
       zzs11.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
       dialogue.ahaIsee2++;
       return;
     } else if (dialogue.ahaIsee2 === 2) {
       zzs11.style.display = "none";
       zzs12.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.ahaIsee2++;
       return;
     } else if  (dialogue.ahaIsee2 === 3) {
       zzs12.style.display = "none";
       zzs13.style.display = "block";
       k.style.display = "block"; //it is now!
       b.style.display = "none";
       dialogue.ahaIsee2++;
       return;
     } else if (dialogue.ahaIsee2 === 4) {
       zzs13.style.display = "none";
       k.style.display = "none";
       dialogue.ahaIseeSecond = true;
       dialogue.betterTakeThese = true;
       dialogue.noAhISee = true;
       dialogue.blockArrowTravel = false;
       document.cookie = "keysEntrance1=keysEntrance1";
       return;
     }
    }});} 
}

//a basic Kodaly: it's locked! and Bridget follow-up
function itsLockedSecond() {
       if (!dialogue.lockedSecond) {
       dialogue.lockedSecond = 1;
       dialogue.blockArrowTravel = true;
       zs1.style.display = "block"; //it's locked!
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecond === 1) {
       zs1.style.display = "none";
       k.style.display = "none";
       dialogue.lockedSecond = true;
       dialogue.lockedSecondFollowUp = false;
       dialogue.blockArrowTravel = false;
     }
   }});
    } else if (!dialogue.lockedSecondFollowUp) {
        dialogue.lockedSecondFollowUp = 1;
        dialogue.blockArrowTravel = true;
       zt1.style.display = "block";
       b.style.display = "block"; //what a devilish conundrum
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecondFollowUp === 1) {
        zt1.style.display = "none";
        b.style.display = "none";
       dialogue.lockedSecondFollowUp = false;
       dialogue.blockArrowTravel = false;
     }
   }});
    }
}


function itsLocked() { 
    if (!dialogue.lockedIts){
        lockeddoor.play();
       dialogue.lockedSecond = 1;
       zs1.style.display = "block"; //it's locked!
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecond === 1) {
       zs1.style.display = "none";
       k.style.display = "none";
       dialogue.lockedIts = true;
       dialogue.lockedSecond = true;
       dialogue.lockedADoor = true;
         return;
     }
   }});
} else if (dialogue.lockedADoor) {
    lockeddoor.play();
     dialogue.lockedSecondA = 1;
       zs2.style.display = "block"; //locked.
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecondA === 1) {
       zs2.style.display = "none";
       k.style.display = "none";
       dialogue.lockedADoor = false;
       dialogue.lockedADoor2 = true;
         return;
     }
   }});
} else if (dialogue.lockedADoor2) {
    lockeddoor.play();
     dialogue.lockedSecondAA = 1;
       zs3.style.display = "block"; // also locked
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecondAA === 1) {
       zs3.style.display = "none";
       k.style.display = "none";
       dialogue.lockedADoor2 = false;
        dialogue.lockedADoor3 = true;
         return;
     }
   }});
} else if (dialogue.lockedADoor3) {
    lockeddoor.play();
     dialogue.lockedSecondAAA = 1;
       zs4.style.display = "block"; //bridget!
       ksta.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecondAAA === 1) {
       zs4.style.display = "none";
       zs4a.style.display = "block";
       ksta.style.display = "none";
       b.style.display = "block";
       dialogue.lockedSecondAAA++;
         return;
     } else if (dialogue.lockedSecondAAA === 2) {
       zs4a.style.display = "none";
       zs4b.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
        dialogue.lockedSecondAAA++;
         return;
     } else if (dialogue.lockedSecondAAA === 3) {
       zs4b.style.display = "none";
       zs4c.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
        dialogue.lockedSecondAAA++;
         return;
     } else if (dialogue.lockedSecondAAA === 4) {
       zs4c.style.display = "none";
       zs4d.style.display = "block";
       b.style.display = "block";
        dialogue.lockedSecondAAA++;
         return;
     } else if (dialogue.lockedSecondAAA === 5) {
       zs4d.style.display = "none";
       b.style.display = "none";
        dialogue.lockedADoor3 = false;
        dialogue.lockedADoor4 = true;
         return;
     }
   }});
} else if (dialogue.lockedADoor4) {
    lockeddoor.play();
     dialogue.lockedSecondAB = 1;
       zs5.style.display = "block"; //locked.
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecondAB === 1) {
       zs5.style.display = "none";
       k.style.display = "none";
       dialogue.lockedADoor4 = false;
       dialogue.lockedADoor5 = true;
         return;
     }
   }});
} else if (dialogue.lockedADoor5) {
    lockeddoor.play();
     dialogue.lockedSecondABB = 1;
       zs5.style.display = "block"; //locked.
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecondABB === 1) {
       zs5.style.display = "none";
       k.style.display = "none";
       dialogue.lockedADoor5 = false;
       dialogue.lockedADoor6 = true;
         return;
     }
   }});
} else if (dialogue.lockedADoor6) {
    lockeddoor.play();
     dialogue.lockedSecondABBA = 1;
       zs6.style.display = "block"; //locked.
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecondABBA === 1) {
       zs6.style.display = "none";
       zs6a.style.display = "block";
       k.style.display = "block";
       dialogue.lockedSecondABBA++;
         return;
     } else if (dialogue.lockedSecondABBA === 2) {
       zs6a.style.display = "none";
       zs6b.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
       dialogue.lockedSecondABBA++;
         return;
     }  else if (dialogue.lockedSecondABBA === 3) {
       zs6b.style.display = "none";
       b.style.display = "none";
        dialogue.lockedADoor6 = false;
       dialogue.lockedADoor7 = true;
         return;
     }
   }});
} else if (dialogue.lockedADoor7) {
    lockeddoor.play();
    }
}
    

    function thatWasEasy() {
        if (!dialogue.thatWasEasyDone) {
            dialogue.blockArrowTravel = true;
        dialogue.lockedSecond2 = 1;
       zzs1.style.display = "block"; //that was easy
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.lockedSecond2 === 1) {
       zzs1.style.display = "none";
       b.style.display = "none";
       dialogue.thatWasEasyDone = true;
       dialogue.blockArrowTravel = false;
       dialogue.lockedSecond2 = false;
     }
   }});
    }
    }

function betterTakeTheseToo() {
    if (!dialogue.betterTakeThese) {
    dialogue.blockArrowTravel = true;
         dialogue.betterTake = 1;
       zzs2.style.display = "block";
       b.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.betterTake === 1) {
       zzs2.style.display = "none";
       zzs3.style.display = "block";
       b.style.display = "none";
       k.style.display = "block";
         dialogue.betterTake++;
         return;
     } else if (dialogue.betterTake === 2) {
       zzs3.style.display = "none";
       zzs4.style.display = "block";
       ks.style.display = "block";
       k.style.display = "none";
       dialogue.betterTake++;
        return;
     } else if (dialogue.betterTake === 3) {
       zzs4.style.display = "none";
       zzs5.style.display = "block";
       b.style.display = "block";
       ks.style.display = "none";
       dialogue.betterTake++;
        return;
     } else if (dialogue.betterTake === 4) {
       zzs5.style.display = "none";
       zzs6.style.display = "block";
       b.style.display = "none";
       k.style.display = "block";
       dialogue.betterTake++;
        return;
     } else if (dialogue.betterTake === 5) {
       zzs6.style.display = "none";
       zzs7.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.betterTake++;
        return;
     } else if (dialogue.betterTake === 6) {
       zzs7.style.display = "none";
       b.style.display = "none";
       dialogue.betterTakeThese = true;
       dialogue.blockArrowTravel = false;
        return;
     } 
   }});
    }
}


function unlocking() {
        dialogue.unlocking = 1;
       k1.style.display = "block"; //it fits!
       k.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.unlocking === 1) {
       k1.style.display = "none";
       k2.style.display = "block"; //yay!
       b.style.display = "block";
       k.style.display = "none";
         dialogue.unlocking++;
         return;
     } else if (dialogue.unlocking === 2) {
       k2.style.display = "none";
       b.style.display = "none";
       dialogue.unlocking = false;
       dialogue.unlocked = true;
       dialogue.unlockedKeySound = true;
    lobby.style.display = "none";
    sauna.style.display = "block";
       unlock.play();
    current.room = "sauna";
    return;
       
     } 
   }});
}

function unlockingSecond() {
        if (!dialogue.unlockingSecond){
        dialogue.unlockingSecond = 1;
       zu1.style.display = "block"; //it fits!
       k.style.display = "block";
       dialogue.blockArrowTravel = true;
       unlock.play();
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.unlockingSecond === 1) {
       zu1.style.display = "none";
       zu2.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.unlockingSecond++;
         return;
     } else if (dialogue.unlockingSecond === 2) {
       zu2.style.display = "none";
       b.style.display = "none";
       dialogue.unlockingSecond = true;
       gardenWest.style.display = "none";
        lockboxRoom.style.display = "block";
        current.room = "lockboxRoom";
        document.cookie = "2ShrubDoorUnlocked=2ShrubDoorUnlocked";
        dialogue.blockArrowTravel = false;
     } 
   }});
}}


function tooHeavyTooKeys() {
  fullInv.play();
    if (!dialogue.keysAreHeavy) {
    i3.style.display = "block";
    b.style.display = "block";
    dialogue.tooHeavy2Keys = 1;
    dialogue.blockArrowTravel = true;
    document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy2Keys === 1) {
                i3.style.display = "none";
                i4.style.display = "block";
                b.style.display = "none";
                k.style.display = "block";
                dialogue.tooHeavy2Keys++;
                return;
            } else if (dialogue.tooHeavy2Keys === 2) {
                i4.style.display = "none";
                i5.style.display = "block";
                k.style.display = "block";
                dialogue.tooHeavy2Keys++;
                return;
            }     else if (dialogue.tooHeavy2Keys === 3) {
                i5.style.display = "none";
                k.style.display = "none";
                dialogue.keysAreHeavy = true;
                dialogue.keysAreHeavy2 = true;
                dialogue.blockArrowTravel = false;
            } 
        }});
    } else if (dialogue.keysAreHeavy2) {
        i6.style.display = "block";
        b.style.display = "block";
        dialogue.tooHeavy3Keys = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy3Keys === 1) {
                i6.style.display = "none";
                i7.style.display = "block";
                b.style.display = "none";
                k.style.display = "block";
                dialogue.tooHeavy3Keys++;
                return;
            } else if (dialogue.tooHeavy3Keys === 2) {
                i7.style.display = "none";
                i8.style.display = "block";
                k.style.display = "none";
                b.style.display = "block";
                dialogue.tooHeavy3Keys++;
                return;
            } else if (dialogue.tooHeavy3Keys === 3) {
                i8.style.display = "none";
                i9.style.display = "block";
                b.style.display = "none";
                k.style.display = "block";
                dialogue.tooHeavy3Keys++;
                return;
            } else if (dialogue.tooHeavy3Keys === 4) {
                i9.style.display = "none";
                k.style.display = "none";
                dialogue.keysAreHeavy2 = false;
                dialogue.keysAreHeavy3 = true;
                dialogue.blockArrowTravel = false;
                return;
            } 
        }});
    } else if (dialogue.keysAreHeavy3) {
        i10.style.display = "block";
        b.style.display = "block";
        dialogue.tooHeavy4Keys = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy4Keys === 1) {
                i10.style.display = "none";
                b.style.display = "none";
                dialogue.keysAreHeavy3 = false;
                dialogue.keysAreHeavy4 = true;
                dialogue.blockArrowTravel = false;
                return;
            } 
        }});
    } else if (dialogue.keysAreHeavy4) {
        i11.style.display = "block";
        k.style.display = "block";
        dialogue.tooHeavy4Keys = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy4Keys === 1) {
                i11.style.display = "none";
                k.style.display = "none";
                dialogue.keysAreHeavy4 = false;
                dialogue.keysAreHeavy5 = true;
                dialogue.blockArrowTravel = false;
                return;
            } 
        }});
    } else if (dialogue.keysAreHeavy5) {
        i12.style.display = "block";
        b.style.display = "block";
        dialogue.tooHeavy4Keys = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy4Keys === 1) {
                i12.style.display = "none";
                b.style.display = "none";
                dialogue.keysAreHeavy5 = true;
                dialogue.blockArrowTravel = false;
                return;
            } 
        }});
    } 
}

function tooHeavy() {
    fullInv.play();
    if (dialogue.inv0) {
    i1.style.display = "block";
    k.style.display = "block";
    dialogue.tooHeavy1 = 1;
    dialogue.blockArrowTravel = true;
    document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy1 === 1) {
                i1.style.display = "none";
                i2.style.display = "block";
                k.style.display = "none";
                b.style.display = "block";
                dialogue.tooHeavy1++;
                return;
            } else if (dialogue.tooHeavy1 === 2) {
                i2.style.display = "none";
                b.style.display = "none";
                dialogue.inv1 = true;
                dialogue.inv0 = false;
                dialogue.blockArrowTravel = false;
                return;
            }    
        }});
    } else if (dialogue.inv1) {
        n1.style.display = "block";
        k.style.display = "block";
        dialogue.tooHeavy2 = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy2 === 1) {
                n1.style.display = "none";
                n2.style.display = "block";
                k.style.display = "none";
                b.style.display = "block";
                dialogue.tooHeavy2++;
                return;
            } else if (dialogue.tooHeavy2 === 2) {
                n2.style.display = "none";
                n3.style.display = "block";
                b.style.display = "none";
                k.style.display = "block"; //i only got two arms
                dialogue.tooHeavy2++;
                return;
            } else if (dialogue.tooHeavy2 === 3) {
                n3.style.display = "none";
                k.style.display = "none";
                dialogue.inv2 = true;
                dialogue.inv1 = false;
                dialogue.blockArrowTravel = false;
                return;
            } 
        }});
    } else if (dialogue.inv2) {
        o1.style.display = "block";
        k.style.display = "block";
        dialogue.tooHeavy3 = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy3 === 1) {
                o1.style.display = "none";
                o2.style.display = "block";
                k.style.display = "none";
                b.style.display = "block";
                dialogue.tooHeavy3++;
                return;
            } else if (dialogue.tooHeavy3 === 2) {
                o2.style.display = "none";
                o3.style.display = "block";
                b.style.display = "none";
                k.style.display = "block";
                dialogue.tooHeavy3++;
                return;
            } else if (dialogue.tooHeavy3 === 3) {
                o3.style.display = "none";
                k.style.display = "none";
                dialogue.inv3 = true;
                dialogue.inv2 = false;
                dialogue.blockArrowTravel = false;
                return;
            } 
        }});
    } else if (dialogue.inv3){
        q1.style.display = "block";
        b.style.display = "block";
        dialogue.tooHeavy4 = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy4 === 1) {
                q1.style.display = "none";
                q2.style.display = "block";
                b.style.display = "none";
                k.style.display = "block"; //we're just wee men 
                dialogue.tooHeavy4++;
                return;
            } else if (dialogue.tooHeavy4 === 2) {
                q2.style.display = "none";
                q3.style.display = "block";
                k.style.display = "none";
                b.style.display = "block";
                dialogue.tooHeavy4++;
                return;
            } else if (dialogue.tooHeavy4 === 3) {
                q3.style.display = "none";
                q4.style.display = "block";
                b.style.display = "none";
                k.style.display = "block"; //we're just wee
                dialogue.tooHeavy4++;
                return;
            }  else if (dialogue.tooHeavy4 === 4) {
                q4.style.display = "none";
                k.style.display = "none";
                dialogue.inv4 = true;
                dialogue.inv3 = false;
                dialogue.blockArrowTravel = false;
                return;
            } 
        }});
    } else if (dialogue.inv4) {
        r1.style.display = "block";
        k.style.display = "block";
        dialogue.tooHeavy5 = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy5 === 1) {
                r1.style.display = "none";
                k.style.display = "none";
                dialogue.inv5 = true;
                dialogue.inv4 = false;
                dialogue.blockArrowTravel = false;
                return;
            }
        }});
    } else if (dialogue.inv5) {
        s1.style.display = "block";
        b.style.display = "block"; //wee fellows?
        dialogue.tooHeavy6 = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy6 === 1) {
                s1.style.display = "none";
                b.style.display = "none"; 
                dialogue.inv6 = true;
                dialogue.inv5 = false;
                dialogue.blockArrowTravel = false;
                return;
            }
        }});
    } else if (dialogue.inv6) {
        t1.style.display = "block";
        k.style.display = "block"; //fellows is good
        dialogue.tooHeavy7 = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy7 === 1) {
                t1.style.display = "none";
                k.style.display = "none"; 
                dialogue.inv7 = true;
                dialogue.inv6 = false;
                dialogue.blockArrowTravel = false;
                return;
            }
        }});
    } else if (dialogue.inv7) {
        u1.style.display = "block";
        k.style.display = "block";
        dialogue.tooHeavy8 = 1;
        dialogue.blockArrowTravel = true;
        document.addEventListener("keydown", function() {
        if (event.key === 'Enter' || event.key === ' ') {
            if (dialogue.tooHeavy8 === 1) {
                u1.style.display = "none";
                u2.style.display = "block";
                b.style.display = "block"; //with two arms each
                k.style.display = "none"; 
                dialogue.tooHeavy8 = 2;
                return;
            } else if (dialogue.tooHeavy8 === 2) {
                u2.style.display = "none";
                b.style.display = "none"; 
                dialogue.blockArrowTravel = false;
                return;
            }
        }});
    }
}

function testingTheWaters() {
    z1.style.display = "block";
       k.style.display = "block";
       dialogue.waterTest = 1;
       dialogue.blockArrowTravel = true;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.waterTest === 1) {
      z1.style.display = "none";
      z2.style.display = "block";
      k.style.display = "block";
       dialogue.waterTest++;
         return;
     } else if (dialogue.waterTest === 2) {
      z2.style.display = "none";
      z3.style.display = "block";
      k.style.display = "block";
         dialogue.waterTest++;
         return;
     } else if (dialogue.waterTest === 3) {
      z3.style.display = "none";
      z4.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.waterTest++;
         return;
     } else if (dialogue.waterTest === 4) {
      z4.style.display = "none";
      z5.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.waterTest++;
         return;
     } else if (dialogue.waterTest === 5) {
      z5.style.display = "none";
      z6.style.display = "block";
      k.style.display = "block";
       dialogue.waterTest++;
         return;
     } else if (dialogue.waterTest === 6) {
      z6.style.display = "none";
      z7.style.display = "block";
      k.style.display = "block";
      keypick.play();
         dialogue.waterTest++;
         return;
     } else if (dialogue.waterTest === 7) {
      z7.style.display = "none";
       z8.style.display = "block";
       k.style.display = "none";
      b.style.display = "block";
      dialogue.waterTest++;
         return;
     } else if (dialogue.waterTest === 8) {
      z8.style.display = "none";
       b.style.display = "none";
         dialogue.waterTest = true;
         dialogue.blockArrowTravel = false;
         return;
     }
}});
}

function wouldARopeBridgeHelp() {
      za1.style.display = "block"; //looks like the bridge has been cut
      k.style.display = "block";
      dialogue.bridge = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.bridge === 1) {
     za1.style.display = "none";
     za2.style.display = "block";
     b.style.display = "block";
     k.style.display = "none";
      dialogue.bridge = 2;
        return;
    } else if (dialogue.bridge === 2) {
     za2.style.display = "none";
     b.style.display = "none";
        dialogue.bridge = true;
        return;
    }
}});
}

function ropeToss() {
    if (!dialogue.bridgeToss) {
    zb1.style.display = "block"; //here goes nothing
      b.style.display = "block";
      dialogue.bridgeToss = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.bridgeToss === 1) {
     zb1.style.display = "none";
     zb2.style.display = "block"; 
     b.style.display = "block"; 
     ropey.set = true;
     document.cookie = "ropey=ropey";
     chasmrope.style.display = "block";
     dialogue.bridgeToss++;
        if (inventory.slot1 === "rope") {
            item1.innerText = "";
            inventory.slot1 = false;
        } if (inventory.slot2 === "rope") {
            item2.innerText = "";
            inventory.slot2 = false;
        } if (inventory.slot3 === "rope") {
            item3.innerText = "";
            inventory.slot3 = false;
        } if (inventory.slot4 === "rope") {
            item4.innerText = "";
            inventory.slot4 = false;
        }
     return;
    } else if (dialogue.bridgeToss === 2) {
     zb2.style.display = "none";
     zb3.style.display = "block";
     b.style.display = "block";
     k.style.display = "none"; 
        dialogue.bridgeToss++;
        return;
    } else if (dialogue.bridgeToss === 3) {
     zb3.style.display = "none";
      b.style.display = "none";
      dialogue.bridgeToss = true;
        return;
    } }});
    }
}


function ropeToss2() {
    if (!dialogue.bridgeToss2) {
    zb1a.style.display = "block"; //here goes nothing 2
      b.style.display = "block";
      dialogue.bridgeToss2 = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.bridgeToss2 === 1) {
     zb1a.style.display = "none";
     zb2.style.display = "block"; 
     b.style.display = "block"; 
     chasmrope2.style.display = "block";
     dialogue.bridgeToss2++;
     return;
    } else if (dialogue.bridgeToss2 === 2) {
          if (inventory.slot1 === "inexplicable rope") {
            item1.innerText = "";
            inventory.slot1 = false;
            ropey.setChasm2 = true;
        } if (inventory.slot2 === "inexplicable rope") {
            item2.innerText = "";
            inventory.slot2 = false;
            ropey.setChasm2 = true;
        } if (inventory.slot3 === "inexplicable rope") {
            item3.innerText = "";
            inventory.slot3 = false;
            ropey.setChasm2 = true;
        } if (inventory.slot4 === "inexplicable rope") {
            item4.innerText = "";
            inventory.slot4 = false;
            ropey.setChasm2 = true;
        }
     zb2.style.display = "none";
      b.style.display = "none";
      dialogue.bridgeToss2 = true;
        return;
    } }});
    


    }
}

function northLocked() { //dialogue for door across the chasm in chapter 1
    if (!dialogue.northLobbyLocked){
    zc1.style.display = "block";
      b.style.display = "block";
      dialogue.northLobbyLocked = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.northLobbyLocked === 1) {
     zc1.style.display = "none";
     zc2.style.display = "block";
     k.style.display = "block";
     b.style.display = "none";
      dialogue.northLobbyLocked = 2;
        return;
    } else if (dialogue.northLobbyLocked === 2) {
     zc2.style.display = "none";
     k.style.display = "none";
        dialogue.northLobbyLocked = true;
        door.tried = true;
        return;
    }
}});} else {
    zc3.style.display = "block";
      k.style.display = "block";
      dialogue.northLobbyLocked2 = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.northLobbyLocked2 === 1) {
      zc3.style.display = "none";
      k.style.display = "none";
    zc4.style.display = "block";
      b.style.display = "block";
    dialogue.northLobbyLocked2++;
        return;
    } else if (dialogue.northLobbyLocked2 === 2) {
      zc4.style.display = "none";
      b.style.display = "none";
        return;
    } 
}});}}

function tooFar() {
    if (!dialogue.goliath){
    ze1.style.display = "block";
      b.style.display = "block";
      dialogue.tooFar = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.tooFar === 1) {
     ze1.style.display = "none";
     ze2.style.display = "block";
      k.style.display = "block";
      b.style.display = "none";
      dialogue.tooFar++;
        return;
    } else if (dialogue.tooFar === 2) {
     ze2.style.display = "none";
     ze3.style.display = "block";
    k.style.display = "none";
      b.style.display = "block";
        dialogue.tooFar++;
        return;
    } else if (dialogue.tooFar === 3) {
     ze3.style.display = "none";
     ze4.style.display = "block";
      b.style.display = "block";
        dialogue.tooFar++;
        return;
    } else if (dialogue.tooFar === 4) {
     ze4.style.display = "none";
      b.style.display = "none";
        dialogue.tooFar = true;
        dialogue.goliath = true;
        return;
    }
}});}
}


function deeperInWeGo() {
    if (!dialogue.deeperIn) {
        dialogue.blockArrowTravel = true;
    zf1.style.display = "block";
      k.style.display = "block";
      dialogue.deeperIn = 1;
      document.addEventListener("keydown", function() {
if (event.key === 'Enter' || event.key === ' ') {
    if (dialogue.deeperIn === 1) {
    zf1.style.display = "none";
    zf2.style.display = "block";
      b.style.display = "block"; //How's your map looking so far?
      k.style.display = "none";
      dialogue.deeperIn++;
        return;
    } else if (dialogue.deeperIn === 2) {
    zf2.style.display = "none";
    zf3.style.display = "block";
    b.style.display = "none";
    k.style.display = "block"; //let's take a look
        dialogue.deeperIn++;
        return;
    } else if (dialogue.deeperIn === 3) {
    zf3.style.display = "none";
    kmap1.style.display = "block"; //kmap1
    paper.play();
      k.style.display = "none";
        dialogue.deeperIn++;
        return;
    } else if (dialogue.deeperIn === 4) {
        zf3.style.display = "none";
        zf4.style.display = "block";
      b.style.display = "block";
      kmap1.style.display = "none";
        dialogue.deeperIn++;
        return;
    }  else if (dialogue.deeperIn === 5) {
        zf4.style.display = "none";
        zf5.style.display = "block";
      b.style.display = "block";
      dialogue.deeperIn++;
        return;
    } else if (dialogue.deeperIn === 6) {
        zf5.style.display = "none";
      b.style.display = "none";
      chasm.style.display = "none";
      lamano.play();
      penser.pause();
      randomDoorAudio();
        current.room = "hallway";
        chapter2banner.style.display = "block";
        bannerDecay2();
        hallexplorers.style.display = "block";
        chasmexplorers.style.display = "none";
        hallway.style.display = "block";
        dialogue.deeperIn = true;
        dialogue.blockArrowTravel = false;
        dialogue.goingDeeperIntoTheLabyrinth = true;
        return;
    }
}});} else {
    chasm.style.display = "none";
    current.room = "hallway";
    chasmexplorers.style.display = "none";
    hallexplorers.style.display = "block";
    hallway.style.display = "block";
}
}

function shrub1() {
    if (!dialogue.shrub && dialogue.verilyIntro) {
        zg1.style.display = "block";
        b.style.display = "block";
        dialogue.shrub = 1;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.shrub === 1) {
        zg1.style.display = "none";
        zg2.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 2) {
        zg2.style.display = "none";
        zg3.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 3) {
        zg3.style.display = "none";
        zg4.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 4) {
        zg4.style.display = "none";
        zg5.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 5) {
        zg5.style.display = "none";
        zg6.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 6) {
        zg6.style.display = "none";
        zg7.style.display = "block";
        k.style.display = "block"; //So there's something about this shrub that the labyrinth is using to give us a clue about how to get further in?
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 7) {
        zg7.style.display = "none";
        zg8.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 8) {
        zg8.style.display = "none";
        zg9.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 9) {
        zg9.style.display = "none";
        zh10.style.display = "block";
        k.style.display = "block"; //It does kind of look like a numeral 7.
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 10) {
        zh10.style.display = "none";
        zh11.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 11) {
        zh11.style.display = "none";
        zg12.style.display = "block";
        k.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 12) {
        zg12.style.display = "none";
        zg13.style.display = "block";
        kn.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 13) {
        zg13.style.display = "none";
        zg14.style.display = "block";
        k.style.display = "block";
        kn.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 14) {
        zg14.style.display = "none";
        zg15.style.display = "block"; //that is fucked up.
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 15) {
        zg15.style.display = "none";
        b.style.display = "none";
        dialogue.shrub = true;
        document.cookie = "shrubbery=shrubbery";
          return;
      }
  }
}); 
    } if (!dialogue.shrub) {
        zg1.style.display = "block";
        b.style.display = "block";
        dialogue.shrub = 1;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.shrub === 1) {
        zg1.style.display = "none";
        zg2.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 2) {
        zg2.style.display = "none";
        zg3.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 3) {
        zg3.style.display = "none";
        zg4.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 4) {
        zg4.style.display = "none";
        zg5.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 5) {
        zg5.style.display = "none";
        zg6.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 6) {
        zg6.style.display = "none";
        zg7.style.display = "block";
        k.style.display = "block"; //So there's something about this shrub that the labyrinth is using to give us a clue about how to get further in?
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 7) {
        zg7.style.display = "none";
        zg8.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 8) {
        zg8.style.display = "none";
        zg9.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 9) {
        zg9.style.display = "none";
        zg10.style.display = "block";
        k.style.display = "block"; //It does kind of look like a numeral 7.
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 10) {
        zg10.style.display = "none";
        zg11.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 11) {
        zg11.style.display = "none";
        zg12.style.display = "block";
        k.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 12) {
        zg12.style.display = "none";
        zg13.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 13) {
        zg13.style.display = "none";
        zg14.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 14) {
        zg14.style.display = "none";
        zg15.style.display = "block"; //that is fucked up.
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 15) {
        zg15.style.display = "none";
        zg16.style.display = "block";
        b.style.display = "block";
        dialogue.labyrinthNames = false;
        tinkering.play();
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 16) {
        zg16.style.display = "none";
        zg17.style.display = "block";
        k.style.display = "block"; //wait did you hear that
        b.style.display = "none";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 17) {
        zg17.style.display = "none";
        zg18.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 18) {
        zg18.style.display = "none";
        b.style.display = "none";
        dialogue.shrub = true;
        document.cookie = "shrubbery=shrubbery";
        notifnoise.play();
        increaseNotification();
          return;
      }
  }
}); 
    } 

}
function shrub2() {
    if (!dialogue.shrub && dialogue.verilyIntro) {
        zg1.style.display = "block";
        b.style.display = "block";
        dialogue.shrub = 1;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.shrub === 1) {
        zg1.style.display = "none";
        zg2.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 2) {
        zg2.style.display = "none";
        zg3.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 3) {
        zg3.style.display = "none";
        zg4.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 4) {
        zg4.style.display = "none";
        zg5.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 5) {
        zg5.style.display = "none";
        zg6.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 6) {
        zg6.style.display = "none";
        zg7.style.display = "block";
        k.style.display = "block"; //So there's something about this shrub that the labyrinth is using to give us a clue about how to get further in?
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 7) {
        zg7.style.display = "none";
        zg8.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 8) {
        zg8.style.display = "none";
        zg9.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 9) {
        zg9.style.display = "none";
        zh10.style.display = "block";
        k.style.display = "block"; //It does kind of look like a numeral 7.
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 10) {
        zh10.style.display = "none";
        zh11.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 11) {
        zh11.style.display = "none";
        zg12.style.display = "block";
        k.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 12) {
        zg12.style.display = "none";
        zg13.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 13) {
        zg13.style.display = "none";
        zg14.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 14) {
        zg14.style.display = "none";
        zg15.style.display = "block"; //that is fucked up.
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 15) {
        zg15.style.display = "none";
        b.style.display = "none";
        dialogue.shrub = true;
          return;
      }
  }
}); 
    }
    if (!dialogue.shrub && !dialogue.verilyIntro) {
        zg1.style.display = "block";
        b.style.display = "block";
        dialogue.shrub = 1;
        document.addEventListener("keydown", function() {
  if (event.key === 'Enter' || event.key === ' ') {
      if (dialogue.shrub === 1) {
        zg1.style.display = "none";
        zg2.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 2) {
        zg2.style.display = "none";
        zg3.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 3) {
        zg3.style.display = "none";
        zg4.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 4) {
        zg4.style.display = "none";
        zg5.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 5) {
        zg5.style.display = "none";
        zg6.style.display = "block";
        b.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 6) {
        zg6.style.display = "none";
        zg7.style.display = "block";
        k.style.display = "block"; //So there's something about this shrub that the labyrinth is using to give us a clue about how to get further in?
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 7) {
        zg7.style.display = "none";
        zg8.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 8) {
        zg8.style.display = "none";
        zg9.style.display = "block";
        b.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 9) {
        zg9.style.display = "none";
        zh10.style.display = "block";
        k.style.display = "block"; //It does kind of look like a numeral 7.
        b.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 10) {
        zh10.style.display = "none";
        zh11.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 11) {
        zh11.style.display = "none";
        zg12.style.display = "block";
        k.style.display = "block";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 12) {
        zg12.style.display = "none";
        zg13.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 13) {
        zg13.style.display = "none";
        zg14.style.display = "block";
        k.style.display = "block";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 14) {
        zg14.style.display = "none";
        zg15.style.display = "block"; //that is fucked up.
        b.style.display = "block";
        k.style.display = "none";
          dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 15) {
        zg15.style.display = "none";
        zg16.style.display = "block";
        b.style.display = "block";
        tinkering.play();
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 16) {
        zg16.style.display = "none";
        zg17.style.display = "block";
        k.style.display = "block"; //wait did you hear that
        b.style.display = "none";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 17) {
        zg17.style.display = "none";
        zg18.style.display = "block";
        b.style.display = "block";
        k.style.display = "none";
        dialogue.shrub++;
          return;
      } else if (dialogue.shrub === 18) {
        zg18.style.display = "none";
        b.style.display = "none";
        dialogue.shrub = true;
       notifnoise.play();
        increaseNotification();
          return;
      }
  }
}); 
    } 

}


function itsAFlowerPot() {
    if (!dialogue.flowerPotted){
       zzq1.style.display = "block";
       k.style.display = "block";
       dialogue.flowerPot = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.flowerPot === 1) {
       zzq1.style.display = "none";
       zzq2.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.flowerPot++;
         return;
     } else if (dialogue.flowerPot === 2) {
       zzq2.style.display = "none";
       b.style.display = "none";
       dialogue.flowerPotted = true;
         return;
     }
 }
});
    }
}

function workingTogether() {
    if (dialogue.workingTogether && !dialogue.longTimeNoSeeSee) {
       zw1.style.display = "block";
       ksl.style.display = "block";
       dialogue.workingTogether = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.workingTogether === 1) {
       zw1.style.display = "none";
       zw2.style.display = "block"; //to recap
       k.style.display = "block";
       ksl.style.display = "none";
       dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 2) {
       zw2.style.display = "none";
       zw3.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
         dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 3) {
       zw3.style.display = "none";
       zw4.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 4) {
       zw4.style.display = "none";
       zw5.style.display = "block";
       k.style.display = "none";
       b.style.display = "block"; //unless the labyrinth ...
       dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 5) {
       zw5.style.display = "none";
       zw6.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
       dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 6) {
       zw6.style.display = "none";
       zw7.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 7) {
       zw7.style.display = "none";
       zw8.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 8) {
       zw8.style.display = "none";
       zw9.style.display = "block";
       k.style.display = "block";
         dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 9) {
       zw9.style.display = "none";
       zw10.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 10) {
       zw10.style.display = "none";
       zw11.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 11) {
       zw11.style.display = "none";
       zw12.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 12) {
       zw12.style.display = "none";
       zw13.style.display = "block";
       ksl.style.display = "block";
       b.style.display = "none";
              dialogue.workingTogether++;
         return;
     } else if (dialogue.workingTogether === 13) {
       zw13.style.display = "none";
       ksl.style.display = "none";
       dialogue.workingTogether = false;
       if (!dialogue.actionAndInformationComplete) {
            dialogue.actionAndInformation = true;
       }
        //now verily is listening to music or working on her communicator
       verilyIs.inThePortholeRoom = true;
        verilysprite.style.display = "block";
        terminal2.style.display = "block";
        vtamp1.style.display = "none";
        vtamp2.style.display = "none";
        vtamp3.style.display = "none";
        dialogue.haventSeenHim = true;
       document.cookie = "workingTogether=workingTogether";
       increaseNotificationLobbyTwo(); //we don't play the noise hear because that would imply stymie2 is listening to their chasm(or other room adjacent to the lobby) conversation "to recap"
         return;
     }
 }
});
    }
}


function isSummerSuspicious() {
    if (dialogue.verilyIntro && !dialogue.upToSomething){
        zm1.style.display = "block";
       b.style.display = "block";
       dialogue.upToSomething = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.upToSomething === 1) {
       zm1.style.display = "none";
       zm2.style.display = "block";
       ksl.style.display = "block"; //oh definitely
       b.style.display = "none";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 2) {
       zm2.style.display = "none";
       zm3.style.display = "block";
       ksl.style.display = "none";
       kstu.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 3) {
       zm3.style.display = "none";
       zm4.style.display = "block";
       kstu.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 4) {
       zm4.style.display = "none";
       zm5.style.display = "block";
       b.style.display = "block";
       kstu.style.display = "none";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 5) {
       zm5.style.display = "none";
       zm6.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 6) {
       zm6.style.display = "none";
       zm7.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 7) {
       zm7.style.display = "none";
       zm8.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 8) {
       zm8.style.display = "none";
       zm9.style.display = "block"; //well
       ksl.style.display = "block";
       k.style.display = "none";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 9) {
       zm9.style.display = "none";
       zm10.style.display = "block";
       k.style.display = "block";
       ksl.style.display = "none";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 10) {
       zm10.style.display = "none";
       zm11.style.display = "block";
       k.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 11) {
       zm11.style.display = "none";
       zm12.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 12) {
       zm12.style.display = "none";
       zm13.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 13) {
       zm13.style.display = "none";
       zm14.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 14) {
       zm14.style.display = "none";
       zm15.style.display = "block";
       k.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 15) {
       zm15.style.display = "none";
       zm16.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 16) {
       zm16.style.display = "none";
       zm17.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 17) {
       zm17.style.display = "none";
       zm18.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 18) {
       zm18.style.display = "none";
       zm19.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 19) {
       zm19.style.display = "none";
       zm20.style.display = "block";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 20) {
        zm20.style.display = "none";
        zm21.style.display = "block";
        k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 21) {
        zm21.style.display = "none";
        zm22.style.display = "block";
        k.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 22) {
       zm22.style.display = "none";
       zm23.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 23) {
       zm23.style.display = "none";
       zm24.style.display = "block";
       k.style.display = "block"; //right
       b.style.display = "none";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 24) {
       zm24.style.display = "none";
       zm25.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 25) {
       zm25.style.display = "none";
       zm26.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 26) {
       zm26.style.display = "none";
       zm27.style.display = "block"; //Speaking of the rope bridge...
       b.style.display = "block";
       k.style.display = "none";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 27) {
       zm27.style.display = "none";
       zm28.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 28) {
       zm28.style.display = "none";
       zm29.style.display = "block";
       b.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 29) {
       zm29.style.display = "none";
       zm30.style.display = "block";
       b.style.display = "block";
         dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 30) {
       zm30.style.display = "none";
       zm31.style.display = "block";
       b.style.display = "none";
       k.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 31) {
       zm31.style.display = "none";
       zm32.style.display = "block";
       k.style.display = "none";
       b.style.display = "block";
       dialogue.upToSomething++;
         return;
     } else if (dialogue.upToSomething === 32) {
       zm32.style.display = "none";
       b.style.display = "none";
       dialogue.upToSomething = true;
       dialogue.haventSeenHim = false;
       document.cookie = "suspect=suspect";
       dialogue.wowThisSummerCharacterHuh = true; //1/2 of the components to shuriEncounter
         return;
     }
 }
});
    }
}

function thatWasNotThereASecondAgo() {
    if (!dialogue.totallyNotThere) {
    yyn1.style.display = "block";
       k.style.display = "block";
       dialogue.thatWasNotThere = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.thatWasNotThere === 1) {
    yyn1.style.display = "none";
       k.style.display = "none";
       dialogue.totallyNotThere = true;
     }}}); 
    }
}

function itsSomeSortOfPanelInTheWall(){
    zzh1.style.display = "block";
       k.style.display = "block";
       dialogue.itsSomeSortOfPanel = 1;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.itsSomeSortOfPanel === 1) {
    zzh1.style.display = "none";
       k.style.display = "none";
         return;
     }}}); 
}
 
//chapter 3 beginning 
function onwardsAndInwards() {
    if (dialogue.verilyIntro && !dialogue.onwardAndInward){
        zzr1.style.display = "block";
       b.style.display = "block";
       dialogue.onwardAndInward = 1;
       dialogue.blockArrowTravel = true;
       document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.onwardAndInward === 1) {
       zzr1.style.display = "none";
       zzr2.style.display = "block";
       ksl.style.display = "block";
       b.style.display = "none";
       dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 2) {
       zzr2.style.display = "none";
       zzr3.style.display = "block";
       ksl.style.display = "none";
       kstu.style.display = "block";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 3) {
       zzr3.style.display = "none";
       zzr4.style.display = "block";
       kstu.style.display = "block";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 4) {
       zzr4.style.display = "none";
       zzr5.style.display = "block";
       b.style.display = "block";
       kstu.style.display = "none";
       dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 5) {
       zzr5.style.display = "none";
       zzr6.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
       dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 6) {
       zzr6.style.display = "none";
       zzr7.style.display = "block";
       b.style.display = "block";
       k.style.display = "none";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 7) {
       zzr7.style.display = "none";
       zzr8.style.display = "block";
       k.style.display = "block";
       b.style.display = "none";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 8) {
       zzr8.style.display = "none";
       zzr9.style.display = "block"; //well
       ksl.style.display = "block";
       k.style.display = "none";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 9) {
       zzr9.style.display = "none";
       zzr10.style.display = "block";
       k.style.display = "block";
       ksl.style.display = "none";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 10) {
       zzr10.style.display = "none";
       zzr11.style.display = "block";
       k.style.display = "block";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 11) {
       zzr11.style.display = "none";
       zzr12.style.display = "block";
       k.style.display = "block";
       dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 12) {
       zzr12.style.display = "none";
       zzr13.style.display = "block";
       k.style.display = "block";
       dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 13) {
       zzr13.style.display = "none";
       zzr14.style.display = "block";
       k.style.display = "block";
       dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 14) {
       zzr14.style.display = "none";
       zzr15.style.display = "block";
       k.style.display = "block";
         dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 15) {
       zzr15.style.display = "none";
       zzr16.style.display = "block";
       k.style.display = "block";
       dialogue.onwardAndInward++;
         return;
     } else if (dialogue.onwardAndInward === 16) {
       zzr16.style.display = "none";
       zzr17.style.display = "block";
       k.style.display = "block";
       dialogue.onwardAndInward = false;
       dialogue.blockArrowTravel = false;
     }
 }
});
    }
}


function areWeFucked() { 
if (!dialogue.byJoveJovent && !key.rope2) {
       yyk1.style.display = "block";
       b.style.display = "block";
       dialogue.byJoveJove = 1;
       dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.byJoveJove === 1) {
        yyk1.style.display = "none";
        yyk2.style.display = "block";
        b.style.display = "block";
        dialogue.byJoveJove++;
     } else if (dialogue.byJoveJove === 2) {
        yyk2.style.display = "none";
        b.style.display = "none";
        dialogue.byJoveJovent = true;
        dialogue.byJoveJove = false;
        dialogue.blockArrowTravel = false;
 }}});
    } else if (key.rope2) {
        throwRope2();
    } else if (!dialogue.byJovesBeenJoved) {
        dialogue.tooFarFarfar = 1;
       yym2.style.display = "block"; //oh we're fucked
       b.style.display = "block";
       dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.tooFarFarfar === 1) {
        yym2.style.display = "none";
       b.style.display = "none";
        dialogue.byJovesBeenJoved = false;
        dialogue.tooFarFarfar = true;
        dialogue.tooFarFar = true;
        dialogue.blockArrowTravel = false;
     } 
   }});
    } 
}

function comingBackIntoTheSquareLiftRoomAfterBridgeCut() {
    if (!dialogue.byJoveJoveJoveJove) {
        if (dialogue.byJoveJoveJove) {
            doihmot.pause();
            laudaNovella.play();
            setTimeout(function() {restartDoIhMotAfterLaudaNovella();}, 136000);
                dialogue.blockArrowTravel = true;
dialogue.byJoveJove2 = 1;
       yyk3.style.display = "block";
       kwtf.style.display = "block";
document.addEventListener("keydown", function() {
 if (event.key === 'Enter' || event.key === ' ') {
     if (dialogue.byJoveJove2 === 1) {
        yyk3.style.display = "none";
        yyk4.style.display = "block";
        kstu.style.display = "block";
        kwtf.style.display = "none";
        dialogue.byJoveJove2++;
         return;
     } else if (dialogue.byJoveJove2 === 2) {
        yyk4.style.display = "none";
        yyk5.style.display = "block";
        kwtf.style.display = "block";
        kstu.style.display = "none";
         dialogue.byJoveJove2++;
         return;
     }  else if (dialogue.byJoveJove2 === 3) {
        yyk5.style.display = "none";
        yyk6.style.display = "block";
        kwtf.style.display = "block";
         dialogue.byJoveJove2++;
         return;
     }  else if (dialogue.byJoveJove2 === 4) {
        yyk6.style.display = "none";
        yyk7.style.display = "block";
        kwtf.style.display = "none";
        bfur.style.display = "block";
         dialogue.byJoveJove2++;
         return;
     }  else if (dialogue.byJoveJove2 === 5) {
        yyk7.style.display = "none";
        yyk8.style.display = "block";
        bfur.style.display = "none";
        bpiss.style.display = "block";
         dialogue.byJoveJove2++;
         return;
     }  else if (dialogue.byJoveJove2 === 6) {
        yyk8.style.display = "none";
        yyk9.style.display = "block"; //following US???
        bpiss.style.display = "none";
        kflip2.style.display = "block";
         dialogue.byJoveJove2++;
         return;
     }  else if (dialogue.byJoveJove2 === 7) {
        yyk9.style.display = "none";
        kflip2.style.display = "none";
         dialogue.byJoveJove2 = false;
         dialogue.byJoveJoveJoveJove = true;
         dialogue.ropeCanBeDiscovered1 = true;
         dialogue.blockArrowTravel = false;
         dialogue.beenfollowinguscomplete = true;
         
     } 
    }});
    }}
}

function successfullyPlacedPipeDialogue() {
    if (!dialogue.itFitsPerfectly) {
    dialogue.yesPipe = 1;
    k.style.display = "block";
    zzfit1.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.yesPipe === 1) {
           zzfit1.style.display = "none";
           k.style.display = "none";
           dialogue.itFitsPerfectly = true;
           dialogue.blockArrowTravel = false;
           return;
       } 
 } });
}
}


function weNeedAPipeSegmentThatWillFitThisGap() {
    if (!dialogue.pipeSlot) {
    dialogue.noPipe = 1;
    b.style.display = "block";
    zzt0.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.noPipe === 1) {
           zzt0.style.display = "none";
           b.style.display = "none";
           dialogue.pipeSlot3 = true;
           dialogue.pipeSlot = true;
           dialogue.blockArrowTravel = false;
           return;
       } 
 } });
    } else if (dialogue.pipeSlotA) {
    dialogue.noPipe2 = 1;
    b.style.display = "block";
    zzt1.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.noPipe2 === 1) {
           zzt1.style.display = "none";
           b.style.display = "none";
           dialogue.pipeSlot2 = true;
           dialogue.blockArrowTravel = false;
           dialogue.pipeSlotA = false;
           return;
       } 
 } });
    } else if (dialogue.pipeSlot2) {
    dialogue.noPipe3 = 1;
    b.style.display = "block";
    zzt2.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.noPipe3 === 1) {
           zzt2.style.display = "none";
           b.style.display = "none";
           dialogue.blockArrowTravel = false;
           return;
       } 
 } });
    } else if (dialogue.pipeSlot3) {
    dialogue.noPipe4 = 1;
    b.style.display = "block";
    zzt3.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.noPipe4 === 1) {
           zzt3.style.display = "none";
           b.style.display = "none";
           dialogue.pipeSlot2 = true;
           dialogue.pipeSlot3 = false;
           dialogue.blockArrowTravel = false;
           return;
       } 
 } });
    }}
 
function itsASecretMessageInAStrangeLanguage() {
  dialogue.secretpoem = "pickles";
    dialogue.blockArrowTravel = true;
    poem1.style.display = "block";
    document.body.style.background = "#000";
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.secretpoem === "pickles") {
        bnoba.style.display = "block";
        yyu1.style.display = "block";
          dialogue.secretpoem = 1;
           return;
       } else if (dialogue.secretpoem === 1) {
        bnoba.style.display = "block";
           yyu1.style.display = "none";
           yyu2.style.display = "block";
           bnoba.style.display = "block";
          dialogue.secretpoem++;
           return;
       } else if (dialogue.secretpoem === 2) {
            yyu2.style.display = "none";
           yyu2a.style.display = "block";
           knoba.style.display = "block";
           bnoba.style.display = "none";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 3) {
            yyu2a.style.display = "none";
           yyu3.style.display = "block";
           knoba.style.display = "block";
           bnoba.style.display = "none";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 4) {
            yyu3.style.display = "none";
           yyu4.style.display = "block";
           bnoba.style.display = "block";
           knoba.style.display = "none";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 5) {
            yyu4.style.display = "none";
           yyu5.style.display = "block";
           knoba.style.display = "block";
           bnoba.style.display = "none";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 6) {
            yyu5.style.display = "none";
           yyu6.style.display = "block";
           knoba.style.display = "block";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 7) {
            yyu6.style.display = "none";
           yyu7.style.display = "block";
           knoba.style.display = "block";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 8) {
            yyu7.style.display = "none";
           yyu8.style.display = "block";
           knoba.style.display = "block";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 9) {
            yyu8.style.display = "none";
           yyu9.style.display = "block";
           knoba.style.display = "block";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 10) {
            yyu9.style.display = "none";
           yyu10.style.display = "block";
           bnoba.style.display = "block";
           knoba.style.display = "none";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 11) {
            yyu10.style.display = "none";
           yyu11.style.display = "block";
           bnoba.style.display = "block";
          dialogue.secretpoem++;
           return;
       }  else if (dialogue.secretpoem === 12) {
            yyu11.style.display = "none";
           bnoba.style.display = "none";
          dialogue.secretpoem++;
       }  else if (dialogue.secretpoem === 13) {
            yyu11.style.display = "none";
           bnoba.style.display = "none";
          dialogue.secretpoem = true;
          poem1.style.display = "none";
          document.body.style.background = "#f5f1e0"; //hex code back to beige
          dialogue.poemAddedToNotebook = true;
          dialogue.blockArrowTravel = false;
       } 
 } });

}

function strangePaintingsConvo() {
   dialogue.spainting = 1;
    b.style.display = "block";
    yyx1.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.spainting === 1) {
           yyx1.style.display = "none";
           yyx2.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.spainting++;
           return;
       } else if (dialogue.spainting === 2) {
           yyx2.style.display = "none";
           yyx3.style.display = "block";
           k.style.display = "none";
           b.style.display = "block";
              dialogue.spainting++;
           return;
       } else if (dialogue.spainting === 3) {
           yyx3.style.display = "none";
           yyx4.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.spainting++;
           return;
       } else if (dialogue.spainting === 4) {
           yyx4.style.display = "none";
           yyx5.style.display = "block";
           paintingcheck.style.display = "block";
           k.style.display = "none";
           b.style.display = "block";
              dialogue.spainting++;
           return;
       }else if (dialogue.spainting === 5) {
           yyx5.style.display = "none";
           yyx6.style.display = "block";
           k.style.display = "none";
           b.style.display = "block";
              dialogue.spainting++;
           return;
       }else if (dialogue.spainting === 6) {
           yyx6.style.display = "none";
           yyx7.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.spainting++;
           return;
       }else if (dialogue.spainting === 7) {
           yyx7.style.display = "none";
           yyx8.style.display = "block";
           k.style.display = "none";
           b.style.display = "block";
              dialogue.spainting++;
           return;
       }else if (dialogue.spainting === 8) {
           yyx8.style.display = "none";
           yyx9.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.spainting++;
           return;
       } else if (dialogue.spainting === 9) {
           yyx9.style.display = "none";
           k.style.display = "none";
           kdem.style.display = "block";
              dialogue.spainting++;
           return;
       } else if (dialogue.spainting === 10) {
           kdem.style.display = "none";
           paintingcheck.style.display = "none";
              dialogue.spainting = true;
              dialogue.blockArrowTravel = false;

       }
      }});
}



function thatsNotRight() {
   dialogue.spaisdfnting = 1;
    b.style.display = "block";
    yyy1.style.display = "block";
      paintingcheck.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.spaisdfnting === 1) {
           yyy1.style.display = "none";
           b.style.display = "none";
              dialogue.spaisdfnting = true;
              paintingcheck.style.display = "none";
                  dialogue.blockArrowTravel = false;
       }
      }})
}

function nowTheyMatchMatch() {
  if (!dialogue.matchSetComplete) {
   dialogue.ssdfdsfsdfdf = 1;
    b.style.display = "block";
    yyy2.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.ssdfdsfsdfdf === 1) {
           yyy2.style.display = "none";
           b.style.display = "none";
          dialogue.ssdfdsfsdfdf = true;
            dialogue.blockArrowTravel = false;
          dialogue.nowTheyMatch = true;
          dialogue.matchSetComplete = true;
          document.cookie = "paintingPassageLakes=paintingPassageLakes";
          
       }
      }});
    }
}

function itWontBudge() {
  if (current.room === "paintingReferenceRoom") {
   dialogue.budgebudge = 1;
    b.style.display = "block";
    yba1.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.budgebudge === 1) {
           yba1.style.display = "none";
           b.style.display = "none";
          dialogue.budgebudge = true;
            dialogue.blockArrowTravel = false;
       }
      }});
  } else if (current.room === "pillarControlLakes") {
   dialogue.budgebudge2 = 1;
    b.style.display = "block";
    ybb1.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.budgebudge2 === 1) {
           ybb1.style.display = "none";
           b.style.display = "none";
          dialogue.budgebudge2 = true;
            dialogue.blockArrowTravel = false;
       }
      }});
  }
}

function illLeaveYouHere() {
    dialogue.herehere = 1;
    b.style.display = "block";
      if (current.room === "boatRoom") {
          ybd1.style.display = "block";
      } else {
          ybc1.style.display = "block";
      }
    dialogue.blockArrowTravel = true;
    document.addEventListener("keydown", function() {
      if (event.key === 'Enter' || event.key === ' ') {
          if (dialogue.herehere === 1) {
              ybc1.style.display = "none";
              ybd1.style.display = "none";
              brun.style.display = "block";
              b.style.display = "none";
              dialogue.herehere++;
          } else if (dialogue.herehere === 2) {
              ybc2.style.display = "block";
              brun.style.display = "none";
              b.style.display = "block";
              dialogue.herehere++;
          } else if (dialogue.herehere === 3) {
              ybc2.style.display = "none";
              b.style.display = "none";
              dialogue.herehere = true;
              dialogue.blockArrowTravel = false;
              if (current.room === "boatRoom") {
                  dialogue.bearboat = true;
              } else {
                  dialogue.bearbyss = true;
                  randomDoorAudio();
                pipesLobby.style.display = "none";
                chasm2.style.display = "block";
                current.room = "chasm2";  
                sixteenFeralRacoons();
              }
          }
          }});
  }

function illLeaveYouHereKodalyInput() {
    dialogue.hereherehere = 1;
    b.style.display = "block";
      if (current.room === "boatRoom") {
          ybd1.style.display = "block";
      } else {
          ybc1.style.display = "block";
      }
    dialogue.blockArrowTravel = true;
    document.addEventListener("keydown", function() {
      if (event.key === 'Enter' || event.key === ' ') {
          if (dialogue.hereherehere === 1) {
              ybc1.style.display = "none";
              ybd1.style.display = "none";
              b.style.display = "none";
              ybcd3.style.display = "block";
              brun.style.display = "none";
              k.style.display = "block";
              dialogue.hereherehere++;
          } else if (dialogue.hereherehere === 2) {
              brun.style.display = "block";
              k.style.display = "none";
              ybcd3.style.display = "none";
              dialogue.hereherehere++;
          } else if (dialogue.hereherehere === 3) {
              brun.style.display = "none";
              dialogue.hereherehere = true;
              dialogue.blockArrowTravel = false;
              dialogue.bearboat = true;
              if (current.room === "boatRoom") {
                      boatRoom.style.display = "none";
                      lake.style.display = "block";
                      current.room = "lake";  
                      boatMove.play();
              } else {
                randomDoorAudio();
                pipesLobby.style.display = "none";
                chasm2.style.display = "block";
                current.room = "chasm2";  
                sixteenFeralRacoons();
              }
          }
          }});
  }



function takeCareOfBrunhilde() {
    dialogue.highscores = 1;
    b.style.display = "block";
    yyz1.style.display = "block";
    dialogue.blockArrowTravel = true;
    explorersteddybear.style.display = "none";
    teddybearwaiting1.style.display = "block";
    dialogue.explorersteddybearworn = false;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.highscores === 1) {
           yyz1.style.display = "none";
           yyz2.style.display = "block";
           b.style.display = "block";
              dialogue.highscores++;
           return;
       } else if (dialogue.highscores === 2) {
           yyz2.style.display = "none";
           yyz3.style.display = "block";
           b.style.display = "none";
           st.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 3) {
           yyz3.style.display = "none";
           yyz4.style.display = "block";
           b.style.display = "none";
           st.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 4) {
           yyz4.style.display = "none";
           yyz5.style.display = "block";
           st.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 5) {
           yyz5.style.display = "none";
           yyz6.style.display = "block";
           st.style.display = "none";
           b.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 6) {
           yyz6.style.display = "none";
           yyz7.style.display = "block";
           b.style.display = "none";
           st.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 7) {
           yyz7.style.display = "none";
           yyz8.style.display = "block";
           st.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 8) {
           yyz8.style.display = "none";
           yyz9.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 9) {
           yyz9.style.display = "none";
           yyz10.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 10) {
           yyz10.style.display = "none";
           yyz11.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 11) {
           yyz11.style.display = "none";
           yyz12.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 12) {
           yyz12.style.display = "none";
           yyz13.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 13) {
           yyz13.style.display = "none";
           yyz14.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 14) {
           yyz14.style.display = "none";
           yyz15.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 15) {
           yyz15.style.display = "none";
           yyz16.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 16) {
           yyz16.style.display = "none";
           yyz17.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 17) {
           yyz17.style.display = "none";
           yyz18.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 18) {
           yyz18.style.display = "none";
           yyz19.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 19) {
           yyz19.style.display = "none";
           yyz20.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 20) {
           yyz20.style.display = "none";
           yyz21.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 21) {
           yyz21.style.display = "none";
           yyz22.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 22) {
           yyz22.style.display = "none";
           yyz23.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 23) {
           yyz23.style.display = "none";
           yyz24.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 24) {
           yyz24.style.display = "none";
           yyz25.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 25) {
           yyz25.style.display = "none";
           yyz26.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 26) {
           yyz26.style.display = "none";
           yyz27.style.display = "block";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores++;
           return;
       }  else if (dialogue.highscores === 27) {
           yyz27.style.display = "none";
           b.style.display = "none";
           k.style.display = "block";
              dialogue.highscores = true;
              dialogue.explorersteddybearworn = false;
              dialogue.brunhildeIsInLobbyThree = true;
              document.cookie = "brunhilde=brunhilde";
          dialogue.blockArrowTravel = false;

       } 
      }})
}

function iDontThinkICanFitThroughThat() {
  dialogue.dsfsdfdfg = 1;
    b.style.display = "block";
    ybe1.style.display = "block";
    dialogue.blockArrowTravel = true;
document.addEventListener("keydown", function() {
   if (event.key === 'Enter' || event.key === ' ') {
       if (dialogue.dsfsdfdfg === 1) {
           ybe1.style.display = "none";
           b.style.display = "none";
              dialogue.dsfsdfdfg = true;
                  dialogue.blockArrowTravel = false;
       }}});
}